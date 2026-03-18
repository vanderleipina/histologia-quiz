# Histología - Quiz de Múltiple Opción

Una aplicación de quiz interactiva en HTML, CSS y JavaScript puro que funciona directamente en el navegador sin necesidad de Node.js o servidor.

## Características

- ✅ **100% HTML/CSS/JavaScript** - Sin dependencias externas
- 📱 **Responsive** - Funciona perfectamente en Android, iPhone y desktop
- 📊 **6 Temas Predefinidos** - Sistema Endócrino, Endocrino 1, Tiroides, Paratiroides, Suprarrenal, Sistema Tegumentario
- 🎯 **50 Preguntas por Tema** - Con explicaciones detalladas de 5+ líneas
- 💾 **Almacenamiento Local** - Guarda automáticamente tu puntuación mejor y número de intentos
- ➕ **Agregar Temas** - Importa nuevos temas mediante archivos JSON
- 🎨 **Interfaz Moderna** - Diseño limpio y atractivo

## Cómo Usar

### Opción 1: Abrir directamente en el navegador
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! El app funcionará inmediatamente

### Opción 2: Usar un servidor local (recomendado)
```bash
# Con Python 3
python3 -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (http-server)
npx http-server
```

Luego abre `http://localhost:8000` en tu navegador.

## Estructura de Archivos

```
histologia-quiz/
├── index.html          # Archivo HTML principal
├── app.js              # Lógica de la aplicación
├── styles.css          # Estilos CSS
├── README.md           # Este archivo
└── themes/             # Carpeta con temas JSON
    ├── sistema-endocrino.json
    ├── endocrino-1.json
    ├── tiroides.json
    ├── paratiroides.json
    ├── suprarrenal.json
    └── sistema-tegumentario.json
```

## Formato de Tema JSON

Para agregar un nuevo tema, crea un archivo JSON con la siguiente estructura:

```json
{
  "id": "mi-tema",
  "name": "Nombre del Tema",
  "description": "Descripción del tema",
  "questions": [
    {
      "id": 1,
      "question": "¿Cuál es la pregunta?",
      "options": [
        "Opción 1",
        "Opción 2",
        "Opción 3",
        "Opción 4"
      ],
      "correctIndex": 0,
      "explanation": "Explicación detallada de la respuesta correcta..."
    }
  ]
}
```

### Campos requeridos:
- `id`: Identificador único del tema (sin espacios)
- `name`: Nombre del tema
- `description`: Descripción breve
- `questions`: Array de preguntas

### Campos de cada pregunta:
- `id`: Número único de la pregunta
- `question`: Texto de la pregunta
- `options`: Array con 4 opciones de respuesta
- `correctIndex`: Índice (0-3) de la respuesta correcta
- `explanation`: Explicación detallada (mínimo 5 líneas)

## Características

### Página Principal
- Muestra todos los temas disponibles como cards
- Estadísticas de cada tema (cantidad de preguntas, mejor puntuación, intentos)
- Indicador de desempeño (verde si puntuación > 5, rojo si ≤ 5)
- Botón para agregar nuevos temas

### Página de Quiz
- Muestra una pregunta por vez
- Barra de progreso
- Contador de aciertos en tiempo real
- Feedback visual inmediato (verde para correcto, rojo para incorrecto)
- Explicación detallada después de responder

### Página de Resultados
- Puntuación final
- Porcentaje de aciertos
- Mensaje motivacional basado en desempeño
- Opción para reintentar o volver al inicio

## Almacenamiento de Datos

El app utiliza `localStorage` del navegador para guardar:
- Mejor puntuación por tema
- Número de intentos por tema
- Temas personalizados agregados

Los datos se guardan automáticamente y persisten entre sesiones.

## Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Android (Chrome, Firefox)
- ✅ iOS (Safari)

## Notas Importantes

1. **Sin conexión a internet**: El app funciona completamente sin conexión una vez cargado
2. **Privacidad**: Todos los datos se guardan localmente en tu dispositivo
3. **Temas personalizados**: Los temas que agregues se guardan en localStorage
4. **Borrar datos**: Para limpiar el almacenamiento, abre la consola del navegador y ejecuta:
   ```javascript
   localStorage.clear()
   ```

## Desarrollo

Para modificar el app:

1. **Estilos**: Edita `styles.css`
2. **Lógica**: Edita `app.js`
3. **Estructura**: Edita `index.html`
4. **Temas**: Agrega archivos JSON en la carpeta `themes/`

## Licencia

Este proyecto es de código abierto y puede ser utilizado libremente.

## Soporte

Para reportar problemas o sugerir mejoras, por favor contacta al desarrollador.
