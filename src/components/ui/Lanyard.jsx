/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import cardGLB from '@/assets/lanyard/card.glb';
import lanyardPng from '@/assets/lanyard/lanyard.png';
import cardTexturePng from '@/assets/lanyard/new_bg.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 20], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // On mobile, move the camera even closer to fill the screen
  const finalPosition = isMobile ? [0, 0, 15] : position;
  const finalFov = isMobile ? 25 : fov;

  

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: finalPosition, fov: finalFov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();
  const materialRef = useRef();
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLocked(true);

    if (card.current) {
      // Stop all motion
      card.current.setLinvel({ x: 0, y: 0, z: 0 });
      card.current.setAngvel({ x: 0, y: 0, z: 0 });

      // Freeze rotation + movement completely
      card.current.setBodyType("fixed", true);

      // Lock final position (prevents micro drift)
      const finalPos = card.current.translation();
      card.current.setTranslation(finalPos, true);
    }

    // ALSO freeze joints
    [j1, j2, j3].forEach(ref => {
      if (ref.current) {
        ref.current.setLinvel({ x: 0, y: 0, z: 0 });
        ref.current.setAngvel({ x: 0, y: 0, z: 0 });
        ref.current.setBodyType("fixed", true);
      }
    });

    // Freeze the rope into a straight/static shape
    if (band.current) {
      band.current.geometry.setPoints([
        new THREE.Vector3(0, 8, 0),   // top
        new THREE.Vector3(0, 6, 0),
        new THREE.Vector3(0, 4, 0),
        new THREE.Vector3(0, 2, 0),   // near card
      ]);
    }
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();

  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardPng);
  const cardTexture = useTexture(cardTexturePng);

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 2.5]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 2.5]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 2.5]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.125, 0]]);

useEffect(() => {
  if (cardTexture) {
    cardTexture.flipY = false;
    cardTexture.center.set(0.5, 0.5);
    cardTexture.rotation = 0;

    // Scale down the image to fit within card with margins
    cardTexture.repeat.set(2, 1.5);
    cardTexture.offset.set(0.5, 0.2);
    
    cardTexture.wrapS = THREE.ClampToEdgeWrapping;
    cardTexture.wrapT = THREE.ClampToEdgeWrapping;
    cardTexture.needsUpdate = true;
    if (materialRef.current) materialRef.current.needsUpdate = true;
  }
}, [cardTexture]);
  
  const CARD_W = 0.32;
  const CARD_H = 0.45;

  // Plane sits at z=+0.002 to render just in front of the card mesh face
  const cardFacePlane = new THREE.PlaneGeometry(CARD_W, CARD_H);
  useFrame((state, delta) => {
  if (!fixed.current) return;

  // STOP EVERYTHING after lock
  if (isLocked) return;

  [j1, j2].forEach(ref => {
    if (!ref.current.lerped) {
      ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
    }

    const clampedDistance = Math.max(
      0.1,
      Math.min(1, ref.current.lerped.distanceTo(ref.current.translation()))
    );

    ref.current.lerped.lerp(
      ref.current.translation(),
      delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
    );
  });

  curve.points[0].copy(j3.current.translation());
  curve.points[1].copy(j2.current.lerped);
  curve.points[2].copy(j1.current.lerped);
  curve.points[3].copy(fixed.current.translation());

  band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

  ang.copy(card.current.angvel());
  rot.copy(card.current.rotation());

  card.current.setAngvel({
    x: ang.x,
    y: ang.y - rot.y * 0.25,
    z: ang.z
  });
});

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 8, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[1, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[3, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody key="lanyard-card-v1" position={[4, 0, 0]} ref={card} {...segmentProps} type="dynamic">
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group scale={5.0} position={[0, -1.2, 0.05]} rotation={[0, 0, 0]}>
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                ref={materialRef}
                map={cardTexture}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={true}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}