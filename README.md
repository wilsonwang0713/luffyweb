# LuffyDesign Website

A premium, futuristic website for LuffyDesign featuring Fluid Glass + Shape Blur aesthetics.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Animations**: Framer Motion
- **Components**: shadcn/ui + custom UI library
- **Icons**: Lucide React

## Design System

### Visual Style
- **Aesthetic**: Futuristic, premium, AI-native, blockchain-literate
- **Color Palette**: Deep Black (#0a0a0f) with Aurora accents (Violet, Cyan, Aqua)
- **UI Pattern**: Fluid Glass morphism with animated gradient backgrounds
- **Typography**: Modern sans-serif with precise scaling
- **Interactions**: Smooth, purposeful animations with magnetic buttons and spotlight cards

### Key Features
- Animated fluid background with organic gradient blobs
- Glass morphism UI components with backdrop blur
- Interactive components (MagneticButton, SpotlightCard)
- Scroll-triggered reveal animations
- Fully responsive design

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── case-studies/        # Case studies page
│   └── contact/             # Contact form
├── components/
│   └── ui/                  # Custom UI components
│       ├── fluid-background.tsx
│       ├── magnetic-button.tsx
│       ├── spotlight-card.tsx
│       ├── scroll-fade.tsx
│       └── button.tsx
└── lib/
    └── utils.ts             # Utility functions
```

## Content Strategy

See `CONTENT.md` for complete content strategy and messaging.

See `DELIVERABLES.md` for technical documentation and implementation details.

## Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy!

The build output is static and can also be deployed to any static hosting provider.

## License

© 2025 LuffyDesign. All rights reserved.
