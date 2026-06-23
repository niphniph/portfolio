import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const portfolioBaseRedirect = () => ({
  name: 'portfolio-base-redirect',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/portfolio' || req.url?.startsWith('/portfolio?')) {
        res.statusCode = 302
        res.setHeader('Location', req.url.replace('/portfolio', '/portfolio/'))
        res.end()
        return
      }
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/portfolio' || req.url?.startsWith('/portfolio?')) {
        res.statusCode = 302
        res.setHeader('Location', req.url.replace('/portfolio', '/portfolio/'))
        res.end()
        return
      }
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), portfolioBaseRedirect()],
  base: '/portfolio/'
})
