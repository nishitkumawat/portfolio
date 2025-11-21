import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Phone, ArrowDownToLine, Server, Layers, Database, Code2, Home, Info, Sparkles, FolderGit2 } from "lucide-react";
import { GlowingEffectDemo, DeployedProjectsGrid } from "@/components/ui/glowing-effect-demo";
import { Card, CardContent } from "@/components/ui/card";
import { SplineSceneBasic } from "@/components/ui/spline-scene-demo";
import { HoverSpotlight } from "@/components/ui/spotlight-ibelick";
import { AnimeNavBar } from "@/components/ui/anime-navbar";
import { HoverFooter } from "@/components/ui/hover-footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const App = () => {
  const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "About", url: "#about", icon: Info },
    { name: "Skills", url: "#skills", icon: Sparkles },
    { name: "Projects", url: "#projects", icon: FolderGit2 },
    { name: "Contact", url: "#contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-slate-100">
      <AnimeNavBar items={navItems} defaultActive="Home" />
      <main className="mx-auto flex max-w-6xl flex-col gap-32 pb-24 pt-32 md:pt-28">
        {/* Hero - use shadcn SplineSceneBasic layout */}
        <motion.section
          id="hero"
          initial="hidden"
          animate="show"
          variants={sectionVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SplineSceneBasic />
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="grid gap-10 md:grid-cols-[1.3fr_minmax(0,1fr)] md:items-center px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
              About
            </h2>
            <p className="text-slate-300">
              I'm a software developer focused on full stack and backend engineering. I enjoy
              designing APIs, modeling data, and building UIs that feel fast and intuitive.
            </p>
            <p className="text-slate-300">
              My experience spans Django REST APIs, React frontends styled with Tailwind CSS,
              SQL and MongoDB databases, and Java Swing desktop apps. I like taking real
              business problems and turning them into reliable, maintainable software.
            </p>
          </div>

          <Card className="border-slate-800 bg-slate-950/60">
            <CardContent className="flex flex-col gap-4 p-6 mt-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.18em] text-sky-400">Quick info</p>
                <p className="text-sm text-slate-300">
                  5th semester · LJ Institute of Engineering and Technology · Ahmedabad, India
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div>
                  <p className="text-xs text-slate-400">Phone</p>
                  <p className="font-medium flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-sky-400" /> +91 9104513411
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="font-medium break-all">nishit1060@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">GitHub</p>
                  <a
                    href="https://github.com/nishitkumawat"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-sky-400 hover:underline"
                  >
                    /nishitkumawat
                  </a>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Focus</p>
                  <p className="font-medium">Full Stack · Backend</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="space-y-6 px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Skills
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                From backend APIs to interactive UIs, here's what I work with most days.
              </p>
            </div>
            <div className="hidden gap-3 text-xs text-slate-400 md:flex">
              <span className="inline-flex items-center gap-1">
                <Server className="h-3.5 w-3.5" /> Backend
              </span>
              <span className="inline-flex items-center gap-1">
                <Layers className="h-3.5 w-3.5" /> Full Stack
              </span>
              <span className="inline-flex items-center gap-1">
                <Database className="h-3.5 w-3.5" /> Databases
              </span>
              <span className="inline-flex items-center gap-1">
                <Code2 className="h-3.5 w-3.5" /> Tooling
              </span>
            </div>
          </div>
          <GlowingEffectDemo />
        </motion.section>

        {/* Deployed Projects */}
        <motion.section
          id="deployed-projects"
          className="space-y-6 px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Deployed Projects
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                A snapshot of projects I’ve deployed and iterated on, focused on real usage
                rather than just experiments.
              </p>
            </div>
          </div>
          <DeployedProjectsGrid />
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="space-y-6 px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                Projects
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                A few things I've built recently, from business dashboards to desktop tools.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* BrandFlow */}
            <ProjectCard
              title="BrandFlow - Market and Manage"
              description="A full-stack business management platform with React frontend and Django REST backend, unifying clients, employees, tasks, documents, and mailing into a single dashboard."
              tech={["React", "Django REST", "Tailwind CSS", "PostgreSQL"]}
              image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
            />

            {/* WorkFlow */}
            <ProjectCard
              title="WorkFlow - Employee Chat Management"
              description="Java Swing desktop app that manages employees through a chat-like interface instead of static forms, making internal tools feel more conversational."
              tech={["Java", "Swing"]}
              image="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80"
            />

            {/* Speed Air Booking */}
            <ProjectCard
              title="Speed Air Booking"
              description="Flight booking application built with Java and Swing, focused on fast search, booking, and management of reservations."
              tech={["Java", "Swing"]}
              image="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
            />

            {/* FINTRACK */}
            <ProjectCard
              title="FINTRACK - Business Finance Management"
              description="Django-based financial management tool that helps business owners manage inventory, generate bills, and track finances with a clean, Bootstrap-styled UI."
              tech={["Django", "Bootstrap", "PostgreSQL"]}
              image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="space-y-6 px-6 md:px-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
            Contact
          </h2>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 md:p-8">
            <HoverSpotlight className="mix-blend-screen" size={260} />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-400">
                  Let's build something
                </p>
                <p className="max-w-xl text-sm text-slate-300 md:text-base">
                  I'm open to internships, freelance projects, and collaborations around full-stack
                  web apps, dashboards, or backend-heavy systems.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-slate-200">
                <a
                  href="mailto:nishit1060@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-sky-100 hover:bg-sky-500/20"
                >
                  <Mail className="h-4 w-4" />
                  nishit1060@gmail.com
                </a>
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <Phone className="h-4 w-4 text-sky-400" /> +91 9104513411
                </span>
                <a
                  href="https://github.com/nishitkumawat"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-sky-400"
                >
                  <Github className="h-4 w-4" /> github.com/nishitkumawat
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <HoverFooter />
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectCard = ({ title, description, tech, image }: ProjectCardProps) => {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 shadow-[0_0_40px_rgba(15,23,42,0.8)]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-800 bg-slate-900/80 px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default App;

