"use client";

import { Code, Github, Globe } from "lucide-react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { useScrollAnimation } from "../hooks/use-scroll-animation";

export default function ProjectsSection() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" });
  const projectsAnimation = useScrollAnimation({ type: "fade-up", delay: 200 });

  const projects = [
    {
      id: 1,
      title: "End-to-End E-Commerce Data Platform",
      description:
        "Designed and developed a production-ready e-commerce platform using Next.js 14 and TypeScript with authentication, product catalog, cart, and order management. Designed a normalized PostgreSQL schema using Supabase. Implemented transactional data storage with Stripe and wrote advanced SQL queries using JOINs, GROUP BY, and CTEs to analyze sales and user behavior.",
      image: "/images/StrevoStore_thumbnail.png",
      liveUrl: "https://strevostore.vercel.app/",
      githubUrl: "https://github.com/Santosh-Prasad-Verma/Strevo_Store",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "SQL",
        "Stripe",
      ],
      category: "Data Engineering",
      featured: true,
      status: "Live",
    },
    {
      id: 2,
      title: "Box Club",
      description:
        "A modern web application built with a focus on delivering an engaging user experience.",
      image: "/images/BoxClub.png",
      liveUrl: "https://boxclubb.vercel.app/",
      githubUrl: "#",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      category: "Web Development",
      featured: false,
      status: "Live",
    },
    {
      id: 3,
      title: "PromptmaX",
      description:
        "A full-stack prompt engineering platform with a robust backend API, designed for managing and optimizing AI prompts.",
      image: "/images/PromptmaX.png",
      liveUrl: "https://promptmax-backend.onrender.com/",
      githubUrl: "#",
      technologies: ["Django", "Python", "Supabase", "Mistral AI", "Celery", "Redis"],
      category: "Full Stack",
      featured: false,
      status: "Live",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-black py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-10 right-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col items-center justify-center text-center mb-16 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-zinc-400 text-center">
            A showcase of my recent work in web development and digital
            solutions, demonstrating my skills in modern technologies and
            design.
          </p>
        </div>

        <div
          className={`${projectsAnimation.animationClasses}`}
          ref={projectsAnimation.ref}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ExpandableCard
                key={project.id}
                title={project.title}
                description={project.category}
                src={project.image}
                classNameExpanded="[&_h4]:text-white [&_h4]:font-medium"
              >
                <div className="relative">
                  <h4 className="text-lg font-bold mb-2 text-white">
                    About Project
                  </h4>
                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <h4 className="text-lg font-bold mb-3 text-white flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:border-blue-500 hover:text-white flex-1"
                    >
                      <span className="absolute inset-0 h-full w-full translate-y-full bg-blue-600 transition-transform duration-300 ease-out group-hover/btn:translate-y-0"></span>
                      <span className="relative flex items-center gap-2 group-hover/btn:text-white">
                        <Globe className="w-4 h-4" />
                        View Live Site
                      </span>
                    </a>

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-md bg-zinc-800 border border-zinc-700 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-zinc-700"
                      >
                        <span className="relative flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Source Code
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </ExpandableCard>
            ))}
          </div>

          {/* More Projects Coming Soon */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <span className="text-zinc-400 text-sm">
                  More projects coming soon...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
