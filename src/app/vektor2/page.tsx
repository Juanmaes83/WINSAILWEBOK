import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowLeft, Target, Zap, DollarSign, Layers, Star, TrendingUp } from 'lucide-react'

export default function Vektor2Page() {
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
              <span>Vektor2</span>
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
            backgroundImage: `url('https://ext.same-assets.com/726020858/3779174765.webp')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Image
                src="https://ext.same-assets.com/726020858/3612314541.svg"
                alt="Vektor2 logo"
                width={120}
                height={60}
                className="mr-4"
              />
              <h1 className="text-5xl lg:text-7xl font-bold">
                VEKTOR2<br />
                <span className="text-onesails-blue">en WinSail</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              La tecnología de fibras continuas más accesible disponible en WinSail Alicante
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              WinSail te ofrece acceso exclusivo a Vektor2™: la relación calidad-precio óptima en tecnología de fibras continuas OneSails, perfecta para navegantes que buscan rendimiento sin comprometer el presupuesto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                WINSAIL: TU PUERTA DE ACCESO A VEKTOR2™
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>WinSail Alicante</strong> democratiza el acceso a la tecnología de fibras continuas OneSails a través de Vektor2™. Con más de 20 años de experiencia perfeccionando esta tecnología, te ofrecemos velas de una sola pieza a precios competitivos.
                </p>
                <p>
                  En <strong>WinSail</strong> entendemos que no todos los navegantes necesitan la máxima tecnología de regata. Por eso recomendamos Vektor2™ para navegantes que buscan acceder a los beneficios de las fibras continuas con una excelente relación coste-rendimiento.
                </p>
                <p>
                  <strong>WinSail</strong> te asesora en la configuración optimal de Vektor2™ para tu embarcación, garantizando que obtengas el máximo rendimiento de esta tecnología probada en miles de navegaciones.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3158826592.jpeg"
                alt="Tecnología Vektor2 WinSail"
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
            VENTAJAS VEKTOR2™ CON WINSAIL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <DollarSign className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Accesibilidad WinSail</h3>
              <p className="text-gray-600">WinSail hace accesible la tecnología de fibras continuas OneSails con la mejor relación calidad-precio del mercado.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Layers className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Vela de Una Pieza</h3>
              <p className="text-gray-600">Sin paneles, sin costuras débiles. WinSail te garantiza la integridad estructural superior de las velas continuas.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Zap className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Fibras Endumax</h3>
              <p className="text-gray-600">WinSail te ofrece la innovación Endumax UHMWPE, superior al aramid en resistencia UV, flexión y durabilidad.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Target className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Control de Forma Superior</h3>
              <p className="text-gray-600">La tecnología WinSail/OneSails garantiza mejor control de forma que las velas paneladas tradicionales.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Star className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Servicio WinSail</h3>
              <p className="text-gray-600">Asesoramiento técnico especializado de WinSail para optimizar tu configuración Vektor2™.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <TrendingUp className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Rendimiento Comprobado</h3>
              <p className="text-gray-600">Más de 20 años de desarrollo OneSails disponible através de WinSail para navegantes exigentes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            INNOVACIÓN EN CONSTRUCCIÓN DE FIBRAS
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Image
                  src="https://ext.same-assets.com/726020858/4097650986.svg"
                  alt="Vektor2 fiber layout"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <h3 className="text-2xl font-bold text-onesails-navy">Diseño Vektor2™</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy">Ventajas WinSail con Vektor2™:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Cintas pequeñas de una sola fibra:</strong> Máximo aprovechamiento estructural</li>
                  <li>• <strong>Tensión uniforme:</strong> Distribución equilibrada de cargas en flexión</li>
                  <li>• <strong>Micro-distribución amplia:</strong> Control completo de forma en toda la vela</li>
                  <li>• <strong>Independencia estructural:</strong> Cada elemento trabaja de forma optimal</li>
                </ul>
                <div className="bg-onesails-blue/10 p-4 rounded mt-4">
                  <p className="text-sm text-onesails-navy">
                    <strong>Garantía WinSail:</strong> Mejor distribución de cargas que sistemas convencionales
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Image
                  src="https://ext.same-assets.com/726020858/2594584494.svg"
                  alt="Conventional fiber layout"
                  width={80}
                  height={80}
                  className="mr-4"
                />
                <h3 className="text-2xl font-bold text-onesails-navy">Construcción Convencional</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy">Limitaciones que WinSail supera:</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Cintas anchas multi-fibra:</strong> Hasta 5 fibras por cinta</li>
                  <li>• <strong>Tensión desigual:</strong> Mayor carga en fibras exteriores</li>
                  <li>• <strong>Distribución limitada:</strong> Menor control de forma</li>
                  <li>• <strong>Dependencia estructural:</strong> Puntos débiles inherentes</li>
                </ul>
                <div className="bg-red-50 p-4 rounded mt-4">
                  <p className="text-sm text-red-800">
                    <strong>Problema evitado por WinSail:</strong> Diferencias de tensión entre fibras causan deformaciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            OPCIONES DE FIBRA VEKTOR2™ EN WINSAIL
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Carbono Alto Rendimiento</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>WinSail recomienda para:</strong> Regatas de alta competición donde cada gramo y décima de estiramiento cuenta.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-onesails-navy mb-2">Características:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Relación peso/estiramiento extremadamente baja</li>
                    <li>• Máximo rendimiento competitivo</li>
                    <li>• Ideal para yates de regata de alto nivel</li>
                    <li>• Servicio técnico especializado WinSail</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Endumax UHMWPE</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>WinSail recomienda para:</strong> Navegación de crucero deportivo y regatas que priorizan durabilidad y rendimiento a largo plazo.
                </p>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold text-onesails-navy mb-2">Ventajas exclusivas:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Resistencia superior a flexión y UV</li>
                    <li>• Durabilidad excepcional en ambiente marino</li>
                    <li>• Mejor rendimiento que aramid tradicional</li>
                    <li>• Soporte continuo WinSail garantizado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            CONFIGURACIONES BASE VEKTOR2™
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <Image
                src="https://ext.same-assets.com/726020858/2300378946.webp"
                alt="Gran Prix Base Scrim"
                width={300}
                height={200}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">GRAN PRIX Base Scrim</h3>
              <p className="text-gray-600 mb-4">
                Base de alto rendimiento con filamentos no tejidos para máxima resistencia a la abrasión con mínimo peso.
              </p>
              <div className="bg-onesails-blue/10 p-4 rounded">
                <p className="text-sm text-onesails-navy">
                  <strong>WinSail recomienda:</strong> Velas de regata de alto nivel
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Image
                src="https://ext.same-assets.com/726020858/889952859.webp"
                alt="Racing Base Scrim"
                width={300}
                height={200}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">RACING Base Scrim</h3>
              <p className="text-gray-600 mb-4">
                Perfect para velas code enrollables y monocascos de regata pequeños. Ligero, bajo estiramiento, cero absorción de agua.
              </p>
              <div className="bg-onesails-blue/10 p-4 rounded">
                <p className="text-sm text-onesails-navy">
                  <strong>WinSail recomienda:</strong> One design y regatas de club
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Image
                src="https://ext.same-assets.com/726020858/1795902995.webp"
                alt="Endurance Base Scrim"
                width={300}
                height={200}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">ENDURANCE Base Scrim</h3>
              <p className="text-gray-600 mb-4">
                Film y tafetán ligero crean una vela muy robusta con excelente longevidad para crucero intensivo.
              </p>
              <div className="bg-onesails-blue/10 p-4 rounded">
                <p className="text-sm text-onesails-navy">
                  <strong>WinSail recomienda:</strong> Crucero y navegación familiar
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
              POR QUÉ ELEGIR WINSAIL PARA VEKTOR2™
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Más de 20 años perfeccionando el acceso a tecnología OneSails en el Mediterráneo
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Tecnología Exclusiva</h3>
              <p className="opacity-90 text-sm">WinSail: acceso directo a 15+ años de desarrollo OneSails</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Rendimiento</h3>
              <p className="opacity-90 text-sm">WinSail garantiza control de forma superior vs velas paneladas</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Calidad</h3>
              <p className="opacity-90 text-sm">Estándares máximos con componentes seleccionados por WinSail</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Diseño</h3>
              <p className="opacity-90 text-sm">WinSail: análisis continuo y formas optimizadas</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Servicio</h3>
              <p className="opacity-90 text-sm">Expertos WinSail para soporte integral</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para acceder a Vektor2™?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con <strong>WinSail Alicante</strong> para la mejor relación calidad-precio en tecnología de fibras continuas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto Vektor2™
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
