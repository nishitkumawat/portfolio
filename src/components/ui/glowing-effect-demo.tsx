"use client";

import * as React from "react";
import { Box, Lock, Search, Settings, Sparkles, Smartphone, Globe } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4" />}
        title="Backend Engineering"
        description="Designing scalable REST APIs with Django, Express, and robust data models."
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4" />}
        title="Full Stack Development"
        description="Building responsive UIs with React and Tailwind, backed by solid backend services."
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4" />}
        title="Performance & Reliability"
        description="Writing clean, maintainable code with a focus on robustness and security."
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4" />}
        title="Product Thinking"
        description="Translating business needs into technical solutions that actually ship."
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4" />}
        title="Always Learning"
        description="Exploring new tools and patterns to improve developer and user experience."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border border-zinc-800 bg-zinc-950/60 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950/90 p-6 shadow-[0_0_60px_rgba(15,23,42,0.9)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-zinc-800 bg-zinc-900/80 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-zinc-50">
                {title}
              </h3>
              <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-zinc-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export function DeployedProjectsGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <GridItem
        area=""
        icon={<Smartphone className="h-4 w-4" />}
        title="EZRun – IoT Control App"
        description={
          <span>
            Android app to control IoT devices with authentication and a Django
            backend, built with Flutter on the frontend. Live on the Play Store.
            <br />
            <a
              href="https://ezrun.in"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-[11px] font-medium text-sky-400 hover:underline"
            >
              https://ezrun.in
            </a>
          </span>
        }
      />
      <GridItem
        area=""
        icon={<Globe className="h-4 w-4" />}
        title="MachMate.in – Machine Marketplace"
        description={
          <span>
            Platform connecting machine makers with work seekers, built using
            Django for the backend and React + Tailwind CSS for the frontend.
            <br />
            <a
              href="https://machmate.in"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-[11px] font-medium text-sky-400 hover:underline"
            >
              https://machmate.in
            </a>
          </span>
        }
      />
    </ul>
  );
}
