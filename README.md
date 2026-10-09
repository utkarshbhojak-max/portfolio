# Utkarsh Bhojak | Data Science & CS Engineering Student Portfolio

> Personal portfolio website of Utkarsh Bhojak, Data Science & Computer Science Engineering student at JECRC University, featuring deployed machine learning projects, hackathon achievements, certifications, and technical capabilities.

[![Deploy to GitHub Pages](https://github.com/utkarshbhojak/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/utkarshbhojak/portfolio/actions/workflows/deploy.yml)
[![Built with React 19](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black.svg)](https://threejs.org/)

---

## ⚡ Highlights & Key Features

- **Subtle WebGL Ambient Hero**: Gentle Three.js glowing fluid mesh responding to mouse motion, creating an authentic developer/engineer visual vibe.
- **Dark-Only Engineering Aesthetic**: Designed for developers and technical recruiters with deep `#05060A` contrast and liquid glass cards.
- **Featured Live Projects**:
  - **Hospital Bed Allocation Engine**: Real-time discrete-event simulation live on Vercel ([Live App](https://hospital-bed-allocation-system01.vercel.app/))
  - **Automated Algorithmic Trading Bot**: Cloud-hosted low-latency trading system using Zerodha Kite API & continuous GTT orders ([Live Demo](https://utkarshbhojak-max.github.io/telegram-bot/))
  - **Local Enterprise Digital Management**: Geo-spatial digital footprint & SEO optimization for Mount Abu Real Estate ([Live Site](https://utkarshbhojak-max.github.io/MOUNT-ABU-REAL-ESTATE/))
- **Direct Contact Experience**: One-click `mailto:utkarsh.bhojak@gmail.com` direct link, clipboard copy with notification toast, and direct LinkedIn/GitHub profiles.
- **Certifications & Academics**: Dedicated showcase for Coursera, Udemy, NPTEL (SWAYAM), Simplilearn, and UniAthena certifications.
- **100% Static & GitHub Pages Ready**: Zero backend required; builds instantly and deploys automatically with GitHub Actions.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Liquid Glassmorphism
- **3D & Visuals**: Three.js (WebGL shader material)
- **Animations**: Motion (Framer Motion)
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Typography**: Space Grotesk (Display), Plus Jakarta Sans (Body), JetBrains Mono (Data)

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── src/
│   ├── components/
│   │   ├── GlassCard.tsx         # Liquid glassmorphism container
│   │   ├── GlassToast.tsx        # Toast notification for email copy
│   │   ├── Navbar.tsx            # Floating pill navbar (Dark-only)
│   │   ├── ProjectModal.tsx      # Project deep-dive details modal
│   │   ├── TextReveal.tsx        # Split-text blur reveal animation
│   │   └── WebGLBackground.tsx   # Subtle Three.js ambient fluid background
│   ├── sections/
│   │   ├── HeroSection.tsx       # Student profile, JECRC info, and CTAs
│   │   ├── AboutSection.tsx      # Academics, focus areas & highlights
│   │   ├── SkillsSection.tsx     # 3-column categorized competencies
│   │   ├── ProjectsSection.tsx   # 3 featured projects with live links
│   │   ├── TimelineSection.tsx   # Internships & Hackathons (Clash of Coders, INNOVAT)
│   │   ├── CertificationsSection.tsx # Coursera, Udemy, NPTEL certifications
│   │   ├── ContactSection.tsx    # Direct mailto link, copy address & socials
│   │   └── FooterSection.tsx     # Clean minimal footer
│   ├── data.ts                   # Central data store (all content lives here)
│   ├── App.tsx                   # Root application orchestration
│   ├── index.css                 # Tailwind v4, liquid glass, and typography
│   └── main.tsx                  # Entry point
├── index.html                    # SEO, Person schema, Google Fonts, SVG filters
├── vite.config.ts                # Vite config with relative base for Pages
└── package.json
```

---

## 🚀 Local Development Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 🌐 Deploy to GitHub Pages

1. **Commit and push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: launch personal portfolio for Utkarsh Bhojak"
   git branch -M main
   git remote add origin https://github.com/utkarshbhojak-max/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left navigation).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - The `.github/workflows/deploy.yml` workflow will automatically build and publish your site!

---

## 📜 License
MIT License.
