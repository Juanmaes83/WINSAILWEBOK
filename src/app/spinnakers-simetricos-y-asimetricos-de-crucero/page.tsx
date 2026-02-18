import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function SpinnakersCruceroPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      {/* Hero Section */}
      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/2986094430.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              SPINNAKERS SIMÉTRICOS Y<br />
              ASIMÉTRICOS DE CRUCERO
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Facilidad de uso y rendimiento para navegación recreativa - Distribuidos por WinSail
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                DISEÑADOS PARA NAVEGACIÓN DE CRUCERO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Los Spinnakers de OneSails están diseñados para adaptarse a una amplia gama de ángulos de viento aparente, evitando un trimado continuo durante la navegación. Las velas se diseñan mediante simulaciones de software de dinámica de fluidos y se optimizan según las dimensiones de la embarcación para facilitar tanto el izado como la inmersión.
                </p>
                <p>
                  Estas velas están especialmente desarrolladas para navegantes de crucero que buscan facilidad de uso sin comprometer el rendimiento. Son ideales para navegación recreativa y travesías de largo alcance.
                </p>
                <p>
                  Con WinSail como distribuidor oficial de OneSails en España, tienes acceso a spinnakers de crucero que combinan la tecnología más avanzada con la practicidad necesaria para la navegación recreativa.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1445871684.jpeg"
                alt="Cruising Spinnakers"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              CARACTERÍSTICAS PRINCIPALES
            </h2>
            <div className="w-24 h-1 bg-onesails-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">1</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Fácil Manejo</h3>
              <p className="text-gray-600 leading-relaxed">
                Diseñados para ser manejados fácilmente por tripulaciones pequeñas, con sistemas de izado y arriado simplificados.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">2</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Rango de Viento Amplio</h3>
              <p className="text-gray-600 leading-relaxed">
                Efectivos en una amplia gama de ángulos de viento aparente, reduciendo la necesidad de trimado continuo.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">3</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Durabilidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Construidos con materiales de alta calidad para resistir las condiciones de navegación de crucero.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">4</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Versatilidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Adaptables a diferentes condiciones de navegación, desde vientos ligeros hasta condiciones más intensas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">5</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Seguridad</h3>
              <p className="text-gray-600 leading-relaxed">
                Diseño estable que reduce el riesgo de colapso y facilita el control en condiciones variables.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-onesails-blue">6</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Almacenamiento</h3>
              <p className="text-gray-600 leading-relaxed">
                Sistemas de snuffer y enrollado disponibles para facilitar el almacenamiento y manejo a bordo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IFS Technology Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3857441520.svg"
                alt="IFS Technology"
                width={400}
                height={200}
                className="mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                TECNOLOGÍA IFS PARA CRUCERO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  La tecnología IFS (Integrated Furling Structure) también está disponible para spinnakers de crucero, ofreciendo las ventajas del enrollado sin cable anti-torsión.
                </p>
                <p>
                  Esta tecnología es especialmente útil en navegación de crucero, donde la facilidad de manejo es prioritaria. El sistema permite enrollar la vela de forma segura y eficiente, incluso con tripulaciones reducidas.
                </p>
                <p>
                  Con WinSail, puedes acceder a esta tecnología revolucionaria que simplifica significativamente el manejo de spinnakers en navegación de crucero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            TIPOS DE SPINNAKERS DE CRUCERO
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Symmetric Spinnakers */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Spinnakers Simétricos</h3>
              <div className="relative mb-6">
                <Image
                  src="https://ext.same-assets.com/726020858/4120475093.jpeg"
                  alt="Symmetric Spinnakers"
                  width={400}
                  height={250}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ideales para navegación en popa directa y ángulos amplios. Proporcionan máxima potencia en condiciones de viento de popa.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Máximo área vélica para navegación en popa</li>
                  <li>Forma simétrica para estabilidad</li>
                  <li>Ideales para vientos de 8-25 nudos</li>
                  <li>Ángulos de viento aparente: 120-180°</li>
                </ul>
              </div>
            </div>

            {/* Asymmetric Spinnakers */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Spinnakers Asimétricos</h3>
              <div className="relative mb-6">
                <Image
                  src="https://ext.same-assets.com/726020858/3282238904.jpeg"
                  alt="Asymmetric Spinnakers"
                  width={400}
                  height={250}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Más versátiles para navegación de alcance y través. Permiten navegar más cerca del viento que los simétricos.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Versátiles para múltiples ángulos de viento</li>
                  <li>Más fáciles de manejar que los simétricos</li>
                  <li>Ideales para vientos de 6-22 nudos</li>
                  <li>Ángulos de viento aparente: 60-140°</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Necesitas spinnakers de crucero OneSails?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para asesoramiento sobre la mejor configuración de spinnakers para tu estilo de navegación de crucero.
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
