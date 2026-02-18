import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function VelasDeCruceroPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Universal Navigation */}
      <UniversalNavigation />

      {/* Hero Section */}
      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/1311712684.webp')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VELAS DE CRUCERO
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Rendimiento que perdura en el tiempo - Distribuidas por WinSail
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
                RENDIMIENTO QUE PERDURA EN EL TIEMPO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  OneSails fabrica velas y accesorios diseñados y desarrollados especialmente para satisfacer las necesidades de armadores exigentes que buscan soluciones técnicas modernas y funcionales, pensadas para mejorar tanto el rendimiento como el disfrute de la navegación.
                </p>
                <p>
                  La gama de productos OneSails está diseñada específicamente pensando en la navegación de crucero, para aquellos armadores que buscan la combinación perfecta de rendimiento, durabilidad y estética en sus velas.
                </p>
                <p>
                  La investigación y el desarrollo son dos principios fundamentales en la filosofía de OneSails, un espíritu que no se detiene en el diseño de productos innovadores como Vektor2™ y 4T FORTE™, sino que impregna todas las fases del diseño, evolución continua y aplicación de cada vela.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar folleto
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2307083180.jpeg"
                alt="Cruising Sailing"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              OneSails ofrece una gama de productos que se adapta<br />
              a todo tipo de uso y presupuesto.
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Las velas de alto rendimiento con corte transversal (cross-cut) y panelado tri-radial se complementan con una gama de productos personalizados tipo membrana, que incluye Vektor2™, M3™ y 4T FORTE™. Para fabricar velas mayores y génovas que son relativamente ligeras en comparación con otros productos similares, pero que mantienen una gran durabilidad y facilidad de ajuste.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 4T FORTE */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/1537261895.webp"
                  alt="4T FORTE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/248427970.svg"
                    alt="4T FORTE"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>Las velas compuestas 4T FORTE™ incorporan las últimas fibras de alto módulo, pero sin las películas de mylar ni los adhesivos que caracterizan las construcciones laminadas.</strong> Utilizando una estructura de múltiples capas microfinas, los elementos de la membrana se fusionan, lo que da como resultado una vela estable, resistente a la elongación y duradera.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>

            {/* M3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/221703577.webp"
                  alt="M3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/779545553.svg"
                    alt="M3"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>Utilizando fibras continuas de alto módulo, el proceso de laminado 'sin resina' crea velas altamente resistentes a la elongación, pero suaves, flexibles y que representan un avance significativo respecto a otras tecnologías de velas de 'producción por molde'.</strong> El uso de calor y presión en un entorno controlado hace que los polímeros especiales incorporados en las películas se fusionen en un proceso irreversible.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>

            {/* Vektor2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/781155530.jpeg"
                  alt="Vektor2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/3607932824.svg"
                    alt="Vektor2"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>Vektor2™ es la culminación de más de 20 años de desarrollo en la construcción de velas que incorporan hilos continuos.</strong> La red de fibra continua está compuesta por cintas de fibra reforzada aplicadas bajo alta presión sobre la película que constituye la vela. A diferencia de productos similares en el mercado, las cintas únicas utilizadas en Vektor2™ maximizan la capacidad estructural.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>

            {/* Vantage One */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/3329317193.jpeg"
                  alt="Vantage One"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/2770307535.svg"
                    alt="Vantage One"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>Las membranas Vantage One™ presentan complejas disposiciones de fibras curvadas que distribuyen las cargas de manera uniforme a lo largo de la vela, reduciendo la distorsión localizada y mejorando la retención general de la forma.</strong> Las velas se laminan en secciones antes de ser cortadas, moldeadas y unidas para formar la membrana final.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>

            {/* Triradial */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/139756757.jpeg"
                  alt="Triradial"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/3452357444.svg"
                    alt="Triradial"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>La construcción tri-radial crea un método más sofisticado para distribuir las cargas en una vela que el que se puede lograr con una vela de corte transversal.</strong> Tejidos avanzados, incluyendo híbridos de Dyneema y poliéster como el Hydranet, junto con una gama de laminados dedicados, ofrecen una mejor retención de la forma.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>

            {/* Dacron */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://ext.same-assets.com/726020858/3479811215.jpeg"
                  alt="Dacron"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src="https://ext.same-assets.com/726020858/1694344029.svg"
                    alt="Dacron"
                    width={60}
                    height={30}
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  <strong>Las velas OneSails de corte transversal están fabricadas utilizando únicamente los mejores Dacrons de calidad premium.</strong> No todos los Dacrons están creados igual. En OneSails, somos particularmente estrictos en la selección de tejidos para garantizar que cada pieza de tela sea perfectamente adecuada para su uso final.
                </p>
                <Button variant="outline" size="sm" className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                  Saber más
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details and Accessories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                DETALLES Y ACCESORIOS
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>Todas las velas de crucero OneSails están construidas con durabilidad, eficiencia y facilidad de uso en mente</strong>, con estos criterios siendo igualmente valorados tanto por los navegantes de día como por aquellos que se embarcan en travesías más ambiciosas en alta mar.
                </p>
                <p>
                  Los componentes de la más alta calidad y el genuino deseo de fabricar la mejor vela posible significan que todas las velas de crucero OneSails son intrínsecamente gratificantes de usar al más alto nivel.
                </p>
                <p>
                  Por ejemplo, el manejo de velas de popa puede facilitarse mediante el uso del Snuffer OneSails. Un tubo interno asegura que las líneas permanezcan libres de enredos, mientras que el material de la funda garantiza una mínima absorción de agua y facilita el almacenamiento cuando no se está usando.
                </p>
                <p>
                  Los sistemas de enrollado para velas de popa también se han vuelto cada vez más comunes, con una gama de sistemas dedicados disponibles que permiten enrollar FFRs e incluso Gennakers desde la comodidad relativa de la cabina del barco.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/950742704.jpeg"
                  alt="Sailing Details"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/772226185.jpeg"
                  alt="Sail Accessories"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why OneSails Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              POR QUÉ ONESAILS
            </h2>
            <div className="w-24 h-1 bg-onesails-blue mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Tecnología exclusiva */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-onesails-navy">1. Tecnología exclusiva</h3>
              <p className="text-gray-600 leading-relaxed">
                Durante más de 15 años, el equipo de diseño de OneSails ha desarrollado tecnologías exclusivas para hacer realidad las velas de hilo continuo de una sola pieza para embarcaciones de crucero y regata.
              </p>
            </div>

            {/* Rendimiento */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-onesails-navy">2. Rendimiento</h3>
              <p className="text-gray-600 leading-relaxed">
                Características como el peso, el control de la forma y la resistencia a la deformación significan un mejor rendimiento en comparación con las velas tradicionales de paneles.
              </p>
            </div>

            {/* Calidad */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-onesails-navy">3. Calidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Las velas están diseñadas y fabricadas con los más altos estándares utilizando componentes cuidadosamente seleccionados para garantizar la más alta calidad y durabilidad. Las membranas 4T FORTE™ se fabrican exclusivamente en Italia.
              </p>
            </div>

            {/* Diseño */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-onesails-navy">4. Diseño</h3>
              <p className="text-gray-600 leading-relaxed">
                Las mejores formas de vela son el resultado de un análisis continuo y de la experiencia. OneSails está a la vanguardia de la industria de la fabricación de velas, invirtiendo continuamente en investigación y desarrollo.
              </p>
            </div>

            {/* Servicio */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-onesails-navy">5. Servicio</h3>
              <p className="text-gray-600 leading-relaxed">
                Una actividad clave para cada Loft de OneSails es ofrecer un servicio, apoyo y asistencia de primera clase. WinSail es tu distribuidor oficial en España, garantizando el mejor servicio local con un equipo de expertos disponible.
              </p>
            </div>

            {/* Service Image */}
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2603431194.webp"
                alt="Servicio OneSails"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Necesitas velas de crucero OneSails?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail, distribuidor oficial de OneSails en España, para obtener la combinación perfecta de rendimiento, durabilidad y estética.
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
