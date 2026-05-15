# jonzaba.github.io

Página web de prueba.

## Ejecutar el proyecto

Hay dos formas de ejecutar este repositorio:

### 1. Ejecutar solo `index.html`

Esto arranca un servidor muy simple que sirve únicamente el archivo `index.html` del root.

Comando:

```bash
npm run start
```

Qué hace:
- Inicia `serve-index.js`
- Escucha en `http://localhost:4200`
- Responde solo a `/` y `/index.html`
- Muestra el contenido de `index.html` sin arrancar Angular

### 2. Ejecutar el proyecto Angular completo

Esto arranca el servidor de desarrollo de Angular, que compila la aplicación y habilita hot reload.

Comando:

```bash
npm run start:angular
```

Qué hace:
- Inicia `ng serve`
- Arranca el frontend Angular completo
- Genera bundles y activa watch mode
- Se usa para desarrollo de la aplicación Angular

## Notas

- Si solo quieres ver el mensaje de prueba rápido, usa `npm run start`.
- Si quieres trabajar con la aplicación Angular o cambiar componentes, usa `npm run start:angular`.
- El resto del proyecto no se elimina: ambas opciones conviven en el mismo repositorio.

