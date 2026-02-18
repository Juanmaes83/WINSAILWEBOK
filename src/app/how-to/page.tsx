import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft, BookOpen, Settings, Calculator, Camera } from 'lucide-react'

const HowToPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <main>
        {/* Hero de How to */}
        <section className="py-16 bg-onesails-navy text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url('https://ext.same-assets.com/726020858/3569785962.jpeg')`
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              HOW TO
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Guías, herramientas y recursos para maximizar el rendimiento de tus velas OneSails
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-onesails-navy mb-6">
              Aprovecha al máximo tus velas OneSails
            </h2>
            <p className="text-lg text-onesails-gray leading-relaxed">
              Win Sail te ofrece acceso completo a todas las guías técnicas, herramientas de trimming y recursos
              educativos de OneSails. Aprende de los expertos para optimizar el rendimiento de tu embarcación.
            </p>
          </div>
        </section>

        {/* Cuidado y Mantenimiento */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-onesails-blue mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                CUIDADO Y MANTENIMIENTO
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Guías esenciales para prolongar la vida útil de tus velas y mantener su rendimiento óptimo.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <Link href="/manual-usuario" className="group">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://ext.same-assets.com/755356355/1620445271.jpeg"
                        alt="Manual de Usuario"
                        width={120}
                        height={80}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                        Manual de Usuario
                      </h3>
                      <p className="text-onesails-gray leading-relaxed">
                        Guía completa sobre el cuidado, almacenamiento y mantenimiento básico de velas OneSails.
                        Incluye consejos para maximizar la durabilidad y mantener el rendimiento.
                      </p>
                      <div className="mt-4">
                        <span className="text-onesails-blue font-medium group-hover:underline">
                          Leer guía completa →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Guías de Uso */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Settings className="w-16 h-16 text-onesails-blue mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                GUÍAS DE USO
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Instrucciones detalladas para el uso óptimo de tecnologías específicas OneSails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/ifs-user-guide" className="group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    IFS User Guide
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Guía completa para el uso de velas con tecnología IFS™ (Integrated Furling Structure).
                    Aprende a manejar y enrollar correctamente estas velas innovadoras.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía IFS →
                  </span>
                </div>
              </Link>

              <Link href="/pfr-ffr-user-guide" className="group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    PFR / FFR User Guide
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Instrucciones para el uso de sistemas de enrollado PFR (Partial Furling Reacher)
                    y FFR (Full Furling Reacher).
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía PFR/FFR →
                  </span>
                </div>
              </Link>

              <Link href="/full-battens-guide" className="group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    Full Battens Guide
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Todo lo que necesitas saber sobre velas con sables completos: instalación,
                    ajuste y mantenimiento para rendimiento óptimo.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía Full Battens →
                  </span>
                </div>
              </Link>

              <Link href="/leech-battens-guide" className="group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    Leech Battens Guide
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Guía específica para el manejo y ajuste de sables de baluma.
                    Optimiza la forma de la vela para diferentes condiciones.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía Leech Battens →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Guías de Trimming */}
        <section className="py-16 bg-onesails-navy text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                GUÍAS DE TRIMMING
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Aprende las técnicas de trimming profesional para extraer el máximo rendimiento de cada vela.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/mainsail-trimming" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-onesails-blue transition-colors">
                    Mainsail Trimming
                  </h3>
                  <p className="opacity-90 mb-4">
                    Técnicas avanzadas para el trimming de la vela mayor.
                    Desde conceptos básicos hasta ajustes de regata.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía →
                  </span>
                </div>
              </Link>

              <Link href="/headsails-trimming" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-onesails-blue transition-colors">
                    Headsails Trimming
                  </h3>
                  <p className="opacity-90 mb-4">
                    Optimización de foques y génoas. Técnicas para diferentes
                    ángulos de viento y condiciones de navegación.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía →
                  </span>
                </div>
              </Link>

              <Link href="/spinnaker-trimming" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-onesails-blue transition-colors">
                    Spinnaker Trimming
                  </h3>
                  <p className="opacity-90 mb-4">
                    Domina el trimming de spinnakers simétricos y asimétricos.
                    Técnicas para maximizar velocidad en popa.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía →
                  </span>
                </div>
              </Link>

              <Link href="/upwind-sail-modes" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-onesails-blue transition-colors">
                    Upwind Sail Modes
                  </h3>
                  <p className="opacity-90 mb-4">
                    Diferentes modos de navegación de ceñida según las condiciones.
                    Optimiza tu VMG en cada situación.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía →
                  </span>
                </div>
              </Link>

              <Link href="/regatta-start-tricks" className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-onesails-blue transition-colors">
                    Regatta Start Tricks
                  </h3>
                  <p className="opacity-90 mb-4">
                    Técnicas avanzadas para salidas de regata.
                    Trucos profesionales para ganar ventaja desde la línea.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver guía →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Herramientas y Utilidades */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-onesails-blue mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                HERRAMIENTAS Y UTILIDADES
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Herramientas interactivas para diseño, cálculo y análisis de rendimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/disena-spinnaker" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    Diseña tu Spinnaker
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Herramienta interactiva para diseñar y personalizar
                    los colores y patrones de tu spinnaker.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Usar herramienta →
                  </span>
                </div>
              </Link>

              <Link href="/vmg-calculator" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <Calculator className="w-16 h-16 text-onesails-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    VMG Calculator
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Calculadora avanzada de VMG para optimizar
                    ángulos y velocidades en diferentes condiciones.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Abrir calculadora →
                  </span>
                </div>
              </Link>

              <Link href="/sail-shape-pictures" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <Camera className="w-16 h-16 text-onesails-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-3">
                    Sail Shape Pictures
                  </h3>
                  <p className="text-onesails-gray mb-4">
                    Galería de formas de vela de referencia para
                    diferentes condiciones y tipos de navegación.
                  </p>
                  <span className="text-onesails-blue font-medium group-hover:underline">
                    Ver galería →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Herramientas Pro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                HERRAMIENTAS PRO
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Herramientas avanzadas para profesionales y navegantes experimentados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-onesails-navy mb-4">Tuning Diary</h3>
                <p className="text-onesails-gray mb-6">
                  Registro digital para documentar configuraciones de velas, condiciones
                  y resultados de rendimiento. Herramienta esencial para regatas.
                </p>
                <Link href="/tuning-diary">
                  <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                    Acceder a Tuning Diary
                  </Button>
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-onesails-navy mb-4">Sailpack Vision</h3>
                <p className="text-onesails-gray mb-6">
                  Visualizador 3D de velas OneSails. Ve cómo se verán las velas
                  en tu embarcación antes de la fabricación.
                </p>
                <div className="space-y-3">
                  <Link href="/sailpack-vision">
                    <Button className="w-full bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                      Sailpack Vision Online
                    </Button>
                  </Link>
                  <Link href="/sailpack-viewer-download">
                    <Button variant="outline" className="w-full border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white">
                      Descargar Sailpack Viewer
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-onesails-blue text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesitas ayuda personalizada?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              El equipo de Win Sail está aquí para ayudarte a aprovechar al máximo tus velas OneSails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-white text-onesails-blue hover:bg-gray-100 font-medium px-8 py-3">
                  Contactar con expertos
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-blue px-8 py-3">
                  Ver nuestros servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HowToPage
