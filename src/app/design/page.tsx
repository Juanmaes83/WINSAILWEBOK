import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Palette, Trophy, Users, Database, Brain, Target, BarChart3, Lightbulb, Compass } from 'lucide-react'

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/tecnologia" className="hover:text-primary">Tecnología</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diseño</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Diseño de Vanguardia
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                Forma, Diseño y Análisis - La Excelencia Técnica de OneSails a través de WinSail
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                WinSail distribuye la excelencia en diseño de OneSails: las mejores formas de vela
                son el resultado de análisis continuo y experiencia de más de 15 años en investigación
                y desarrollo de tecnologías exclusivas.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/solicite-un-presupuesto">
                    Solicitar Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
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
                src="https://ext.same-assets.com/726020858/4052565436.jpeg"
                alt="OneSails Design Technology WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">La Filosofía de Diseño que Distribuye WinSail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              OneSails está a la vanguardia de la industria de fabricación de velas,
              invirtiendo continuamente en investigación y desarrollo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">Análisis Continuo y Experiencia</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  WinSail distribuye las mejores formas de vela OneSails, resultado de análisis continuo
                  y experiencia. El éxito de este enfoque se confirma con la gran cantidad de trofeos
                  de regatas que los clientes han ganado a nivel nacional, internacional y campeonatos mundiales.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Base de datos compartida:</strong> Desde Optimist campeón mundial hasta velas Maxi</li>
                  <li>• <strong>Detalles de construcción:</strong> Acabados y fotos de velas navegando</li>
                  <li>• <strong>Actualización en tiempo real:</strong> Tecnología de vanguardia constante</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Acceso Exclusivo con WinSail</h4>
                <p className="text-gray-700 leading-relaxed">
                  Todos los diseñadores OneSails tienen acceso a una base de datos compartida que contiene
                  numerosos diseños de velas. Esta base de datos es crucial para que WinSail ofrezca
                  la tecnología de velas más avanzada.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="https://ext.same-assets.com/726020858/1466170002.jpeg"
                alt="Sail Design Analysis"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <Image
                src="https://ext.same-assets.com/726020858/1408678042.webp"
                alt="CFD Analysis"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Technology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tecnología FSI: Más Allá del Análisis Tradicional</h2>
            <p className="text-xl text-gray-600">
              WinSail ofrece acceso a la tecnología Fluid-Structure Interaction de OneSails
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Base de Datos FSI Exclusiva</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Al desarrollar la tecnología de membrana 4T Forte, OneSails consideró crucial crear
                  una Base de Datos de Interacción Fluido-Estructura (FSI) para moldear y mejorar
                  la tecnología 4T Forte con el tiempo.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">FSI vs CFD Tradicional</h4>
                    <p className="text-sm text-gray-600">
                      FSI va más allá del análisis aerodinámico tradicional (CFD),
                      permitiendo simulación realista de todos los factores.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Factores Considerados</h4>
                    <p className="text-sm text-gray-600">
                      Interacción aparejo-vela, características de flujo de aire,
                      y deformación del material.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Estudios Personalizados FSI</h4>
                <p className="text-gray-700 leading-relaxed">
                  WinSail puede solicitar estudios FSI individualizados a través de OneSails,
                  adaptados a tus necesidades específicas. Esto garantiza que los clientes obtengan
                  solo lo mejor, sin dejar nada al azar.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="https://ext.same-assets.com/726020858/2868480922.jpeg"
                alt="FSI Analysis Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-primary mb-3">Laboratorio FSI Central</h4>
                <p className="text-gray-700">
                  El laboratorio FSI central de OneSails puede trabajar en estrecho contacto
                  con diseñadores de embarcaciones y riggers para lograr un proyecto completamente
                  integrado donde cada elemento está armonizado entre sí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula 40 Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Estudio CFD: Formula 40 Cat</h2>
            <p className="text-xl text-gray-600">
              Dinámica de Fluidos Computacional aplicada a catamaranes de alta velocidad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Análisis CFD Avanzado</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    WinSail distribuye tecnología OneSails respaldada por estudios CFD (Computational Fluid Dynamics)
                    aplicados a embarcaciones de alto rendimiento como el Formula 40 Cat,
                    optimizando el rendimiento aerodinámico de las velas.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Análisis de flujo de aire completo</li>
                    <li>• Optimización de formas para máximo rendimiento</li>
                    <li>• Simulación de condiciones reales de navegación</li>
                    <li>• Validación con datos de pruebas en el agua</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Beneficios del Estudio CFD</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-primary mr-3" />
                      <span className="text-gray-700">Predicción precisa de rendimiento</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-5 w-5 text-primary mr-3" />
                      <span className="text-gray-700">Optimización de formas de vela</span>
                    </div>
                    <div className="flex items-center">
                      <Lightbulb className="h-5 w-5 text-primary mr-3" />
                      <span className="text-gray-700">Innovación basada en datos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Diseñadores OneSails</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navegantes que dedican su tiempo día a día al desarrollo incesante de la excelencia técnica OneSails.
              Con un equipo de diseño como este, WinSail puede ofrecer respuestas a todas las preguntas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dede De Luca */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/4281135784.webp"
                alt="Dede De Luca"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Dede De Luca</h3>
              <p className="text-sm text-gray-600">
                Excelente navegante, a menudo solicitado por equipos de regata de élite mundial.
                Dede fue trimmer de velas y gerente del programa de velas para el desafío Mascalzone Latinos
                en la 32ª Copa América.
              </p>
            </div>

            {/* Flavio Formosa */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/1956482389.webp"
                alt="Flavio Formosa"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Flavio Formosa</h3>
              <p className="text-sm text-gray-600">
                Director Técnico y de Diseño del Grupo OneSails. Velero desde 1981,
                Flavio tiene vasta experiencia en construcción de membranas estructurales y diseño de velas.
                Está a cargo del laboratorio de análisis aero-estructural CFD/FSI.
              </p>
            </div>

            {/* Christian Binder */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/2601705761.webp"
                alt="Christian Binder"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Christian Binder</h3>
              <p className="text-sm text-gray-600">
                Navegante olímpico con enorme experiencia, Christian se especializa en one-designs offshore
                y multicascos, así como en la gestión de campañas de regata en todos los niveles.
              </p>
            </div>

            {/* Sandro Montefusco */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/3966998368.webp"
                alt="Sandro Montefusco"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Sandro Montefusco</h3>
              <p className="text-sm text-gray-600">
                Navegante olímpico, ganador de muchos títulos nacionales e internacionales en clases
                one-design y offshore. Compitió en la Copa América con Luna Rossa.
                Su experiencia abarca 360 grados, igual que sus habilidades de diseño.
              </p>
            </div>

            {/* Paul Eldrid */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/1695309191.webp"
                alt="Paul Eldrid"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Paul Eldrid</h3>
              <p className="text-sm text-gray-600">
                Navegante consumado y regatista de primera clase, sus diseños de velas han impulsado
                una impresionante lista de yates costeros y offshore para ganar eventos importantes mundialmente.
                Paul es también un gran conferenciante y autor de las celebradas guías de trimming y regata OneSails.
              </p>
            </div>

            {/* Karlo Kuret */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <Image
                src="https://ext.same-assets.com/726020858/2010306502.webp"
                alt="Karlo Kuret"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg mb-2">Karlo Kuret</h3>
              <p className="text-sm text-gray-600">
                Ingeniero Mecánico, cuatro veces navegante olímpico en la clase Finn,
                Karlo fue trimmer de velas a bordo del +39 Challenge en la 32ª Copa América.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Y muchos más diseñadores expertos:</strong> Sofus Pedersen, Zeljko Perovic, Marco Haase,
              Peter Kay, John Parker, Wilf Chaplin, Nathan Steffenoni, Daniele Ricci, Sanjin Perovi...
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proceso de Diseño Avanzado</h2>
            <p className="text-xl text-gray-600">
              El metodología que hace a WinSail distribuidor de la tecnología de velas más avanzada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-3">Base de Datos Compartida</h3>
              <p className="text-sm text-gray-600">
                Acceso a diseños desde Optimist campeón mundial hasta velas Maxi de una sola pieza,
                con detalles de construcción y acabados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-3">Análisis FSI</h3>
              <p className="text-sm text-gray-600">
                Interacción Fluido-Estructura que va más allá del CFD tradicional,
                considerando todos los factores que afectan la forma de la vela.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-3">Estudios Personalizados</h3>
              <p className="text-sm text-gray-600">
                Análisis FSI individualizados adaptados a necesidades específicas,
                garantizando que nada se deje al azar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="font-bold mb-3">Proyecto Integrado</h3>
              <p className="text-sm text-gray-600">
                Colaboración estrecha con diseñadores de embarcaciones y riggers
                para proyectos completamente armonizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WinSail Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Qué Elegir el Diseño OneSails a través de WinSail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WinSail como distribuidor oficial OneSails garantiza acceso a la tecnología
              de diseño más avanzada con servicio local especializado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Exclusiva</h3>
              <p className="text-gray-600">
                WinSail distribuye tecnologías OneSails desarrolladas durante más de 15 años
                para hacer realidad velas de hilos continuos de una sola pieza.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Resultados Comprobados</h3>
              <p className="text-gray-600">
                Gran cantidad de trofeos de regatas ganados por clientes OneSails
                en competencias nacionales, internacionales y campeonatos mundiales.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Calidad Superior</h3>
              <p className="text-gray-600">
                Velas diseñadas y fabricadas con los más altos estándares OneSails,
                utilizando componentes cuidadosamente seleccionados.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Análisis Avanzado</h3>
              <p className="text-gray-600">
                Acceso a tecnología FSI y CFD de OneSails para análisis aero-estructural
                que va más allá del análisis tradicional.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Equipo Experto</h3>
              <p className="text-gray-600">
                Acceso al equipo de diseñadores OneSails con experiencia olímpica,
                Copa América y campeonatos mundiales.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Servicio Local</h3>
              <p className="text-gray-600">
                WinSail combina la excelencia en diseño OneSails con servicio
                personalizado y soporte técnico local especializado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experimenta el Diseño de Vanguardia
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Accede a la tecnología de diseño más avanzada de OneSails a través de WinSail.
            Desde análisis FSI hasta equipos de diseñadores olímpicos, obtén las mejores formas de vela disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Solicitar Diseño Personalizado <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contacto">
                Consultar Diseño WinSail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
