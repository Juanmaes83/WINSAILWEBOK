import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const OneDesignSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/726020858/2368946431.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div className="space-y-6">
            {/* Badge Optimist */}
            <div className="mb-6">
              <Image
                src="https://ext.same-assets.com/726020858/3750364616.svg"
                alt="Optimist World Champion"
                width={120}
                height={120}
                className="mb-4"
              />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-onesails-navy">
              VELAS ONE DESIGN
            </h2>

            <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium">
              Explore su clase de One Design...
            </Button>

            <p className="text-lg text-onesails-gray leading-relaxed">
              Para satisfacer las necesidades de los regatistas más exigentes de One Design,
              OneSails ofrece velas de alto rendimiento para una amplia variedad de clases.
              <strong className="text-onesails-navy"> Nuestras velas no están en stock, sino que se fabrican
              en el momento de la entrega</strong> para incluir los últimos avances en diseño y tejidos.
            </p>
          </div>

          {/* Grid de logos de clases populares */}
          <div className="bg-white/90 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-onesails-navy mb-6 text-center">
              Popular One Design
            </h3>

            <div className="grid grid-cols-4 gap-4">
              {/* Fila 1 */}
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/3339281463.svg"
                  alt="Optimist"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/3992796619.svg"
                  alt="69F"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/1558717132.svg"
                  alt="420"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/2752837138.svg"
                  alt="J-70"
                  width={40}
                  height={40}
                />
              </div>

              {/* Fila 2 */}
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/4039658247.svg"
                  alt="Melges 24"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/2323618390.svg"
                  alt="Melges 32"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/2845757221.svg"
                  alt="UFO 22"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/3035063466.svg"
                  alt="Finn"
                  width={40}
                  height={40}
                />
              </div>

              {/* Fila 3 */}
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/3722580046.svg"
                  alt="Star"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/1444206427.svg"
                  alt="Snipe"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border">
                <Image
                  src="https://ext.same-assets.com/726020858/1203673231.svg"
                  alt="Swan 45"
                  width={40}
                  height={40}
                />
              </div>
              <div className="flex items-center justify-center p-3 bg-white rounded-lg border text-onesails-gray text-xs font-medium">
                +Más
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OneDesignSection
