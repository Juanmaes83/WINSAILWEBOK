import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function VelasOceanOffshorePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/1021162998.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              VELAS OCEAN-OFFSHORE
            </h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Resistencia extrema para navegación oceánica - Distribuidas por WinSail
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                DISEÑADAS PARA CONDICIONES EXTREMAS
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Las velas Ocean-Offshore de OneSails están específicamente diseñadas para navegación oceánica y condiciones extremas. Utilizan los materiales más resistentes y técnicas de construcción avanzadas.
                </p>
                <p>
                  Perfectas para regatas oceánicas, travesías atlánticas y navegación en condiciones adversas donde la confiabilidad es fundamental.
                </p>
                <p>
                  Con WinSail como tu distribuidor oficial de OneSails en España, tienes acceso a velas que han sido probadas en las condiciones más exigentes del planeta.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1989735657.jpeg"
                alt="Ocean Offshore Sails"
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
            CARACTERÍSTICAS TÉCNICAS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Ultra Resistentes</h3>
              <p className="text-gray-600">Materiales de máxima resistencia para condiciones oceánicas extremas.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Tecnología 4T FORTE</h3>
              <p className="text-gray-600">Construcción sin adhesivos para máxima durabilidad a largo plazo.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">Refuerzos Adicionales</h3>
              <p className="text-gray-600">Refuerzos estratégicos en puntos de alta carga y tensión.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Planeas una travesía oceánica?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para velas OneSails Ocean-Offshore que te darán la confianza necesaria en navegación oceánica.
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
