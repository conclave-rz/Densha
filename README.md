# 🚃 Densha · にほんご

**Tu línea al japonés.** Una app de estudio gamificada al estilo del metro de Tokio: cada tema es una línea, cada avance una estación, y la meta es darle la vuelta completa — como la Yamanote.

Hecha para una sola misión: pasar de cero a conversaciones reales en cafés, restaurantes, izakayas y tiendas en 6 meses.

---

## ✨ Qué trae

| | |
|---|---|
| 🎓 **Sistema JLPT N5 → N4** | Empiezas en N5; desbloqueas N4 con 70% de promedio + la historia completa. En N4 el rōmaji desaparece de los quizzes y el audio acelera: dificultad evolutiva real |
| 🗾 **31 líneas · 439 tarjetas** | Vocabulario por tema, frases hechas y **98 kanji** con lecturas くん/オン y palabra de ejemplo |
| 🎭 **14 escenarios pixel-art** | Diálogos por turnos con el staff: aeropuerto, estación, taxi, hotel, konbini, café, restaurante, librería, ropa, farmacia, kōban, izakaya — y con candado N4: **banco** y **teléfono** (もしもし → しつれいします) |
| 🇯🇵 **Modo historia** | "7 días en Japón": los 12 escenarios base encadenados como un viaje, estación por estación |
| 組 **Constructor de oraciones** | 9 fórmulas con anatomía explicada pieza por pieza: laboratorio libre, huecos y fichas |
| 🎓 **Exámenes JLPT N5/N4** | Las estaciones finales del modo historia. Formato del examen real: lectura de kanji y vocabulario, gramática de partículas y formas, un pasaje de lectura y listening que se reproduce una sola vez. 23 preguntas, 15 minutos con reloj, aprueba con 60%. Cada intento se ensambla al azar desde bancos grandes: nunca resuelves el mismo examen |
| 🎵 **Jingles 16-bit** | Melodías de estación sintetizadas (como los eki-melo reales): al entrar a un escenario, al completar con distinta fanfarria según tu resultado, al desbloquear logros. Apagables en Perfil |
| 📊 **Sesiones con calificación** | Precios, Conjugar, Dictado y Huecos terminan a las 30 rondas con calificación S/A/B/C, récord y bonus de XP — se acabaron los drills infinitos |
| 活 **Conjugador** | 20 verbos × 7 formas (corteses en N5; diccionario, ない y た se suman en N4), irregulares incluidas |
| 👂 **Listening evolutivo** | Preguntas de puro oído en los quizzes, **✍️ Dictado** (arma la palabra kana por kana) y modo oído en escenarios (se desbloquea con 100%) |
| 🔊 **Audio nativo** | Pronunciación japonesa con la voz del sistema — sin servicios externos, funciona offline |
| 🎯 **Repaso inteligente** | Detecta tus palabras débiles y arma el repaso del día con ellas |
| 💴 **Entrenador de precios** | Lee cantidades en yenes como local (せんさんびゃくはちじゅうえん) |
| 🐣 **デンちゃん, tu tamagotchi** | Las misiones diarias son sus 4 necesidades: 🍙 Alimentar (1 quiz), 🎮 Jugar (1 escenario), 🧼 Limpiar (1 repaso) y 💤 Dormir (5 aciertos de práctica). Cúbrelas todas y Den-chan sonríe: +30 XP y cuenta de días bien cuidado |
| 📖 **Lecturas cortas** | 8 lecturas con audio línea por línea, traducción conmutable y preguntas de comprensión: dajare (juegos de palabras), Momotarō y La liebre y la tortuga en versión mini, y cultura (konbini, hanami, onsen, modales del tren) |
| 💡 **Errores que enseñan** | Al equivocarte, la app te explica por qué: qué significa lo que elegiste y por qué no encaja — en quizzes, escenarios, huecos y conjugador. Además, botón 🔊 en las opciones japonesas |
| 🔄 **Actualizador in-app** | Perfil → Buscar actualización: detecta versiones nuevas en tu GitHub Pages y las instala con un toque |
| 🏅 **12 logros, misiones y rachas** | Bonus de XP diario y racha de días 🔥 |

**Diseño**: lenguaje editorial inspirado en el diseño web japonés contemporáneo — bloques súper redondeados, etiquetas pill, títulos grandes, sombras suaves y dock de navegación flotante — con color semántico: crema de fondo, cian para práctica y progreso, azul para escenarios, amarillo para misiones, y el verde JR reservado para la identidad Yamanote. El header integra nivel, XP, racha y tu camino a N4 en una cabecera compacta que te acompaña en toda la app.

Todo en **un solo archivo HTML**: sin frameworks, sin build, sin dependencias. Vanilla JS + canvas para el pixel art 16-bits + Web Speech API para el audio.

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

La PWA necesita una URL con HTTPS (requisito de los navegadores para instalarse y funcionar offline). Dos rutas gratuitas:

### Opción A · GitHub Pages

1. En [github.com](https://github.com) crea un repositorio nuevo → nómbralo `densha` → **Public** → *Create repository*.
2. Toca **"uploading an existing file"** y arrastra los **6 archivos sueltos** (no la carpeta) → *Commit changes*.
3. Ve a **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, carpeta `/ (root)` → *Save*.
4. En 1–2 minutos tu app vive en `https://tuusuario.github.io/densha/`.

### Opción B · Netlify Drop

1. Entra a [app.netlify.com](https://app.netlify.com) e **inicia sesión primero** (con GitHub o Google). ⚠️ Sin sesión, el sitio se borra en 1 hora.
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la **carpeta completa**.
3. En ~30 segundos tienes tu URL.

## 📱 Instalar en tu teléfono (Android)

1. Abre tu URL en **Chrome**.
2. Acepta el aviso de **"Instalar app"** (o menú ⋮ → *Agregar a pantalla de inicio*).
3. Aparece el ícono verde 語 en tu inicio. Pantalla completa, sin barra del navegador.
4. Tras la primera carga con internet, **funciona offline** — aviones, metro de Tokio 🚇, donde sea.

## 🔄 Actualizar la app

1. Sube los archivos nuevos encima de los viejos: **GitHub** → repo → *Add file → Upload files* → arrastra → *Commit*. **Netlify** → tu sitio → pestaña *Deploys* → arrastra la carpeta.
2. En `sw.js`, sube la versión de caché (`densha-v15` → `densha-v16`) para que los teléfonos instalados tomen los cambios. *Si el zip vino de una versión nueva, esto ya viene hecho.*

## 💾 Tu progreso

- XP, racha, récords y logros se guardan **en tu teléfono** (localStorage), amarrados al dominio donde instalaste.
- **Respaldo**: Perfil → ⬇️ *Exportar* descarga un `densha-progreso.json`; ⬆️ *Importar* lo restaura. Úsalo antes de cambiar de dominio o de teléfono.
- No borres los "datos de sitios" de Chrome para tu dominio: ahí vive tu racha. 🔥

## 🔧 Problemas comunes

**"El sitio expira en 1 hora" (Netlify)** → arrastraste sin iniciar sesión. Inicia sesión, re-arrastra, y reinstala desde la URL nueva.

**404 en GitHub Pages** → revisa que el repo sea Public, que en Settings → Pages el Source esté en *Deploy from a branch* / `main` / root, que `index.html` esté en la raíz del repo (no dentro de una carpeta), y espera 1-2 min al primer deploy (pestaña Actions).

**No aparece "Instalar app"** → verifica HTTPS y Chrome; espera unos segundos o busca en el menú ⋮.

**No suena el audio** → la primera reproducción tarda 1–2 s. Si sigue mudo: Ajustes → Sistema → *Salida de texto a voz* → verifica que el japonés esté en el motor de Google.

**Actualicé y no veo cambios** → cierra la app por completo y ábrela dos veces (el service worker activa la versión nueva en el segundo arranque), o confirma que subiste la versión en `sw.js`.

## 🗓 Historial de versiones

| v | Qué trajo |
|---|---|
| v15 | Exámenes JLPT N5 y N4 en el modo historia: formato oficial (文字・語彙 / 文法 / 読解 / 聴解), 15 min, aleatorizados en cada intento |
| v14 | Jingles 16-bit de estación, sesiones de 30 rondas con calificación (S/A/B/C), fix del constructor, 2 líneas y 2 fórmulas nuevas del temario Marugoto A1 |
| v13 | Den-chan (tamagotchi de misiones), Lecturas cortas, explicación de errores, audio en respuestas, actualizador in-app |
| v12 | Layout responsive para tablet (rejillas 2-4 columnas, contenedor amplio) |
| v11 | Header integrado (nivel + XP + racha + camino a N4) y diccionario con índice colapsable |
| v9–v10 | Color semántico (crema/cian/azul/amarillo), escenarios Banco y Teléfono (N4), modo Dictado, adverbios y kanji N4 |
| v8 | Rediseño editorial: bloques redondeados, pills, títulos grandes, dock flotante |
| v7 | Sistema JLPT N5→N4, verbos/adjetivos nuevos, Conjugador, listening evolutivo |
| v5–v6 | Modo historia, logros, misiones diarias, home compacto |
| v1–v4 | Base: líneas, quizzes, constructor, escenarios pixel-art, precios, repaso, PWA |

**Roadmap**: v15 → paquete N3 (~370 kanji, formas potencial/pasiva, kanji con furigana).

---

がんばってください！🏮

---

### Parte de Codex 4004

**Densha** es un proyecto dentro del framework **Codex 4004** — una constelación de herramientas y aplicaciones de práctica artística y exploración visual.
