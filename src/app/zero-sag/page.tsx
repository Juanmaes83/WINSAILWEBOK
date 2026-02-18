import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Palette, Trophy, Users, Wind, Anchor, Zap, TrendingUp, Target, Activity } from 'lucide-react'

export default function ZeroSagPage() {
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
            <span className="text-gray-900">Zero Sag (ZS)</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Zero Sag (ZS)
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                Jibs con Grátil Estructurado - La Nueva Generación de Velas de Proa
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                WinSail presenta la revolucionaria tecnología Zero Sag de OneSails:
                jibs estructurados que eliminan virtualmente el combado del estay de proa,
                mejorando potencia y versatilidad para regata y crucero de alto rendimiento.
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
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Zero Sag Technology WinSail OneSails"
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
            <h2 className="text-3xl font-bold mb-4">La Revolución Zero Sag de WinSail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ZS (Zero Sag) es la nueva tecnología revolucionaria desarrollada por OneSails
              y distribuida por WinSail para potencia y versatilidad mejoradas en velas de proa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">Pioneeros en Tecnología Estructurada</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  WinSail distribuye la tecnología ZS de OneSails, pioneros en grátil estructurado
                  aplicado primero a velas downwind con el concepto IFS, siendo los primeros en
                  extender sus beneficios a spinnakers asimétricos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Tecnologías exclusivas:</strong> 4T FORTE y Vektor2</li>
                  <li>• <strong>5 años de testing:</strong> por equipos Campeones del Mundo ORC</li>
                  <li>• <strong>Probado en súper yates:</strong> ganadores de regatas offshore</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Cómo Funciona ZS</h4>
                <p className="text-gray-700 leading-relaxed">
                  WinSail ofrece jibs ZS que integran una estructura sólida de super alto módulo
                  en el grátil, transfiriendo hasta el 55% de la carga del estay de proa a la vela misma.
                  La rigidez transversal excepcional elimina virtualmente el combado del estay.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="https://ext.same-assets.com/726020858/2061704750.webp"
                alt="Zero Sag Structure Diagram"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-primary mb-3">Ventaja sobre Métodos Tradicionales</h4>
                <p className="text-gray-700">
                  El grátil estructurado permite controlar el combado del estay simplemente ajustando
                  la tensión del grátil del jib. A diferencia del backstay tradicional,
                  la tensión del grátil ZS no afecta la curvatura del mástil ni la forma de la mayor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por Qué ZS es Tan Potente y Versátil?</h2>
            <p className="text-xl text-gray-600">
              12 ventajas revolucionarias de los jibs Zero Sag distribuidos por WinSail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Wind className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Aerodinámica Mejorada</h3>
              <p className="text-sm text-gray-600">
                El diseño de grátil estructurado mantiene una forma suave y eficiente,
                mejorando el rendimiento en varias condiciones de viento.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Mejor Retención de Forma</h3>
              <p className="text-sm text-gray-600">
                La estructura en el grátil soporta mejor la forma diseñada,
                resultando en rendimiento más predecible y consistente.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Más Fácil de Trimar</h3>
              <p className="text-sm text-gray-600">
                Los jibs estructurados son más fáciles de trimar y ajustar,
                optimizando la forma para diferentes ángulos y condiciones.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Durabilidad Mejorada</h3>
              <p className="text-sm text-gray-600">
                Más duraderas gracias al refuerzo del grátil estructurado,
                con mayor vida útil comparado con velas de proa tradicionales.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Rango Aumentado</h3>
              <p className="text-sm text-gray-600">
                Los jibs ZS permiten mejor control de forma, proporcionando
                rango más amplio de uso y reduciendo cambios de vela.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Capacidad de Despotenciar</h3>
              <p className="text-sm text-gray-600">
                Mejor capacidad de despotenciar ajustando tensión de driza o grátil,
                para mejor control en vientos fuertes sin sacrificar forma.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Anchor className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Control de Combado</h3>
              <p className="text-sm text-gray-600">
                Control mejorado del combado del estay de proa a través de la tensión del grátil,
                reduciendo necesidad de cargas altas en backstay.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Cargas Reducidas</h3>
              <p className="text-sm text-gray-600">
                Todo el aparejo tendrá menor estrés para obtener
                el mismo o incluso mejor rendimiento.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Escora Reducida</h3>
              <p className="text-sm text-gray-600">
                Mantener forma más eficiente reduce escora en ceñida,
                mejorando comodidad y estabilidad general del barco.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Menos Cambios de Vela</h3>
              <p className="text-sm text-gray-600">
                Diseñados para mantener forma óptima en rango más amplio de condiciones,
                ahorrando tiempo y esfuerzo en cambios.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Menos Ajustes de Aparejo</h3>
              <p className="text-sm text-gray-600">
                Forma más consistente reduce necesidad de ajustes de tensión
                de aparejo para lograr rendimiento óptimo.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-bold mb-3">Valor de Inversión</h3>
              <p className="text-sm text-gray-600">
                Aunque el costo inicial sea mayor, la longevidad y beneficios
                de rendimiento hacen que valga la inversión a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cómo Funciona la Tecnología ZS de WinSail</h2>
            <p className="text-xl text-gray-600">
              El grátil estructurado hecho con tecnología exclusiva 4T FORTE de OneSails
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-6">Proceso de Control del Combado</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El grátil estructurado del jib fabricado con la tecnología exclusiva 4T FORTE
                    permite que el combado del estay de proa sea controlado simplemente ajustando
                    la tensión del grátil del jib.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Gracias a esta estructura y diseño específicos, el grátil del jib es capaz
                    de proyectarse hacia adelante. Una ventaja añadida sobre el ajuste tradicional
                    del backstay: la tensión del grátil del jib no afecta la curvatura del mástil
                    ni la forma de la vela mayor.
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Beneficios Clave</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Control directo del combado del estay</li>
                    <li>• Proyección del grátil hacia adelante</li>
                    <li>• No afecta curvatura del mástil</li>
                    <li>• Independiente de la forma de la mayor</li>
                    <li>• Integración perfecta con 4T FORTE</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Tecnología 4T FORTE Exclusiva</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los jibs ZS de WinSail utilizan la tecnología exclusiva 4T FORTE de OneSails
                con fibras continuas que permite la integración perfecta de la estructura
                dentro de la membrana compuesta.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Integración en la Laminación</h4>
                  <p className="text-gray-700 text-sm">
                    La integración en la laminación permite una transición gradual de las cargas
                    dentro de la vela y el consecuente control preciso del perfil aerodinámico.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Control de Perfil</h4>
                  <p className="text-gray-700 text-sm">
                    Control exacto del perfil aerodinámico a través de la carga en el grátil,
                    optimizando rendimiento en todas las condiciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Flying Jib: El Arma Secreta ZS en Rating ORC</h2>
            <p className="text-xl text-gray-600">
              La victoria del Italia Yachts 11.98 en el Campeonato Mundial ORC con tecnología OneSails distribuida por WinSail
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/726020858/1801658192.jpeg"
                alt="Italia Yachts 11.98 with ZS Flying Jib"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Foto cortesía de: Italia Yachts</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Testimonial de Sandro Montefusco</h3>
                <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                  "Decidimos construir este flying jib: enrollable, con grátil autoportante (sin cable)
                  gracias a la tecnología IFS exclusiva de OneSails. Aumentamos el área de vela de proa
                  en 20m² comparado con el jib más grande, y gracias al medio-grátil por encima del 61%
                  la penalización en rating fue bastante moderada."
                </blockquote>
                <cite className="text-sm text-gray-600">
                  - Sandro Montefusco, Timonel, Diseñador de Velas y Ganador del Título Mundial
                </cite>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                <h4 className="font-bold text-primary mb-3">Resultados Extraordinarios</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>+20m²</strong> de área adicional vs jib más grande</li>
                  <li>• <strong>Penalización moderada</strong> en rating ORC</li>
                  <li>• <strong>VMG superior</strong> hasta 5 nudos TWS vs J1</li>
                  <li>• <strong>Victoria decisiva</strong> en regata offshore</li>
                  <li>• <strong>Tecnología Vektor2 Carbon</strong> OneSails</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Palabras del CEO de OneSails</h4>
                <blockquote className="text-gray-700 italic">
                  "Nuestras velas de proa IFS autoportantes están demostrando ser velas ganadoras
                  en muchos aspectos, volviéndose cada vez más populares gracias a los beneficios
                  combinados de rendimiento y rating que ofrecen."
                </blockquote>
                <cite className="text-sm text-gray-600 mt-2 block">- Dede de Luca, CEO OneSails</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WinSail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail para Tecnología Zero Sag</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WinSail como distribuidor oficial OneSails garantiza acceso a la tecnología
              ZS más avanzada con servicio especializado local
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Exclusiva</h3>
              <p className="text-gray-600">
                WinSail distribuye la tecnología ZS desarrollada exclusivamente por OneSails
                con 5 años de testing en equipos Campeones del Mundo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados Comprobados</h3>
              <p className="text-gray-600">
                Tecnología ganadora de Campeonatos Mundiales ORC y probada en súper yates
                ganadores de regatas offshore.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología 4T FORTE</h3>
              <p className="text-gray-600">
                Acceso exclusivo a la tecnología 4T FORTE y Vektor2 de OneSails
                con fibras continuas para máximo rendimiento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wind className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovación Pionera</h3>
              <p className="text-gray-600">
                OneSails pionero en grátil estructurado desde IFS,
                ahora aplicado a jibs con beneficios revolucionarios.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Asesoramiento Experto</h3>
              <p className="text-gray-600">
                Equipo WinSail especializado en tecnología ZS para optimizar
                el rendimiento de tu embarcación en regata y crucero.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Servicio Integral</h3>
              <p className="text-gray-600">
                Desde el diseño hasta el mantenimiento: WinSail te acompaña
                en toda la experiencia Zero Sag OneSails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Elimina el Combado con Zero Sag
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Experimenta la tecnología revolucionaria Zero Sag de OneSails. WinSail te ofrece
            jibs estructurados con control directo del combado del estay y rendimiento superior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Solicitar Presupuesto ZS <ArrowRight className="ml-2 h-5 w-5" />
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
