# MeinProfilbild React Clone 🖼️⚛️

A **React + Vite** remake of [meinprofilbild.de](https://meinprofilbild.de) – the German AI service that turns everyday selfies into polished, professional application photos in 90 minutes or less. The goal of this project is *feature-parity UI* and a clean, modern codebase that can later be wired up to any AI image-generation back-end.

> **Student task** – assigned 25 June 2025.  
> Not affiliated with MeinProfilbild; built for learning/demo purposes only.

&nbsp;

## ✨ Key features

| Section | What you’ll find in the clone |
|---------|--------------------------------|
| **Hero / USP** | “Mache aus deinen Selfies professionelle Bewerbungsfotos!” headline, upload CTA, trust badges, ⭐⭐⭐⭐⭐ rating strip :contentReference[oaicite:0]{index=0} |
| **How-it-works (3 steps)** | Upload → AI works its magic → download headshots in ~90 min :contentReference[oaicite:1]{index=1} |
| **Pricing cards** | Standard / Professional / Premium packages with number of photos, backgrounds, delivery time |
| **Before & After gallery** | Swipeable carousel of transformation examples |
| **Testimonials** | Dynamic cards with name, role, 5-star rating, quote |
| **FAQ accordion** | 7+ common questions (image safety, refund policy, etc.) |
| **Responsive design** | Looks sharp on mobile-first up to 1440 px |
| **Dark-mode ready** | Tailwind’s `dark:` classes baked in |
| **State management** | Zustand store for cart + upload progress |
| **Image preview** | `react-dropzone` + `<canvas>` mock preview (AI stub) |
| **CI / Linting** | ESLint + Prettier with Airbnb + React hooks rules |

> The real site’s core promise is an **AI-powered selfie transformation service** :contentReference[oaicite:2]{index=2}; this clone focuses on reproducing the UX while stubbing out the proprietary AI API.

&nbsp;

## 🛠 Tech stack

| Layer | Tooling |
|-------|---------|
| Front-end | **React 18**, React Router 6, Zustand |
| Build | **Vite** + `@vitejs/plugin-react-swc` for lightning-fast HMR |
| Styling | **Tailwind CSS 3** + daisyUI components |
| Forms / Upload | react-hook-form, react-dropzone |
| Canvas export | `html2canvas` (placeholder for server-side AI) |
| Quality | ESLint, Prettier, Husky pre-commit, vitest + React Testing Library |

&nbsp;

## 🚀 Getting started

```bash
# 1. Clone
git clone https://github.com/<you>/meinprofilbild-react-clone.git
cd meinprofilbild-react-clone

# 2. Install deps
npm i          # or pnpm i / yarn

# 3. Dev server
npm run dev    # open http://localhost:5173

# 4. Prod build
npm run build
npm run preview
