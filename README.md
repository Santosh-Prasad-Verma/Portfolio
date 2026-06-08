
<div align="center">
       <img src="https://zirnozomedh1kces.public.blob.vercel-storage.com/Portfolio-Banner.png" alt="Tarun's Portfolio Banner" width="100%"/>
  
   <h1 align="center">🚀 <b>Tarun's Portfolio</b> 🚀</h1>
   <p align="center">
      <b>A modern, sleek, and fully responsive personal portfolio website built with cutting-edge web technologies.</b><br/>
      Showcasing projects, skills, experience, and a newsletter subscription feature with smooth animations and intuitive navigation.
   </p>
  
   <p align="center">
      <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js"/>
      <img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react"/>
      <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript"/>
      <img src="https://img.shields.io/badge/Tailwind%20CSS-3-blue?style=flat-square&logo=tailwindcss"/>
      <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square"/>
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"/>
   </p>
</div>

---

<div align="center">
   <img src="https://raw.githubusercontent.com/yourusername/my-portfolio/main/public/images/preview.gif" alt="Portfolio Preview" width="80%"/>
   <br/>
   <i>✨ Quick Preview of the Portfolio ✨</i>
</div>

---

## ✨ Features

<table>
   <tr>
      <td>🎨 <b>Modern UI/UX</b><br/><sub>Sleek dark theme, smooth animations</sub></td>
      <td>📱 <b>Responsive</b><br/><sub>Mobile-first, works on all devices</sub></td>
      <td>⚡ <b>Performance</b><br/><sub>Fast load, optimized images</sub></td>
   </tr>
   <tr>
      <td>🎭 <b>Framer Motion</b><br/><sub>Engaging, smooth animations</sub></td>
      <td>🌙 <b>Theme Support</b><br/><sub>Easy dark/light mode</sub></td>
      <td>📧 <b>Newsletter</b><br/><sub>EmailJS integration</sub></td>
   </tr>
   <tr>
      <td>🧭 <b>Smooth Scrolling</b><br/><sub>Custom navigation</sub></td>
      <td>🎯 <b>SEO Friendly</b><br/><sub>Meta tags, best practices</sub></td>
      <td>🛡️ <b>Accessible</b><br/><sub>Radix UI, a11y best practices</sub></td>
   </tr>
</table>

---

## 🛠️ Tech Stack

<details>
<summary><b>Core Technologies</b></summary>

- **Framework:** [Next.js 14](https://nextjs.org/) — React framework with SSR
- **Language:** [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) — Beautiful React components
- **Animation:** [Framer Motion](https://www.framer.com/motion/) — Motion library

</details>

<details>
<summary><b>Libraries & Tools</b></summary>

- **Email Service:** EmailJS — Direct email from browser
- **Form Validation:** React Hook Form + Zod
- **UI Framework:** Radix UI — Accessible components
- **Package Manager:** pnpm
- **Development:** ESLint, PostCSS

</details>

---

## 📁 Project Structure

```text
my-portfolio/
├── app/                # Next.js app directory
│   ├── page.tsx        # Main landing page
│   ├── layout.tsx      # Root layout
│   ├── globals.css     # Global styles
│   └── manifest.ts     # PWA manifest
├── components/         # React components
│   ├── header.tsx      # Navigation header
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── technical-skills.tsx
│   ├── projects-section.tsx
│   ├── newsletter-form.tsx
│   ├── footer.tsx
│   ├── ui/             # shadcn/ui components
│   └── hooks/          # Custom hooks
├── public/             # Static assets
│   └── images/
├── styles/             # Additional styles
├── utils/              # Utility functions
├── tailwind.config.ts  # Tailwind config
├── tsconfig.json       # TypeScript config
└── package.json        # Scripts & dependencies
```

---

## 🚦 Getting Started

<details>
<summary><b>Setup Instructions</b></summary>

### Prerequisites
- Node.js 18+ or higher
- pnpm (or npm/yarn)

### Installation
1. <b>Clone the repository</b>
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```
2. <b>Install dependencies</b>
   ```bash
   pnpm install
   # or
   npm install
   ```
3. <b>Set up environment variables</b>
   Create a <code>.env.local</code> file in the root directory (if needed for EmailJS):
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. <b>Run the development server</b>
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

</details>

---

## 🧩 Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

---

## 🎨 Customization

<details>
<summary><b>How to Personalize</b></summary>

### Update Personal Information
- Edit component files in the <code>components/</code> directory
- Modify text, links, and images to reflect your information
- Update social media links in <code>components/header.tsx</code> and <code>components/footer.tsx</code>

### Styling
- Customize colors and themes in <code>tailwind.config.ts</code>
- Modify global styles in <code>app/globals.css</code>
- Component-specific styles are in individual component files

### Add Projects
Edit <code>components/projects-section.tsx</code> to add your portfolio projects with descriptions, images, and links.

### Configure Email Service
Set up EmailJS for the newsletter form:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email service and template
3. Add credentials to <code>.env.local</code>

</details>

---

## 📦 Dependencies

<details>
<summary><b>Key Packages</b></summary>

- <code>next</code> — React framework
- <code>react</code> & <code>react-dom</code> — UI library
- <code>tailwindcss</code> — CSS framework
- <code>framer-motion</code> — Animation library
- <code>@radix-ui/*</code> — UI components
- <code>@hookform/resolvers</code> — Form validation
- <code>@emailjs/browser</code> — Email service
- <code>zod</code> — Schema validation
- <code>sonner</code> — Toast notifications
- <code>clsx</code> — Conditional class names

</details>

---

## 🌐 Deployment

<details>
<summary><b>Deploy on Vercel (Recommended)</b></summary>

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/)
3. Import your repository
4. Add environment variables if needed
5. Deploy!

</details>

<details>
<summary><b>Other Deployment Options</b></summary>

- <b>Netlify</b> — Connect to Git repo and deploy automatically
- <b>Docker</b> — Containerize the application
- <b>Self-hosted</b> — Build and deploy to your own server

</details>

---

## 📝 License

This project is open source and available under the <b>MIT License</b>. See the LICENSE file for more information.

---

## 🤝 Contributing

<details>
<summary><b>How to Contribute</b></summary>

Contributions are welcome! Feel free to:
- Fork the repository
- Create a new branch for your feature
- Make your changes
- Submit a pull request

</details>

---

## 💬 Contact & Social

<div align="center">
   <b>Connect with me on:</b><br/>
   <a href="https://github.com/yourusername"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
   <a href="https://linkedin.com/in/yourusername"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
   <a href="https://twitter.com/yourhandle"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
   <a href="mailto:your.email@example.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
</div>

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) — Beautiful component library
- [Vercel](https://vercel.com/) — Next.js creators & hosting platform
- [Tailwind Labs](https://tailwindlabs.com/) — Tailwind CSS team
- [Framer](https://www.framer.com/) — Motion library creators

---

<div align="center">
   <b>Made with ❤️ by Tarun</b>
</div>
