# 📱 Guía de Instalación - Histología Quiz

## ¿Cómo usar el app?

### **Opción 1: Abrir directamente (Más Fácil) ✨**

1. **Descarga la carpeta `histologia-quiz`**
2. **Abre el archivo `index.html` con tu navegador**
   - Haz doble clic en `index.html`
   - O arrastra `index.html` a tu navegador
3. **¡Listo! El app funcionará inmediatamente**

### **En Windows:**
- Haz clic derecho en `index.html`
- Selecciona "Abrir con" → "Chrome/Firefox/Edge"

### **En Mac:**
- Haz doble clic en `index.html`
- Se abrirá automáticamente en tu navegador predeterminado

### **En Linux:**
- Haz doble clic en `index.html`
- O ejecuta: `xdg-open index.html`

---

## 📱 En el iPhone

### **Método 1: Desde iCloud Drive (Recomendado)**
1. Sube la carpeta `histologia-quiz` a iCloud Drive desde tu computadora
2. En el iPhone, abre la app "Archivos"
3. Navega a la carpeta `histologia-quiz`
4. Toca el archivo `index.html`
5. Selecciona "Abrir en Safari"
6. ¡Listo! El app funcionará

### **Método 2: Crear Ataljo en la Pantalla de Inicio**
1. Abre el app en Safari
2. Toca el ícono de compartir (↗️)
3. Selecciona "Agregar a Pantalla de Inicio"
4. Elige un nombre (ej: "Histología")
5. Toca "Agregar"
6. ¡Ahora tendrás un ícono en tu pantalla de inicio!

---

## 📱 En Android

1. **Descarga la carpeta `histologia-quiz`**
2. **Abre el archivo `index.html` con Chrome o Firefox**
   - Toca y mantén presionado `index.html`
   - Selecciona "Abrir con" → "Chrome/Firefox"
3. **¡Listo! El app funcionará**

### **Crear Ataljo en la Pantalla de Inicio:**
1. Abre el app en Chrome
2. Toca los 3 puntos (⋮) en la esquina superior derecha
3. Selecciona "Instalar aplicación" o "Agregar a pantalla de inicio"
4. ¡Ahora tendrás un ícone en tu pantalla de inicio!

---

## 📋 Estructura de Archivos

```
histologia-quiz/
├── index.html          ← ABRE ESTE ARCHIVO
├── app.js              (Lógica del app)
├── styles.css          (Estilos)
├── README.md           (Información)
├── INSTALACION.md      (Este archivo)
└── themes/             (Carpeta con preguntas)
    ├── sistema-endocrino.json
    ├── endocrino-1.json
    ├── tiroides.json
    ├── paratiroides.json
    ├── suprarrenal.json
    └── sistema-tegumentario.json
```

---

## ⚙️ Requisitos

- ✅ Navegador moderno (Chrome, Firefox, Safari, Edge)
- ✅ **NO necesita internet** (funciona offline)
- ✅ **NO necesita instalación**
- ✅ **NO necesita Node.js**

---

## 🎯 Características

- 📚 6 temas con 50 preguntas cada uno
- 💾 Guarda automáticamente tu puntuación
- 📊 Muestra estadísticas de desempeño
- ➕ Puedes agregar nuevos temas
- 📱 Funciona en cualquier dispositivo
- ⚡ Muy rápido y responsivo

---

## 🆘 Solución de Problemas

### "No puedo abrir el archivo"
- Asegúrate de que todos los archivos estén en la misma carpeta
- Intenta abrir con un navegador diferente
- Verifica que no hayas movido los archivos

### "Las preguntas no cargan"
- Asegúrate de que la carpeta `themes/` esté en la misma carpeta que `index.html`
- Verifica que todos los archivos JSON estén presentes

### "El app funciona lentamente"
- Cierra otras pestañas del navegador
- Limpia el caché del navegador
- Intenta con otro navegador

---

## 📝 Agregar Nuevos Temas

1. Crea un archivo JSON con el siguiente formato:

```json
{
  "id": "mi-tema",
  "name": "Nombre del Tema",
  "description": "Descripción breve",
  "questions": [
    {
      "id": 1,
      "question": "¿Pregunta?",
      "options": ["Op1", "Op2", "Op3", "Op4"],
      "correctIndex": 0,
      "explanation": "Explicación detallada..."
    }
  ]
}
```

2. Guarda el archivo en la carpeta `themes/`
3. Abre el app y verás el nuevo tema

---

## 💡 Consejos

- Guarda la carpeta en un lugar seguro (ej: Desktop, Documentos)
- Puedes compartir la carpeta con otros usuarios
- El app funciona sin conexión a internet
- Todos los datos se guardan en tu dispositivo

---

## ❓ Preguntas Frecuentes

**¿Puedo modificar las preguntas?**
Sí, abre los archivos JSON en un editor de texto y modifica el contenido.

**¿Puedo usar en múltiples dispositivos?**
Sí, simplemente copia la carpeta a cada dispositivo.

**¿Se pierden mis respuestas si cierro el navegador?**
No, el app guarda automáticamente tu progreso.

**¿Necesito internet?**
No, el app funciona completamente offline.

---

¡Disfruta aprendiendo! 📚✨
