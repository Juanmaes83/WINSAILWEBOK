import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function VelasYatesClasicosPage() {
  return (
    <div className="min-h-screen bg-white">
      <UniversalNavigation />

      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/409158032.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VELAS PARA YATES CLÁSICOS<br />
              Y SPIRIT OF TRADITION
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Conservando la esencia atemporal - Distribuidas por WinSail
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                CONSERVANDO LA ESENCIA ATEMPORAL
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Nuestras velas se distinguen por la precisión y el cuidado utilizados en su acabado. El acceso a accesorios personalizados, así como a un extenso archivo sobre yates clásicos, nos permite fabricar velas especialmente diseñadas para conservar la esencia y el carácter atemporal de las embarcaciones clásicas.
                </p>
                <p>
                  OneSails combina la tecnología moderna con técnicas tradicionales para crear velas que respetan el diseño original mientras proporcionan el rendimiento que los navegantes modernos esperan.
                </p>
                <p>
                  A través de WinSail, tienes acceso a la experiencia única de OneSails en la restauración y creación de velas para yates clásicos y embarcaciones Spirit of Tradition.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2249630251.jpeg"
                alt="Classic Yacht Sails"
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
            SERVICIOS ESPECIALIZADOS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Investigación Histórica</h3>
              <p className="text-gray-600">Acceso a archivos históricos para reproducir fielmente velas originales.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Materiales Tradicionales</h3>
              <p className="text-gray-600">Selección de materiales que respetan la estética y funcionalidad original.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Acabados Artesanales</h3>
              <p className="text-gray-600">Técnicas artesanales para lograr el acabado auténtico de época.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Accesorios Personalizados</h3>
              <p className="text-gray-600">Herrajes y accesorios diseñados específicamente para cada embarcación.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Restauración</h3>
              <p className="text-gray-600">Servicios completos de restauración y mantenimiento de velas históricas.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Documentación</h3>
              <p className="text-gray-600">Documentación completa del proceso para preservar la historia náutica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/832155647.jpeg"
                alt="Classic Yacht Detail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                TRADICIÓN Y MODERNIDAD
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Cada proyecto de yate clásico es único y requiere un enfoque personalizado. OneSails trabajará contigo para entender no solo las especificaciones técnicas, sino también la historia y el carácter de tu embarcación.
                </p>
                <p>
                  Nuestro equipo de especialistas en yates clásicos combina conocimientos tradicionales con las más modernas técnicas de diseño y fabricación.
                </p>
                <p>
                  El resultado son velas que no solo se ven auténticas, sino que también ofrecen el rendimiento y la durabilidad que esperan los navegantes de hoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Tienes un yate clásico?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para velas OneSails que respeten la tradición mientras proporcionan rendimiento moderno.
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
