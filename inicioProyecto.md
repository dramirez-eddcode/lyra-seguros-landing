# Landing Page Demo - Lyntra Promotora de Seguros

## 🎯 Objetivo
Crear una landing page de demostración para presentar los servicios de Seguros de Lyntra.

## 🎨 Información de Marca
- **Logo**: Lyntra (Y estilizada en gradiente púrpura a azul)
- **Colores Principales**: 
  - Primario: Gradiente de púrpura (#A855F7) a azul (#3B82F6)
  - Secundario: Azul profundo (#1E40AF)
  - Acento: Púrpura claro (#C084FC)
  - Confianza: Verde (#10B981) para elementos de seguridad
  - Neutros: Blanco, Gris claro (#F3F4F6)

## 🚀 Stack Tecnológico Simplificado

### Opción A: Next.js + Tailwind (Desarrollo Rápido)
```bash
# Crear proyecto
npx create-next-app@latest lyntra-seguros-demo --typescript --tailwind --app

# Instalar dependencias esenciales
npm install framer-motion lucide-react
```

### Opción B: HTML + Tailwind CDN (Ultra Rápido)
```html
<!-- En el <head> -->
<script src="https://cdn.tailwindcss.com"></script>
```

## 📄 Estructura de la Landing (Una Sola Página)

### 1. Header Simple
```jsx
<header className="bg-white shadow-sm fixed w-full z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
      Lyntra Seguros
    </div>
    <div className="flex items-center gap-4">
      <span className="hidden md:block text-gray-600">📞 81 3127 4338</span>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg">
        Cotizar Ahora
      </button>
    </div>
  </div>
</header>
```

### 2. Hero Section con Calculadora
```jsx
<section className="pt-20 pb-16 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Protegemos lo que Más Valoras con 
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {" "}Seguros a tu Medida
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Asesoría personalizada y las mejores opciones de seguros en México
        </p>
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg text-lg">
            Cotiza en 2 Minutos
          </button>
          <button className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-lg text-lg">
            Asesoría Gratuita
          </button>
        </div>
      </div>
      
      {/* Mini Calculadora */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold mb-6">Cotización Rápida</h3>
        <form className="space-y-4">
          <select className="w-full px-4 py-3 rounded-lg border">
            <option>Tipo de Seguro</option>
            <option>Seguro de Vida</option>
            <option>Seguro de Auto</option>
            <option>Gastos Médicos Mayores</option>
            <option>Seguro de Casa</option>
          </select>
          <input type="email" placeholder="Tu email" className="w-full px-4 py-3 rounded-lg border" />
          <input type="tel" placeholder="Tu teléfono" className="w-full px-4 py-3 rounded-lg border" />
          <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold">
            Obtener Cotización Gratuita
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
```

### 3. Tipos de Seguros (Cards con Iconos)
```jsx
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-4">Nuestros Seguros</h2>
    <p className="text-xl text-gray-600 text-center mb-12">Protección integral para cada aspecto de tu vida</p>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card Seguro de Vida */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-2xl">❤️</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">Seguro de Vida</h3>
        <ul className="text-gray-600 space-y-2 mb-4">
          <li>✓ Protección familiar garantizada</li>
          <li>✓ Beneficios fiscales</li>
          <li>✓ Coberturas desde $100,000</li>
        </ul>
        <button className="text-purple-500 font-semibold">Cotizar →</button>
      </div>
      
      {/* Card Seguro de Auto */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-2xl">🚗</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">Seguro de Auto</h3>
        <ul className="text-gray-600 space-y-2 mb-4">
          <li>✓ Cobertura amplia o limitada</li>
          <li>✓ Asistencia vial 24/7</li>
          <li>✓ Descuentos especiales</li>
        </ul>
        <button className="text-purple-500 font-semibold">Cotizar →</button>
      </div>
      
      {/* Card Gastos Médicos */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-2xl">🏥</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">Gastos Médicos Mayores</h3>
        <ul className="text-gray-600 space-y-2 mb-4">
          <li>✓ Red de hospitales premium</li>
          <li>✓ Sin desembolso inicial</li>
          <li>✓ Cobertura internacional</li>
        </ul>
        <button className="text-purple-500 font-semibold">Cotizar →</button>
      </div>
      
      {/* Más cards... */}
    </div>
  </div>
</section>
```

### 4. Por Qué Elegirnos
```jsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">¿Por Qué Lyntra Seguros?</h2>
    
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">⚖️</span>
        </div>
        <h3 className="font-semibold mb-2">Asesoría Imparcial</h3>
        <p className="text-gray-600 text-sm">+15 aseguradoras para encontrar tu mejor opción</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">💰</span>
        </div>
        <h3 className="font-semibold mb-2">Mejor Precio</h3>
        <p className="text-gray-600 text-sm">Negociamos las mejores tarifas del mercado</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🕐</span>
        </div>
        <h3 className="font-semibold mb-2">Atención 24/7</h3>
        <p className="text-gray-600 text-sm">Estamos cuando más nos necesitas</p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🛡️</span>
        </div>
        <h3 className="font-semibold mb-2">Gestión de Siniestros</h3>
        <p className="text-gray-600 text-sm">Te acompañamos en todo el proceso</p>
      </div>
    </div>
  </div>
</section>
```

### 5. Proceso Simple
```jsx
<section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Proceso Simple y Transparente</h2>
    
    <div className="grid md:grid-cols-5 gap-4">
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
          <span className="font-bold text-purple-500">1</span>
        </div>
        <h4 className="font-semibold">Análisis</h4>
        <p className="text-sm text-gray-600">Evaluamos tus necesidades</p>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
          <span className="font-bold text-purple-500">2</span>
        </div>
        <h4 className="font-semibold">Cotización</h4>
        <p className="text-sm text-gray-600">Comparamos opciones</p>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
          <span className="font-bold text-purple-500">3</span>
        </div>
        <h4 className="font-semibold">Propuesta</h4>
        <p className="text-sm text-gray-600">Te presentamos las mejores</p>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
          <span className="font-bold text-purple-500">4</span>
        </div>
        <h4 className="font-semibold">Contratación</h4>
        <p className="text-sm text-gray-600">Formalizamos tu póliza</p>
      </div>
      
      <div className="text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
          <span className="font-bold text-purple-500">5</span>
        </div>
        <h4 className="font-semibold">Seguimiento</h4>
        <p className="text-sm text-gray-600">Apoyo continuo</p>
      </div>
    </div>
  </div>
</section>
```

### 6. Aseguradoras Partners (Logos)
```jsx
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Trabajamos con las Mejores Aseguradoras</h2>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
      {/* Aquí van logos de aseguradoras o texto placeholder */}
      <div className="text-center font-semibold text-gray-500">AXA</div>
      <div className="text-center font-semibold text-gray-500">GNP</div>
      <div className="text-center font-semibold text-gray-500">Zurich</div>
      <div className="text-center font-semibold text-gray-500">MetLife</div>
      <div className="text-center font-semibold text-gray-500">Mapfre</div>
      <div className="text-center font-semibold text-gray-500">Allianz</div>
    </div>
  </div>
</section>
```

### 7. Testimonios (Opcional)
```jsx
<section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex mb-4">
          {[1,2,3,4,5].map(() => <span key={Math.random()} className="text-yellow-400">⭐</span>)}
        </div>
        <p className="text-gray-600 mb-4">
          "Excelente servicio, me ayudaron a encontrar el mejor seguro para mi familia con un precio muy competitivo."
        </p>
        <p className="font-semibold">María González</p>
        <p className="text-sm text-gray-500">Seguro de Vida</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex mb-4">
          {[1,2,3,4,5].map(() => <span key={Math.random()} className="text-yellow-400">⭐</span>)}
        </div>
        <p className="text-gray-600 mb-4">
          "Cuando tuve mi siniestro, me acompañaron en todo el proceso. Muy profesionales y atentos."
        </p>
        <p className="font-semibold">Carlos Rodríguez</p>
        <p className="text-sm text-gray-500">Seguro de Auto</p>
      </div>
    </div>
  </div>
</section>
```

### 8. CTA Final con Urgencia
```jsx
<section className="py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    {/* Box de Emergencias */}
    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-bold text-red-700 mb-2">🚨 ¿Tienes una Emergencia?</h3>
      <p className="text-red-600 mb-4">Línea de atención 24/7 para siniestros</p>
      <a href="tel:8131274338" className="text-2xl font-bold text-red-700">📞 81 3127 4338</a>
    </div>
    
    {/* CTA Principal */}
    <h2 className="text-4xl font-bold mb-4">
      Protege tu Futuro 
      <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        {" "}Hoy Mismo
      </span>
    </h2>
    <p className="text-xl text-gray-600 mb-8">
      Recibe asesoría personalizada sin costo ni compromiso
    </p>
    
    <form className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Nombre completo" className="px-4 py-3 rounded-lg border" />
        <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg border" />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input type="tel" placeholder="Teléfono" className="px-4 py-3 rounded-lg border" />
        <select className="px-4 py-3 rounded-lg border">
          <option>Tipo de seguro</option>
          <option>Vida</option>
          <option>Auto</option>
          <option>GMM</option>
          <option>Casa</option>
        </select>
      </div>
      <textarea placeholder="¿Cómo podemos ayudarte?" className="w-full px-4 py-3 rounded-lg border mb-4" rows="3"></textarea>
      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg text-lg font-semibold">
        Solicitar Cotización Gratuita
      </button>
    </form>
  </div>
</section>
```

### 9. Footer Simple
```jsx
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <div className="text-2xl font-bold mb-4">Lyntra Seguros</div>
    <p className="mb-2">Tu aliado en protección patrimonial</p>
    <p className="mb-4">León, Guanajuato, México | Tel: 81 3127 4338</p>
    <p className="text-sm text-gray-400">
      © 2025 Lyntra Promotora de Seguros. Todos los derechos reservados.
    </p>
  </div>
</footer>
```

## 📦 Archivo package.json Mínimo
```json
{
  "name": "lyntra-seguros-demo",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

## 🎨 Tailwind Config Básico
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lyntra-purple': '#A855F7',
        'lyntra-blue': '#3B82F6',
        'lyntra-trust': '#10B981',
      },
    },
  },
  plugins: [],
}
```

## 🚀 Comandos para Iniciar

### Opción 1: Con Next.js
```bash
# Crear proyecto
npx create-next-app@latest lyntra-seguros-demo --typescript --tailwind --app

# Entrar a la carpeta
cd lyntra-seguros-demo

# Instalar dependencias adicionales
npm install framer-motion lucide-react

# Iniciar servidor de desarrollo
npm run dev
```

### Opción 2: HTML Simple
Crear un archivo `index.html` con Tailwind CDN y copiar los componentes.

## 📱 Notas para la Demo

### Lo que SÍ incluir:
- ✅ Diseño atractivo con los colores de marca
- ✅ Calculadora de cotización visual (sin backend)
- ✅ Cards de tipos de seguros
- ✅ Sección de aseguradoras partners
- ✅ Botón de emergencias destacado
- ✅ Formulario de contacto (sin funcionalidad)
- ✅ Responsive design

### Lo que NO es necesario para la demo:
- ❌ Cotizaciones reales
- ❌ Integración con APIs de aseguradoras
- ❌ Backend funcional
- ❌ Base de datos
- ❌ Chat en vivo real
- ❌ WhatsApp Business API
- ❌ Sistema de comparación funcional

## 💡 Tips para la Presentación

1. **Elementos de confianza** - Usa badges, certificaciones ficticias
2. **Urgencia visual** - Box rojo para emergencias/siniestros
3. **Simplicidad en el proceso** - 5 pasos claros y visuales
4. **Logos de aseguradoras** - Aunque sean texto placeholder
5. **Testimonios** - Agregan credibilidad
6. **CTAs múltiples** - "Cotizar" debe aparecer varias veces

## 🎯 Entregables

1. **Una página web estática** que muestre servicios de seguros
2. **Diseño profesional** con gradientes púrpura-azul
3. **Calculadora visual** de cotización
4. **Formulario de contacto** (visual únicamente)
5. **Responsive** para todos los dispositivos
6. **Desplegado en Vercel** con URL para compartir

## 🔗 Deployment Rápido en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Seguir las instrucciones y obtener URL de demo
```

## 🎨 CSS Adicional para Efectos

```css
/* Gradiente animado para botones */
.btn-gradient {
  background: linear-gradient(135deg, #A855F7 0%, #3B82F6 100%);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Hover effect para cards */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
```

---

**Tiempo estimado de desarrollo**: 4-8 horas para una demo completa y pulida.