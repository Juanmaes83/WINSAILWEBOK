import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Palette, Trophy, Users, Smartphone, Database, Activity, Wifi, Clock, Navigation } from 'lucide-react'

export default function OneSDPage() {
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
            <span className="text-gray-900">OneSD</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                OneSD™
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                Tecnología OneSD™ para la Transmisión de Datos de la Vela
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                WinSail distribuye la revolucionaria tecnología OneSD de OneSails:
                el primer fabricante de velas en el mundo en ofrecer velas con
                chip electrónico encapsulado en la membrana como estándar.
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
                src="https://ext.same-assets.com/726020858/2020065014.jpeg"
                alt="OneSD Technology WinSail OneSails"
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
            <h2 className="text-3xl font-bold mb-4">Primera Tecnología de Velas Inteligentes del Mundo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Junto con la introducción de las velas 4T FORTE, WinSail distribuye la tecnología OneSD
              de OneSails: velas con chip electrónico encapsulado como estándar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-4 text-primary">Microchip OneSD Integrado</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El microchip OneSD que distribuye WinSail llevará datos que ayudarán al usuario final
                  y a la red OneSails a identificar y monitorear la vela a lo largo de su vida útil.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Identificación única:</strong> Cada vela tiene su identificador registrado</li>
                  <li>• <strong>Datos de diseño:</strong> Información técnica completa encapsulada</li>
                  <li>• <strong>Lectura simple:</strong> Coloque un dispositivo cerca del chip para leer datos</li>
                  <li>• <strong>Integración total:</strong> Encapsulado en la membrana 4T FORTE</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="font-bold text-primary mb-3">Tecnología Pionera Mundial</h4>
                <p className="text-gray-700 leading-relaxed">
                  WinSail ofrece acceso exclusivo a esta tecnología: OneSails es el primer fabricante
                  de velas en el mundo en ofrecer velas con chip electrónico encapsulado
                  en la membrana como estándar en todas las velas 4T FORTE.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4">Uso Actual</h3>
                <p className="text-gray-700 mb-4">
                  Actualmente es una herramienta utilizada internamente entre los talleres OneSails,
                  pero pronto se introducirá una versión PRO del chip OneSD.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild size="sm" variant="outline">
                    <Link href="http://onesails.com/media//wysiwyg/onesails/technology/onesd-guide.pdf" target="_blank">
                      Cómo Funciona
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="http://onesd.onesails.com/onesail/" target="_blank">
                      Login Page
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Database className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4">Futuro PRO</h3>
                <p className="text-gray-700">
                  La versión PRO ofrecerá características importantes para el propietario
                  con grabación en tiempo real de la actividad de la vela.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OneSD PRO Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">OneSD PRO: El Futuro de las Velas Inteligentes</h2>
            <p className="text-xl text-gray-600">
              WinSail te dará acceso a las características avanzadas de OneSD PRO
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Activity className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Grabación en Tiempo Real</h3>
              <p className="text-gray-600">
                Grabación en tiempo real de la actividad de la vela cuando está
                conectada a los sistemas a bordo de tu embarcación.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Medición UV</h3>
              <p className="text-gray-600">
                Medición de las horas de exposición a los rayos UV para
                monitorear el desgaste y planificar el mantenimiento.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Navigation className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Contador de Maniobras</h3>
              <p className="text-gray-600">
                Registro del número de viradas y cambios de bordos realizados
                para análisis de uso y rendimiento.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seguimiento de Uso</h3>
              <p className="text-gray-600">
                Todo registrado con el objetivo de hacer un seguimiento del uso
                y mejorar el rendimiento de la vela.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Wifi className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Conectividad a Bordo</h3>
              <p className="text-gray-600">
                Vinculación con los sistemas a bordo para monitoreo
                continuo y análisis de datos en tiempo real.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Experiencia Mejorada</h3>
              <p className="text-gray-600">
                Toda la información recopilada mejora la experiencia del propietario
                y optimiza el rendimiento de la vela.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cómo Funciona OneSD con WinSail</h2>
            <p className="text-xl text-gray-600">
              Proceso simple y tecnología avanzada integrada en cada vela
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Encapsulación</h3>
                <p className="text-gray-700">
                  El microchip OneSD se encapsula directamente en la membrana 4T FORTE
                  durante el proceso de fabricación, integrándose perfectamente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Lectura de Datos</h3>
                <p className="text-gray-700">
                  Simplemente coloque un dispositivo adecuado cerca del chip
                  para leer el identificador registrado y los datos de diseño.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Monitoreo Continuo</h3>
                <p className="text-gray-700">
                  La red OneSails y el usuario pueden identificar y monitorear
                  la vela a lo largo de toda su vida útil.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Desarrollado en Cooperación</h3>
              <p className="text-gray-700 text-center leading-relaxed">
                OneSD™ se desarrolla en cooperación con IRIG by Weflex, combinando la experiencia
                en fabricación de velas de OneSails con tecnología avanzada de chips electrónicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Accede a OneSD</h2>
            <p className="text-xl text-gray-600">
              Recursos y herramientas disponibles para clientes WinSail
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-3">Guía de Uso</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Aprende cómo funciona la tecnología OneSD y cómo sacar el máximo provecho.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="http://onesails.com/media//wysiwyg/onesails/technology/onesd-guide.pdf" target="_blank">
                    Descargar Guía
                  </Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-3">Portal Web</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Accede al portal OneSD para gestionar y monitorear tus velas inteligentes.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="http://onesd.onesails.com/onesail/" target="_blank">
                    Ir al Portal
                  </Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className="font-bold mb-3">App Móvil</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Descarga la aplicación móvil para acceso rápido a los datos de tu vela.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="http://onesd.onesails.com/onesail/" target="_blank">
                    Descargar App
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose WinSail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail para Tecnología OneSD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              WinSail como distribuidor oficial OneSails garantiza acceso a la primera
              tecnología de velas inteligentes del mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Mundial Pionera</h3>
              <p className="text-gray-600">
                WinSail distribuye la tecnología OneSD: primer fabricante de velas
                en el mundo con chip electrónico encapsulado como estándar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integración 4T FORTE</h3>
              <p className="text-gray-600">
                Acceso exclusivo a velas 4T FORTE con tecnología OneSD
                integrada en la membrana de manera estándar.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Database className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Monitoreo Completo</h3>
              <p className="text-gray-600">
                Seguimiento de la vela durante toda su vida útil con datos
                de diseño y actividad registrados continuamente.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Activity className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Futuro OneSD PRO</h3>
              <p className="text-gray-600">
                Acceso prioritario a las características avanzadas OneSD PRO
                con grabación en tiempo real y análisis detallado.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Soporte Especializado</h3>
              <p className="text-gray-600">
                Equipo WinSail especializado en tecnología OneSD para
                configuración, uso y aprovechamiento máximo de los datos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Red OneSails</h3>
              <p className="text-gray-600">
                Conexión directa con la red global OneSails para
                identificación, monitoreo y soporte técnico avanzado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Entra en la Era de las Velas Inteligentes
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Experimenta la tecnología OneSD de OneSails a través de WinSail.
            Sé parte de la primera generación de navegantes con velas inteligentes que monitorean
            su rendimiento y optimizan tu experiencia de navegación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Solicitar Vela OneSD <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contacto">
                Más Información WinSail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
