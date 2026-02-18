import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Anchor, Wind, Shield, Star, Award, CheckCircle, ArrowRight, Zap, Target, Layers, Trophy, Palette, Users, Wrench } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function VantageOnePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-onesails-blue text-white">Tecnología VANTAGE ONE OneSails</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-onesails-navy mb-6">
            VANTAGE ONE - Performance Supremo
          </h1>
          <p className="text-xl text-onesails-gray max-w-3xl mx-auto">
            La tecnología más avanzada de OneSails para embarcaciones de competición.
            Disponible exclusivamente a través de WinSail Alicante.
          </p>
        </div>

        {/* Technology Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">La Alternativa Inteligente de WinSail</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Como alternativa a las opciones de hilo continuo 4T FORTE, M3 y Vektor2,
                WinSail ofrece las membranas panelizadas VantageOne de OneSails
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Image
                  src="https://ext.same-assets.com/3051434774/1338650897.jpeg"
                  alt="Proceso Vantage One WinSail"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
                <Image
                  src="https://ext.same-assets.com/3051434774/3422967049.jpeg"
                  alt="Membrana Vantage One"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-4 text-primary">Fabricación Avanzada</h3>
                  <p className="text-gray-700 leading-relaxed">
                    WinSail distribuye VantageOne fabricado con laminación automatizada en máquinas de cama plana,
                    ofreciendo técnicas de laminación probadas con la opción de prescindir de adhesivos y resinas
                    a favor de polímeros termoplásticos.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-4 text-primary">Eliminación de Fallas</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cuando se combinan con la sofisticada disposición de hilos desarrollada por OneSails
                    y disponible a través de WinSail, las membranas VantageOne han eliminado efectivamente
                    las fallas en las costuras y la delaminación.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-4 text-primary">Continuidad de Carga</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aunque las fibras son discontinuas a través de las costuras, su alineación y la perfecta
                    ejecución de las uniones horizontales garantizan la continuidad en la distribución de la carga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Opciones VantageOne Disponibles en WinSail</h2>
              <p className="text-xl text-gray-600">
                Tres configuraciones especializadas para diferentes aplicaciones náuticas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Film-Film Option */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Película-Película</h3>
                <p className="text-gray-600 mb-6">
                  Una opción ligera y sencilla, principalmente para velas de regata de todos los tamaños.
                </p>
                <div className="text-left space-y-2">
                  <p className="text-sm font-semibold text-primary">Características:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Capas externas:</strong> película de Mylar</li>
                    <li>• <strong>Hilos:</strong> poliéster, armida, Twaron negro</li>
                    <li>• <strong>Opciones:</strong> Twaron negro/carbono o carbono</li>
                  </ul>
                </div>
              </div>

              {/* Filmless Option */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sin Película</h3>
                <p className="text-gray-600 mb-6">
                  Membrana ligera, flexible y de larga duración, sin película ni adhesivos,
                  adecuada para cruceros, regatas y yates maxi.
                </p>
                <div className="text-left space-y-2">
                  <p className="text-sm font-semibold text-primary">Características:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Capas externas:</strong> tafetán sin película</li>
                    <li>• <strong>Tratamientos:</strong> anti-moho y protección UV</li>
                    <li>• <strong>Hilos:</strong> incluye Twaron/SK99 o SK99</li>
                  </ul>
                </div>
              </div>

              {/* Nano Option */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Nano</h3>
                <p className="text-gray-600 mb-6">
                  Alternativa súper ligera adecuada para code zeros, headsails ligeras
                  o yates más pequeños donde el peso es una preocupación.
                </p>
                <div className="text-left space-y-2">
                  <p className="text-sm font-semibold text-primary">Características:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Capas:</strong> filmless negro y black naked</li>
                    <li>• <strong>Peso:</strong> súper ligero y suave</li>
                    <li>• <strong>Hilos:</strong> Twaron negro/carbono o carbono</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Beneficios de VantageOne con WinSail</h2>
              <p className="text-xl text-gray-600">
                La combinación perfecta de tecnología OneSails y servicio local WinSail
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Durabilidad Superior</h3>
                <p className="text-gray-600">
                  WinSail garantiza velas duraderas con forma precisa y mínima contracción
                  o distorsión gracias al estricto proceso de laminación OneSails.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Disposición Personalizada</h3>
                <p className="text-gray-600">
                  La disposición personalizada de fibras presenta más fibras fuera de la línea
                  de hilo que otras marcas, creando una estructura más eficiente.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fácil Ajuste</h3>
                <p className="text-gray-600">
                  WinSail ofrece velas más fáciles de ajustar con un rango efectivo de viento
                  más amplio, mayor durabilidad y mejor retención de forma.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Variedad de Fibras</h3>
                <p className="text-gray-600">
                  Disponible con Twaron (Kevlar), DSK-99 Dyneema, Carbono y Poliéster
                  para cumplir con todas las reglas de clase.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Opciones de Recubrimiento</h3>
                <p className="text-gray-600">
                  Desde película/película hasta tafetanes clásicos, incluyendo Filmless Taffeta,
                  TFT y Black Naked para aplicaciones específicas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Alternativa Rentable</h3>
                <p className="text-gray-600">
                  WinSail presenta VantageOne como alternativa rentable a las construcciones
                  exclusivas más rigurosamente diseñadas de OneSails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Tecnología VantageOne en Detalle</h2>

              <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <Image
                    src="https://ext.same-assets.com/3051434774/2251918198.jpeg"
                    alt="Construcción VantageOne"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    WinSail distribuye las membranas VantageOne que se fabrican utilizando la laminación
                    automatizada en máquinas de cama plana. Esta tecnología OneSails ofrece técnicas de
                    laminación probadas con la opción de prescindir de adhesivos y resinas a favor de
                    polímeros termoplásticos.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">Proceso de Fabricación Avanzado</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  El resultado general del estricto proceso de laminación y conformado que distribuye WinSail
                  es una vela duradera, con una forma precisa y mínima contracción o distorsión.
                  La disposición personalizada de fibras desarrollada por OneSails presenta más fibras
                  en las direcciones fuera de la línea de hilo que otras marcas de velas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Esto crea una estructura más eficiente, que es más fácil de ajustar debido a un rango
                  efectivo de viento más amplio, con mayor durabilidad y mejor retención de la forma.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Opciones de Fibra Disponibles</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Twaron (Kevlar)</li>
                    <li>• DSK-99 Dyneema</li>
                    <li>• Carbono</li>
                    <li>• Poliéster (reglas de clase)</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="font-bold text-primary mb-3">Opciones de Recubrimiento</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Película/Película</li>
                    <li>• Tafetanes clásicos</li>
                    <li>• Filmless Taffeta</li>
                    <li>• TFT (súper liviano)</li>
                    <li>• Black Naked</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose WinSail */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por Qué Elegir WinSail para VantageOne</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                WinSail como distribuidor oficial OneSails garantiza acceso a la mejor tecnología
                panelizada con servicio local excepcional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tecnología Exclusiva</h3>
                <p className="text-gray-600">
                  WinSail distribuye la tecnología VantageOne desarrollada por OneSails
                  durante más de 15 años de innovación en velas panelizadas.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Rendimiento Comprobado</h3>
                <p className="text-gray-600">
                  Control de forma y resistencia a la deformación superior a las velas
                  tradicionales de paneles con mayor durabilidad.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Calidad Garantizada</h3>
                <p className="text-gray-600">
                  WinSail asegura los más altos estándares OneSails con componentes
                  cuidadosamente seleccionados para máxima calidad.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diseño Avanzado</h3>
                <p className="text-gray-600">
                  Formas de vela resultado del análisis continuo y experiencia OneSails,
                  disponibles a través de WinSail.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Servicio Local</h3>
                <p className="text-gray-600">
                  WinSail ofrece servicio de primera clase como parte de la red global
                  OneSails con expertos locales especializados.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Soporte Completo</h3>
                <p className="text-gray-600">
                  Acceso a la extensa red de centros de servicio OneSails y soporte
                  técnico especializado a través de WinSail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Descubre VantageOne con WinSail
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Experimenta la tecnología panelizada más avanzada de OneSails. WinSail te ofrece
              membranas VantageOne con eliminación de fallas en costuras y máximo rendimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/solicite-un-presupuesto">
                  Solicitar Presupuesto VantageOne <ArrowRight className="ml-2 h-5 w-5" />
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
