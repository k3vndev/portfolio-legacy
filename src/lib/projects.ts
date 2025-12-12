import { TECHNOLOGIES as T } from '@consts'
import type { Project } from '@types'

/*
  Projects data structure:
  - Overview: Short description of the project
  - Description: Long description of the project
  - My work: List of things I did or acomplished in the project
  - Features: List of features of the project
  - Main technologies: Technologies that were mainly used in the project (max 3)
  - Extra technologies: Other technologies used in the project for details
  - Code: Link to the code repository
  - Preview: Link to the live preview of the project
  - Starred: If the project is starred or not. Starred projects will have a star icon in the explore projects page

  Note: Images are stored in the public/projects/[project-slug] folder and are automatically loaded based on the project name
*/

export const PROJECTS: Project[] = [
  {
    name: 'Pixi Paint',
    overview:
      'Create tiny masterpieces in a retro 8×8 pixel-art style. Paint, share, and even play minigames. All inside this handcrafted web platform.',
    description:
      'Enjoy creating tiny masterpieces in a retro 8×8 pixel-art style. Paint and share your creations with ease, and have fun playing built-in minigames. All of this is available within a lovingly handcrafted web platform designed for pixel art enthusiasts ✨',
    features: [
      '🎨 Paint — Create pixel masterpieces on a cozy 8×8 canvas with unlimited colors and cool animations.',
      '💾 Save, export & import — Keep your creations safe, share them, or load them back anytime.',
      '🌍 Community gallery — Publish your art anonymously, explore works from other creators, and soak in inspiration.',
      '🕹️ Mini-games — Enjoy fun pixel-art games like Speed Paint, all built into the platform.',
      '🕹 Handcrafted UI — Every detail custom‑made and lovingly inspired by the charm of the Wii interface.',
      '👩‍🎨 User friendly design — Intuitive and accessible for artists of all skill levels.',
      '🚫 No login required — No barriers, no accounts. Just create and share instantly.',
    ],
    myRole: [
      'Designed and implemented the pixel-painting engine with custom tools, save/export features (PNG & JSON), and a gallery for publishing and exploring community art.',
      'Built a responsive, handcrafted UI with React, Tailwind, Zustand, and a MongoDB backend to handle storage and scalability.',
      'Delivered an intuitive U X with attention to detail, applying design thinking, adaptability, and problem-solving, while driving the project independently from concept to launch.',
    ],
    mainTechnologies: [T.NEXTJS, T.MONGODB],
    extraTechnologies: [T.TYPESCRIPT, T.REACT, T.NODEJS, T.TAILWIND, T.ZOD],
    code: 'https://github.com/K3vnDev/pixi-paint',
    preview: 'https://pixi-paint.vercel.app',
    starred: true,
  },
  {
    name: 'Studymate',
    overview:
      'Enhance your learning with AI. Mate, your virtual assistant, will help you create, follow and complete personalized study plans.',
    description:
      'A modern self-learning platform powered by an AI study partner. Create personalized Studyplans, track your progress, complete daily tasks, and chat with Mate — an assistant that actually remembers what you’re studying. Smooth UI, meaningful structure, and zero friction. All built to make long-term learning feel doable and enjoyable 📚',
    features: [
      '📊 Smart dashboard — pick, start or save Studyplans, and get greeted by Mate when no plan is selected.',
      '🤖 AI chat assistant — Mate creates Studyplans, explains tasks, gives tips, tracks your progress, and adapts to what you’re studying.',
      '📘 Studyplans — structured learning made simple: daily lessons, tasks, progress tracking, and a clean layout to keep you on track.',
      '📝 Daily tasks — each day comes with clear goals; interact with Mate for help or clarification whenever you need.',
      '⏱️ Focus mode — a dedicated space to work on tasks with a built-in timer (in progress) and a swappable task card.',
      '🏅 Profile & achievements — view your info, streaks, completed plans, saved plans, and a growing list of badges (some still in development).',
      '💬 Local privacy logic — Studyplans start privately in your chat and only become publicly visible when you save or start them.',
      '⚡ Smooth UX — animations, structured flows, clean layouts, and state management that keeps everything predictable.',
    ],
    myRole: [
      'Designed and built the entire product end-to-end: UI/UX, Figma prototypes, frontend, backend, authentication, and deployment.',
      'Implemented the AI engine using the OpenAI API to power Mate — generating Studyplans, giving guidance, and handling structured responses validated with Zod.',
      'Developed core functionality including progress tracking, chat history, autosync with Supabase, session logic, and Studyplan creation/management.',
      'Architected a scalable full-stack system with Next.js, TypeScript, Zustand, Supabase, Zod, and TailwindCSS, balancing reliability with ease of use.',
      'Applied problem-solving, architectural planning, and self-driven iteration to deliver a stable, intuitive learning platform from scratch.',
    ],
    mainTechnologies: [T.NEXTJS, T.SUPABASE, T.OPENAI],
    extraTechnologies: [T.TYPESCRIPT, T.REACT, T.NODEJS, T.TAILWIND, T.ZOD],
    code: 'https://github.com/K3vnDev/studymate',
    preview:
      'https://studymate-web.vercel.app/studyplan/9d1597b7-3d18-4135-b9a8-133cf38845dd',
    starred: true,
  },
  {
    name: 'Quizzie',
    overview:
      'Easy-to-use quiz maker. Create your own quizzes and share them with others. You can also have fun playing existing ones, the answer is yours!',
    description:
      'Create, share and play bite-sized quizzes in seconds. Build quizzes in a minimal editor, test them instantly, and publish public links so anyone can jump right in. Finish a quiz, earn up to 3 stars, and get confetti if you flex at least 2. Clean, fast, and made for people who want results without a registration form 🎉',
    features: [
      '🧠 Play instantly — open a public quiz and start playing immediately; no account required.',
      '✍️ Create with ease — a tiny, intuitive editor (hit + on your dashboard) for quick quiz creation and instant testing.',
      '💾 Local-first autosave — drafts are stored in your browser and automatically upload to your account when you log in.',
      '🔗 Shareable links — publish a quiz and copy a public URL to send to anyone.',
      '⭐ Scoring & rewards — 3-star scoring system; confetti for 2+ stars because we like cheap celebrations.',
      '🎛️ Customization — shuffle questions/answers, toggle icons, pick color themes, and preview before publishing.',
      '🔒 Optional accounts — create one to save multiple quizzes, otherwise keep it anonymous and friction-free.',
      '⚡ Polished UI — smooth animations, responsive layout, and accessible controls for all players.',
    ],
    myRole: [
      'Designed and built the quiz editor and playback engine, including live preview, per-question timers, shuffling, and the 3-star scoring logic with confetti trigger.',
      'Implemented local-first autosave (localStorage) with seamless cloud sync on login, plus public-permalink publishing and share/copy functionality.',
      'Developed the frontend with React, Zustand for state, and Vite for fast dev builds; paid close attention to animations and UX polish.',
      'Built the backend API with Node.js + Express, validated inputs with Zod, and used MongoDB to store quizzes, public IDs, and ownership metadata.',
    ],
    mainTechnologies: [T.REACT, T.NODEJS, T.MONGODB],
    extraTechnologies: [T.JAVASCRIPT, T.CSS, T.EXPRESS, T.ZOD],
    code: 'https://github.com/K3vnDev/quizzie',
    preview: 'https://quizzie-wb.netlify.app',
    starred: true,
  },
  {
    name: 'Timeline Creator',
    overview:
      'Creating timelines has never been easier. Make and view as many timelines as you want with this simple yet versatile website.',
    description:
      'A lightweight web app for building clean, visual timelines. Add events, rearrange your story, drop in images, and mark key dates—all in a simple, editing-is-viewing interface. No clutter, no extra screens, just a smooth timeline you can shape in real time 🎞️',
    features: [
      '🧩 Inline editing — the creation and view page are the same. Click any item to edit it.',
      '📍 Points & marks — points for full events (title, description, image), marks for quick labels like years or timestamps.',
      '🖼️ Drag & drop images — drop images anywhere to create new points or replace existing ones instantly.',
      '📁 Timeline manager — create, switch, clone, or delete timelines through a compact top-left menu.',
      '📤 Import/export — download your timeline as JSON and reload it later.',
      '🖱️ Simple controls — hover + click for points, Shift + click for marks; extremely lightweight workflow.',
      '⚠️ Desktop-first — mobile support is limited (intentionally kept simple for now).',
    ],
    myRole: [
      'Built the full application solo, designing a minimal real-time editing system where the timeline view doubles as the editor.',
      'Implemented the data model for points, marks, timeline grouping, cloning, and import/export via JSON.',
      'Developed drag-and-drop image handling to seamlessly attach visuals to events or create new points.',
      'Created a clean, responsive UI with dynamic controls, hover detection, and an intuitive layout focused on speed and clarity.',
      'Handled state management, timeline persistence, and all user interactions with a focus on simplicity and fluid UX.',
    ],
    mainTechnologies: [T.REACT, T.TYPESCRIPT],
    extraTechnologies: [T.CSS, T.ZOD],
    code: 'https://github.com/K3vnDev/timeline-creator',
    preview: 'https://timeline-creator.netlify.app',
  },
  {
    name: 'IP Geolocation',
    overview:
      'Find out the location of any IP address worldwide and see it on an interactive map with ease.',
    description:
      'A website that tracks your IP address and displays it for you. It also includes a map and information about your estimated location. You can also search for any other IP address worldwide and see its location on the map.',
    features: [
      '🌐 IP Lookup — Instantly find the location of any IP address worldwide.',
      '🗺️ Interactive Map — Visualize IP locations on a dynamic, zoomable map.',
      '📊 Visual Info — Get the country flag displayed next to the IP information.',
      '⚡ Fast & Responsive — Enjoy quick lookups with a user-friendly interface.',
    ],
    myRole: [
      'Developed the entire frontend using React and JavaScript, ensuring a responsive and user-friendly interface.',
      'Integrated the Leaflet library to create an interactive map for visualizing IP locations.',
      'Implemented API calls to fetch real-time geolocation data based on user-inputted IP addresses.',
    ],
    mainTechnologies: [T.REACT, T.JAVASCRIPT, T.LEAFLET],
    extraTechnologies: [T.CSS],
    code: 'https://github.com/K3vnDev/ip-geolocation',
    preview: 'https://ip-geolocation-kevdev.netlify.app',
    starred: true,
  },
]
