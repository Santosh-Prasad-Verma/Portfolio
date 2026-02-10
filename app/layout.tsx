import type React from "react"
import "../app/globals.css"
import type { Metadata } from "next"

// Add metadata export
export const metadata: Metadata = {
  title: "Santosh Verma Portfolio",
  description: "Portfolio of Santosh Verma, a Data Engineer specializing in SQL, Python, and Big Data Analytics",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Santosh Verma Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Santosh Verma, a Data Engineer specializing in SQL, Python, and Big Data Analytics"
      />
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
