# PROMPT PARA CODEX — LANDING PAGE PERSONAL
## Jorge Fabrissio Pino Abril

---

## 🎯 OBJETIVO

Construye una landing page personal tipo portafolio/CV completa, moderna y animada para **Jorge Fabrissio Pino Abril**, estudiante de Diseño y Desarrollo de Software. Todo el contenido está hardcodeado abajo — no necesitas ningún archivo externo.

---

## 📁 ESTRUCTURA DE ARCHIVOS A CREAR

```
/landing-cv
  ├── index.html
  ├── styles.css
  └── main.js
```

> No se necesita carpeta assets. La cabeza de Iron Man se genera con SVG inline + CSS.

---

## 🎨 PALETA DE COLORES Y TIPOGRAFÍA

```css
:root {
  --primary:     #c0392b;   /* Rojo Iron Man */
  --secondary:   #f39c12;   /* Dorado */
  --bg-main:     #0a0a0a;   /* Negro profundo */
  --bg-card:     #1a1a1a;   /* Gris oscuro tarjetas */
  --bg-section:  #111111;   /* Secciones alternas */
  --text-main:   #ffffff;
  --text-muted:  #a0a0a0;
  --border:      rgba(192, 57, 43, 0.3);
  --glow:        rgba(192, 57, 43, 0.6);
}
```

**Google Fonts a importar:**
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

- **Títulos grandes / nombre:** `Orbitron` (900)
- **Subtítulos y UI:** `Rajdhani` (600-700)
- **Cuerpo de texto:** `Inter` (400)

---

## 📦 CDNs PERMITIDAS

```html
<!-- Devicons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<!-- Normalize.css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
```

**Nada más.** Sin npm, sin frameworks, sin build tools. Solo `index.html` en el browser.

---

## 🦸 DATOS DEL CV (hardcodeados en HTML)

### Datos personales
```
Nombre:    Jorge Fabrissio Pino Abril
Título:    Estudiante de Diseño y Desarrollo de Software
Email:     jorgeabril.pino@gmail.com
Teléfono:  +51 937 395 614
Ubicación: Arequipa, Perú
LinkedIn:  https://www.linkedin.com/in/abril-pino
GitHub:    https://github.com/jorgeabrilpino-hash
```

### Perfil profesional
```
Estudiante de quinto ciclo de Diseño y Desarrollo de Software, perteneciente
al décimo superior, con enfoque en desarrollo web e inteligencia artificial.
Poseo conocimientos sólidos en Python, Java, PostgreSQL y MongoDB, aplicando
metodologías ágiles Scrum y herramientas colaborativas como Git. Me caracterizo
por mi liderazgo en proyectos académicos, orientación a resultados y capacidad
para coordinar equipos técnicos de forma organizada y eficiente.
```

### Stats para tarjetas animadas
- 🎓 Ciclos de estudio: **5**
- 💻 Tecnologías dominadas: **16**
- 🚀 Proyectos realizados: **3**
- 🏆 Certificaciones: **5**

---

## 🛠️ HABILIDADES TÉCNICAS (con iconos Devicon y colores)

Agrupar en las siguientes categorías:

### Frontend
| Tecnología | Clase Devicon | Color oficial | Nivel |
|---|---|---|---|
| HTML5 | `devicon-html5-plain` | #e34f26 | Intermedio |
| CSS3 | `devicon-css3-plain` | #1572b6 | Intermedio |
| JavaScript | `devicon-javascript-plain` | #f7df1e | Básico |
| React | `devicon-react-original` | #61dafb | Intermedio |
| Next.js | `devicon-nextjs-plain` | #ffffff | Intermedio |

### Backend
| Tecnología | Clase Devicon | Color oficial | Nivel |
|---|---|---|---|
| Python | `devicon-python-plain` | #3776ab | Intermedio |
| Java | `devicon-java-plain` | #007396 | Intermedio |
| Django | `devicon-django-plain` | #092e20 | Intermedio |
| Laravel | `devicon-laravel-plain` | #ff2d20 | Intermedio |

### Bases de Datos
| Tecnología | Clase Devicon | Color oficial | Nivel |
|---|---|---|---|
| PostgreSQL | `devicon-postgresql-plain` | #4169e1 | Intermedio |
| MongoDB | `devicon-mongodb-plain` | #47a248 | Intermedio |
| MySQL | `devicon-mysql-plain` | #4479a1 | Intermedio |
| SQLite | `devicon-sqlite-plain` | #003b57 | Intermedio |

### Herramientas & DevOps
| Tecnología | Clase Devicon | Color oficial | Nivel |
|---|---|---|---|
| Docker | `devicon-docker-plain` | #2496ed | Intermedio |
| Git | `devicon-git-plain` | #f05032 | Intermedio |
| GitHub | `devicon-github-original` | #ffffff | Intermedio |
| VSCode | `devicon-vscode-plain` | #007acc | Intermedio |

### Diseño
| Tecnología | Clase Devicon | Color oficial | Nivel |
|---|---|---|---|
| Figma | `devicon-figma-plain` | #f24e1e | Intermedio |

> ⚠️ Claude Code, Cursor y Openclaw NO tienen iconos en Devicons.
> Usa un ícono genérico SVG de terminal/herramienta con un badge de texto para estos tres.
> Colores sugeridos: Claude Code → #c0392b, Cursor → #7c3aed, Openclaw → #00d4ff

---

## 📅 EXPERIENCIA Y ACTIVIDADES

### Experiencia técnica
1. **Proyecto Convento Santa Teresa** — Tecsup
   - Rol: Líder Diseño UX/UI
   - Fechas: Sep. 2025 – Nov. 2025 · Arequipa, Perú
   - Descripción: Coordiné el equipo de diseño y desarrollo del módulo de alquileres, liderando la creación de prototipos en Figma. Diseñé la interfaz UX/UI para formularios y tablas de registro. Participé en análisis de requerimientos y elaboración de diagramas entidad-relación.
   - Tags: Figma, UX/UI, Scrum, ER Diagrams

2. **Claude in Action — ANTHROPIC**
   - Rol: Desarrollador / Exploración de herramientas IA
   - Fechas: 01 Mar. 2026 – 13 Mar. 2026 · Arequipa, Perú
   - Descripción: Desarrollé el módulo de Claude in Action de la herramienta Claude Code, explorando su aplicación en proyectos reales y sus características principales.
   - Tags: Claude Code, IA, Automatización

3. **Hackathon Ciberseguridad — Perú Hub Digital**
   - Evento: "Cyber Challenge: Roba el Control, No los Datos"
   - Fechas: Oct. 2025 – Nov. 2025 · Lima, Perú
   - Descripción: Participé representando a Tecsup en equipo multidisciplinario. Propuse solución tecnológica enfocada en prevención de fraudes en dispositivos móviles.
   - Tags: Ciberseguridad, Trabajo en equipo, Mobile

4. **Escuela de Líderes — Oratorio Moderna**
   - Fechas: 09 Nov. 2023 – 04 Dic. 2023 · Arequipa, Perú
   - Descripción: Participé en la escuela de líderes internacional dirigida por el orador Omar Ordoñez Sánchez.
   - Tags: Liderazgo, Oratoria

---

## 🎓 EDUCACIÓN

**TECSUP – Instituto Superior Tecnológico**
- Carrera: Diseño y Desarrollo de Software
- Estado: En curso — Décimo Superior (top 10%)
- Período: Marzo 2024 – Diciembre 2026
- Ubicación: Arequipa, Perú

---

## 🏆 CERTIFICACIONES Y ESTUDIOS COMPLEMENTARIOS

| Institución | Curso | Fecha |
|---|---|---|
| BIG School | Desarrollo con IA: de 0 a producción | Mar. 2026 |
| Cisco Networking Academy | PCAP – Python Essentials | Sept. 2023 |
| Cisco Networking Academy | Introduction to Cybersecurity | Sept. 2022 |
| Cisco Networking Academy | Get Connected | May 2021 |
| ANTHROPIC | Claude in Action (Claude Code) | Mar. 2026 |

---

## 🚀 PROYECTOS

**Proyecto: Convento Santa Teresa**
- Descripción: Sistema web de gestión del módulo de alquileres para el Convento Santa Teresa. Diseño UX/UI completo con prototipos en Figma, formularios de registro y tablas con opciones de edición/eliminación.
- Stack: Figma, UX/UI Design, Diagramas ER
- Tipo: Proyecto académico – Tecsup
- Fecha: Sept. – Nov. 2025

> ⚠️ No hay más proyectos listados en el CV. Mostrar solo este en la sección Projects.

---

## 🏗️ ESPECIFICACIONES DE CADA SECCIÓN

---

### NAVBAR FIJA

```
- Fondo: transparente al inicio → blur oscuro al hacer scroll (backdrop-filter: blur(20px))
- Logo: iniciales "JPA" en color primario (#c0392b), fuente Orbitron
- Links: Inicio | Sobre mí | Habilidades | Experiencia | Proyectos | Contacto
- Scroll suave a cada sección (scroll-behavior: smooth)
- Mobile: hamburger elegante → menú overlay de pantalla completa con animación
- Borde inferior sutil: 1px solid var(--border) al hacer scroll
```

---

### SECCIÓN 1 — HERO FULLSCREEN

**Animación de Iron Man (fondo):**
```css
/* SVG inline de la cabeza de Iron Man — dibujar con SVG paths básicos:
   - Forma de casco hexagonal/angular estilo Mark III
   - Ranuras triangulares de los ojos iluminados
   - Detalles de planchas del casco
   - Todo en tonos grises/oscuros con detalles dorados */

.ironman-container {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  opacity: 0.12;
  animation: ironman-rotate 5s ease-in-out infinite;
}

@keyframes ironman-rotate {
  0%   { transform: translate(-50%, -50%) rotateY(-15deg) scale(1); }
  50%  { transform: translate(-50%, -50%) rotateY(15deg) scale(1.02); }
  100% { transform: translate(-50%, -50%) rotateY(-15deg) scale(1); }
}

/* Ojos pulsantes */
.ironman-eye {
  animation: eye-pulse 2s ease-in-out infinite;
}

@keyframes eye-pulse {
  0%, 100% { filter: drop-shadow(0 0 6px #c0392b) drop-shadow(0 0 12px #f39c12); }
  50%       { filter: drop-shadow(0 0 20px #c0392b) drop-shadow(0 0 40px #f39c12); }
}
```

**SVG de Iron Man a implementar (dibujar con paths SVG):**
Crea un SVG detallado de la cabeza/casco de Iron Man con:
- Forma del casco: polígono angular con mandíbula inferior
- Ojos triangulares (ranuras) con color `#f39c12` y glow rojo
- Planchas laterales con líneas de detalle
- Color base: `#1a1a1a` con bordes `#333`
- Detalles dorados: `#f39c12` en bordes del casco
- Reactor arc en la frente (pequeño círculo con glow)

**Contenido del Hero (sobre el fondo):**
```html
<!-- Badge superior -->
<span class="badge">⚡ Diseño & Desarrollo de Software</span>

<!-- Nombre -->
<h1 class="hero-name">Jorge Fabrissio<br><span>Pino Abril</span></h1>

<!-- Typing animation (alternar entre estas frases): -->
<!-- "Desarrollador Web Full Stack" -->
<!-- "Especialista en IA & Automatización" -->
<!-- "Líder UX/UI & Frontend" -->
<!-- "Estudiante Décimo Superior — Tecsup" -->

<!-- Botones CTA -->
<a href="#proyectos" class="btn btn-primary">Ver Proyectos</a>
<a href="#contacto" class="btn btn-outline">Contactar</a>

<!-- Redes sociales -->
<!-- LinkedIn icon → https://www.linkedin.com/in/abril-pino -->
<!-- GitHub icon  → https://github.com/jorgeabrilpino-hash -->
<!-- Email icon   → mailto:jorgeabril.pino@gmail.com -->
```

**Efecto parallax:** al hacer scroll, el hero se mueve a `translateY(scrollY * 0.4)`.

**Partículas:** pequeños puntos flotantes con CSS animation para simular el HUD de Iron Man.

---

### SECCIÓN 2 — SOBRE MÍ

```
Layout: dos columnas en desktop, una en mobile

Columna izquierda:
- Título: "Sobre Mí" con línea decorativa en --primary
- Párrafo del perfil profesional completo
- Ubicación con ícono: Arequipa, Perú
- Disponibilidad: Inmediata (badge verde pulsante)

Columna derecha — Stats cards animadas (count-up al entrar en viewport):
┌─────────────────┐ ┌─────────────────┐
│       5         │ │      16         │
│   Ciclos de     │ │  Tecnologías    │
│   estudio       │ │  dominadas      │
└─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐
│       3         │ │       5         │
│   Proyectos     │ │Certificaciones  │
│  y actividades  │ │                 │
└─────────────────┘ └─────────────────┘

Cada stat card:
- Borde: 1px solid var(--border)
- Al hover: borde cambia a --primary, fondo se ilumina sutilmente
- Número: fuente Orbitron, color --primary, animación count-up
```

---

### SECCIÓN 3 — HABILIDADES Y TECNOLOGÍAS

```
Título de sección + línea decorativa en --primary

Tabs/filtros horizontales:
[ Todas ] [ Frontend ] [ Backend ] [ Bases de Datos ] [ Herramientas ] [ Diseño ]

Grid de tarjetas (auto-fill, minmax(140px, 1fr)):

Cada tarjeta:
┌─────────────────┐
│    [ICONO 48px] │
│    en su color  │
│    oficial      │
│                 │
│   Python        │
│   ──────────    │
│   [░░░░░░░░░░]  │ ← barra de progreso animada
│   Intermedio    │
└─────────────────┘

Animaciones:
- Las barras se animan al hacer scroll (Intersection Observer)
  Básico → 40% | Intermedio → 70%
- Hover: tarjeta sube (translateY -4px), box-shadow en color oficial de la tech
- Aparición: fade-in-up escalonado (stagger de 50ms entre tarjetas)
```

---

### SECCIÓN 4 — EXPERIENCIA Y EDUCACIÓN

```
Dos subsecciones con tabs o lado a lado: "Experiencia" | "Educación"

Timeline vertical:
- Línea central en color --primary con gradiente
- Puntos del timeline: círculos con ícono relevante

Para cada entrada:
┌────────────────────────────────────────┐
│  [●]  Título del rol / carrera         │
│       Institución • Fechas             │
│       Descripción                      │
│       [tag1] [tag2] [tag3]             │
└────────────────────────────────────────┘

Animación: fade-in desde la izquierda al entrar en viewport (Intersection Observer)
Las entradas del lado derecho hacen fade-in desde la derecha.

Entradas de EXPERIENCIA (en orden cronológico inverso):
1. ANTHROPIC — Claude in Action (Mar. 2026)
2. Hackathon Ciberseguridad — Perú Hub Digital (Oct-Nov 2025)
3. Proyecto Convento Santa Teresa — Tecsup (Sep-Nov 2025)
4. Escuela de Líderes — Oratorio Moderna (Nov-Dic 2023)

Entrada de EDUCACIÓN:
1. TECSUP — Diseño y Desarrollo de Software (2024-2026, En curso)
```

---

### SECCIÓN 5 — PROYECTOS

```
Grid de 1 tarjeta (solo hay 1 proyecto en el CV):

Tarjeta de proyecto:
┌──────────────────────────────────────────┐
│  [Header con gradiente --primary]         │
│  PROYECTO ACADÉMICO                       │
│                                           │
│  Convento Santa Teresa                    │
│  Sistema de Gestión de Alquileres         │
│                                           │
│  Descripción del proyecto...              │
│                                           │
│  Stack: [Figma] [UX/UI] [ER Diagrams]    │
│                                           │
│  Tecsup · Sep-Nov 2025                   │
└──────────────────────────────────────────┘

Hover effect: leve rotación 3D (perspective) + escala 1.02
```

---

### SECCIÓN 6 — CERTIFICACIONES

```
Grid de tarjetas de certificaciones (2-3 columnas):

┌─────────────────────────────┐
│  [🏆 icono]                 │
│  BIG School                 │
│  Desarrollo con IA:         │
│  de 0 a producción          │
│  Mar. 2026                  │
└─────────────────────────────┘

Repetir para las 5 certificaciones. Borde izquierdo en --primary.
```

---

### SECCIÓN 7 — CONTACTO

```
Fondo: gradiente sutil de --bg-main a --bg-section

Dos columnas:
Izquierda — Info de contacto:
- "¿Hablamos?" como título grande
- Email: jorgeabril.pino@gmail.com (con ícono, clickable)
- Teléfono: +51 937 395 614 (con ícono)
- Ubicación: Arequipa, Perú (con ícono)
- Disponibilidad: Inmediata (badge verde)
- Links: LinkedIn | GitHub con sus iconos

Derecha — Formulario básico (HTML puro, sin backend):
<form>
  Nombre: <input type="text">
  Email:  <input type="email">
  Asunto: <input type="text">
  Mensaje: <textarea>
  <button type="submit">Enviar Mensaje →</button>
</form>

Estilos del form:
- Inputs con fondo #1a1a1a, borde --border
- Focus: borde --primary + glow sutil
- Botón submit: fondo --primary, hover con brillo
```

---

### FOOTER

```html
<footer>
  <p>Diseñado y construido por <span style="color: var(--primary)">Jorge Fabrissio Pino Abril</span></p>
  <p>© 2026 · Arequipa, Perú</p>
</footer>
```

---

## ⚙️ ESPECIFICACIONES TÉCNICAS GLOBALES

### Cursor personalizado
```javascript
// Cursor: pequeño reactor arc (círculo con glow) que sigue el mouse
// Implementar con un div posicionado fixed que sigue el cursor
// Dos capas: punto central pequeño + anillo exterior con delay

const cursor = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// .cursor-dot: 6px, fondo --primary, border-radius 50%
// .cursor-ring: 30px, borde 2px solid --primary, con delay 0.1s, opacity 0.5
// En hover sobre links/buttons: cursorRing escala a 1.5
```

### Typing animation
```javascript
const phrases = [
  "Desarrollador Web Full Stack",
  "Especialista en IA & Automatización",
  "Líder UX/UI & Frontend",
  "Estudiante Décimo Superior — Tecsup"
];
// Implementar con typewriter effect: escribe carácter a carácter,
// pausa 2s, borra carácter a carácter, pasa al siguiente.
// Cursor parpadeante al final con CSS.
```

### Intersection Observer (scroll animations)
```javascript
// Aplicar a:
// 1. Tarjetas de habilidades (activa barras de progreso)
// 2. Entradas del timeline (fade-in desde lados)
// 3. Stats cards (activa count-up)
// 4. Tarjetas de proyectos y certificaciones

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // solo una vez
    }
  });
}, { threshold: 0.15 });
```

### Parallax del Hero
```javascript
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  ironmanContainer.style.transform = `translateY(${scrolled * 0.5}px)`;
});
```

### Navbar scroll behavior
```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    // .scrolled: background rgba(10,10,10,0.95), backdrop-filter blur(20px)
  }
});
```

### Count-up animation para stats
```javascript
function countUp(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) { start = target; clearInterval(timer); }
    element.textContent = Math.floor(start);
  }, 16);
}
// Activar con Intersection Observer cuando las stats entren al viewport
```

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
/* Base: < 768px — columna única, navbar hamburger */
/* Tablet: 768px — grid 2 cols, timeline simplificado */
/* Desktop: 1024px+ — layout completo con todas las animaciones */

@media (max-width: 768px) {
  .hero-name { font-size: clamp(2rem, 8vw, 4rem); }
  .skills-grid { grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); }
  .about-columns { flex-direction: column; }
  .ironman-container { width: 280px; height: 280px; }
}
```

---

## ✅ CHECKLIST FINAL PARA CODEX

- [ ] Todo el contenido del CV está hardcodeado en el HTML
- [ ] Animación de Iron Man con CSS rotateY (NO GIF)
- [ ] Ojos de Iron Man con glow pulsante
- [ ] Cursor personalizado tipo reactor arc
- [ ] Typing animation con las 4 frases
- [ ] Barras de progreso activadas por scroll (Intersection Observer)
- [ ] Count-up en stats cards
- [ ] Timeline con fade-in al hacer scroll
- [ ] Navbar con blur al hacer scroll
- [ ] Hamburger menu en mobile
- [ ] Parallax sutil en hero
- [ ] Iconos Devicon correctos para cada tecnología
- [ ] Hover effects en todas las tarjetas
- [ ] Formulario de contacto HTML puro
- [ ] Responsive en 768px y 1024px
- [ ] Código bien comentado por secciones
- [ ] Sin dependencias de npm ni build tools
- [ ] Solo 3 CDNs: Devicons + Google Fonts + Normalize

---

## ⚠️ RESTRICCIONES FINALES

1. **NO inventar información** que no esté en este prompt
2. **NO usar frameworks** (React, Vue, Angular, etc.)
3. **NO usar npm ni build tools** — debe funcionar abriendo `index.html` directamente
4. **NO usar GIFs** para Iron Man — solo CSS/SVG animado
5. **Comentar el código** por secciones con `/* === SECCIÓN === */`
6. La animación de Iron Man debe ser un **SVG dibujado a mano con paths** + CSS animation
7. Los iconos Devicon deben ser **los correctos** para cada tecnología listada arriba

---

*Prompt generado para Jorge Fabrissio Pino Abril · Landing Page CV 2026*
