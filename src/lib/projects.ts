import { TECHNOLOGIES as T } from '@consts'
import type { Project } from '@types'

/*
  Projects data structure:

  - Overview: Short description of the project
  - Description: Long description of the project
  - My work: List of things I did or acomplished in the project
  - Features: List of features of the project
  - Grid images: Images to show in the projects grid of the Home section. Only 4 projects can have this
  - Carousel images: Images to show in the project details carousel. First image will be the main one

  - Main technologies: Technologies that were mainly used in the project (max 3)
  - Extra technologies: Other technologies used in the project for details
  - Code: Link to the code repository
  - Preview: Link to the live preview of the project

  - Starred: If the project is starred or not. Starred projects will have a star icon in the explore projects page
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
      '🚫 No login required — No barriers, no accounts. Just create and share instantly.'
    ],
    myWork: [
      'Designed and implemented the pixel-painting engine with custom tools, save/export features (PNG & JSON), and a gallery for publishing and exploring community art.',
      'Built a responsive, handcrafted UI with React, Tailwind, Zustand, and a MongoDB backend to handle storage and scalability.',
      'Delivered an intuitive U X with attention to detail, applying design thinking, adaptability, and problem-solving, while driving the project independently from concept to launch.'
    ],
    gridImgs: ['/projects/pixi-paint/starred-1.gif', '/projects/pixi-paint/starred-2.webp'],
    carouselImgs: [
      '/projects/pixi-paint/carousel-1.webp',
      '/projects/pixi-paint/carousel-2.webp',
      '/projects/pixi-paint/carousel-3.webp',
      '/projects/pixi-paint/carousel-4.webp',
      '/projects/pixi-paint/carousel-5.webp'
    ],
    mainTechnologies: [T.NEXTJS, T.MONGODB],
    extraTechnologies: [T.TYPESCRIPT, T.REACT, T.NODEJS],
    code: 'https://github.com/K3vnDev/pixi-paint',
    preview: 'https://pixi-paint.vercel.app',
    starred: true
  },
  {
    name: 'Studymate',
    overview:
      'Enhance your learning with AI. Mate, your virtual assistant, will help you create, follow and complete personalized study plans.',
    description:
      'A modern web application to enhance self-learning with AI. Create, follow, and complete Studyplans, track your progress, earn achievements to flex on your profile, and chat with Mate — your virtual assistant.',
    features: [],
    myWork: [],
    gridImgs: ['/projects/studymate/starred-1.webp', '/projects/studymate/starred-2.webp'],
    carouselImgs: ['/projects/studymate/carousel-1.webp'],
    mainTechnologies: [T.NEXTJS, T.SUPABASE, T.OPENAI],
    extraTechnologies: [T.TYPESCRIPT, T.REACT, T.NODEJS],
    code: 'https://github.com/K3vnDev/studymate',
    preview: 'https://studymate-web.vercel.app/studyplan/9d1597b7-3d18-4135-b9a8-133cf38845dd',
    starred: true
  },
  {
    name: 'Quizzie',
    overview:
      'Easy-to-use quiz maker. Create your own quizzes and share them with others. You can also have fun playing existing ones, the answer is yours!',
    description:
      'Easy-to-use quiz maker. Create your own quizzes and share them with others. You can also have fun playing existing ones, the answer is yours!',
    features: [],
    myWork: [],
    gridImgs: ['/projects/quizzie/starred-1.webp'],
    carouselImgs: ['/projects/quizzie/carousel-1.webp'],
    mainTechnologies: [T.REACT, T.NODEJS, T.MONGODB],
    code: 'https://github.com/K3vnDev/quizzie',
    preview: 'https://quizzie-wb.netlify.app',
    starred: true
  },
  {
    name: 'Timeline Creator',
    overview:
      'Creating timelines has never been easier. Make and view as many timelines as you want with this simple yet versatile website.',
    description:
      'Creating timelines has never been easier. Make and view as many timelines as you want with this simple yet versatile website.',
    features: [],
    myWork: [],
    gridImgs: ['/projects/timeline-creator/starred-1.webp'],
    carouselImgs: ['/projects/timeline-creator/carousel-1.webp'],
    mainTechnologies: [T.REACT, T.TYPESCRIPT],
    code: 'https://github.com/K3vnDev/timeline-creator',
    preview: 'https://timeline-creator.netlify.app'
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
      '⚡ Fast & Responsive — Enjoy quick lookups with a user-friendly interface.'
    ],
    myWork: [
      'Developed the entire frontend using React and JavaScript, ensuring a responsive and user-friendly interface.',
      'Integrated the Leaflet library to create an interactive map for visualizing IP locations.',
      'Implemented API calls to fetch real-time geolocation data based on user-inputted IP addresses.'
    ],
    carouselImgs: ['/projects/ip-geolocation/carousel-1.webp'],
    mainTechnologies: [T.REACT, T.NODEJS, T.LEAFLET],
    extraTechnologies: [T.JAVASCRIPT],
    code: 'https://github.com/K3vnDev/ip-geolocation',
    preview: 'https://ip-geolocation-kevdev.netlify.app',
    starred: true
  }
]
