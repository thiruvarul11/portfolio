import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function resumeDownloadPlugin(): Plugin {
  return {
    name: 'resume-download-headers',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url === '/resume.pdf' || req.url.startsWith('/resume.pdf?'))) {
          res.setHeader('Content-Disposition', 'attachment; filename="Thiruvarul_K_Resume.pdf"')
          res.setHeader('Content-Type', 'application/pdf')
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url === '/resume.pdf' || req.url.startsWith('/resume.pdf?'))) {
          res.setHeader('Content-Disposition', 'attachment; filename="Thiruvarul_K_Resume.pdf"')
          res.setHeader('Content-Type', 'application/pdf')
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    resumeDownloadPlugin(),
  ],
})
