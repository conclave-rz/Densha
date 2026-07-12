# 🚃 Densha (電車) · Aprende japonés

PWA gamificada para aprender japonés desde cero, con estética de trenes japoneses,
pixel art y diseño editorial. Un solo archivo HTML, sin frameworks. Funciona offline
e instalable en Android / tablet.

**Versión actual: v16**

## Cómo publicar una actualización (GitHub Pages · conclave-rz.github.io)
1. Sube el contenido de esta carpeta al repo (index.html, sw.js, manifest.json, version.json, iconos).
2. La app instalada compara `version.json` remoto contra `APP_VERSION` local y avisa en tus dispositivos.
3. Desde Perfil → «Buscar actualización» → «Instalar ahora».

> Si ya tenías iconos/manifest propios en el repo, basta con reemplazar **index.html**,
> **sw.js** y **version.json** (los que cambian por versión) y conservar tus iconos.

## Contenido de la carpeta
`index.html` · `sw.js` (cache `densha-v16`) · `manifest.json` · `version.json` · `icon-192/512/maskable.png` · `README.md`

## Historial de versiones
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
| **v16** | **Paquete N3, Capítulo 2 (Kioto), Estadísticas de progreso, Evolución de Den-chan + audio** |

## Novedades v16
- **Paquete N3.** 28 kanji nuevos (2 líneas: sociedad/trabajo y mente/geografía) con **furigana** en los
  ejemplos; formas **potencial** (〜られる／〜える) y **pasiva** (〜られる／〜れる) en el Conjugador.
  Nivel N3 se desbloquea al aprobar el examen JLPT N4 (`checkN3`); logro 🈴 «Ascenso a N3».
- **Capítulo 2 · Viaje a Kioto (N4).** 5 estaciones nuevas (Shinkansen, ryokan, templo Kinkaku-ji,
  ceremonia del té en Gion, omiyage) con diálogo más natural y 2 sprites nuevos (torii ⛩️ y cuenco de matcha 🍵).
  Se desbloquea con N4; logro 🏯 «Ruta de Kioto».
- **Estadísticas de progreso (Perfil).** Calendario de racha (5 semanas), gráfica de XP por día (14 días),
  maestría por nivel (N5/N4/N3) y mejores puntajes JLPT.
- **Den-chan evoluciona.** 4 etapas según los días de cuidado (Cría → Joven → Adulto → Maestro しゃしょう);
  al llegar a Adulto estrena gorra de conductor. Barra de progreso a la siguiente evolución.
- **Audio.** Velocidad de voz ajustable (🐢 lenta / 🚶 normal / 🐇 nativa) y **modo shadowing** en las
  lecturas: escucha y repite línea por línea con resaltado.

## Arquitectura (para futuras versiones)
Un solo `densha-nihongo.html`: CSS en `<style>`, JS vanilla en el último `<script>`. Persistencia en
`localStorage` (con fallback en memoria), TTS con `speechSynthesis`, audio con Web Audio API.
Metodología de parcheo: scripts Python con anclas verificadas (`rep()`), validación con `node --check`
y prueba de humo en jsdom. Ver el documento de traspaso `CONTEXTO-DENSHA-V16.md`.

## Roadmap
- Ampliar el paquete N3 hacia los ~370 kanji objetivo (por bloques verificados).
- Exámenes JLPT N3; más lecturas/escenarios; shadowing con grabación.

すすんでください 🚃
