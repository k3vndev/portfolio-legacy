import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://k3vn.dev',
  output: 'server',
  vite: { plugins: [tailwindcss()] },
  integrations: [react()],
  adapter: vercel()
})
