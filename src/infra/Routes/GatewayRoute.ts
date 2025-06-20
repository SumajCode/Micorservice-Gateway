import { Hono } from 'hono'
import { proxyEstudiantes, proxyDocentes } from "../Controllers/GatewayController";

const router = new Hono()

router.get('/', (c) => c.text('GATEWAY - API principal'))

router.all('/estudiantes/*', proxyEstudiantes)
router.all('/docentes/*', proxyDocentes)

export default router
