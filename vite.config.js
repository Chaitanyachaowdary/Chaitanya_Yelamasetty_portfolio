import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['cy-favicon-96.png', 'my-avatar.png'],
      manifest: {
        name: 'Chaitanya Yelamasetty — Portfolio',
        short_name: 'Chaitanya',
        description: 'Full Stack Web Developer & UI/UX Designer — portfolio, projects, and AI assistant.',
        theme_color: '#0b1120',
        background_color: '#0b1120',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        icons: [
          { src: '/pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/pwa-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,jpg,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://cdn.jsdelivr.net' || url.origin === 'https://cdn.simpleicons.org',
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-icons',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
        },
      },
    },
  },
})
