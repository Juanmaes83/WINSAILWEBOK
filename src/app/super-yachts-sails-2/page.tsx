import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download, Mail } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function SuperYachtsSailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      {/* Hero Section */}
      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/674465462.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              SUPER YACHTS SAILS
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Velas de una sola pieza de tamaño ilimitado! - Distribuidas por WinSail
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
                Velas de una sola pieza de tamaño ilimitado!
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  OneSails es la única tecnología en el mundo capaz de fabricar velas de tamaño ilimitado en una sola pieza y utilizando hilos continuos. Nuestra tecnología permite un grado extraordinario de refinamiento.
                </p>
                <p>
                  En las áreas de alta carga, donde varios hilos se agrupan, se añaden parches de refuerzo internamente en las esquinas. El beneficio de los parches internos es que las esquinas permanecen suaves y fuertes.
                </p>
                <p>
                  En lugar de que los parches se adhieran a la superficie externa, se integran como parte de la integridad estructural de la membrana. Otro beneficio importante que OneSails ofrece a los propietarios de barcos es la posibilidad de pedir colores personalizados para personalizar sus propias velas.
                </p>
                <p className="font-semibold text-onesails-blue">
                  OneSails tiene el récord mundial de la vela mayor de una sola pieza más grande jamás fabricada. Esta fue construida para el Wally 130 y tiene un grátil de 46,6 metros.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar folleto
                </Button>
                <Button variant="outline" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Información técnica
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3040059876.webp"
                alt="Super Yacht Sails"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              EXPERIENCIA EN SUPER-YACHTS
            </h2>
            <div className="w-24 h-1 bg-onesails-blue mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                El equipo de OneSails es uno de los más experimentados en maxi yates, habiendo llevado a cabo en los últimos años numerosos proyectos récord en la fabricación de velas, como el Wally 143, Wally 130, Perini y muchas otras velas de inventario para maxi yates y superyates.
              </p>
              <p>
                Un equipo de expertos está dedicado a ofrecer un servicio de primera clase, siguiendo de manera única el diseño, la producción, las pruebas y asegurando que nuestras velas cumplan con rigurosos estándares de alta calidad.
              </p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-xl font-bold text-onesails-navy mb-4">
              Para obtener más información sobre los servicios exclusivos dedicados a los Superyates:
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                <Mail className="mr-2 h-4 w-4" />
                superyacht@onesails.com
              </Button>
              <p className="text-gray-600">o contacta con WinSail Alicante</p>
              <Link href="/contacto">
                <Button variant="outline" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Contactar WinSail
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            ÚLTIMOS PROYECTOS
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Wally 100 */}
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/1708582187.jpeg"
                  alt="Wally 100"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                  <h3 className="text-xl font-bold">Wally 100</h3>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-onesails-navy mb-4">Especificaciones de Velas</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span className="font-medium">Vela</span>
                    <span className="font-medium">m²</span>
                    <span className="font-medium">Tecnología</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm border-t pt-2">
                    <span>Vela mayor con sables completos</span>
                    <span>288</span>
                    <span>4T FORTE 320C</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Foque enrollable</span>
                    <span>238</span>
                    <span>4T FORTE 320C</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Vela de estay</span>
                    <span>87</span>
                    <span>4T FORTE 320C</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Code 065</span>
                    <span>420</span>
                    <span>4T FORTE 325N</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Spinnaker Asimétrico IFS (A5)</span>
                    <span>664</span>
                    <span>Tejido</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mylius 66 RS */}
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/4001483556.png"
                  alt="Mylius 66 RS"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded">
                  <h3 className="text-xl font-bold">Mylius 66 RS</h3>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-onesails-navy mb-4">Especificaciones de Velas</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span className="font-medium">Vela</span>
                    <span className="font-medium">m²</span>
                    <span className="font-medium">Tecnología</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm border-t pt-2">
                    <span>Vela mayor con sables completos</span>
                    <span>150</span>
                    <span>4T FORTE 320C</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Foque de regata</span>
                    <span>120</span>
                    <span>4T FORTE 320R</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Foque enrollable</span>
                    <span>114</span>
                    <span>4T FORTE 320C</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Code 075</span>
                    <span>230</span>
                    <span>Triradial CZ GP</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <span>Spinnaker Asimétrico IFS (A5)</span>
                    <span>260</span>
                    <span>Tejido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Grid */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <Image
                src="https://ext.same-assets.com/726020858/1339211205.png"
                alt="Spirit 111"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-lg">
                <h4 className="font-bold">Spirit 111</h4>
                <p className="text-sm opacity-90">Vela mayor: 277 m²</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="https://ext.same-assets.com/726020858/3263169657.png"
                alt="Spirit 72 DH"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-lg">
                <h4 className="font-bold">Spirit 72 DH</h4>
                <p className="text-sm opacity-90">Vela mayor: 128 m²</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="https://ext.same-assets.com/726020858/4234126412.png"
                alt="Swan 120"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-lg">
                <h4 className="font-bold">Swan 120</h4>
                <p className="text-sm opacity-90">Vela mayor: 363 m²</p>
              </div>
            </div>

            <div className="relative group">
              <Image
                src="https://ext.same-assets.com/726020858/778969389.png"
                alt="Maxi Dolphin 75"
                width={300}
                height={200}
                className="rounded-lg shadow-md w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 rounded-b-lg">
                <h4 className="font-bold">Maxi Dolphin 75</h4>
                <p className="text-sm opacity-90">Vela mayor: 198 m²</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record Super Yachts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            RÉCORD SUPER YACHTS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              'Wally 143 Esense', 'Swan 120 Audrey the First', 'Southern Wind 100 Thirty Nine', 'Spirit 111 Geist',
              'Wally 130 Dreamer', 'Swan 100 Fantastica', 'Southern Wind 100 Mariette Cube', 'Spirit 74',
              'Wally 100 Inco', 'Swan 90 Dsk', 'Southern Wind 100 L\'Ondine', 'Spirit 65DH',
              'Wally 94 Inti', 'Swan 80 Astro', 'Southern Wind 100 FarandWide', 'Spirit 65C',
              'Wally 80 Inti', 'Swan 70 Flying Dragon', 'Southern Wind 100 Farewell', 'Spirit 63 Yawl',
              'Wally 77 Tuamata', 'Swan 70 Bugia Bianca', 'Southern Wind 100 Mr. Seven', 'Felci Yachts 71 Mardor'
            ].map((yacht, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-onesails-navy text-sm leading-tight">{yacht}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handcrafted Finishes Section */}
      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                TERMINACIONES ELABORADAS A MANO
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Una profunda experiencia que se remonta en el tiempo y una verdadera pasión por los detalles hacen de estas velas la máxima combinación de estilo y calidad.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3676046212.jpeg"
                alt="Handcrafted Finishes"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Necesitas velas para Super Yachts?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail, distribuidor oficial de OneSails en España, para proyectos de super yates con la tecnología más avanzada del mundo.
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
