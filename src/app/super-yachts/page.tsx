import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Anchor, Ship, Star, Award, Clock, Users } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function SuperYachtsPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/2896954076.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              SUPER YACHTS<br />
              SAILS
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Velas de lujo para superyates - Distribuidas por WinSail
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Para superyates que exigen excelencia absoluta, OneSails ofrece velas de alto rendimiento fabricadas con los mejores materiales y la más avanzada tecnología disponible en el mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                EXCELENCIA SIN COMPROMISO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Los superyates requieren velas que combinen rendimiento excepcional con durabilidad y elegancia. OneSails diseña y fabrica velas específicamente para cada superyate, asegurando un ajuste perfecto y un rendimiento óptimo.
                </p>
                <p>
                  Nuestras velas para superyates utilizan los materiales más avanzados, incluyendo fibras de carbono y tecnologías exclusivas como 4T FORTE™ y Vektor2™, proporcionando una combinación única de ligereza, resistencia y longevidad.
                </p>
                <p>
                  Cada proyecto de superyate es único, y nuestro equipo trabaja en estrecha colaboración con diseñadores y propietarios para crear velas que superen las expectativas más exigentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3896421574.jpeg"
                alt="Super Yacht con velas OneSails"
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
            SERVICIOS ESPECIALIZADOS PARA SUPERYATES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Ship className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Diseño Personalizado</h3>
              <p className="text-gray-600">Cada vela diseñada específicamente para las características y necesidades del superyate.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Star className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Materiales Premium</h3>
              <p className="text-gray-600">Fibras de carbono y tecnologías exclusivas para máximo rendimiento y durabilidad.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Award className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Calidad Artesanal</h3>
              <p className="text-gray-600">Fabricación artesanal con los más altos estándares de calidad y acabado.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Clock className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Entrega Puntual</h3>
              <p className="text-gray-600">Planificación precisa y entrega en tiempo para cumplir los cronogramas de navegación.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Users className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Soporte Global</h3>
              <p className="text-gray-600">Red mundial de especialistas para soporte y mantenimiento en cualquier puerto.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Anchor className="w-12 h-12 text-onesails-blue mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Servicio Completo</h3>
              <p className="text-gray-600">Desde el diseño inicial hasta el mantenimiento a largo plazo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1764582853.jpeg"
                alt="Fabricación de velas para superyates"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                TECNOLOGÍA AVANZADA
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>4T FORTE™:</strong> Nuestra tecnología exclusiva de fibras continuas proporciona una resistencia excepcional sin agregar peso, ideal para las grandes dimensiones de los superyates.
                </p>
                <p>
                  <strong>Vektor2™:</strong> Sistema de refuerzo que distribuye las cargas de manera óptima, aumentando la vida útil de las velas y manteniendo la forma aerodinámica.
                </p>
                <p>
                  <strong>M3™:</strong> Proceso de laminado avanzado que elimina las arrugas y crea velas perfectamente lisas para máximo rendimiento aerodinámico.
                </p>
                <p>
                  Todas nuestras velas para superyates incorporan estas tecnologías de vanguardia, asegurando el mejor rendimiento y durabilidad posibles.
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
              EXPERIENCIA WinSail EN SUPERYATES
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              WinSail cuenta con la experiencia y red de contactos necesarios para gestionar proyectos de superyates de cualquier envergadura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Coordinación de Proyecto</h3>
              <p className="opacity-90">Gestión completa desde el pedido inicial hasta la entrega e instalación.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Logística Especializada</h3>
              <p className="opacity-90">Transporte y entrega en puertos de todo el mundo con timing perfecto.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Soporte Post-Venta</h3>
              <p className="opacity-90">Mantenimiento y reparaciones especializadas cuando sea necesario.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para el siguiente nivel?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para velas OneSails que transformarán la experiencia de navegación de tu superyate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto
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
    </div>
  )
}
