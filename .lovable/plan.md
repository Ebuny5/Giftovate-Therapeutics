

# SweatSmart App Page Overhaul

## Overview
Complete rewrite of the SweatSmart App page to reflect the evolved platform — from a simple screening tool to a full clinical-grade digital ecosystem. The page will be restructured with updated copy, new feature sections, and a link to the live web app at www.sweatsmart.guru.

## Changes

### 1. Hero Section
- Update headline to "Engineering a Sweat-Free Future"
- Update subtitle to highlight SweatSmart as a clinical-grade digital ecosystem
- Replace "Download App (Coming Soon)" button with a styled CTA linking to `https://www.sweatsmart.guru` (displayed as "Get Early Access to SweatSmart")

### 2. Introduction / Mission Section
- New section with Giftovate Therapeutics Ltd mission statement about moving Hh care from "silent suffering" to "agentic mastery"

### 3. The Problem Section
- Two-part section: "Climate Exacerbation" and "The Anticipatory Feedback Loop"
- Styled with cards or alternating layout for readability

### 4. The Solution: SweatSmart Features (replaces old Key Features)
Replace the 4 simple feature cards with 6 detailed feature sections:
- **A. Proactive Climate Alerting** — threshold intelligence + agentic management
- **B. Visual Analytics Dashboard** — trend overview + peak time detection
- **C. Personalized Insights & Pattern Analysis** — trigger intelligence + evidence-based strategies
- **D. Hyper AI Consultant** — multimodal reasoning + consultant status with PDF reports
- **E. Specialist Radar** — IHS-certified dermatologist locator
- **F. Warrior Gamification** — achievement badge system

Each feature will be presented as a card with icon, title, and detailed description.

### 5. Updated Icons
Import additional Lucide icons: `CloudSun`, `TrendingUp`, `Brain`, `Search`, `Award`, `Activity`, `Thermometer`, `Shield` to match new features.

### 6. Remove old "How It Works" section
Replace with a cleaner flow that fits the new narrative.

### 7. Updated CTA Section
- Link the "Get Early Access" button to `https://www.sweatsmart.guru`
- Update copy to reflect operational beta community

### Technical Details
- Single file change: `src/pages/SweatSmartApp.tsx`
- External link uses `<a href="https://www.sweatsmart.guru" target="_blank" rel="noopener noreferrer">`
- All new sections use existing UI components (Card, Button) and Tailwind classes
- Responsive grid layouts consistent with existing site patterns

