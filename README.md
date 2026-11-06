# Abdullah Azeem — Personal Portfolio Website

A responsive, animated portfolio for **Abdullah Azeem**, Mobile Application Developer (Flutter), built with React, Next.js 16, TypeScript, Tailwind CSS 4 and Framer Motion in a black and grey theme.

## Features

- **Hero section** with animated typing roles, availability badge, floating ambient orbs, tech marquee and social links
- **About section** with quick-facts panel and animated statistic counters
- **Tools and Technologies** bento grid: Flutter (Dart), Java, Kotlin, SQL, Firebase, React Native and REST APIs, each with animated proficiency bars
- **Projects imported from GitHub in sequence** — cards are fetched live from `https://api.github.com/users/AbdullahAzeem12/repos` with a built-in cached snapshot as fallback, and the pinned repository (PaidiX) always appears first
- **Contact form** (Name, Email, Phone Number, optional Message) with client and server validation (Zod); submissions are stored in a SQLite database via Prisma through the `/api/contact` route
- **Footer** with GitHub and LinkedIn links, back-to-top button and bottom safe-area support
- Scroll-spy navigation with animated active pill, full-screen staggered mobile menu, reveal-on-scroll animations, custom scrollbar, keyboard-accessible and screen-reader friendly markup

## Tech Stack

| Layer      | Technology                              |
| ---------- | --------------------------------------- |
| Framework  | Next.js 16 (App Router) + React 19      |
| Language   | TypeScript 5                            |
| Styling    | Tailwind CSS 4                          |
| Animation  | Framer Motion                           |
| Icons      | Lucide React + custom SVG tech icons    |
| Database   | SQLite via Prisma ORM                   |
| Validation | Zod                                     |
| Toasts     | Sonner                                  |

## Getting Started

Prerequisites: Node.js 20+ (or Bun 1.2+) and npm (or Bun).

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create the environment file:

   ```bash
   cp .env.example .env
   ```

3. Create the database and generate the Prisma client:

   ```bash
   npx prisma db push
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open <http://localhost:3000> in your browser.

## Customization

- **Content**: edit `src/components/portfolio/data.ts` (social links, skills, typing roles, marquee items, fallback repositories).
- **About text and stats**: edit `src/components/portfolio/About.tsx`.
- **Theme colors**: edit the CSS variables at the top of `src/app/globals.css`.
- **Contact email delivery**: the form currently stores messages in SQLite (`ContactMessage` table). To receive them by email instead, wire the `POST` handler in `src/app/api/contact/route.ts` to a service such as Resend, Nodemailer or Formspree.

## Project Structure

```
src/
  app/
    page.tsx                 # Portfolio page (all sections)
    layout.tsx               # Fonts, metadata, dark theme
    globals.css              # Black and grey theme, animations
    api/contact/route.ts     # Contact form API (Zod + Prisma)
  components/
    ui/                      # shadcn/ui component library
    portfolio/
      data.ts                # Skills, repos, links, marquee
      icons.tsx              # Custom SVG tech and social icons
      Reveal.tsx             # Scroll-reveal wrapper + section headings
      Navbar.tsx             # Scroll-spy nav + mobile menu
      Hero.tsx               # Typing animation, orbs, marquee
      About.tsx              # Bio, quick facts, animated counters
      Skills.tsx             # Bento grid with proficiency bars
      Projects.tsx           # Live GitHub repositories
      Contact.tsx            # Validated contact form
      Footer.tsx             # Footer with socials and back-to-top
prisma/
  schema.prisma              # ContactMessage model
```

## Author

**Abdullah Azeem** — Mobile Application Developer

- GitHub: <https://github.com/AbdullahAzeem12>
- LinkedIn: <https://www.linkedin.com/in/abdullah-azeem-307ab7418/>
