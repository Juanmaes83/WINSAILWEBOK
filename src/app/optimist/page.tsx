import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Trophy, Star, ArrowRight, Target, Shield } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function OptimistPage() {
  const optimistModels = [
    {
      name: "OPTIMIST Standard Light",
      weight: "<36kg",
      description: "Perfecto para navegantes jóvenes y ligeros",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"]
    },
    {
      name: "OPTIMIST Standard Medium",
      weight: "36-42kg",
      description: "El modelo más popular para navegantes de peso medio",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"]
    },
    {
      name: "OPTIMIST Standard Medium+",
      weight: "42-47kg",
      description: "Para navegantes experimentados de peso medio-alto",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"]
    },
    {
      name: "OPTIMIST Standard Heavy+",
      weight: ">47kg",
      description: "Para navegantes de mayor peso y experiencia",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"]
    },
    {
      name: "OPTIMIST Advanced GM",
      weight: "36-42kg",
      description: "Vela avanzada de alto rendimiento - solo para navegantes experimentados",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"],
      advanced: true
    },
    {
      name: "OPTIMIST Advanced GMP",
      weight: "42-45kg",
      description: "Máximo rendimiento para regatistas experimentados",
      includes: ["Insignia de clase", "Números de vela", "Medición", "Sables", "Indicadores", "Bolsa de vela", "Ventana de visión"],
      advanced: true
    }
  ]

  return (
    <div className="bg-white">
      {/* Universal Navigation */}
      <UniversalNavigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-winsail-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/velas" className="hover:text-winsail-blue">Velas</Link>
            <span className="mx-2">/</span>
            <Link href="/one-design" className="hover:text-winsail-blue">One Design</Link>
            <span className="mx-2">/</span>
            <span className="text-winsail-blue font-medium">Optimist</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-winsail-blue to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  ONE DESIGN
                </Badge>
                <Badge variant="secondary" className="bg-yellow-500 text-black ml-2">
                  <Trophy className="w-4 h-4 mr-1" />
                  CAMPEÓN MUNDIAL
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                VELAS OPTIMIST
                <span className="block text-yellow-400">WINSAIL</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Velas Optimist desarrolladas por <strong>OneSails</strong> - Múltiples veces Campeón del Mundo (2023, 2022, 2019, 2018, 2017 y 2015).
                Disponibles a través de <strong>WinSail Alicante</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-winsail-blue hover:bg-gray-100">
                  <Link href="/contacto">
                    Consultar Precio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-winsail-blue">
                  <Link href="/uploads/onedesign_optimist_tuningguide_OPTIMIST.pdf" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Guía de Trimado
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/uploads/OPTIMIST.jpg"
                alt="Velas Optimist WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 mr-2" />
                  <div>
                    <div className="font-bold">5x Campeón</div>
                    <div className="text-sm">Mundial</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dos Estilos Disponibles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              DOS ESTILOS DISPONIBLES EN WINSAIL
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Para satisfacer mejor las necesidades de los jóvenes navegantes de Optimist, las velas principales OneSails
              están ahora disponibles en dos estilos diferentes a través de WinSail.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-green-200 shadow-lg">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-green-800">
                  <Shield className="w-6 h-6 mr-3" />
                  STANDARD
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  <strong>Se adapta a todos los navegantes.</strong> Fácil de controlar y perfecto para navegantes que están aprendiendo o desarrollando sus habilidades.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Control sencillo y predecible</li>
                  <li>• Ideal para navegantes en desarrollo</li>
                  <li>• Excelente relación rendimiento/facilidad</li>
                  <li>• Recomendado para escuelas de vela</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-800">
                  <Target className="w-6 h-6 mr-3" />
                  ADVANCED
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  <strong>Más difícil de controlar pero permite mayor recompensa.</strong> Solo recomendado para navegantes experimentados.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Máximo rendimiento en regatas</li>
                  <li>• Requiere navegantes experimentados</li>
                  <li>• Control más exigente</li>
                  <li>• Para regatistas de elite</li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    ⚠️ No recomendamos el estilo Advanced a navegantes sin experiencia
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modelos Disponibles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              MODELOS OPTIMIST DISPONIBLES EN WINSAIL
            </h2>
            <p className="text-xl text-gray-600">
              Consulta precios y disponibilidad en WinSail Alicante
            </p>
          </div>

          <div className="grid gap-6">
            {optimistModels.map((model, index) => (
              <Card key={index} className={`${model.advanced ? 'border-red-200 bg-red-50/30' : 'border-green-200 bg-green-50/30'} shadow-md hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-onesails-navy mb-2">
                        {model.name}
                      </h3>
                      <Badge variant="outline" className={model.advanced ? 'border-red-500 text-red-700' : 'border-green-500 text-green-700'}>
                        {model.weight}
                      </Badge>
                      {model.advanced && (
                        <Badge variant="destructive" className="ml-2">
                          ADVANCED
                        </Badge>
                      )}
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-gray-600 mb-3">{model.description}</p>
                      <div className="text-sm text-gray-500">
                        <strong>Incluye:</strong> {model.includes.join(' • ')}
                      </div>
                    </div>

                    <div className="text-right">
                      <Button asChild className="bg-winsail-blue hover:bg-winsail-blue/90">
                        <Link href="/contacto">
                          Consultar Precio
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Las velas Optimist son desarrolladas y producidas por OneSails Slovenia.
              Para información técnica y comercial, contacta con <strong>WinSail Alicante</strong>.
            </p>
            <div className="bg-winsail-blue/10 p-6 rounded-lg max-w-2xl mx-auto">
              <h4 className="font-bold text-winsail-blue mb-2">Contacto WinSail para Optimist:</h4>
              <p className="text-sm text-gray-600">
                Los precios mostrados son sin IVA ni gastos de envío.
                Consulta disponibilidad y plazos de entrega.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-onesails-navy text-center mb-12">
            OPTIMIST EN ACCIÓN
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://ext.same-assets.com/726020858/1460078848.jpeg"
                alt="Optimist en regata"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://ext.same-assets.com/726020858/1009791677.jpeg"
                alt="Navegante Optimist"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://ext.same-assets.com/726020858/3514466032.jpeg"
                alt="Competición Optimist"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-winsail-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para navegar con velas campeonas del mundo?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contacta con WinSail Alicante para información personalizada sobre velas Optimist OneSails
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-winsail-blue hover:bg-gray-100">
              <Link href="/contacto">
                Contactar WinSail <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-winsail-blue">
              <Link href="/uploads/onedesign_optimist_tuningguide_OPTIMIST.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Descargar Guía
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
