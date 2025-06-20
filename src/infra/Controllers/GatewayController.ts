const API_BASE_URLS = {
  estudiantes: 'https://microservice-estudiante.onrender.com',
  docentes: 'https://raulpsl.pythonanywhere.com'
}

const createProxyHandler = (apiKey: keyof typeof API_BASE_URLS) => async (c: any) => {
  try {
    const originalPath = c.req.path.replace(`/${apiKey}`, '')
    const query = new URL(c.req.url).search
    const targetUrl = new URL(originalPath + query, API_BASE_URLS[apiKey])

    console.log(`🔁 Proxying ${apiKey} to: ${targetUrl}`)

    const res = await fetch(targetUrl.toString(), {
      method: c.req.method,
      headers: {
        'Content-Type': 'application/json',
        ...Object.fromEntries(c.req.raw.headers)
      },
      body: ['GET', 'HEAD'].includes(c.req.method) ? null : await c.req.raw.arrayBuffer()
    })

    const contentType = res.headers.get('content-type') || ''
    const responseData = contentType.includes('json') ? await res.json() : await res.text()

    return c.json(responseData, res.status)
  } catch (error) {
    return c.json({ error: 'Proxy error', message: (error as Error).message }, 502)
  }
}

export const proxyEstudiantes = createProxyHandler('estudiantes')
export const proxyDocentes = createProxyHandler('docentes')
