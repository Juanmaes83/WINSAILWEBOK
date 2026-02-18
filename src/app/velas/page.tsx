import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

const VelasPage = () => {
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
        {/* Hero de Velas */}
        <section className="py-16 bg-onesails-navy text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://ext.same-assets.com/726020858/1895539144.webp')`
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              VELAS ONESAILS
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              La tecnología más avanzada en velas, distribuida oficialmente por Win Sail en España
            </p>
          </div>
        </section>

        {/* Categorías principales */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* REGATA */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-onesails-navy mb-4">REGATA</h2>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Velas de competición diseñadas para maximizar el rendimiento en regatas.
                    Tecnología de vanguardia para navegantes exigentes.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link href="/velas-regata" className="block group">
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                      <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                        Velas de Regata
                      </h3>
                      <p className="text-onesails-gray">
                        Velas principales y génoas diseñadas específicamente para competición con tecnología 4T FORTE y Vektor2.
                      </p>
                    </div>
                  </Link>

                  <Link href="/spinnakers-regata" className="block group">
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                      <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                        Spinnakers Simétricos y Asimétricos de Regata
                      </h3>
                      <p className="text-onesails-gray">
                        Spinnakers de alto rendimiento para maximizar la velocidad en popa y través.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* CRUCERO */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-onesails-navy mb-4">CRUCERO</h2>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Velas para navegación de crucero que combinan rendimiento, durabilidad y facilidad de uso.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link href="/velas-crucero" className="block group">
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                      <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                        Velas de Crucero
                      </h3>
                      <p className="text-onesails-gray">
                        Velas robustas y eficientes para navegación de crucero y alto rendimiento.
                      </p>
                    </div>
                  </Link>

                  <Link href="/spinnakers-crucero" className="block group">
                    <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                      <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                        Spinnakers Simétricos y Asimétricos de Crucero
                      </h3>
                      <p className="text-onesails-gray">
                        Spinnakers fáciles de manejar para navegación recreativa y crucero.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ONE DESIGN */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                ONE DESIGN
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Velas especializadas para clases de One Design. Cada vela se fabrica según las especificaciones
                exactas de cada clase para garantizar el cumplimiento de las reglas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/one-design/optimist" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Image
                      src="https://ext.same-assets.com/726020858/3750364616.svg"
                      alt="Optimist"
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                      Optimist
                    </h3>
                    <p className="text-onesails-gray text-sm">
                      Velas para la clase Optimist, diseñadas para jóvenes regatistas.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/one-design/420" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <Image
                      src="https://ext.same-assets.com/726020858/1558717132.svg"
                      alt="420"
                      width={80}
                      height={80}
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                      420
                    </h3>
                    <p className="text-onesails-gray text-sm">
                      Velas para la clase 420, perfectas para navegantes juveniles.
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/one-design" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-onesails-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-onesails-blue">+</span>
                    </div>
                    <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                      Encuentra tu clase
                    </h3>
                    <p className="text-onesails-gray text-sm">
                      Explora todas las clases One Design disponibles.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* PERSONALIZADOS & ESPECIALES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
                PERSONALIZADOS & ESPECIALES
              </h2>
              <p className="text-lg text-onesails-gray max-w-3xl mx-auto">
                Soluciones especializadas para embarcaciones únicas y aplicaciones específicas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Link href="/super-yachts" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://ext.same-assets.com/726020858/36356023.jpeg"
                    alt="Super Yacht Sails"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Super Yachts Sails</h3>
                    <p className="text-sm opacity-90">Velas de tamaño ilimitado para super yates</p>
                  </div>
                </div>
              </Link>

              <Link href="/yates-clasicos" className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src="https://ext.same-assets.com/726020858/2249630251.jpeg"
                    alt="Velas para Yates Clásicos"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Velas para Yates Clásicos</h3>
                    <p className="text-sm opacity-90">Conservando la esencia atemporal</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Link href="/velas-ocean-offshore" className="block group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    Velas Ocean-Offshore
                  </h3>
                  <p className="text-onesails-gray">
                    Velas ultra-resistentes para navegación oceánica y condiciones extremas.
                  </p>
                </div>
              </Link>

              <Link href="/velas-multihull" className="block group">
                <div className="bg-gray-50 p-6 rounded-lg hover:bg-onesails-blue/5 transition-colors">
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    Velas Multihull
                  </h3>
                  <p className="text-onesails-gray">
                    Velas especializadas para catamaranes y trimaranes.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICIO & SOPORTE */}
        <section className="py-16 bg-onesails-navy text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                SERVICIO & SOPORTE
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Win Sail ofrece servicios completos de mantenimiento y reparación para todas las velas OneSails.
              </p>
            </div>

            <div className="text-center">
              <Link href="/servicios">
                <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white font-medium px-8 py-3 text-lg">
                  Ver todos nuestros servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-xl text-onesails-gray mb-8">
              Nuestros expertos de Win Sail te ayudarán a encontrar la vela OneSails perfecta para tu embarcación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solicite-presupuesto">
                <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                  Solicitar presupuesto
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                  Contactar asesor
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

export default VelasPage
