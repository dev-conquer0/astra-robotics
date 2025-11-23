# Astra Robotics

[cloudflarebutton]

A premium, cinematic marketing website for a cutting-edge humanoid robotics company. This site showcases futuristic visuals, interactive product demonstrations, and seamless user experiences to highlight Astra Robotics' innovative solutions in home assistance and industrial automation.

## Description

Astra Robotics is a fully immersive, ultra-modern marketing site blending photorealistic robotics imagery with smooth animations, micro-interactions, and dynamic content. The site features full-screen cinematic videos, holographic UI overlays, product showcases for home and industrial robots, benefits highlights, demo players, pricing tables, and testimonials—all designed with a premium, intelligent, and highly technological aesthetic.

Built as a static React single-page application (SPA) using Vite, it integrates with Cloudflare Workers for lightweight API endpoints (e.g., demo booking and mock payments). The initial implementation focuses on visual excellence, responsive design, and mock data for immediate deployability.

## Features

- **Cinematic Hero Section**: Full-screen video background with holographic overlays, compelling headline, and CTAs for buying or booking demos.
- **Story & Vision**: Narrative content with looped R&D videos and mission statements.
- **Product Showcase**: Dedicated blocks for Home Assistant and Industrial robots, including hover animations, micro-videos, comparison charts (using Recharts), and interactive elements.
- **Key Benefits**: Animated 3D-style icons illustrating labor reduction, safety, and efficiency gains.
- **Demo Video Modal**: Lightbox player for 30-45 second cinematic demos with captions and sharing options.
- **Pricing & Purchase**: Tiered pricing cards for home and industrial models, with mock payment flows supporting Paystack, Flutterwave, and bank transfers.
- **Testimonials & Case Studies**: Carousel of video testimonials and success stories.
- **Responsive & Accessible**: Mobile-first design with smooth interactions, loading states, and WCAG compliance.
- **Micro-Interactions**: Framer Motion animations, parallax effects, and hover states for engaging UX.
- **Mock API Integration**: Cloudflare Workers handle form submissions and payment initiations with JSON responses.

## Technology Stack

- **Frontend**: React 18, Vite (build tool), React Router (routing), TypeScript
- **Styling**: Tailwind CSS 3, ShadCN/UI (components), clsx & Tailwind Merge (class utilities)
- **Animations & Interactions**: Framer Motion, React Intersection Observer (scroll triggers), React Parallax
- **UI Components**: Lucide React (icons), Recharts (charts), Sonner (toasts), Zod + React Hook Form (validation)
- **State Management**: Zustand (lightweight stores)
- **Backend/API**: Cloudflare Workers (Hono framework), mock endpoints for bookings and payments
- **Utilities**: Immer (immutable updates), Date-fns (date handling), UUID (identifiers)
- **Development**: ESLint (linting), Bun (package manager), Wrangler (Cloudflare deployment)

## Quick Start

### Prerequisites

- Node.js 18+ (or Bun)
- Cloudflare account (for deployment)
- Bun package manager (recommended for speed)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd astra-robotics
   ```

2. Install dependencies using Bun:
   ```
   bun install
   ```

3. (Optional) Generate TypeScript types for Cloudflare Workers:
   ```
   bun run cf-typegen
   ```

### Development

Start the development server:
```
bun run dev
```

The app will be available at `http://localhost:3000` (or the port specified in your environment). Changes will hot-reload automatically.

- Use `bun run lint` to check code quality.
- Test responsive design by resizing your browser or using device emulation.

### Build

For production builds:
```
bun run build
```

This generates optimized static assets in the `dist/` directory.

## Usage

The site is a single-page application (SPA) with the main marketing page at `/`. Key interactions include:

- **Navigation**: Scroll through sections or use CTAs to trigger modals (e.g., demo player, pricing checkout).
- **Forms**: Demo booking uses React Hook Form with Zod validation; submissions POST to `/api/book-demo`.
- **Payments**: Mock checkout flow via `/api/initiate-payment`; UI supports payment provider selection.
- **Videos**: Native `<video>` elements with lazy loading, muted autoplay, and poster fallbacks for reliability across devices.
- **Custom Hooks**: Use provided hooks like `useTheme` for dark mode or `useIsMobile` for responsive logic.

Example: Triggering a demo modal from a button:
```tsx
import { Button } from '@/components/ui/button';
import { DemoModal } from '@/components/DemoModal'; // Assuming component exists

function HeroCTA() {
  return <Button onClick={() => openDemo()}>Watch Demo</Button>;
}
```

For extending the site, add routes in `src/main.tsx` and components in `src/components/`. Update API endpoints in `worker/userRoutes.ts` without modifying `worker/index.ts`.

## Deployment

Deploy to Cloudflare Workers for global edge distribution:

1. Ensure you have the Wrangler CLI installed:
   ```
   bun add -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```
   wrangler login
   ```

3. Deploy the project:
   ```
   bun run deploy
   ```

This bundles the frontend assets and deploys the Worker. Your site will be live at `<project-name>.workers.dev`. Assets are served as a SPA with API routes prefixed under `/api/*`.

For custom domains or advanced configuration, edit `wrangler.jsonc` (e.g., add environment variables or bindings).

[cloudflarebutton]

## Contributing

Contributions are welcome! Please:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Focus on maintaining visual excellence, avoiding infinite loops (see codebase guidelines), and adhering to the blueprint specs. Run tests and linting before submitting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.