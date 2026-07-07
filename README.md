# 🚃 Densha · にほんご

**Tu línea al japonés.** Una app de estudio gamificada al estilo del metro de Tokio: cada tema es una línea, cada avance una estación, y la meta es darle la vuelta completa — como la Yamanote.

Hecha para una sola misión: pasar de cero a conversaciones reales en cafés, restaurantes, izakayas y tiendas en 6 meses.

---

## ✨ Qué trae

| | |
|---|---|
| 🎓 **Sistema JLPT N5 → N4** | Empiezas en N5; desbloqueas N4 con 70% de promedio + la historia completa. En N4 el rōmaji desaparece de los quizzes y el audio acelera: dificultad evolutiva real |
| 🗾 **29 líneas de estudio** | ~380 tarjetas de vocabulario, frases y 84 kanji con lecturas くん/オン — verbos de movimiento, adjetivos de emociones, y contenido N4 con candado |
| 活 **Conjugador** | El gimnasio de verbos: 20 verbos × 7 formas (corteses en N5; diccionario, ない y た se suman en N4) |
| 👂 **Listening evolutivo** | Preguntas de puro oído en los quizzes, y modo oído en escenarios (se desbloquea al sacar 100%): el staff habla sin texto |
| 🎴 **Quizzes y pares** | Opción múltiple en ambas direcciones + juego de unir pares, con XP y combos |
| 組 **Constructor de oraciones** | 8 fórmulas con anatomía explicada pieza por pieza: laboratorio libre, huecos y fichas |
| 🎭 **12 escenarios pixel-art** | Diálogos por turnos con el staff: aeropuerto, taxi, hotel, konbini, café, restaurante, izakaya, librería, tienda de ropa, estación, farmacia y kōban |
| 🇯🇵 **Modo historia** | "7 días en Japón": encadena los 12 escenarios como un viaje, estación por estación |
| 🔊 **Audio nativo** | Pronunciación japonesa con la voz del sistema — sin servicios externos, funciona offline |
| 🎯 **Repaso inteligente** | Detecta tus palabras débiles y arma el repaso del día con ellas |
| 💴 **Entrenador de precios** | Lee cantidades en yenes como local (せんさんびゃくはちじゅうえん) |
| 🏅 **Logros, misiones y rachas** | 10 logros, 3 misiones diarias con bonus, y racha de días con fuego 🔥 |

Todo en **un solo archivo HTML**: sin frameworks, sin build, sin dependencias. Vanilla JS + canvas para el pixel art + Web Speech API para el audio.

## 📦 Contenido del paquete

```
densha/
├── index.html              ← la app completa
├── manifest.json           ← identidad de la PWA (nombre, colores)
├── sw.js                   ← service worker: modo offline
├── icon-192.png            ← ícono de la app
├── icon-512.png            ← ícono grande
└── icon-maskable-512.png   ← ícono adaptable (Android)
```

## 🚀 Publicar

La PWA necesita una URL con HTTPS (requisito de los navegadores para instalarse y funcionar offline). Dos rutas gratuitas, elige una:

### Opción A · GitHub Pages

1. En [github.com](https://github.com) crea un repositorio nuevo → nómbralo `densha` → **Public** → *Create repository*.
2. Toca **"uploading an existing file"** y arrastra los **6 archivos sueltos** (no la carpeta) → *Commit changes*.
3. Ve a **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, carpeta `/ (root)` → *Save*.
4. En 1–2 minutos tu app vive en `https://tuusuario.github.io/densha/`.

### Opción B · Netlify Drop

1. Entra a [app.netlify.com](https://app.netlify.com) e **inicia sesión primero** (con GitHub o Google, un clic). ⚠️ Sin sesión, el sitio se borra en 1 hora.
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la **carpeta completa**.
3. En ~30 segundos tienes tu URL. Opcional: *Site configuration → Change site name* para algo memorable.

## 📱 Instalar en tu teléfono (Android)

1. Abre tu URL en **Chrome**.
2. Acepta el aviso de **"Instalar app"** (o menú ⋮ → *Agregar a pantalla de inicio*).
3. Aparece el ícono verde 語 en tu inicio. Ábrela desde ahí: pantalla completa, sin barra del navegador.
4. Tras la primera carga con internet, **funciona offline** — aviones, metro de Tokio 🚇, donde sea.

## 🔄 Actualizar la app

1. Sube los archivos nuevos encima de los viejos:
   - **GitHub**: repo → *Add file → Upload files* → arrastra → *Commit* (reemplaza los del mismo nombre).
   - **Netlify**: tu sitio → pestaña *Deploys* → arrastra la carpeta ahí.
2. En `sw.js`, sube la versión de caché (`densha-v6` → `densha-v7`) para que los teléfonos instalados tomen los cambios. *Si el zip vino de una versión nueva, esto ya viene hecho.*

## 💾 Tu progreso

- XP, racha, récords y logros se guardan **en tu teléfono** (localStorage del navegador), amarrados al dominio donde instalaste.
- **Respaldo**: Perfil → ⬇️ *Exportar* descarga un `densha-progreso.json`; ⬆️ *Importar* lo restaura. Úsalo antes de cambiar de dominio o de teléfono.
- No borres los "datos de sitios" de Chrome para tu dominio: ahí vive tu racha. 🔥

## 🔧 Problemas comunes

**"El sitio expira en 1 hora" (Netlify)** → arrastraste sin iniciar sesión. Inicia sesión y vuelve a arrastrar; borra el ícono viejo del teléfono e instala desde la URL nueva.

**No aparece "Instalar app"** → verifica que la URL sea HTTPS y que abriste con Chrome; espera unos segundos o busca en el menú ⋮. Con archivos locales (`file://`) la instalación no está disponible: publica primero.

**No suena el audio** → la primera reproducción puede tardar 1–2 s mientras Android carga la voz. Si sigue mudo: Ajustes → Sistema → *Salida de texto a voz* → verifica que el japonés esté disponible en el motor de Google.

**Actualicé y no veo cambios** → cierra la app por completo y ábrela dos veces (el service worker instala la versión nueva en el primer arranque y la activa en el segundo), o confirma que subiste la versión en `sw.js`.

---

がんばってください！🏮

---

### Parte de Codex 4004

**Densha** es un proyecto dentro del framework **Codex 4004** — una constelación de herramientas y aplicaciones de práctica artística y exploración visual.
