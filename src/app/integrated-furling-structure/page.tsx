import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Palette, Trophy, Users, Wind, Anchor, Zap, ChevronDown } from 'lucide-react'

export default function IntegratedFurlingStructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/tecnologia" className="hover:text-primary">Tecnología</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Estructura de Enrollado Integrada (IFS)</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Estructura de Enrollado Integrada (IFS)
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                La Nueva Generación de Velas Enrollables
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                WinSail presenta el revolucionario IFS de OneSails: un nuevo estilo de construcción
                de velas de proa y downwind que utiliza tecnología de fibra continua para crear
                velas enrollables sin necesidad de cable anti-torsión pesado.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/solicite-un-presupuesto">
                    Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  <Link href="/contacto">
                    Contactar WinSail
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="IFS Technology WinSail OneSails"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Revoluciona tu Navegación con IFS de WinSail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las velas IFS distribuidas por WinSail están diseñadas para incorporar una red de fibras
              estructurales continuas OneSails, sustituyendo eficazmente el cable anti-torsión
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="https://ext.same-assets.com/3051434774/4027741850.svg"
                alt="IFS Structure Diagram"
                width={500}
                height={400}
                className="w-full bg-gray-100 p-6 rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">Las Nuevas Velas Downwind Sin Cable</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  WinSail distribuye velas IFS ligeras, versátiles y fáciles de maniobrar que
                  revolucionan la navegación con tecnología OneSails de fibras continuas.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mejor rendimiento aerodinámico</strong></li>
                  <li>• <strong>Estructura integrada</strong> que permite enrollado sin cable</li>
                  <li>• <strong>Reducción del 35%</strong> en tensión del gratil</li>
                  <li>• <strong>Vela más ligera</strong> sin cable anti-torsión</li>
                  <li>• <strong>Fácil manejo</strong> y almacenamiento</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Ventajas Clave del IFS WinSail</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>✓ Sin cable anti-torsión</div>
                  <div>✓ Perfil estable de sables</div>
                  <div>✓ Reducción de cargas</div>
                  <div>✓ Mejor proyección del estay</div>
                  <div>✓ Acabados personalizados</div>
                  <div>✓ Fácil plegado y guardado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">8 Ventajas Revolucionarias del IFS</h2>
            <p className="text-xl text-gray-600">
              Descubre por qué WinSail recomienda la tecnología IFS de OneSails
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Wind className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">1. Mejor Rendimiento</h3>
              <p className="text-sm text-gray-600">Aerodinámico superior sin cable pesado</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">2. Estructura Integrada</h3>
              <p className="text-sm text-gray-600">Enrollado sin cable anti-torsión</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ChevronDown className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">3. Reducción de Tensión</h3>
              <p className="text-sm text-gray-600">35% menos tensión en el gratil</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Anchor className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">4. Mejor Proyección</h3>
              <p className="text-sm text-gray-600">Estay hacia adelante para ángulos abiertos</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">5. Fácil Manejo</h3>
              <p className="text-sm text-gray-600">Ligera y fácil de plegar</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">6. Perfil Estable</h3>
              <p className="text-sm text-gray-600">Sables estables según reglas ORC e IRC</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">7. Peso Reducido</h3>
              <p className="text-sm text-gray-600">Sin cable anti-torsión pesado</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-2">8. Acabados a Medida</h3>
              <p className="text-sm text-gray-600">Personalizables según necesidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* IFS Codes Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Códigos de Velas IFS Disponibles en WinSail</h2>
            <p className="text-xl text-gray-600">
              Especificaciones técnicas completas para cada aplicación náutica
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Código</th>
                    <th className="px-4 py-3 text-left">Actividad</th>
                    <th className="px-4 py-3 text-center">TWS (Nudos)</th>
                    <th className="px-4 py-3 text-center">TWA (Grados)</th>
                    <th className="px-4 py-3 text-left">Material</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">A055/065/075</td>
                    <td className="px-4 py-3">Regata</td>
                    <td className="px-4 py-3 text-center">2-20</td>
                    <td className="px-4 py-3 text-center">50-110</td>
                    <td className="px-4 py-3">Membrana o Laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">AF0</td>
                    <td className="px-4 py-3">Regata</td>
                    <td className="px-4 py-3 text-center">6-25</td>
                    <td className="px-4 py-3 text-center">55-120</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">AF1</td>
                    <td className="px-4 py-3">Regata</td>
                    <td className="px-4 py-3 text-center">4-15</td>
                    <td className="px-4 py-3 text-center">70-130</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">AF2</td>
                    <td className="px-4 py-3">Regata</td>
                    <td className="px-4 py-3 text-center">10-22</td>
                    <td className="px-4 py-3 text-center">115-165</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">AF3</td>
                    <td className="px-4 py-3">Regata</td>
                    <td className="px-4 py-3 text-center">12-26</td>
                    <td className="px-4 py-3 text-center">110-145</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-4 py-3 font-medium">IFS FFR</td>
                    <td className="px-4 py-3 font-medium">Crucero</td>
                    <td className="px-4 py-3 text-center">4-23</td>
                    <td className="px-4 py-3 text-center">55-140</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-4 py-3 font-medium">IFS PFR</td>
                    <td className="px-4 py-3 font-medium">Crucero</td>
                    <td className="px-4 py-3 text-center">8-23</td>
                    <td className="px-4 py-3 text-center">90-170</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-4 py-3 font-medium">IFS ASY</td>
                    <td className="px-4 py-3 font-medium">Crucero</td>
                    <td className="px-4 py-3 text-center">8-23</td>
                    <td className="px-4 py-3 text-center">90-170</td>
                    <td className="px-4 py-3">Nylon con puño de laminado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Recommendations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sugerencias y Recomendaciones IFS de WinSail</h2>
            <p className="text-xl text-gray-600">
              Guía experta para el uso óptimo de velas IFS distribuidas por WinSail
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                  Tensión del Luff
                </h3>
                <p className="text-gray-700">
                  La vela no necesita demasiada tensión en el luff para un enrollado efectivo,
                  solo lo suficiente para que quede recta.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                  Enrollado Óptimo
                </h3>
                <p className="text-gray-700">
                  El mejor enrollado se logra cuando se navega a vientos muertos,
                  reduciendo al mínimo el viento aparente.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                  Manejo de la Driza
                </h3>
                <p className="text-gray-700">
                  Al enrollar, la driza no debe aflojarse por completo; mantener una ligera tensión,
                  acompañando el enrollado.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                  Dirección Consistente
                </h3>
                <p className="text-gray-700">
                  Se recomienda siempre enrollar la vela en la misma dirección para
                  un enrollado más suave y ajustado.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">5</span>
                  Control de la Parte Superior
                </h3>
                <p className="text-gray-700">
                  Hasta que la parte superior no comience a enrollarse, mantener tensión muy baja.
                  Aumentar tensión cuando empiece a girar.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">6</span>
                  Verificación Antes del Izado
                </h3>
                <p className="text-gray-700">
                  Antes de izar nuevamente, asegurarse de que la parte superior no se haya
                  desenrollado durante el descenso y almacenamiento.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">7</span>
                  Ajuste por Ángulo
                </h3>
                <p className="text-gray-700">
                  Una vez desplegada, ajustar la tensión según el ángulo de navegación:
                  más tensa para ceñir, más floja para ángulos abiertos.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">8</span>
                  Cuidado con la Tensión
                </h3>
                <p className="text-gray-700">
                  No apretar demasiado la driza para evitar daños que puedan afectar
                  al enrollador y otros herrajes.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="font-bold text-red-600 mb-3 flex items-center">
                  <span className="bg-red-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">9</span>
                  Límite de Viento
                </h3>
                <p className="text-red-700">
                  <strong>¡IMPORTANTE!</strong> No dejar izada cuando esté enrollada con
                  viento aparente superior a 12 nudos - podría desenrollarse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Flying Jib: El Arma Secreta IFS en Regatas ORC</h2>
            <p className="text-xl text-gray-600">
              La convincente victoria del Italia Yachts 11.98 con tecnología IFS de OneSails distribuida por WinSail
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/3051434774/4114783344.jpeg"
                alt="Italia Yachts 11.98 with IFS Flying Jib"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Foto cortesía de: Italia Yachts</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Testimonial de Sandro Montefusco</h3>
                <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                  "Decidimos sacrificar una de las cinco velas de proa permitidas para construir
                  este flying jib: enrollable, con luff autoportante sin cable gracias a la
                  exclusiva tecnología IFS de OneSails. Hemos aumentado el área de la vela de proa
                  en 20m² comparado con el jib más grande."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  - Sandro Montefusco, Timonel y Diseñador de Velas, Ganador del Campeonato Mundial ORC
                </cite>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Resultados Comprobados</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>+20m²</strong> de área adicional de vela de proa</li>
                  <li>• <strong>Penalización moderada</strong> en rating ORC</li>
                  <li>• <strong>VMG superior</strong> con TWS hasta 5 nudos</li>
                  <li>• <strong>Victoria decisiva</strong> en regata de altura</li>
                  <li>• <strong>Tecnología Vektor2 Carbon</strong> de OneSails</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 leading-relaxed">
                  <strong>WinSail distribuye esta tecnología ganadora:</strong> Las velas IFS están
                  demostrando ser velas ganadoras en muchos aspectos, volviéndose cada vez más populares
                  gracias a la combinación de rendimiento y ventajas en el rating que ofrecen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WinSail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail para Tecnología IFS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WinSail como distribuidor oficial OneSails garantiza acceso a la tecnología
              IFS más avanzada con servicio local especializado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Exclusiva</h3>
              <p className="text-gray-600">
                WinSail distribuye la tecnología IFS desarrollada exclusivamente por OneSails
                con fibras continuas estructurales integradas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados Comprobados</h3>
              <p className="text-gray-600">
                Tecnología ganadora en Campeonatos Mundiales ORC,
                disponible a través del servicio especializado WinSail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Calidad OneSails</h3>
              <p className="text-gray-600">
                WinSail asegura los más altos estándares OneSails en fabricación
                de velas IFS con fibras continuas de primera calidad.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wind className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovación Continua</h3>
              <p className="text-gray-600">
                OneSails a la vanguardia en I+D de velas enrollables,
                accesible a través de la red WinSail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Asesoramiento Experto</h3>
              <p className="text-gray-600">
                Equipo WinSail especializado en tecnología IFS para asesorarte
                en la selección del código perfecto para tu embarcación.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Servicio Integral</h3>
              <p className="text-gray-600">
                Desde el diseño hasta el mantenimiento: WinSail te acompaña
                en toda la experiencia IFS OneSails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Revoluciona tu Navegación con IFS
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Experimenta la tecnología revolucionaria IFS de OneSails. WinSail te ofrece
            velas enrollables sin cable, con reducción del 35% en tensión y máximo rendimiento aerodinámico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Solicitar Presupuesto IFS <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contacto">
                Asesoramiento WinSail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
