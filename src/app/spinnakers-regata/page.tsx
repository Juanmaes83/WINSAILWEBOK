import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Trophy, Target, Zap, TrendingUp, Star, Wind } from 'lucide-react'

export default function SpinnakersRegataPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-onesails-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <span>Spinnakers de Regata</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/3472819056.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              SPINNAKERS<br />
              DE REGATA
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Simétricos y Asimétricos - Distribuidos por WinSail
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Para regatistas que buscan la máxima performance en portantes, OneSails ofrece spinnakers de regata diseñados con tecnología de vanguardia para dominar en cualquier condición de regata.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                MÁXIMO RENDIMIENTO EN REGATA
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Los spinnakers de regata OneSails están diseñados para regatistas competitivos que necesitan cada décima de nudo de ventaja. Utilizamos las tecnologías más avanzadas y materiales de última generación para crear velas que marcan la diferencia.
                </p>
                <p>
                  Tanto en configuración simétrica como asimétrica, nuestros spinnakers de regata ofrecen formas optimizadas mediante CFD (dinámica de fluidos computacional) y análisis de elementos finitos para maximizar la sustentación y minimizar la resistencia.
                </p>
                <p>
                  Cada spinnaker se fabrica con materiales específicos según las condiciones de regata, desde tejidos ultraligeros para vientos suaves hasta construcciones reforzadas para condiciones extremas.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1893652174.jpeg"
                alt="Spinnaker de regata OneSails en acción"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            TECNOLOGÍAS DE VANGUARDIA
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-xl font-bold text-onesails-navy">4T FORTE™</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tecnología de fibras continuas que proporciona resistencia excepcional sin agregar peso. Las fibras se extienden de forma continua a través de toda la vela, eliminando puntos débiles.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Mayor resistencia al desgarro</li>
                  <li>• Peso significativamente reducido</li>
                  <li>• Mejor retención de forma</li>
                  <li>• Vida útil extendida</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-xl font-bold text-onesails-navy">Vektor2™</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sistema de refuerzo direccional que optimiza la distribución de cargas. Las fibras se orientan según los vectores de fuerza reales en la vela durante la navegación.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Distribución optimal de tensiones</li>
                  <li>• Menor deformación bajo carga</li>
                  <li>• Respuesta más precisa al trimming</li>
                  <li>• Performance consistente</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-xl font-bold text-onesails-navy">M3™</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Proceso de moldeado tridimensional que crea velas perfectamente lisas. El laminado se realiza sobre moldes curvados que replican la forma final de la vela.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Superficie perfectamente lisa</li>
                  <li>• Eliminación de arrugas</li>
                  <li>• Flujo laminar optimizado</li>
                  <li>• Máxima eficiencia aerodinámica</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            CONFIGURACIONES ESPECÍFICAS PARA REGATA
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Wind className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-2xl font-bold text-onesails-navy">Spinnakers Simétricos</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy mb-4">CONFIGURACIONES DISPONIBLES:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">Viento Suave (4-8kt)</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Material ultraligero</li>
                      <li>• Máxima superficie proyectada</li>
                      <li>• Forma profunda</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">Viento Medio (8-15kt)</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Material equilibrado</li>
                      <li>• Forma versátil</li>
                      <li>• Uso polivalente</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">Viento Fuerte (15-25kt)</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Material reforzado</li>
                      <li>• Forma plana</li>
                      <li>• Máximo control</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">All-Purpose</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Rango amplio</li>
                      <li>• Compromiso optimal</li>
                      <li>• Versátil y resistente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-2xl font-bold text-onesails-navy">Spinnakers Asimétricos</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy mb-4">TIPOS ESPECIALIZADOS:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">A0 - Running</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Ángulos muy abiertos</li>
                      <li>• Máxima superficie</li>
                      <li>• Vientos de popa</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">A2 - Reaching</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Ángulos medios</li>
                      <li>• Polivalente</li>
                      <li>• Vientos de través</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">A3 - Close Reaching</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Ángulos cerrados</li>
                      <li>• Forma plana</li>
                      <li>• Viento aparente alto</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold text-onesails-navy">Code 0</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Ángulos muy cerrados</li>
                      <li>• Forma muy plana</li>
                      <li>• Entre génova y spinnaker</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2764928547.jpeg"
                alt="Análisis técnico de spinnakers"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                SERVICIO TÉCNICO ESPECIALIZADO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  WinSail proporciona asesoramiento técnico especializado para spinnakers de regata, incluyendo análisis de polar de velocidades y optimización específica para tu embarcación y programa de regatas.
                </p>
                <p>
                  Nuestro equipo técnico trabaja contigo para determinar la configuración optimal de spinnakers según tu programa de regatas, condiciones locales y características específicas de tu embarcación.
                </p>
                <p>
                  Incluimos sesiones de entrenamiento en agua para optimizar el trimming y manejo, asegurando que extraigas el máximo rendimiento de tus nuevos spinnakers OneSails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              RENDIMIENTO COMPROBADO EN REGATAS
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Los spinnakers OneSails han ganado múltiples campeonatos mundiales y regatas de primer nivel internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Campeonatos Mundiales</h3>
              <p className="opacity-90">Múltiples títulos mundiales en diferentes clases con spinnakers OneSails.</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Copa América</h3>
              <p className="opacity-90">Tecnología probada en la competición más exigente del mundo.</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Circuitos Internacionales</h3>
              <p className="opacity-90">Presencia dominante en circuitos de regatas de primer nivel mundial.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para ganar en portantes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para spinnakers OneSails que te darán la ventaja competitiva que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                Contactar WinSail
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
