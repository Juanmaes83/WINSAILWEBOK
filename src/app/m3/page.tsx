import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Anchor, Wind, Shield, Star, Award, CheckCircle, ArrowRight, Zap, Target, Trophy, Palette, Users, Wrench } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function M3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-onesails-blue text-white">Tecnología M3 OneSails</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-onesails-navy mb-6">
            M3 - Membranas Sin Resinas
          </h1>
          <p className="text-xl text-onesails-gray max-w-3xl mx-auto">
            Revolucionaria tecnología de membranas sin resinas con garantía de delaminación.
            Disponible exclusivamente a través de WinSail Alicante.
          </p>
        </div>

        {/* Technology Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">La Superior Integridad Estructural de la Tecnología M3</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WinSail distribuye exclusivamente la tecnología M3 de OneSails:
                composite con filamentos continuos que revoluciona la fabricación de velas
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white p-2 rounded-full mr-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Laminación M3</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Proceso de prensado por fusión: 9 toneladas a 120°C</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Proceso de fusión irreversible</li>
                    <li>• Eliminación total de resina</li>
                    <li>• Reducción de peso 15-30%</li>
                    <li>• Garantía anti-delaminación</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gray-400">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-400 text-white p-2 rounded-full mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700">Laminado Convencional</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Pegado con resina</strong>
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hilos impregnados con resina</li>
                    <li>• Rigidez bajo tensión</li>
                    <li>• Degradación con el tiempo</li>
                    <li>• Riesgo de delaminación</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <Image
                  src="https://ext.same-assets.com/3051434774/2494044405.svg"
                  alt="Proceso M3 WinSail"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <Image
                  src="https://ext.same-assets.com/3051434774/1019458733.svg"
                  alt="Proceso Convencional"
                  width={500}
                  height={300}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ventajas de la Tecnología M3 con WinSail</h2>
              <p className="text-xl text-gray-600">
                Los beneficios revolucionarios que obtiene al elegir WinSail como distribuidor oficial OneSails
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sin Resina</h3>
                <p className="text-gray-600">
                  WinSail ofrece velas M3 sin resina que mantienen la flexibilidad de los hilos,
                  evitando puntos de tensión localizada y degradación.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proceso de Fusión</h3>
                <p className="text-gray-600">
                  Las capas se fusionan irreversiblemente bajo 9 toneladas de presión a 120°C,
                  eliminando completamente el riesgo de delaminación.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hilos Continuos</h3>
                <p className="text-gray-600">
                  Los hilos de fibra continua sin resina permiten que las fibras individuales
                  se ajusten libremente a las cargas dinámicas.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reducción de Peso</h3>
                <p className="text-gray-600">
                  WinSail garantiza una reducción del peso total de al menos 15-30%
                  respecto a velas laminadas convencionales.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Material Twaron</h3>
                <p className="text-gray-600">
                  La mejor opción para embarcaciones de cualquier tamaño cuando no se necesitan
                  las ventajas del carbono ni su costo adicional.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Garantía Exclusiva</h3>
                <p className="text-gray-600">
                  WinSail ofrece garantía contra delaminación: 3 años para velas de crucero
                  y 2 años para velas de regata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">El Proceso Revolucionario M3 que Distribuye WinSail</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Los principales fabricantes no han cambiado su proceso básico en los últimos 20 años.
                  Las velas laminadas se siguen construyendo utilizando hilos impregnados con resina y
                  una malla en ambos lados que se recubre con resina para mantener unida la membrana.
                  Es esta resina la que se degrada con el tiempo a medida que la vela se iza, se cambija
                  de bordo y se pliega después de la regata o crucero.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>WinSail distribuye la tecnología M3 de OneSails que no requiere el uso de resina</strong>
                  en la fabricación de las velas, lo que conlleva varias ventajas importantes. Cuando los hilos
                  se impregnan con resina y esta se endurece, los hilos se vuelven muy rígidos bajo tensión.
                  A medida que la vela se mueve y los hilos se doblan o tuercen, comienzan a degradarse y
                  la resistencia estructural general se ve afectada.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Al eliminar la resina, los hilos permanecen flexibles, lo que permite que, cuando la vela
                  se deforma, no haya diferencias de tensión en el filamento, ya que las fibras individuales
                  que lo componen pueden moverse de forma independiente. Además, la eliminación de hilos
                  innecesarios, junto con la importante masa de resina presente en una vela laminada
                  convencional, se traduce en una reducción del peso total de al menos un 15-30%.
                </p>

                <div className="bg-primary/10 p-8 rounded-lg my-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Proceso de Fabricación M3 en WinSail</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Las capas M3 se cargan en una bolsa de vacío que se presuriza a -0.95 bar,
                    lo que equivale a no menos de 9 toneladas por metro cuadrado a lo largo de toda la vela.
                    Luego, la capa y la bolsa se cargan en un horno controlado por ordenador. Cuando se aplica
                    presión y calor a la vela, las dos capas de polímero reaccionan y se fusionan para formar
                    una nueva capa de material en un proceso irreversible.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Es importante destacar que el polímero se fusiona y no simplemente se pega. El film resultante
                  es suave y flexible, y la delaminación ya no es un problema, ya que no hay resina entre las
                  pieles que pueda degradarse con el tiempo. WinSail garantiza que M3 es un avance importante
                  respecto a la tecnología de velas de producción por molde, superando las limitaciones de
                  baja temperatura y proceso de calefacción no uniforme.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose WinSail */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail como Distribuidor M3</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WinSail es el distribuidor oficial de OneSails, ofreciendo la mejor tecnología
                M3 con servicio local excepcional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnología Exclusiva</h3>
                <p className="text-gray-600">
                  WinSail distribuye la tecnología M3 desarrollada exclusivamente por OneSails
                  durante más de 15 años para velas de hilo continuo.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Rendimiento Superior</h3>
                <p className="text-gray-600">
                  Características como peso reducido, control de forma y resistencia a la deformación
                  garantizan mejor rendimiento que las velas tradicionales.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Calidad Garantizada</h3>
                <p className="text-gray-600">
                  WinSail asegura los más altos estándares utilizando componentes OneSails
                  cuidadosamente seleccionados para máxima calidad y durabilidad.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diseño Avanzado</h3>
                <p className="text-gray-600">
                  Las mejores formas de vela son resultado del análisis continuo y experiencia de OneSails,
                  disponibles a través de WinSail.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Servicio Local</h3>
                <p className="text-gray-600">
                  WinSail ofrece servicio, apoyo y asistencia de primera clase como parte
                  de la red global OneSails con expertos locales.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Red de Servicios</h3>
                <p className="text-gray-600">
                  Acceso a la extensa red de centros de servicio OneSails estratégicamente
                  ubicados a través de WinSail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Descubre las Velas M3 con WinSail
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Experimenta la tecnología revolucionaria M3 de OneSails. WinSail te ofrece
              velas sin resina, con garantía anti-delaminación y rendimiento superior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/solicite-un-presupuesto">
                  Solicitar Presupuesto M3 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contacto">
                  Contactar WinSail
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
