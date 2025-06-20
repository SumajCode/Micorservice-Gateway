import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import router from "./infra/Routes/GatewayRoute"

const app = new Hono()

app.use('/*', async (c, next) => {
  await next()
  c.header('Access-Control-Allow-Origin', '*')
  c.header('Access-Control-Allow-Headers', '*')
})

app.route('/', router)

serve({ fetch: app.fetch, port: 3000 }, () => {
  console.log('🌐 Gateway corriendo en http://localhost:3000')
})
