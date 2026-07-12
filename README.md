<div align="center">

# 🚃 Densha (電車)

### Aprende japonés desde cero — con trenes, pixel art y JLPT

![version](https://img.shields.io/badge/version-v16.1-1BB8CE?style=flat-square)
![PWA](https://img.shields.io/badge/PWA-installable-2B50C8?style=flat-square)
![offline](https://img.shields.io/badge/offline-ready-0B7A3E?style=flat-square)
![JLPT](https://img.shields.io/badge/JLPT-N5%20%E2%86%92%20N3-B4001E?style=flat-square)
![no build](https://img.shields.io/badge/build-none%20(1%20HTML)-FFD23E?style=flat-square)

*Una PWA gamificada, en un solo archivo HTML, sin frameworks. Instálala en el teléfono y estudia sin conexión.*

</div>

---

## 📖 Qué es

**Densha** es una app para aprender japonés pensada para hispanohablantes principiantes.
Cada tema es una **línea de tren**; avanzas por estaciones (quizzes, flashcards, escenarios,
lecturas, exámenes JLPT) mientras cuidas a tu mascota **デンちゃん** y construyes una racha diaria.

- 🎌 Todo explicado en **español**.
- 📶 Funciona **offline** (service worker) e **instalable** como app.
- 🧠 De **N5 a N3**, con exámenes JLPT en formato oficial.
- 🎮 XP, rachas, logros, misiones diarias y jingles 16-bit.

---

## ✨ Novedades v16

> **v16.1** incluye además un arreglo importante del actualizador (ver *Correcciones*).

### 🈺 Paquete N3
- **28 kanji nuevos** en 2 líneas (sociedad/trabajo · mente/geografía) con **furigana** en los ejemplos.
- Formas **potencial** (〜られる／〜える) y **pasiva** (〜られる／〜れる) en el Conjugador.
- El nivel **N3 se desbloquea** al aprobar el examen **JLPT N4**. Logro 🈴 *Ascenso a N3*.

### 🏯 Capítulo 2 · Viaje a Kioto (N4)
- **5 estaciones nuevas**: Shinkansen, ryokan, templo Kinkaku-ji, ceremonia del té en Gion y omiyage.
- Diálogo más natural (keigo, 〜てもいい, 〜ので) y **2 sprites nuevos**: torii ⛩️ y cuenco de matcha 🍵.
- Se abre al llegar a **N4**. Logro 🏯 *Ruta de Kioto*.

### 📊 Estadísticas de progreso (Perfil)
- Calendario de **racha** (últimas 5 semanas).
- Gráfica de **XP por día** (14 días).
- **Maestría por nivel** (N5 / N4 / N3) y mejores puntajes **JLPT**.

### 🐣 Den-chan evoluciona
- **4 etapas** según los días de cuidado: Cría → Joven → Adulto → **Maestro しゃしょう**.
- Al llegar a *Adulto* estrena **gorra de conductor**. Barra de progreso a la siguiente evolución.

### 🔊 Audio
- **Velocidad de voz** ajustable: 🐢 Lenta · 🚶 Normal · 🐇 Nativa.
- **Modo shadowing** en las lecturas: escucha y repite línea por línea con resaltado.

### 🛠️ Correcciones (v16.1)
- **Arreglado el loop de actualización.** El service worker ahora sirve la app y `version.json`
  con estrategia **network-first**, se auto-activa (`skipWaiting` + `clients.claim`) y el botón
  *Instalar ahora* espera a que el nuevo worker tome control antes de recargar. Las actualizaciones
  ahora se aplican de una sola vez.

---

## 🚀 Publicar una actualización (GitHub Pages)

La app vive en `conclave-rz.github.io`. Para lanzar una versión nueva:

1. **Sube al repositorio** todo el contenido de esta carpeta (sobrescribe lo anterior).
2. Los archivos que cambian en cada versión son **`index.html`**, **`sw.js`** y **`version.json`**.
3. La app instalada compara `version.json` remoto contra su `APP_VERSION` y avisa en tus dispositivos.
4. En el teléfono: **Perfil → 🔄 Buscar actualización → ⬇️ Instalar ahora**.

> 💡 Si un dispositivo se quedó atorado en una versión anterior: ciérralo por completo (quítalo de
> recientes) y ábrelo de nuevo. En última instancia, borra los datos del sitio o reinstala la PWA.

---

## 📂 Contenido del paquete

| Archivo | Rol |
|---|---|
| `index.html` | La app completa (HTML + CSS + JS en un archivo) con PWA activada |
| `sw.js` | Service worker · caché `densha-v16.1` · network-first para app y versión |
| `manifest.json` | Manifiesto PWA (nombre, iconos, colores, standalone) |
| `version.json` | `{"version":"v16.1"}` — usado por el actualizador in-app |
| `icon-192.png` · `icon-512.png` · `icon-maskable.png` | Iconos de la app |
| `README.md` | Este archivo |

> `densha-nihongo.html` (fuera del paquete) es el **archivo fuente** para editar; `index.html`
> es ese mismo archivo con las inyecciones de PWA. Edita la fuente y regenera el paquete.

---

## 🗂️ Historial de versiones

| Versión | Contenido |
|---|---|
| v1–v4 | Base: líneas de vocabulario tipo tren, quizzes, flashcards, XP/rachas |
| v5 | Misiones diarias, logros, escenarios pixel-art |
| v6–v9 | Constructor de oraciones, Precios ¥, Dictado kana, Conjugador, modo historia «7 días en Japón», sistema N4 con candados |
| v10–v11 | Repaso del día, diccionario, export/import JSON |
| v12 | Rediseño editorial «co-coco» + responsive |
| v13 | Tamagotchi デンちゃん, Lecturas, explicación de errores, audio en opciones, actualizador in-app |
| v14 | Jingles 16-bit, sesiones de 30 con S/A/B/C, líneas Familia y Posición, patrones invitar/existencia |
| v15 | Exámenes JLPT N5/N4 en modo historia (formato oficial, timer, bancos aleatorizados) |
| **v16** | **Paquete N3 · Capítulo 2 (Kioto) · Estadísticas de progreso · Evolución de Den-chan + audio** |
| **v16.1** | **Fix del loop de actualización (service worker network-first + auto-update)** |

---

## 🧱 Arquitectura

Un solo `densha-nihongo.html`: **CSS** en `<style>`, **JS vanilla** en el último `<script>`.
Sin dependencias externas salvo Google Fonts (M PLUS Rounded 1c + DotGothic16).

- **Persistencia:** `localStorage` con respaldo en memoria.
- **Voz:** `speechSynthesis` (ja-JP), velocidad configurable.
- **Audio:** Web Audio API (jingles 16-bit).
- **Offline / actualización:** service worker network-first + `version.json`.
- **Metodología de cambios:** parches con anclas verificadas, validación con `node --check` y
  prueba de humo en jsdom. Ver el documento de traspaso `CONTEXTO-DENSHA-V16.md`.

---

## 🧭 Roadmap

- Ampliar el paquete N3 hacia los ~370 kanji objetivo (por bloques verificados).
- **Examen JLPT N3** al cierre del Capítulo 2.
- Más lecturas y escenarios; shadowing con grabación de tu voz.
- Estadísticas: metas semanales y exportación.

---

<div align="center">

**すすんでください 🚃**

*Hecho con cariño para practicar japonés todos los días.*

</div>
