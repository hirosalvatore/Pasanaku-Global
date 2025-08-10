# Pasanaku Global 

**Pasanaku Global** es una demo interactiva (mockups funcionales) que muestra cómo sería nuestra idea propuesta de app para organizar *pasanakus* (ahorros rotativos) de forma **segura, transparente y sin riesgo de pérdida**.

- Se ejecuta como **aplicación de escritorio** (con Electron).
- UI hecha con **Next.js** + **React** + **Tailwind**.

---

## 👀 ¿Qué puedo ver en la demo?

- **Dashboard principal** con resumen de grupos y métricas.
- **Flujo de creación de grupo** (3 pasos).
- **Invitaciones/Compartir**, **Autopago**, **Pagar cuota**, **Liberación automática**, **Recibo**.
- **Perfil, Reputación** y **Centro de notificaciones**.

> La demo no conecta a un backend real: es para navegación y validación visual de la propuesta.
> 

---

## ✅ Requisitos

- **Node.js** 18 o 20 (recomendado LTS).
- **Windows/macOS/Linux** (la demo corre en los tres).
- Internet solo para instalar dependencias (no durante la ejecución).

> Si tu entorno ya tiene Node, no necesitas nada más para probar la app.
> 

---

## 🚀 Cómo ejecutar (modo escritorio)

### 1) Clonar e instalar

```bash
git clone <https://github.com/><TU-USUARIO>/<NOMBRE-REPO>.git
cd <NOMBRE-REPO>

# Instalación normal:
npm install

# Si ves conflictos de peer-deps por React 19/vaul, usa:
# npm install --legacy-peer-dep
```

### 2) Abrir la app de escritorio (desarrollo)

```bash
npm run desktop
```

- Se abrirá una **ventana nativa** con la app.
- Redirecciones y navegación funcionan normal.

### 3) Generar instalador (.exe/.dmg/.AppImage)

```bash
npm run build:desktop
```

- Crea un instalador en `dist-desktop/` (Windows por defecto: **NSIS**).
- Entrega ese archivo al jurado: doble clic y listo.

---

## 🧭 Navegación inicial

- La app abre directamente en: **Dashboard** (`/pasanaku/dashboard`).
- Si quieres empezar por otra pantalla, avísanos o cambia el destino en:
    - `electron/main.js` (ruta de entrada)
    - o `app/pasanaku/page.tsx` (redirige a la vista que quieras)

## 📂 Estructura principal

```bash
app/                         # Rutas y páginas (Next.js App Router)
├── pasanaku/                # Flujo principal de la demo
│   ├── _components/         # Componentes específicos de Pasanaku
│   ├── autopago/            # Pantalla de autopago
│   ├── crear-grupo/         # Pasos para crear un grupo
│   ├── dashboard/           # Vista principal con métricas
│   ├── invitacion/          # Invitaciones y compartir enlace
│   ├── liberacion/          # Liberación automática
│   ├── notificaciones/      # Centro de notificaciones
│   ├── pagar/               # Pago de cuota
│   ├── perfil/              # Perfil de usuario y reputación
│   ├── recibo/              # Vista de comprobante
│   └── splash/              # Pantalla de inicio
│
├── layout.tsx               # Layout principal
├── globals.css              # Estilos globales
│
components/                  # Componentes UI reutilizables
├── ui/                      # Elementos base (botones, modales, inputs, etc.)
└── theme-provider.tsx       # Configuración de temas
│
electron/                    # Código para empaquetar como app de escritorio
└── main.js                  # Proceso principal de Electron
│
public/                      # Recursos estáticos (imágenes, íconos)
styles/                      # Configuración extra de estilos
next.config.mjs              # Configuración de Next.js
package.json                 # Dependencias y scripts
```

## 🧩 Tecnologías

- **Next.js 15 (App Router)** + **React 19**
- **Tailwind CSS 4** + shadcn/ui + Radix
- **Electron** (ventana nativa)
- Utilidades: `concurrently`, `wait-on`, `electron-builder`