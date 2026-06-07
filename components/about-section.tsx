"use client";

import {
  User,
  Code,
  Briefcase,
  Award,
  ArrowRight,
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Star,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/use-scroll-animation";
import { smoothScroll } from "../utils/smooth-scroll";
import { motion } from "framer-motion";

export default function AboutSection() {
  const headerAnimation = useScrollAnimation({ type: "fade-up" });
  const contentAnimation = useScrollAnimation({ type: "fade-up", delay: 200 });
  const statsAnimation = useScrollAnimation({ type: "fade-up", delay: 300 });
  const educationAnimation = useScrollAnimation({
    type: "fade-up",
    delay: 200,
  });

  return (
    <section
      id="about"
      className="w-full bg-black py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-px h-32 bg-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-px h-32 bg-purple-500/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col items-center justify-center text-center mb-16 ${headerAnimation.animationClasses}`}
          ref={headerAnimation.ref}
        >
          <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="max-w-2xl text-zinc-400 text-center">
            Get to know more about me, my background, and what drives my passion
            for development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className={contentAnimation.animationClasses}
            ref={contentAnimation.ref}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Data Engineer
            </h3>
            <p className="text-zinc-400 mb-6">
              Third-year B.Tech student aspiring to become a Data Engineer. Strong foundation in SQL, Java, Python, and NoSQL, with hands-on academic exposure to data handling, analysis, and visualization.
            </p>
            <p className="text-zinc-400 mb-6">
              Highly motivated to build scalable data solutions, ETL pipelines, and analytics-driven systems. I combine technical expertise with a passion for solving complex data challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Code className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium">
                    Technical Expertise
                  </h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Specialized in Python, SQL, NoSQL, and Data Analysis.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-white font-medium">Approach</h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Focused on building scalable data pipelines, optimizing query performance, and ensuring data integrity.
                </p>
              </div>

              <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 bg-zinc-900/70 p-2 rounded-md mr-3">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium">Learning</h4>
                </div>
                <p className="text-zinc-400 text-sm">
                  Always exploring new technologies and methodologies to stay at
                  the cutting edge.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`mt-16 ${educationAnimation.animationClasses}`}
            ref={educationAnimation.ref}
          >
            <div className="flex items-center mb-10">
              <div className="inline-flex items-center justify-center p-2 bg-zinc-900/80 rounded-full mr-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Education Journey
              </h3>
            </div>

            <div className="relative pl-8 ml-4">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-purple-600"></div>

              {/* Decorative Glow Effects */}
              <div className="absolute -left-12 top-20 w-24 h-24 rounded-full bg-blue-500/10 blur-xl"></div>
              <div className="absolute -right-12 top-60 w-32 h-32 rounded-full bg-purple-500/5 blur-xl"></div>
              <div className="absolute left-0 bottom-20 w-16 h-16 rounded-full bg-blue-500/5 blur-lg"></div>

              <motion.div
                className="mb-16 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Completed Indicator - Checkmark Style */}
                <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Connecting Glow */}
                <div className="absolute -left-[38px] top-6 h-6 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-5 h-5 bg-gradient-to-br from-blue-500/20 to-purple-600/20 transform rotate-45 translate-x-1/2 -translate-y-1/2 group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300"></div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">
                        B.Tech – CSE (Big Data Analytics)
                      </h4>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30 mt-2 md:mt-0">
                      Inside 4th Semester
                    </span>
                  </div>

                  <h5 className="text-blue-400 font-medium ml-10">
                    Parul University, Vadodara
                  </h5>
                  <div className="flex items-center gap-2 ml-10 mt-2 mb-3">
                    <Calendar className="w-4 h-4 text-zinc-500" />
                    <span className="text-zinc-400 text-sm">
                      2024 – Present
                    </span>
                  </div>

                  <div className="flex items-start mb-3 ml-10">
                    <MapPin className="w-4 h-4 text-zinc-500 mr-1 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm">
                      Vadodara, Gujarat, India
                    </p>
                  </div>

                  <div className="ml-10 bg-zinc-900/50 rounded-md p-3 border-l-2 border-blue-500/50 group-hover:border-blue-500 transition-colors duration-300">
                    <p className="text-zinc-300 text-sm">
                      Detailed focus on Data Engineering Current CGPA: 6.67
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Big Data Analytics
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Engineering
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-16 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10"></div>

                {/* Connecting line from dot to card */}
                <div className="absolute -left-[39px] top-5 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-purple-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">
                        Class XII (Science Stream)
                      </h4>
                    </div>
                    <span className="text-purple-400 text-sm flex items-center mt-2 md:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      Completed July 2024
                    </span>
                  </div>

                  <div className="ml-10 mb-3">
                    <h5 className="text-blue-400 font-medium text-base">
                      SKS Sr. Sec. School
                    </h5>
                    <p className="text-zinc-400 text-sm flex items-start mt-1">
                      <MapPin className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" />
                      Sector-86, Haryana (CBSE Board)
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm flex items-center ml-10 mt-3">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Completed with distinction.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      CBSE
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Science Stream
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10"></div>

                {/* Connecting line from dot to card */}
                <div className="absolute -left-[39px] top-5 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent"></div>

                <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-800/20 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/70 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-2 rounded-md mr-3">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-white font-bold text-lg">
                        Class X (Academic Excellence)
                      </h4>
                    </div>
                    <span className="text-purple-400 text-sm flex items-center mt-2 md:mt-0 bg-zinc-900/50 px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3 mr-1.5" />
                      Completed May 2022
                    </span>
                  </div>

                  <div className="ml-10 mb-3">
                    <h5 className="text-blue-400 font-medium text-base">
                      DPS, Sector-45
                    </h5>
                    <p className="text-zinc-400 text-sm flex items-start mt-1">
                      <MapPin className="w-4 h-4 mr-1.5 mt-0.5 flex-shrink-0" />
                      Gurgaon, Haryana (CBSE Board)
                    </p>
                  </div>

                  <p className="text-zinc-300 text-sm flex items-center ml-10 mt-3">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    Foundation for technical career.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 ml-10">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      CBSE
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Academic Excellence
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScroll("contact", 1000);
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-transparent border border-zinc-800 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-transparent"
            >
              <span className="absolute inset-0 h-full w-full translate-y-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
