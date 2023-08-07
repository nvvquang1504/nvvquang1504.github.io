import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {VitePWA} from 'vite-plugin-pwa';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    https:true,
    host: true,
  },
  plugins: [react(),mkcert(),VitePWA({
    registerType:'autoUpdate',
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
    injectRegister:'auto',
    manifest: {
      name: "Ecommerce",
      short_name: "Ecommerce",
      description: "Website description(Could be same with index.html file)",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },

    devOptions: {
      enabled: true
    }
  })],
})
