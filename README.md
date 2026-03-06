# GitCat — Café & Coworking para Devs

Landing page de **GitCat**, el primer espacio de coworking con café de especialidad y gatos rescatados, pensado por y para desarrolladores.

---

## Descripción

GitCat nace de la necesidad de un entorno de trabajo más humano para programadores. Esta landing page presenta los servicios del espacio (café, coworking, compañía felina), el equipo detrás del proyecto y un formulario de suscripción para futuras membresías. Resuelve la falta de información y punto de contacto digital para un negocio que combina productividad, café de especialidad y bienestar animal.

---

## Características

- **Diseño responsive** con menú lateral (sidebar) para móviles.
- **Modo oscuro / claro** con toggle y persistencia en `localStorage`.
- **Secciones informativas:** Hero, Quiénes somos, Servicios, Equipo y Beta Testing.
- **Formulario de suscripción** con validación HTML5 y checkbox de aceptación de políticas.
- **Botón "Ir al inicio"** con aparición dinámica al hacer scroll.
- **Animaciones CSS** para transiciones y efectos visuales.
- **Tipografías de Google Fonts:** Inter, Italiana, Space Grotesk, Playfair Display, Poppins y Material Symbols.
- **Metadatos SEO y Open Graph** para compartir en redes sociales.

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura y semántica |
| CSS3 | Estilos, responsive design, animaciones |
| JavaScript (vanilla) | Sidebar, toggle dark mode, scroll-to-top |
| Google Fonts | Tipografías e iconos (Material Symbols) |
| Normalize.css | Reset de estilos base |
| Git & GitHub | Control de versiones y despliegue |

---

## Instalación y Uso

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Josecgh/PlantillaCafeteria.git
   ```

2. Entrar en la carpeta del proyecto:

   ```bash
   cd PlantillaCafeteria
   ```

3. Abrir `index.html` en el navegador o lanzar un servidor local:

   ```bash
   # Opción con Python
   python3 -m http.server 8080

   # Opción con VS Code
   # Usar la extensión Live Server
   ```

4. Abrir en el navegador: `http://localhost:8080` o en el puerto indicado

---

## Estructura del Proyecto

```
PlantillaCafeteria/
├── index.html              # Página principal
├── README.md               # Este archivo
├── copies.md               # Textos y copies del proyecto
├── assets/
│   ├── css/
│   │   ├── normalize.css   # Reset CSS
│   │   ├── styles.css      # Estilos generales
│   │   ├── servicios.css   # Estilos de tarjetas de servicios
│   │   ├── animations.css  # Animaciones CSS
│   │   └── sidebar.css     # Estilos del menú móvil
│   ├── img/                # Imágenes del proyecto
│   └── js/
│       └── scripts.js      # Lógica: sidebar, dark mode, scroll-to-top
└── template/               # Plantilla de referencia
    ├── index.html
    └── style.css
```

---

## Autoría

| Nombre | Rol |

Alex lakovlev    - Creacion de sistemas de diseño, Seccion de servicios y creacion de estructuras cards
Francisco Javier - Seccion de equipo, creacion de imagenes por ia 
Jose Luis        - Seccion de contacto, menu lateral
Daniel Molina    - Namevagion, hero, quienes somos, mobile, etc

animaciones, dark mode, extras de css a cargo del equipo
---

## Enlace al Proyecto
Publicado : [https://josecgh.github.io/PlantillaCafeteria/](https://josecgh.github.io/PlantillaCafeteria/)

Repositorio: [https://github.com/Josecgh/PlantillaCafeteria](https://github.com/Josecgh/PlantillaCafeteria)

---

## Capturas de Pantalla

[Desktop light](template/capturas/desktop-light.jpeg)
[Desktop dark](template/capturas/desktop-dark.jpeg)