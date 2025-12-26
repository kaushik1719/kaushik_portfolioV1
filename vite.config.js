import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kaushik_portfolioV1/',  // e.g., '/myportfolio/'
})
