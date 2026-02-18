import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowLeft, Leaf, Shield, Zap, Recycle, Star, TrendingUp } from 'lucide-react'

export default function FTFortePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb con navegación universal */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-onesails-blue">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/tecnologia" className="hover:text-onesails-blue">Tecnología</Link>
              <span className="mx-2">/</span>
              <span>4T Forte</span>
            </nav>
            <UniversalNavigation
              customBackPath="/tecnologia"
              backToVelasLabel="Volver a Tecnología"
            />
          </div>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/300513696.webp')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Image
                src="https://ext.same-assets.com/726020858/1535569071.svg"
                alt="4T Forte logo"
                width={100}
                height={60}
                className="mr-4"
              />
              <h1 className="text-5xl lg:text-7xl font-bold">
                4T FORTE<br />
                <span className="text-onesails-blue">por WinSail</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Tecnología revolucionaria de fibras continuas OneSails disponible en WinSail Alicante
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              WinSail te ofrece acceso exclusivo a la tecnología 4T FORTE™ de OneSails: las primeras velas sostenibles certificadas del mundo, con fibras continuas sin resinas ni pegamentos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                WINSAIL: TU ACCESO A LA REVOLUCIÓN 4T FORTE
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>WinSail Alicante</strong> es tu distribuidor autorizado para la revolucionaria tecnología 4T FORTE™ de OneSails. Como expertos en velas de alto rendimiento, te asesoramos en la selección y configuración optimal de esta tecnología avanzada.
                </p>
                <p>
                  En <strong>WinSail</strong> entendemos que cada navegante busca el equilibrio perfecto entre rendimiento, durabilidad y sostenibilidad. Por eso ofrecemos velas 4T FORTE adaptadas específicamente a tus necesidades de navegación en el Mediterráneo.
                </p>
                <p>
                  Nuestro equipo técnico de <strong>WinSail</strong> trabaja directamente con OneSails para asegurar que obtengas el máximo beneficio de esta tecnología de fibras continuas sin precedentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2838639094.jpeg"
                alt="Tecnología 4T Forte WinSail"
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
            VENTAJAS EXCLUSIVAS CON WINSAIL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Leaf className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Sostenibilidad Certificada</h3>
              <p className="text-gray-600">WinSail te ofrece las primeras velas 100% reciclables del mundo, certificadas ISO 14040. Navegación responsable para el futuro.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Shield className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Sin Delaminación</h3>
              <p className="text-gray-600">Tecnología WinSail sin resinas ni pegamentos elimina completamente los problemas de delaminación tradicionales.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Zap className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">25% Más Ligeras</h3>
              <p className="text-gray-600">Las velas 4T FORTE de WinSail son hasta 25% más ligeras que las laminadas tradicionales, mejorando el rendimiento significativamente.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Star className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Asesoramiento WinSail</h3>
              <p className="text-gray-600">Nuestros expertos de WinSail te guían en la selección de la configuración 4T FORTE ideal para tu embarcación.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <TrendingUp className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Rendimiento Superior</h3>
              <p className="text-gray-600">Fibras STR Solid Stripes con mejor relación resistencia/peso que el carbono tradicional.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Recycle className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Servicio Integral</h3>
              <p className="text-gray-600">WinSail ofrece servicio completo desde la instalación hasta el reciclaje al final de la vida útil.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            ESPECIFICACIONES TÉCNICAS 4T FORTE
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Regata & Grand Prix</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Modelo:</span>
                  <span>4T FORTE 525 R</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fibras:</span>
                  <span>STR Solid Stripes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Color:</span>
                  <span>Negro</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Módulo:</span>
                  <span>245</span>
                </div>
                <div className="bg-onesails-blue/10 p-4 rounded mt-4">
                  <p className="text-sm text-onesails-navy">
                    <strong>WinSail recomienda:</strong> Ideal para regatas de alta competición
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Grand Prix</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Modelo:</span>
                  <span>4T FORTE 325 N</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fibras:</span>
                  <span>STR Solid Stripes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Color:</span>
                  <span>Negro</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Módulo:</span>
                  <span>245</span>
                </div>
                <div className="bg-onesails-blue/10 p-4 rounded mt-4">
                  <p className="text-sm text-onesails-navy">
                    <strong>WinSail recomienda:</strong> Perfecta para regatas de alto nivel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Crucero Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Modelo:</span>
                  <span>4T FORTE 520C</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fibras:</span>
                  <span>STR Solid Stripes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Color:</span>
                  <span>Perla/Gris Titán</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Módulo:</span>
                  <span>245</span>
                </div>
                <div className="bg-onesails-blue/10 p-4 rounded mt-4">
                  <p className="text-sm text-onesails-navy">
                    <strong>WinSail recomienda:</strong> Excelente para crucero deportivo
                  </p>
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
                src="https://ext.same-assets.com/726020858/984043958.webp"
                alt="STR Solid Stripes technology"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                STR SOLID STRIPES: LA REVOLUCIÓN DISPONIBLE EN WINSAIL
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>WinSail</strong> te ofrece acceso exclusivo a las fibras STR Solid Stripes que superan al carbono tradicional en múltiples aspectos críticos para la navegación.
                </p>
                <p>
                  <strong>Ventajas STR que WinSail te garantiza:</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>185 N/tex</strong> de módulo específico vs 162 del carbono</li>
                  <li>• <strong>Resistencia UV excepcional</strong> vs degradación del carbono</li>
                  <li>• <strong>Mayor tenacidad</strong> para navegación intensiva</li>
                  <li>• <strong>Resistencia a humedad superior</strong> para uso marino</li>
                  <li>• <strong>Huella de carbono reducida</strong> para navegación sostenible</li>
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
              SOSTENIBILIDAD CERTIFICADA CON WINSAIL
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              WinSail te ofrece las primeras velas 100% reciclables del mundo, certificadas ISO 14040
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Fabricación</h3>
              <p className="opacity-90 text-sm">WinSail garantiza producción con estándares ambientales más altos</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Producción</h3>
              <p className="opacity-90 text-sm">Sin pegamentos, resinas o solventes contaminantes</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Reciclaje</h3>
              <p className="opacity-90 text-sm">WinSail gestiona el reciclaje al final de la vida útil</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Reutilización</h3>
              <p className="opacity-90 text-sm">Nuevos productos a partir de material reciclado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para la revolución 4T FORTE?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con <strong>WinSail Alicante</strong> para acceder a la tecnología de velas más avanzada y sostenible del mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto 4T FORTE
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

      <Footer />
    </div>
  )
}
