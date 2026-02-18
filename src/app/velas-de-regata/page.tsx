import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function VelasDeRegataPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Hero Section */}
        <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://ext.same-assets.com/726020858/443761685.webp')`
            }}
          />
          <div className="absolute top-8 left-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <Image
                src="https://ext.same-assets.com/726020858/2757954580.png"
                alt="ORC World Champion"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                VELAS DE REGATA<br />
                Y<span className="text-onesails-blue">GRAND PRIX</span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Distribuidas por WinSail - Tecnología OneSails para máximo rendimiento
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-onesails-navy mb-8">
              RENDIMIENTO QUE PERDURA EN EL TIEMPO
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Con una amplia experiencia en regatas de club, de alto nivel y Grand Prix, OneSails se ha ganado una sólida reputación en los niveles más altos del deporte.
                </p>

                <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90 flex items-center gap-2">
                  <Link href="#">
                    <Download className="w-4 h-4" />
                    Descargar folleto
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/443761685.webp"
                  alt="Velas de regata OneSails"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
