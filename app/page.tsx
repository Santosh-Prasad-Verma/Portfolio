"use client"

import { useEffect } from "react"
import AboutSection from "../components/about-section"
import Footer from "../components/footer"
import ProjectsSection from "../components/projects-section"
import TechnicalSkills from "../components/technical-skills"
import NewsletterForm from "../components/newsletter-form"
import Header from "../components/header"
import FloatingSidebar from "../components/floating-sidebar"


import { AnimationProvider } from "../components/animation-provider"
import { smoothScroll } from "../utils/smooth-scroll"

export default function Page() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Use a small timeout to ensure the page is fully loaded
        setTimeout(() => {
          smoothScroll(id, 1000)
        }, 100)
      }
    }
  }, [])

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-black text-white">
        <FloatingSidebar />

        <div id="home">
          <Header />
        </div>

        <AboutSection />




        <TechnicalSkills />

        <ProjectsSection />

        <NewsletterForm />

        <Footer />
      </div>
    </AnimationProvider>
  )
}
