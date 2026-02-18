import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Star, Shield, Wrench, Palette, Trophy, Users, Layers, Zap, DollarSign, Target } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function TriradialCrossCutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span className="mx-2">/</span>
              <Link href="/tecnologia" className="hover:text-primary">Tecnología</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Triradial y Cross-Cut</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Triradial y Cross-Cut
                </h1>
                <h2 className="text-xl lg:text-2xl mb-6 text-blue-100">
                  Velas de Tejido Panelado - Soluciones tradicionales y confiables
                </h2>
                <p className="text-lg mb-8 text-blue-100">
                  WinSail ofrece las velas de tejido panelado de OneSails: una alternativa
                  económica y duradera a las tecnologías de filamentos continuos,
                  perfectas para navegación de crucero y uso intensivo.
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
                  src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Triradial Cross-Cut Technology WinSail OneSails"
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
              <h2 className="text-3xl font-bold mb-4">Velas Tradicionales con Tecnología Moderna</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Como alternativa a las opciones de filamentos continuos 4T FORTE, M3 y Vektor2,
                WinSail distribuye las velas tradicionales de tejido panelado OneSails
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Cross-Cut</h3>
                <p className="text-gray-600">
                  Cuando el presupuesto es clave. WinSail ofrece velas de corte transversal
                  simples, robustas y económicas para todo tipo de navegación.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Corte Radial</h3>
                <p className="text-gray-600">
                  Una solución confiable y equilibrada. WinSail distribuye velas más ligeras
                  con mayor estabilidad dimensional que las de corte transversal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Membranas</h3>
                <p className="text-gray-600">
                  La tecnología moderna. WinSail ofrece velas que mantienen su forma
                  eficientemente con hilos estructurales especializados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Cut Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Cross-Cut: Cuando el Presupuesto es Clave</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El corte transversal, o de paneles horizontales, es una forma de construir velas
                  simples y robustas que WinSail distribuye con tejidos OneSails de la más alta calidad.
                  Incluso hoy en día, los tejidos siguen siendo muy populares por su durabilidad y bajo costo.
                </p>

                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-primary mb-3">Tecnología de Tejidos WinSail</h3>
                  <p className="text-gray-700 mb-4">
                    Un tejido se compone de hilos longitudinales (urdimbre) y transversales (trama),
                    entrelazados en un ángulo de 90°. WinSail distribuye tejidos OneSails con
                    tecnologías avanzadas para compensar las cargas diagonales:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Heat Setting:</strong> Termofijado para mayor estabilidad</li>
                    <li>• <strong>Recubrimiento con resina:</strong> Resistencia diagonal mejorada</li>
                    <li>• <strong>Filamentos especializados:</strong> Según aplicación específica</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Tejidos OneSails Disponibles en WinSail</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Dacron HQ:</strong> Recomendado para navegación offshore o uso intensivo</li>
                    <li>• <strong>Dacron Premium:</strong> Para otros usos de crucero</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    <strong>Adecuado para:</strong> velas de hasta unos 35 metros cuadrados, con rendimiento aceptable.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://ext.same-assets.com/3051434774/2446840965.webp"
                  alt="Cross-Cut Sail Construction"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
                <Image
                  src="https://ext.same-assets.com/3051434774/4018710048.webp"
                  alt="Dacron Fabric Detail"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Radial Cut Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Image
                  src="https://ext.same-assets.com/3051434774/4286021698.webp"
                  alt="Pro Radial Fabric"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="https://ext.same-assets.com/3051434774/2513305632.webp"
                    alt="HydraNet Radial"
                    width={240}
                    height={180}
                    className="rounded-lg shadow-lg w-full"
                  />
                  <Image
                    src="https://ext.same-assets.com/3051434774/3645972209.webp"
                    alt="Laminate Structure"
                    width={240}
                    height={180}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Corte Radial: Solución Confiable y Equilibrada</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  El corte radial que distribuye WinSail permite fabricar velas más ligeras y con mayor
                  estabilidad dimensional que las de corte transversal. Los hilos del tejido y las costuras
                  se orientan a lo largo de las líneas de carga de la vela.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-primary mb-3">Tejidos Orientados en la Urdimbre</h3>
                    <p className="text-gray-700">
                      WinSail distribuye el Pro Radial (PR) de Dimension-Polyant a través de OneSails,
                      un entramado especial que reduce considerablemente el alargamiento inicial causado
                      por la ondulación del hilo.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-primary mb-3">Tejidos de Filamentos Mixtos</h3>
                    <p className="text-gray-700">
                      Los tejidos híbridos HydraNet Radial (HNR) disponibles en WinSail, compuestos por
                      fibras de poliéster entrelazadas con polietileno de alto módulo (UHMWPE),
                      tienen la vida útil más larga entre los materiales para velas.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
                    <h3 className="font-bold text-primary mb-3">Laminados</h3>
                    <p className="text-gray-700">
                      WinSail ofrece laminados donde los filamentos estructurales se encapsulan entre
                      dos capas de film, con recubrimientos protectores como taffet para mayor durabilidad.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Adecuado para:</strong> cruceros que buscan un buen compromiso entre durabilidad
                    y capacidad para mantener la forma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Membranes Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Membranas: La Tecnología Moderna</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Para velas que mantienen su forma de manera eficiente, WinSail distribuye
                membranas OneSails con hilos estructurales personalizados
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Filosofías de Fabricación</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En el desarrollo de nuevas técnicas de fabricación para velas de alta tecnología,
                    WinSail distribuye dos filosofías fundamentalmente diferentes desarrolladas por OneSails:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Hilos Continuos:</strong> 4T FORTE, M3 y Vektor2 (velas de una sola pieza)</li>
                    <li>• <strong>Paneladas:</strong> Vantage One (paneles planos laminados con costuras)</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Ventajas de las Membranas WinSail</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hilos estructurales siguen la distribución de fuerzas</li>
                    <li>• Diseño personalizado para cada vela</li>
                    <li>• Adecuadas para muchas millas manteniendo la forma</li>
                    <li>• Perfectas para cruceros y regatas exigentes</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://ext.same-assets.com/3051434774/1742348892.webp"
                  alt="Continuous vs Paneled Construction"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
                <Image
                  src="https://ext.same-assets.com/3051434774/3993515016.png"
                  alt="Laminate Structure Detail"
                  width={500}
                  height={200}
                  className="rounded-lg shadow-lg w-full bg-gray-100 p-4"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gray-50 p-6 rounded-lg inline-block">
                <p className="text-gray-700">
                  <strong>Adecuado para:</strong> cruceros y regatistas que buscan velas ligeras
                  y manejables con el mejor rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comparativa de Tecnologías WinSail</h2>
              <p className="text-xl text-gray-600">
                Encuentra la solución perfecta para tu embarcación y presupuesto
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-green-100 text-green-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Económica</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Cross-Cut</h4>
                    <p className="text-sm text-gray-600">Dacron HQ y Premium</p>
                    <p className="text-xs text-gray-500">Hasta 35m² - Presupuesto ajustado</p>
                  </div>
                  <div className="border-t pt-4">
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Máxima durabilidad</li>
                      <li>✓ Bajo costo inicial</li>
                      <li>✓ Fácil mantenimiento</li>
                      <li>✓ Ideal para crucero</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary">
                <div className="text-center mb-6">
                  <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Equilibrada</h3>
                  <div className="bg-primary text-white text-xs px-2 py-1 rounded-full inline-block mt-2">
                    RECOMENDADA
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Corte Radial</h4>
                    <p className="text-sm text-gray-600">Pro Radial y HydraNet</p>
                    <p className="text-xs text-gray-500">Compromiso perfecto</p>
                  </div>
                  <div className="border-t pt-4">
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Mayor estabilidad dimensional</li>
                      <li>✓ Peso reducido</li>
                      <li>✓ Mejor retención de forma</li>
                      <li>✓ Vida útil extendida</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 text-blue-800 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">Avanzada</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Membranas</h4>
                    <p className="text-sm text-gray-600">Laminados y composites</p>
                    <p className="text-xs text-gray-500">Máximo rendimiento</p>
                  </div>
                  <div className="border-t pt-4">
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Máximo rendimiento</li>
                      <li>✓ Forma personalizada</li>
                      <li>✓ Peso mínimo</li>
                      <li>✓ Tecnología de regata</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose WinSail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail para Velas Paneladas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WinSail como distribuidor oficial OneSails garantiza acceso a todos los tipos
                de velas tradicionales con la mejor calidad y servicio local
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnología Completa</h3>
                <p className="text-gray-600">
                  WinSail distribuye toda la gama OneSails: desde velas económicas
                  hasta membranas avanzadas de última generación.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tejidos Premium</h3>
                <p className="text-gray-600">
                  Acceso exclusivo a tejidos Dimension-Polyant de primera calidad:
                  Dacron HQ, Pro Radial y HydraNet disponibles en WinSail.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Experiencia Comprobada</h3>
                <p className="text-gray-600">
                  20 años de experiencia OneSails en velas paneladas,
                  disponible a través del servicio personalizado WinSail.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diseño Personalizado</h3>
                <p className="text-gray-600">
                  Cada vela diseñada específicamente para tu embarcación
                  con el análisis continuo y experiencia OneSails.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Asesoramiento Local</h3>
                <p className="text-gray-600">
                  Equipo WinSail especializado para ayudarte a elegir
                  la tecnología perfecta según tu navegación y presupuesto.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Servicio Integral</h3>
                <p className="text-gray-600">
                  Desde la consulta inicial hasta el mantenimiento:
                  WinSail te acompaña en toda la vida útil de tus velas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Encuentra tu Vela Ideal con WinSail
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Desde velas económicas Cross-Cut hasta membranas avanzadas: WinSail distribuye
              toda la tecnología OneSails con asesoramiento personalizado y servicio local excepcional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/solicite-un-presupuesto">
                  Solicitar Presupuesto Personalizado <ArrowRight className="ml-2 h-5 w-5" />
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
    </div>
  )
}
