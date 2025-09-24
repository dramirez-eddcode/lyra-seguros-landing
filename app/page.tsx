'use client'

import { useState } from 'react'
import { ChevronRight, Phone, Shield, Clock, DollarSign, Users, Star, AlertCircle, Menu, X } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('personal')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const personalInsurances = [
    {
      icon: '❤️',
      bgColor: 'bg-purple-100',
      title: 'Seguro de Vida',
      benefits: ['Protección familiar garantizada', 'Beneficios fiscales', 'Coberturas desde $100,000']
    },
    {
      icon: '🚗',
      bgColor: 'bg-blue-100',
      title: 'Seguro de Auto',
      benefits: ['Cobertura amplia o limitada', 'Asistencia vial 24/7', 'Descuentos especiales']
    },
    {
      icon: '🏥',
      bgColor: 'bg-green-100',
      title: 'Gastos Médicos Mayores',
      benefits: ['Red de hospitales premium', 'Sin desembolso inicial', 'Cobertura internacional']
    },
    {
      icon: '🏠',
      bgColor: 'bg-orange-100',
      title: 'Seguro de Casa',
      benefits: ['Protección integral', 'Contenidos incluidos', 'Responsabilidad civil']
    },
    {
      icon: '🎓',
      bgColor: 'bg-indigo-100',
      title: 'Seguro Educativo',
      benefits: ['Universidad garantizada', 'Rendimientos competitivos', 'Flexibilidad de pagos']
    },
    {
      icon: '📈',
      bgColor: 'bg-pink-100',
      title: 'Inversión y Retiro',
      benefits: ['Planes personalizados', 'Beneficios fiscales', 'Asesoría continua']
    }
  ]

  const businessInsurances = [
    {
      title: 'Seguro de Flotillas',
      benefits: ['Descuentos por volumen', 'Administración centralizada', 'Cobertura integral']
    },
    {
      title: 'Responsabilidad Civil',
      benefits: ['Protección legal completa', 'Daños a terceros cubiertos', 'Defensa jurídica incluida']
    },
    {
      title: 'Seguro de Transporte',
      benefits: ['Mercancías protegidas', 'Cobertura nacional e internacional', 'Rastreo en tiempo real']
    },
    {
      title: 'Todo Riesgo Empresarial',
      benefits: ['Edificios y contenidos', 'Pérdida de beneficios', 'Riesgos cibernéticos']
    },
    {
      title: 'Gastos Médicos Colectivo',
      benefits: ['Beneficio para empleados', 'Deducible de impuestos', 'Red médica amplia']
    },
    {
      title: 'Vida Grupo',
      benefits: ['Protección para tu equipo', 'Primas competitivas', 'Beneficios adicionales']
    }
  ]

  const testimonials = [
    {
      name: 'María González',
      type: 'Seguro de Vida',
      text: 'Excelente servicio, me ayudaron a encontrar el mejor seguro para mi familia con un precio muy competitivo.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      type: 'Seguro de Auto',
      text: 'Cuando tuve mi siniestro, me acompañaron en todo el proceso. Muy profesionales y atentos.',
      rating: 5
    }
  ]

  const partners = ['AXA', 'GNP', 'Zurich', 'MetLife', 'Mapfre', 'Allianz', 'Chubb', 'Qualitas']

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">Lyntra Seguros</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#seguros" className="text-gray-700 hover:text-lyntra-purple transition">Seguros</a>
              <a href="#proceso" className="text-gray-700 hover:text-lyntra-purple transition">Proceso</a>
              <a href="#testimonios" className="text-gray-700 hover:text-lyntra-purple transition">Testimonios</a>
              <a href="tel:8131274338" className="flex items-center text-gray-700 hover:text-lyntra-purple transition">
                <Phone className="h-4 w-4 mr-2" />
                81 3127 4338
              </a>
              <button className="btn-gradient px-6 py-2">
                Cotizar Ahora
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#seguros" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Seguros</a>
              <a href="#proceso" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Proceso</a>
              <a href="#testimonios" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Testimonios</a>
              <a href="tel:8131274338" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                📞 81 3127 4338
              </a>
              <button className="w-full btn-gradient px-6 py-2 mt-2">
                Cotizar Ahora
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Protegemos lo que Más Valoras con{' '}
                <span className="gradient-text">Seguros a tu Medida</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Asesoría personalizada y las mejores opciones de seguros en México
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gradient px-8 py-3 text-lg">
                  Cotiza en 2 Minutos
                </button>
                <button className="btn-outline-gradient px-8 py-3 text-lg">
                  Asesoría Gratuita
                </button>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-2">Respaldados por:</p>
                <div className="flex gap-4 flex-wrap">
                  {partners.slice(0, 4).map((partner) => (
                    <span key={partner} className="text-gray-400 font-semibold">{partner}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote Calculator */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-xl card-hover">
              <h3 className="text-2xl font-bold mb-6">Cotización Rápida</h3>
              <form className="space-y-4">
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none">
                  <option>Tipo de Seguro</option>
                  <option>Seguro de Vida</option>
                  <option>Seguro de Auto</option>
                  <option>Gastos Médicos Mayores</option>
                  <option>Seguro de Casa</option>
                </select>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none"
                />
                <button type="submit" className="w-full btn-gradient py-3 text-lg">
                  Obtener Cotización Gratuita
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section id="seguros" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Nuestros Seguros</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Protección integral para cada aspecto de tu vida
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setActiveTab('personal')}
                className={`px-6 py-2 rounded-md transition ${
                  activeTab === 'personal'
                    ? 'bg-gradient-to-r from-lyntra-purple to-lyntra-blue text-white'
                    : 'text-gray-700 hover:text-lyntra-purple'
                }`}
              >
                Seguros Personales
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`px-6 py-2 rounded-md transition ${
                  activeTab === 'business'
                    ? 'bg-gradient-to-r from-lyntra-purple to-lyntra-blue text-white'
                    : 'text-gray-700 hover:text-lyntra-purple'
                }`}
              >
                Seguros Empresariales
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'personal' ? (
              personalInsurances.map((insurance, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                  <div className={`w-12 h-12 ${insurance.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{insurance.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{insurance.title}</h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    {insurance.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-lyntra-trust mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="text-lyntra-purple font-semibold flex items-center hover:text-lyntra-blue transition">
                    Cotizar <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))
            ) : (
              businessInsurances.map((insurance, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                  <h3 className="text-xl font-semibold mb-3">{insurance.title}</h3>
                  <ul className="text-gray-600 space-y-2 mb-4">
                    {insurance.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-lyntra-trust mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="text-lyntra-purple font-semibold flex items-center hover:text-lyntra-blue transition">
                    Cotizar <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">¿Por Qué Lyntra Seguros?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lyntra-purple to-lyntra-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Asesoría Imparcial</h3>
              <p className="text-gray-600 text-sm">+15 aseguradoras para encontrar tu mejor opción</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lyntra-purple to-lyntra-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Mejor Precio</h3>
              <p className="text-gray-600 text-sm">Negociamos las mejores tarifas del mercado</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lyntra-purple to-lyntra-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Atención 24/7</h3>
              <p className="text-gray-600 text-sm">Estamos cuando más nos necesitas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-lyntra-purple to-lyntra-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Gestión de Siniestros</h3>
              <p className="text-gray-600 text-sm">Te acompañamos en todo el proceso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="section-padding bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Proceso Simple y Transparente</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { number: '1', title: 'Análisis', desc: 'Evaluamos tus necesidades' },
              { number: '2', title: 'Cotización', desc: 'Comparamos opciones' },
              { number: '3', title: 'Propuesta', desc: 'Te presentamos las mejores' },
              { number: '4', title: 'Contratación', desc: 'Formalizamos tu póliza' },
              { number: '5', title: 'Seguimiento', desc: 'Apoyo continuo' }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-lyntra-purple to-lyntra-blue"></div>
                )}
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg relative z-10">
                  <span className="font-bold text-lyntra-purple">{step.number}</span>
                </div>
                <h4 className="font-semibold text-sm md:text-base">{step.title}</h4>
                <p className="text-xs md:text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trabajamos con las Mejores Aseguradoras</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner} className="text-center">
                <span className="font-semibold text-gray-500 text-sm md:text-base">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Lo que Dicen Nuestros Clientes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow card-hover">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Emergency Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
            <AlertCircle className="h-8 w-8 text-red-700 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-red-700 mb-2">¿Tienes una Emergencia?</h3>
            <p className="text-red-600 mb-4">Línea de atención 24/7 para siniestros</p>
            <a href="tel:8131274338" className="text-2xl font-bold text-red-700">
              📞 81 3127 4338
            </a>
          </div>

          {/* Final CTA */}
          <h2 className="text-4xl font-bold mb-4">
            Protege tu Futuro <span className="gradient-text">Hoy Mismo</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Recibe asesoría personalizada sin costo ni compromiso
          </p>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="tel"
                placeholder="Teléfono"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none"
              />
              <select className="px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none">
                <option>Tipo de seguro</option>
                <option>Vida</option>
                <option>Auto</option>
                <option>GMM</option>
                <option>Casa</option>
              </select>
            </div>
            <textarea
              placeholder="¿Cómo podemos ayudarte?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lyntra-purple focus:outline-none mb-4"
              rows={3}
            ></textarea>
            <button type="submit" className="w-full btn-gradient py-3 text-lg">
              Solicitar Cotización Gratuita
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}