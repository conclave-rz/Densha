# Densha · にほんご — Instrucciones de instalación

## Qué hay en esta carpeta

- `index.html` — la app completa
- `manifest.json` — identidad de la PWA (nombre, ícono, colores)
- `sw.js` — service worker: hace que funcione offline
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` — íconos de la app

## Paso 1 · Publicar (5 minutos, sin git ni repos)

1. En tu computadora, descomprime el zip. Te queda una carpeta `densha-pwa` con los 6 archivos.
2. Entra a **https://app.netlify.com/drop** (crea la cuenta gratis si te la pide; con Google es un clic).
3. **Arrastra la carpeta completa** a la zona de drop.
4. En ~30 segundos te da tu URL, algo como `https://random-name-123.netlify.app`.
5. Opcional: en Site settings → Change site name puedes ponerle algo memorable como `densha-nihongo.netlify.app`.

## Paso 2 · Instalar en tu Android

1. Abre tu URL en **Chrome** en el teléfono.
2. Chrome te mostrará un aviso de **"Agregar Densha a la pantalla de inicio"** (o menú ⋮ → **"Instalar app"**).
3. Acepta. Aparece el ícono verde 語 en tu pantalla de inicio.
4. Ábrela desde el ícono: pantalla completa, sin barra del navegador, como app nativa.

## Notas

- **Offline**: después de abrirla una vez con internet, funciona sin conexión (aviones, metro de Tokio 🚇).
- **Progreso**: tu XP, racha y récords se guardan en el teléfono. No borres los "datos de sitios" de Chrome para ese dominio.
- **Actualizaciones**: si en el futuro cambias algo en la app, vuelve a arrastrar la carpeta a Netlify Drop sobre el mismo sitio (pestaña Deploys → arrastra ahí). Sube la versión en `sw.js` (cambia `densha-v1` a `densha-v2`) para que los teléfonos tomen la nueva versión.

がんばってください！
