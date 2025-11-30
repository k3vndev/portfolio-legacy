import * as Icons from '@icons'

export const EMAIL = 'kevinrpolo13@gmail.com'

export const SOCIALS = [
  {
    label: 'Resume',
    link: './kevin-rodriguez_curriculum-en.pdf',
    icon: Icons.ResumeIcon
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevinrdev/',
    icon: Icons.LinkedInIcon
  },
  {
    label: 'Github',
    link: 'https://github.com/K3vnDev',
    icon: Icons.GithubIcon
  }
]

export const SECTIONS = {
  PROJECTS: {
    label: 'My work',
    icon: Icons.CodeIcon
  },
  ABOUT: {
    label: 'About me',
    icon: Icons.AboutIcon
  }
}

export const TECHNOLOGIES = {
  JAVASCRIPT: {
    label: 'JavaScript',
    icon: Icons.JavaScriptIcon
  },
  TYPESCRIPT: {
    label: 'TypeScript',
    icon: Icons.TypeScriptIcon
  },
  REACT: {
    label: 'React',
    icon: Icons.ReactIcon
  },
  NODEJS: {
    label: 'Node.js',
    icon: Icons.NodeJSIcon
  },
  MONGODB: {
    label: 'MongoDB',
    icon: Icons.MongoDBIcon
  },
  LEAFLET: {
    label: 'Leaflet',
    icon: Icons.LeafletIcon
  },
  SUPABASE: {
    label: 'Supabase',
    icon: Icons.SupabaseIcon
  },
  NEXTJS: {
    label: 'Next.js',
    icon: Icons.NextJSIcon
  },
  OPENAI: {
    label: 'OpenAI',
    icon: Icons.OpenAIIcon
  }
  /*
  Add more technologies here
  - Express.js
  - Python
  - Zod
  - Zustand
  - TailwindCSS
  - CSS3
  */
}

export const EVENTS = {
  FORM_SUBMIT: '$form-submit'
}

export const NAVBAR_TOP = {
  VISIBLE: 'top-4',
  HIDDEN: '-top-20'
} as const

export const TITLE_ENDING = " — Kevin's Portfolio"
