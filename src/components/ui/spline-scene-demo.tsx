"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, Mail } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[100vh] md:h-[640px] bg-black/[0.96] relative overflow-hidden rounded-3xl border-0 shadow-none">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex h-full flex-col md:flex-row">
        <motion.div
          className="w-full md:flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center gap-5"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            Hi, I'm
            <br />
            <motion.span
              className="text-sky-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              {" "}Nishit Kumawat
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-1 text-neutral-300 max-w-lg text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            5th-semester engineering student at LJ Institute of Engineering and Technology,
            building full-stack web apps and backend services with Python, Java, Django,
            React, SQL, and MongoDB.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs md:text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              View projects
              <ArrowDownToLine className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-500/5 px-4 py-2 text-xs md:text-sm font-medium text-sky-200 hover:bg-sky-500/15"
            >
              <Mail className="h-4 w-4" />
              Contact
            </motion.a>
          </motion.div>
          {/* Mobile-only quick info to better fill the screen */}
          <div className="mt-6 flex flex-col gap-3 text-xs text-slate-400 md:hidden">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Full Stack & Backend
              </span>
              <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1">
                Django · React · SQL · MongoDB
              </span>
            </div>
            <p>
              Based in Ahmedabad, India · Open to internships and freelance projects.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <GlowingEffect
                  spread={36}
                  glow={true}
                  disabled={false}
                  proximity={56}
                  inactiveZone={0.02}
                  borderWidth={2}
                />
                <div className="relative flex flex-col gap-1">
                  <p className="text-[11px] font-semibold text-slate-50">
                    Languages
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Java · Python · JavaScript
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <GlowingEffect
                  spread={36}
                  glow={true}
                  disabled={false}
                  proximity={56}
                  inactiveZone={0.02}
                  borderWidth={2}
                />
                <div className="relative flex flex-col gap-1">
                  <p className="text-[11px] font-semibold text-slate-50">
                    APIs & Databases
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Django REST · Express · SQL · MongoDB
                  </p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <GlowingEffect
                  spread={36}
                  glow={true}
                  disabled={false}
                  proximity={56}
                  inactiveZone={0.02}
                  borderWidth={2}
                />
                <div className="relative flex flex-col gap-1">
                  <p className="text-[11px] font-semibold text-slate-50">
                    Tools
                  </p>
                  <p className="text-[11px] text-slate-400">
                    GitHub · Tailwind CSS · React
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden md:block md:flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
