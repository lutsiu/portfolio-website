import { ProjectFullDataType } from "../types/ProjectFullDataType";

// Build: /projects/<slug>/<slug>-<n>.png
function getScreens(slug: string, count = 9): string[] {
  return Array.from({ length: count }, (_, i) => `/projects/${slug}/${slug}-${i + 1}.png`);
}

const projectsFullData: ProjectFullDataType[] = [
  {
    id: "intercode",
    title: "Intercode",
    subititle: "Fullstack website made for an outsource IT company",
    liveLink: "https://www.intercode-software.com",
    repoLink: "https://github.com/lutsiu/intercode",
    technologies: ["Next.js", "Tailwind", "TypeScript", "Zustand", "Embla", "Nodemailer"],
    context: `The client needed a full-stack marketing site that actually brings leads in, not just a pretty landing.
              Advanced SEO was a must (clean URLs, sitemap, robots), plus carousels for case studies,
              lightweight popups for CTAs, multi-language support, and a reliable contact form that delivers messages
              to the team’s inbox.`,
    solution: `I built the site with Next.js to get solid SEO and performance out of the box. Server components and
              SSR/SSG give fast first loads; dynamic routes keep URLs clean. I added full metadata (title/description,
              OpenGraph/Twitter cards), sitemap and robots, and basic schema/JSON-LD where useful. Internationalization
              (i18n) is done with Next.js routing so pages are indexable per locale. For carousels I used Embla—smooth,
              accessible, and tiny. Popups are headless components so no unnecessary JS.
              Styles are Tailwind (design tokens, responsive utilities, dark mode). TypeScript is everywhere for strict
              types and safer refactors. Images go through next/image for responsive sizes and lazy loading; code-splitting
              and route prefetch keep navigation snappy. The contact form posts to a Next.js API route that uses Nodemailer
              to send emails to the client; it has basic spam protection and both client/server validation. Deployment is on
              Vercel with preview environments, custom domains, and analytics.`,
    impact: `Launched as a single-developer build and shipped on schedule. The site hits fast LCP and scores well on
            Lighthouse (perf/SEO/accessibility). Clear CTAs + localized content improved discoverability and lowered
            friction for outreach. Within the first [N] weeks the site generated **10+ inbound leads** (replace with your
            real number) and gave the sales team a cleaner qualification flow.`,
    myRole: `Full-stack. Discovery, IA, and wireframes → Next.js architecture → UI system in Tailwind → Embla carousels,
            i18n, and popups → form + Nodemailer backend → performance/SEO passes → deployment, domains, and monitoring.
            End-to-end delivery, including copy touch-ups and asset optimization.`,
    heroImage: "/projects/intercode/intercode-hero.png",
    screenshots: getScreens("intercode"),
  },
  {
    id: "lutsiuco", // was "lutsiu-co"
    title: "Lutsiu.co",
    subititle: "Portfolio-style company website",
    liveLink: "https://lutsiu-co.vercel.app",
    repoLink: "https://github.com/lutsiu/lutsiu.co",
    technologies: ["React", "TypeScript", "React Router", "Framer Motion", "Tailwind", "Redux"],
    context: `Personal/agency portfolio built for myself to showcase services and case studies, with the clear goal
              of getting interviews and client inquiries. Needed to be fast, accessible, responsive, and visually
              polished, with subtle motion that supports the content rather than distracts.`,
    solution: `Implemented in React with TypeScript for strict typing and safer refactors. Routing handled by React Router
              (projects list → dynamic case study pages). Built a small design system with Tailwind—tokens for spacing,
              color, and typography; reusable cards, badges, and section patterns; dark-mode friendly components.
              Used Framer Motion for tasteful transitions: hero fade/scale, section reveals on scroll, and micro-interactions
              on buttons/cards. Optimized images and layout (responsive grids, clamped text, lazy-loaded media) to keep the
              page lightweight. The contact form includes client-side validation, async submit with loading/success states,
              and is wired to a simple backend/service for delivering messages. Wrote concise copy for projects and added
              per-page metadata for better sharing (OG/Twitter).`,
    impact: `This site directly helped me land opportunities: it became the single link I could send to recruiters and
            clients, and led to interviews and offers. Clear structure + motion polish made it easy to scan and memorable.
            (Replace with your real numbers: e.g., “Generated X interviews and Y client conversations in N weeks.”)`,
    myRole: `Design + development end-to-end. Brand direction, layout, and copy; React architecture and routing;
            Tailwind component library; Framer Motion interactions; performance passes and accessibility checks; deploy
            and ongoing iteration.`,
    heroImage: "/projects/lutsiuco/lutsiu-co-hero.png",
    screenshots: getScreens("lutsiuco"),
  },
  {
    id: "deyan",
    title: "Deyan",
    subititle: "Full-stack web app for an auto-service company",
    liveLink: "https://www.deyanauto.pl/",
    repoLink: "https://github.com/lutsiu/deyan",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "TypeScript",
      "Tailwind",
      "i18n",
      "Nodemailer",
      "Instagram API",
      "React Router",
    ],
    context: `A local auto-service needed a clean, mobile-first site that explains services,
              builds trust, and turns visits into inquiries. Requirements: multi-language content (i18n),
              responsive layouts for phone users, a reliable contact form that lands in the inbox,
              and an Instagram posts section to show real work and social proof.`,
    solution: `Frontend in React with TypeScript and Tailwind for a fast, maintainable UI system (utility classes,
              tokens, dark-mode friendly). Routing kept simple and predictable; content blocks are reusable across pages.
              Internationalization (i18n) uses a translation catalog + language switcher (URLs/params), so each page
              has localized copy. The contact form posts to an Express.js API endpoint; server validates inputs and sends
              via Nodemailer to the business inbox, with basic spam protection and a success/failure toast on the client.
              Instagram feed is integrated via oEmbed/Graph endpoints and cached on the server to avoid rate limits and
              keep pages fast. The Node/Express backend serves the React build, exposes concise REST endpoints
              (/contact, /instagram, /services), and is fully typed (TS) for safer changes. Deployed with env-based
              config and minimal CI—easy to extend later (e.g., bookings, admin).`,
    impact: `Shipped solo, end-to-end. The site is quick on mobile and simple to navigate, which increased inquiries.
            Within the first [N] weeks it generated **10+ client messages** (swap with your real number), while the
            Instagram section improved time-on-page and trust. The typed API and modular UI made follow-up iterations
            straightforward.`,
    myRole: `Full-stack. Requirements → IA → React UI with Tailwind/TS → i18n rollout → Express API (contact, Instagram)
            → Nodemailer pipeline → responsiveness and accessibility → deploy/monitoring. Handled copy touch-ups
            and image optimization as well.`,
    heroImage: "/projects/deyan/deyan-hero.png",
    screenshots: getScreens("deyan"),
  },
];

export default projectsFullData;
