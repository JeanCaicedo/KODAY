# KODAY

Landing page de portafolio que simula el sitio de una agencia creativa ficticia. Construida como práctica de animaciones web con GSAP sobre Next.js y TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-12.1-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-4.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

## Descripción

KODAY es una **agencia creativa ficticia**. El proyecto no corresponde a ningún cliente real: se trata de un ejercicio de portafolio personal centrado en la práctica de animaciones web, maquetación de secciones tipo landing y composición visual sobre un stack moderno de React.

El objetivo principal al construirla fue experimentar con **GSAP** (GreenSock Animation Platform) para animar títulos y transiciones entre páginas, apoyándose en las convenciones de enrutamiento de **Next.js** con su directorio `pages/`. Cada vista replica la estructura típica de un sitio de agencia (inicio con claim, sección de proyectos, presentación del equipo y formulario de contacto) para servir como lienzo de práctica.

El proyecto usa **Next.js 12 y React 17**, es decir, versiones anteriores a las actuales. Se mantiene tal cual como pieza de portafolio y no hay planes inmediatos de migrar a Next 14/15 o al App Router.

## Stack

- **Framework:** Next.js 12.1 (Pages Router)
- **UI:** React 17.0.2
- **Lenguaje:** TypeScript 4.6
- **Animaciones:** GSAP 3.12
- **Estilos:** CSS Modules (`Home.module.css`) y estilos globales (`globals.css`)
- **Métricas:** `web-vitals`
- **Contenedores:** Docker y Docker Compose
- **Linting:** ESLint 8 con `eslint-config-next`

## Páginas

El enrutamiento usa el `pages/` de Next.js. Las rutas disponibles son:

- `/` — Portada con el claim "THIS IS KODAY" y animación de entrada con GSAP.
- `/proyectos` — Sección de proyectos de la agencia ficticia.
- `/nosotros` — Presentación del equipo / quiénes son.
- `/contactanos` — Vista de contacto.

Todas las páginas comparten la misma estructura base (nav con logo, menú principal y título animado) y usan el mismo módulo CSS.

## Requisitos previos

- Node.js 16 o superior (la imagen Docker usa `node:18-alpine`).
- npm (o yarn / pnpm si se prefiere).
- Docker y Docker Compose (opcional, solo si se desea ejecutar en contenedor).

## Instalación

```bash
git clone https://github.com/JeanCaicedo/KODAY.git
cd KODAY
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Ejecución con Docker

El repositorio incluye `Dockerfile` y `docker-compose.yml` con dos perfiles.

Modo producción (build + `npm start`):

```bash
docker compose up --build
```

Modo desarrollo con hot reload (perfil opcional, expuesto en el puerto 3001):

```bash
docker compose --profile dev up --build
```

## Scripts disponibles

| Script          | Descripción                                               |
| --------------- | --------------------------------------------------------- |
| `npm run dev`   | Levanta el servidor de desarrollo de Next.js en `:3000`.  |
| `npm run build` | Compila la aplicación para producción.                    |
| `npm run start` | Sirve el build de producción.                             |
| `npm run lint`  | Ejecuta ESLint con la configuración de Next.js.           |

## Estructura del proyecto

```
KODAY/
├── pages/
│   ├── _app.tsx           # App wrapper de Next.js
│   ├── index.tsx          # Portada
│   ├── proyectos.tsx
│   ├── nosotros.tsx
│   └── contactanos.tsx
├── public/
│   └── images/            # Logo y recursos estáticos
├── styles/
│   ├── globals.css
│   └── Home.module.css    # Estilos compartidos por todas las vistas
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── tsconfig.json
└── package.json
```

## Estado del proyecto

Proyecto de aprendizaje terminado en su versión actual. Funciona como escaparate estático de animaciones con GSAP y no se espera añadir nuevas páginas ni funcionalidades dinámicas. Las dependencias (Next 12, React 17, TypeScript 4.6) están varias versiones mayores por detrás de las actuales; **no está planificado actualizarlas en el corto plazo**.

## Autor

Jean Caicedo — [@JeanCaicedo](https://github.com/JeanCaicedo)
