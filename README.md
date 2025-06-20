# Microservicio Gateway

🔹 Gestiona todas las APIs que contempla el sistema
---


## Instalación
```bash
# Clonar el repositorio
git clone https://github.com/SumajCode/Micorservice-Gateway.git
cd tu-repo

```

## Pasos de ejecucion
```bash
# Ejecuccion
npm run dev

```


## Estructura del proyecto
```
MicroServicioEstudiante/
├── venv/                       # Entorno virtual local
├── src/                        # Código fuente del microservicio
│   ├── Bin/                    # Puntos de entrada, inicializadores
│   ├── Config/                 # Configuración general y constantes
│   ├── Domain/                 # Lógica del dominio (entidades y casos de uso)
│   ├── Features/               # Funcionalidades principales del negocio
│   ├── Infra/                  # Implementaciones técnicas (infraestructura)
│   │   ├── Controllers/        # Controladores para la lógica de negocio
│   │   ├── Email/              # Servicios de correo electrónico
│   │   ├── Events/             # Gestión de eventos del sistema
│   │   ├── Logging/            # Configuración y manejo de logs
│   │   ├── Middlewares/        # Middlewares para peticiones HTTP
│   │   ├── Models/             # Modelos de datos y ORM
│   │   ├── Routes/             # Definición de rutas y endpoints
│   │   ├── Websockets/         # Conexiones WebSocket (si aplica)
│   ├── Scripts/                # Scripts de utilidad o migraciones
│   ├── Shared/                 # Recursos compartidos (DTOs, constantes)
│   ├── Test/                   # Pruebas unitarias y de integración
├── requirements.txt            # Lista de dependencias del proyecto
└── README.md                   # Documentación del microservicio
```