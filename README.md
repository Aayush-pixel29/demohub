# 🌟 3-in-1 Multi-Client Demo Portfolio (Salon, Restaurant & Clinic)

A production-grade, modular 3-in-1 website prototype codebase created for client demos, featuring **Barbercrop Barbershop**, **Crunch Fast Casual Restaurant**, and **Evermiles Dental Clinic** in a single optimized React application.

---

## 🚀 Live Routes & Status

| Prototype / Route | Production Live URL | Category & Domain | Status |
| :--- | :--- | :--- | :---: |
| **Demo Hub** | `https://aiportfolio-kappa.vercel.app/demo` | Master Agency Showcase Portal | 🟢 Live |
| **Salon Prototype** | `https://aiportfolio-kappa.vercel.app/demo/salon` | Barbercrop · Men Grooming Atelier | 🟢 Live |
| **Restaurant Prototype** | `https://aiportfolio-kappa.vercel.app/demo/restaurant` | Crunch · Fast Casual Food Delivery | 🟢 Live |
| **Clinic Prototype** | `https://aiportfolio-kappa.vercel.app/demo/clinic` | Evermiles · Modern Luxury Dental Practice | 🟢 Live |

---

## 📂 Modular Clean Folder Structure

```
├── vercel.json                 # Automatic SPA rewrites so /demo/* routes work on Vercel
├── index.html                  # Curated fonts (Oswald, Playfair, Outfit) & SEO meta tags
├── package.json                # React 19, Tailwind CSS v4, Lucide Icons
└── src/
    ├── App.tsx                 # Master router, device framer & notification toasts
    ├── index.css               # Modular design tokens & typography rules
    ├── types/
    │   └── index.ts            # Data contracts for orders, bookings & specs
    ├── context/
    │   └── DemoContext.tsx     # Client-side router, device mode & interactive cart state
    ├── data/
    │   └── prototypesData.ts   # Isolated datasets for Salon, Restaurant, and Clinic
    └── components/
        ├── common/             # Universal client presentation tools
        │   ├── ClientDemoBar.tsx  # Top switcher, device modes, copy link
        │   ├── DeviceFrame.tsx    # Responsive viewport frame (Desktop / Tablet / Mobile)
        │   └── SpecsModal.tsx     # Architecture modal & GitHub cheat sheet
        ├── hub/                # Demo Hub Portal (/demo)
        │   ├── HubHero.tsx
        │   ├── PrototypeCard.tsx
        │   ├── ComparisonMatrix.tsx
        │   └── DeploymentGuide.tsx
        ├── salon/              # Barbercrop Salon (/demo/salon)
        │   ├── SalonHeader.tsx
        │   ├── SalonHero.tsx
        │   ├── SalonAbout.tsx
        │   ├── SalonServices.tsx
        │   ├── SalonSchedule.tsx
        │   ├── SalonBlog.tsx
        │   ├── SalonBookingModal.tsx
        │   └── SalonFooter.tsx
        ├── restaurant/         # Crunch Fast Casual (/demo/restaurant)
        │   ├── RestaurantHeader.tsx
        │   ├── RestaurantHero.tsx
        │   ├── CategoryFilter.tsx
        │   ├── SignatureDishes.tsx
        │   ├── FamilyBundles.tsx
        │   ├── ChefSpecials.tsx
        │   ├── LiveTracker.tsx
        │   ├── RestaurantCartDrawer.tsx
        │   └── BottomNav.tsx
        └── clinic/             # Evermiles Dental Clinic (/demo/clinic)
            ├── ClinicHeader.tsx
            ├── ClinicHero.tsx
            ├── ClinicPillars.tsx
            ├── ClinicServices.tsx
            ├── ClinicAbout.tsx
            ├── ClinicTestimonials.tsx
            ├── ClinicCtaBanner.tsx
            ├── ClinicBookingModal.tsx
            └── ClinicFooter.tsx
```

---

## 🎨 Modular Theme & Design System

Each prototype uses a completely independent, domain-authentic visual language:

1. **Barbercrop Salon (`/demo/salon`)**:
   - **Colors**: Deep Pitch Black (`#000000`), Dark Charcoal (`#111111`), Crimson Red (`#E50914`).
   - **Typography**: `Oswald` bold uppercase display font paired with clean sans-serif.
   - **Features**: 6-tier grooming catalog, master barber booking modal, opening hours schedule, grooming journal.

2. **Crunch Restaurant (`/demo/restaurant`)**:
   - **Colors**: Sizzling Orange (`#FF6400`), Flame Amber (`#F59E0B`), Dark Grill Charcoal (`#0F0F12`).
   - **Typography**: `Outfit` high-appetite rounded sans-serif.
   - **Features**: Category filter, signature dishes, family bundles, chef specials, live delivery tracker with status steps, interactive cart drawer with promo code (`CRUNCH25`).

3. **Evermiles Dental Clinic (`/demo/clinic`)**:
   - **Colors**: Deep Medical Emerald (`#0D2B24`), Warm Cream (`#F8F7F4`), Soft Sage (`#E8F3EE`).
   - **Typography**: `Playfair Display` luxury serif headlines with `Plus Jakarta Sans` body.
   - **Features**: 4 clinic pillars, 6 comprehensive clinical services, patient reviews with star ratings, personalized doctor consultation booking modal.

---

## 🛠️ Step-by-Step GitHub & Vercel Deployment

### 1. Initialize Git and Push to GitHub
```bash
# Initialize local git repository
git init

# Stage all files and commit
git add .
git commit -m "feat: 3-in-1 multi-client prototypes (salon, restaurant, clinic)"

# Set default branch
git branch -M main

# Add your GitHub remote repository
git remote add origin https://github.com/your-username/aiportfolio.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel
You can deploy in one of two ways:
- **Option A (Vercel Dashboard)**:
  1. Go to [vercel.com](https://vercel.com).
  2. Click **Add New Project** and select your GitHub repository `aiportfolio`.
  3. Keep default settings (Framework preset: `Vite`, Build command: `npm run build`, Output directory: `dist`).
  4. Click **Deploy**!

- **Option B (Vercel CLI)**:
  ```bash
  npm i -g vercel
  vercel --prod
  ```

Because `vercel.json` contains:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
All client routes (`/demo`, `/demo/salon`, `/demo/restaurant`, `/demo/clinic`) will resolve seamlessly without 404 errors!

---

## 📱 Responsive & Device Preview Controls
The built-in **Client Demo Bar** floating at the top allows you or your client to:
- Instantly jump between prototypes.
- Toggle between **Fullscreen**, **Desktop (1440px)**, **Tablet (768px)**, and **Mobile (390px)** frames.
- Copy client-ready production URLs with one click.
- Minimize the controller bar to view the clean, unhindered website experience.
