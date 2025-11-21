"use client";

import * as React from "react";
import { useState } from "react";
import { TextScramble } from "@/components/ui/text-scramble";

export function TextScrambleBasicDemo() {
  return (
    <div className="flex justify-center">
      <TextScramble className="font-mono text-sm uppercase">
        Text Scramble
      </TextScramble>
    </div>
  );
}

export function TextScrambleCustomTriggerDemo() {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <div className="flex justify-center">
      <a
        href="#"
        className="text-zinc-500 transition-colors hover:text-white"
      >
        <TextScramble
          className="text-sm"
          as="span"
          speed={0.01}
          trigger={isTrigger}
          onHoverStart={() => setIsTrigger(true)}
          onScrambleComplete={() => setIsTrigger(false)}
        >
          Tyler, The Creator - I Hope You Find Your Way Home
        </TextScramble>
      </a>
    </div>
  );
}

export function TextScrambleCustomCharacterDemo() {
  return (
    <div className="flex justify-center">
      <TextScramble
        className="font-mono text-sm"
        duration={1.2}
        characterSet=". "
      >
        Generating the interface...
      </TextScramble>
    </div>
  );
}
