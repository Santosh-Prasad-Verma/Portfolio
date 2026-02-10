"use client"

import { Briefcase, Calendar, MapPin, Code, Award } from 'lucide-react'
import { useScrollAnimation } from "../hooks/use-scroll-animation"

type ExperienceItem = {
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
  tech?: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: "SQL Fundamentals",
    company: "Certification",
    period: "2024",
    location: "Online",
    highlights: ["Mastered core SQL concepts including queries, joins, subqueries, and data manipulation."],
    tech: ["SQL", "Database Management"],
  },
  {
    role: "Python for Data Analysis",
    company: "Certification",
    period: "2024",
    location: "Online",
    highlights: ["Learned data analysis libraries like Pandas and NumPy, and data visualization with Matplotlib."],
    tech: ["Python", "Pandas", "NumPy"],
  },
  {
    role: "Power BI Basics",
    company: "Certification",
    period: "2024",
    location: "Online",
    highlights: ["Acquired skills in data connection, transformation, modeling, and creating interactive dashboards."],
    tech: ["Power BI", "Data Visualization"],
  },
  {
    role: "NoSQL Fundamentals",
    company: "Certification",
    period: "2024",
    location: "Online",
    highlights: ["Understood non-relational database concepts, document stores, and key-value pairs."],
    tech: ["NoSQL", "MongoDB"],
  },
]

export default function ExperienceSection() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" })
  const listAnimation = useScrollAnimation({ type: "fade-up", delay: 150 })

  return (
    <section id="experience" className="w-full bg-black py-24 relative overflow-hidden">
      {/* Subtle accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-16 right-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div
          className={`mb-16 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & Learning</h2>
          <p className="text-zinc-400 max-w-2xl">
            Professional certifications and courses that have shaped my technical expertise.
          </p>
        </div>

        <div className={`${listAnimation.animationClasses}`} ref={listAnimation.ref}>
          <div className="space-y-12">
            {experiences.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-8 hover:border-zinc-700/70 transition-all">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-white text-2xl font-semibold mb-2">{item.role}</h3>
                      <p className="text-zinc-300 font-medium text-lg italic">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center text-sm px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.period}
                      </div>
                      <div className="flex items-center justify-end text-zinc-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 list-disc list-inside text-zinc-300 mb-6">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  {item.tech && item.tech.length > 0 && (
                    <div>
                      <h4 className="text-white text-sm font-medium mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-blue-400" />
                        Topics Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-zinc-800/60 text-zinc-300 rounded-full border border-zinc-700/60 hover:border-zinc-600/70 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
