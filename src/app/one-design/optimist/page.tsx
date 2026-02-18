import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Trophy, Target, Users, Star } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function OptimistPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/1926367772.jpeg')`
          }}
        />
        <div className="absolute top-8 left-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <Image
              src="https://ext.same-assets.com/726020858/2623012131.svg"
              alt="Optimist World Champion"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VELAS ONE DESIGN<br />
              OPTIMIST
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Campeones del mundo - Distribuidas por WinSail
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                LÍDERES EN OPTIMIST
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  OneSails es líder mundial en velas para Optimist, con numerosos campeonatos mundiales ganados con nuestras velas. Nuestra experiencia en esta clase es incomparable.
                </p>
                <p>
                  Para satisfacer las necesidades de los regatistas más exigentes de One Design, OneSails ofrece velas de alto rendimiento para la clase Optimist. <strong>Nuestras velas no están en stock, sino que se fabrican en el momento de la entrega para incluir los últimos avances en diseño y tejidos.</strong>
                </p>
                <p>
                  A través de WinSail, tienes acceso a las mismas velas que han llevado a campeones mundiales a la victoria en la clase Optimist.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3744378301.jpeg"
                alt="Optimist Sailing"
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
            ¿POR QUÉ ELEGIR ONESAILS PARA OPTIMIST?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Trophy className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Campeones</h3>
              <p className="text-gray-600">Múltiples campeonatos mundiales ganados con velas OneSails.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Target className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Precisión</h3>
              <p className="text-gray-600">Cada vela fabricada según especificaciones exactas de la clase.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Users className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Experiencia</h3>
              <p className="text-gray-600">Años de experiencia trabajando con los mejores regatistas juveniles.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <Star className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Innovación</h3>
              <p className="text-gray-600">Últimos avances en diseño y materiales aplicados a Optimist.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3282085053.jpeg"
                alt="Optimist Championship"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                FABRICADAS BAJO PEDIDO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A diferencia de otros fabricantes, OneSails no mantiene stock de velas Optimist. Cada vela se fabrica específicamente para cada pedido, asegurando que recibes los últimos avances en diseño y materiales.
                </p>
                <p>
                  Este enfoque garantiza que cada vela cumple con las regulaciones más actuales de la clase y incorpora todas las mejoras técnicas desarrolladas por nuestro equipo de diseño.
                </p>
                <p>
                  Las velas se entregan con certificación oficial de la clase y documentación completa de conformidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            GUÍA TÉCNICA DE CONFIGURACIÓN
          </h2>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-6xl mx-auto mb-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-4">Tabla de Trimming OneSails Optimist</h3>
              <p className="text-gray-600 mb-6">
                Esta guía técnica está destinada a ser utilizada como referencia durante la configuración inicial de las velas OneSails Optimist.
                Se recomienda a los navegantes probar diferentes configuraciones para encontrar esa velocidad extra que todos buscamos.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-onesails-navy text-white">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">VIENTO</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">RAKE</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">LUFF STRAPED</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">VANG</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">OUT HAUL</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold">CUNNINGHAM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-green-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold text-green-800">LIGHT</td>
                    <td className="border border-gray-300 px-4 py-3">279-280 cm</td>
                    <td className="border border-gray-300 px-4 py-3">5,4,3,2,2,3,4,5</td>
                    <td className="border border-gray-300 px-4 py-3">sin tensión en ceñida</td>
                    <td className="border border-gray-300 px-4 py-3">la vela necesita tener ondas en la botavara</td>
                    <td className="border border-gray-300 px-4 py-3">botavara arriba 1-2 círculos, vela con algunas rayas ligeras en el luff</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold text-yellow-800">MEDIUM</td>
                    <td className="border border-gray-300 px-4 py-3">279-280 cm</td>
                    <td className="border border-gray-300 px-4 py-3">2,2,2,2,2,2,2,2</td>
                    <td className="border border-gray-300 px-4 py-3">tensión ligera</td>
                    <td className="border border-gray-300 px-4 py-3">la vela necesita tener ondas en la botavara</td>
                    <td className="border border-gray-300 px-4 py-3">botavara arriba 1-2 círculos, vela con algunas rayas ligeras en el luff</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-3 font-bold text-red-800">STRONG</td>
                    <td className="border border-gray-300 px-4 py-3">277-278 cm</td>
                    <td className="border border-gray-300 px-4 py-3">0,1,2,3,3,2,1,0</td>
                    <td className="border border-gray-300 px-4 py-3">en tensión</td>
                    <td className="border border-gray-300 px-4 py-3">tirado y apretado en la escota 0 mm</td>
                    <td className="border border-gray-300 px-4 py-3">en tensión, en caso de problema abrir ligeramente el sprit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-onesails-blue/10 rounded-lg">
              <h4 className="text-lg font-bold text-onesails-navy mb-3">Notas importantes:</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• Estas configuraciones son un punto de partida. Ajustar según condiciones específicas.</li>
                <li>• Probar diferentes configuraciones para encontrar la velocidad óptima.</li>
                <li>• Los números del Luff Straped corresponden a las posiciones de los ojales.</li>
                <li>• En viento fuerte, priorizar el control sobre la velocidad máxima.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-onesails-navy mb-4">Vela Mayor Optimist</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>Material:</strong> Dacron de alta calidad específico para Optimist</li>
                  <li>• <strong>Peso:</strong> Según reglamentación IODA</li>
                  <li>• <strong>Dimensiones:</strong> Conforme a reglas de clase</li>
                  <li>• <strong>Certificación:</strong> Oficial IODA incluida</li>
                  <li>• <strong>Garantía:</strong> 12 meses contra defectos de fabricación</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-onesails-navy mb-4">Características</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Costura reforzada en puntos de tensión</li>
                  <li>• Sables de fibra de vidrio incluidos</li>
                  <li>• Herrajes de acero inoxidable</li>
                  <li>• Números de vela profesionales</li>
                  <li>• Bolsa de transporte incluida</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              SERVICIO ESPECIALIZADO PARA OPTIMIST
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              WinSail ofrece servicio especializado para la clase Optimist, incluyendo asesoramiento técnico y soporte para regatistas juveniles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Asesoramiento Técnico</h3>
              <p className="opacity-90">Consejos de trimming y configuración para maximizar el rendimiento.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Soporte en Regatas</h3>
              <p className="opacity-90">Presencia en regatas importantes para apoyo técnico directo.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Mantenimiento</h3>
              <p className="opacity-90">Servicios de reparación y mantenimiento especializados.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para ganar con OneSails?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para velas OneSails Optimist que han llevado a campeones del mundo a la victoria.
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
