# Dark Aesthetic Portfolio Template

A high-performance, dark-themed personal portfolio web application template built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **React**. Designed with a deep neutral aesthetic, giant display typography, and striking red highlights matching modern creative director & UI/UX portfolios.

![Portfolio Preview](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop)

---

## ⚡ Tech Stack

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) via `next/font/google` (`Bebas Neue`, `Oswald`, `Inter`, `Caveat`)

---

## 📂 Project Architecture

```
PORTO/
├── public/                 # Static assets & public images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global dark styles, scrollbars & glow effects
│   │   ├── layout.tsx      # Font loaders, metadata & HTML root
│   │   └── page.tsx        # Portfolio page assembling modular components
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky header with status badge & mobile menu
│   │   ├── HeroSection.tsx # Giant PORTFOLIO typography, portrait & stats
│   │   ├── SelectedProjects.tsx # 3-card project grid with preview modal
│   │   ├── EducationAndSkills.tsx # 2-column layout + timeline + quote card
│   │   ├── ContactSection.tsx # CTA headline, copyable contacts & laptop mockup
│   │   └── Footer.tsx      # Minimal bottom footer with back-to-top button
│   ├── data/
│   │   └── portfolio-data.ts # ⭐️ ALL CONTENT & PLACEHOLDERS IN ONE FILE
│   └── types/
│       └── portfolio.ts    # TypeScript definitions for easy extension
├── next.config.mjs         # Next.js image domain configuration
├── tailwind.config.ts      # Custom theme colors, fonts, and shadows
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 How to Customize for Your Own Portfolio

All data, text, links, and placeholder images are consolidated in:
👉 [`src/data/portfolio-data.ts`](file:///c:/Users/aazka/Downloads/PORTO/src/data/portfolio-data.ts)

You can easily replace:
1. **Name, Role & Bio:** Edit `personal.name`, `personal.role`, and `personal.bio`.
2. **Portrait Image:** Point `personal.portraitImage.src` to your local image in `/public` or an external URL.
3. **Stats Counters:** Change `personal.stats.yearsExperience`, `projectsCompleted`, and `happyClients`.
4. **Projects:** Add or edit project cards in `projects[]` (title, category, image, tags, demo link).
5. **Education & Certifications:** Update degrees and schools in `education[]`.
6. **Skills List:** Modify or add skills to the `skills[]` array.
7. **Work Process Steps:** Customize the 5 steps in `process[]`.
8. **Philosophy Quote & Signature:** Update `quote.text` and `quote.author`.
9. **Contact Info:** Update email, phone, location, and website in `contact`.

---

## ☁️ Deploy to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**!

---

## 📄 License
MIT License. Feel free to use and modify for personal or commercial projects.
