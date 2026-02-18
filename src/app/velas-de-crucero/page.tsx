import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Compass, Wind, Star, Shield, Target, TrendingUp } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function VelasDeCruceroPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/2453891672.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              VELAS DE CRUCERO<br />
              <span className="text-onesails-blue">WINSAIL</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Tecnología OneSails distribuida por WinSail Alicante
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              WinSail ofrece velas de crucero OneSails diseñadas para navegantes que buscan comodidad, durabilidad y rendimiento en sus travesías. Perfectas para navegación familiar y cruceros de larga distancia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                EXPERIENCIA WINSAIL EN CRUCERO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  En <strong>WinSail</strong>, llevamos más de 20 años especializándonos en velas de crucero para navegantes que priorizan la comodidad y seguridad. Nuestro equipo entiende perfectamente las necesidades del crucero mediterráneo.
                </p>
                <p>
                  Trabajamos con velas OneSails específicamente seleccionadas para navegación de crucero, combinando la tecnología avanzada OneSails con el conocimiento local de <strong>WinSail Alicante</strong> sobre condiciones de navegación mediterráneas.
                </p>
                <p>
                  Cada vela de crucero que ofrecemos en <strong>WinSail</strong> está pensada para maximizar la comodidad de la tripulación, facilitar las maniobras y proporcionar un rendimiento consistente en diferentes condiciones.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1847329654.jpeg"
                alt="Velas de crucero WinSail"
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
            SERVICIOS WINSAIL PARA CRUCERO
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Compass className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Asesoramiento WinSail</h3>
              <p className="text-gray-600">Nuestros expertos de WinSail te ayudan a elegir las velas OneSails perfectas para tu programa de crucero y estilo de navegación.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Wind className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Facilidad de Manejo</h3>
              <p className="text-gray-600">Velas diseñadas para maniobras sencillas con tripulaciones reducidas, perfectas para navegación familiar.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Shield className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Durabilidad Excepcional</h3>
              <p className="text-gray-600">Materiales y construcción OneSails optimizados para resistir el uso intensivo de navegación de crucero.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Star className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Servicio Post-Venta WinSail</h3>
              <p className="text-gray-600">Mantenimiento, reparaciones y asesoría continua desde nuestras instalaciones en Alicante.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Target className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Personalización</h3>
              <p className="text-gray-600">Cada vela adaptada específicamente a tu embarcación y necesidades de crucero.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <TrendingUp className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Rendimiento Optimizado</h3>
              <p className="text-gray-600">Tecnología OneSails para maximizar velocidad y eficiencia sin comprometer la comodidad.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            TIPOS DE VELAS DE CRUCERO WINSAIL
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Mayor de Crucero</h3>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy">Características WinSail:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Diseño robusto para navegación intensiva</li>
                  <li>• Fácil rizado y manejo desde cabina</li>
                  <li>• Materiales resistentes a rayos UV</li>
                  <li>• Forma optimizada para crucero cómodo</li>
                  <li>• Servicio de instalación WinSail incluido</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Génova de Crucero</h3>
              <div className="space-y-4 text-gray-600">
                <p className="font-medium text-onesails-navy">Ventajas WinSail:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Sistema de enrollado suave y fiable</li>
                  <li>• Excelente rendimiento en todas las condiciones</li>
                  <li>• Materiales de larga duración</li>
                  <li>• Compatible con autopiloto</li>
                  <li>• Asesoramiento técnico WinSail continuo</li>
                </ul>
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
                src="https://ext.same-assets.com/726020858/3157426983.jpeg"
                alt="Navegación de crucero con velas OneSails"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                TECNOLOGÍA ONESAILS PARA CRUCERO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>WinSail</strong> selecciona específicamente las tecnologías OneSails más adecuadas para crucero:
                </p>
                <p>
                  <strong>Materiales Premium:</strong> Dacron de alta calidad y laminados específicos para durabilidad en navegación de crucero intensiva.
                </p>
                <p>
                  <strong>Construcción Robusta:</strong> Costuras reforzadas y herrajes de primera calidad que garantizan años de navegación sin preocupaciones.
                </p>
                <p>
                  <strong>Diseño Ergonómico:</strong> Formas optimizadas para facilitar el manejo y reducir la fatiga de la tripulación durante navegaciones largas.
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
              VENTAJAS DE ELEGIR WINSAIL
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Más de 20 años de experiencia en crucero mediterráneo respaldan cada vela que ofrecemos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Conocimiento Local</h3>
              <p className="opacity-90">Entendemos las condiciones específicas del Mediterráneo y costa española.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Servicio Integral</h3>
              <p className="opacity-90">Desde la consulta inicial hasta el mantenimiento a largo plazo.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Tecnología OneSails</h3>
              <p className="opacity-90">Acceso a la mejor tecnología mundial de velas adaptada para crucero.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para mejorar tu experiencia de crucero?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con <strong>WinSail</strong> para velas OneSails que transformarán tu navegación de crucero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto WinSail
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                Contactar WinSail Alicante
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
