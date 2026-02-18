import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Download } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function SpinnakersRegataPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Hero Section */}
        <section className="relative bg-onesails-navy text-white py-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://ext.same-assets.com/726020858/140602678.webp')`
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                SPINNAKERS<br />
                <span className="text-onesails-blue">SIMÉTRICOS Y ASIMÉTRICOS</span><br />
                DE REGATA
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 mb-8">
                Spinnakers de alto rendimiento para maximizar la velocidad en popa y través
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-onesails-navy mb-6">
                  RENDIMIENTO SUPERIOR EN REGATAS
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Nuestros spinnakers de regata están diseñados específicamente para competiciones de alto nivel.
                </p>

                <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90">
                  <Link href="/contacto">Solicitar información</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/726020858/140602678.webp"
                  alt="Spinnakers de regata OneSails"
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
