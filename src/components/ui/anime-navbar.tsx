"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const current = items.find((i) => i.url === window.location.hash);
    if (current) {
      setActiveTab(current.name);
    }
  }, [mounted, items]);

  if (!mounted) return null;

  return (
    <div className={cn("fixed top-5 left-0 right-0 z-[9999]", className)}>
      <div className="flex justify-center pt-6">
        <motion.nav
          className="mx-4 sm:mx-6 inline-flex max-w-full items-center gap-2 bg-black/60 border border-white/10 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            const isHovered = hoveredTab === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setActiveTab(item.name);
                  if (item.url.startsWith("#")) {
                    const el = document.querySelector(item.url);
                    if (el) {
                      (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }}
                onMouseEnter={() => setHoveredTab(item.name)}
                onMouseLeave={() => setHoveredTab(null)}
                className={cn(
                  "relative cursor-pointer text-xs md:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300",
                  "text-white/70 hover:text-white",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-primary/25 rounded-full blur-md" />
                    <div className="absolute inset-[-4px] bg-primary/20 rounded-full blur-xl" />
                    <div className="absolute inset-[-8px] bg-primary/15 rounded-full blur-2xl" />
                    <div className="absolute inset-[-12px] bg-primary/5 rounded-full blur-3xl" />

                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 animate-shine"
                    />
                  </motion.div>
                )}

                <motion.span
                  className="hidden md:inline relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.span>
                <motion.span
                  className="md:hidden relative z-10"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>

                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    />
                  )}
                </AnimatePresence>

                {/* Mascot/doll removed for a cleaner navbar; keep only background and hover effects */}
              </button>
            );
          })}
        </motion.nav>
      </div>
    </div>
  );
}

export function AnimeNavBarDemo() {
  const items: NavItem[] = [
    { name: "Home", url: "#hero", icon: require("lucide-react").Home },
    { name: "About", url: "#about", icon: require("lucide-react").Info },
    { name: "Skills", url: "#skills", icon: require("lucide-react").Sparkles },
    { name: "Projects", url: "#projects", icon: require("lucide-react").FolderGit2 },
    { name: "Contact", url: "#contact", icon: require("lucide-react").Mail },
  ];

  return <AnimeNavBar items={items} defaultActive="Home" />;
}
