import fs from 'fs'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Render } from './index.js'

const app = new Hono()
const port = 3000

app.get('/', c => {
  const resume = JSON.parse(fs.readFileSync('./resume.json', 'utf-8'))
  const html = Render(resume)

  return c.html(html)
})

// servers any appropriate static files(i.e. css, favicon, etc)
app.use(`*`, serveStatic({ root: 'public' }))

serve(
  {
    fetch: app.fetch,
    port,
  },
  info => {
    console.log(`> Server is running on http://localhost:${info.port}`)
  },
)
