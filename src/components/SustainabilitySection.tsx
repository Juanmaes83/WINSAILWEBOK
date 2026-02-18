import React from 'react'
import Image from 'next/image'

const SustainabilitySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo 4T FORTE centrado */}
        <div className="text-center mb-12">
          <Image
            src="https://ext.same-assets.com/726020858/2275306314.svg"
            alt="4T FORTE"
            width={120}
            height={80}
            className="mx-auto mb-8"
          />
        </div>

        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-onesails-navy mb-6 leading-tight">
            WINSAIL DISTRIBUIDOR OFICIAL<br />
            ONESAILS EN ALICANTE
          </h2>
        </div>

        {/* Contenido con imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto descriptivo */}
          <div className="space-y-6">
            <p className="text-lg text-onesails-gray leading-relaxed">
              Como <strong className="text-onesails-green">distribuidor oficial de OneSails</strong>, en
              <strong> WinSail</strong> llevamos más de 20 años ofreciendo la tecnología más avanzada en velas.
              Trabajamos con la revolucionaria tecnología <strong className="text-onesails-green">4T FORTE™</strong>
              y todo el catálogo de productos OneSails para garantizarte el máximo rendimiento en el mar.
            </p>

            <p className="text-base text-onesails-gray leading-relaxed">
              Ubicados en el Polígono Industrial Las Maromas de Alicante, nuestras instalaciones cuentan
              con la más moderna tecnología para fabricación, reparación y mantenimiento de velas.
              Somos tu partner de confianza para navegar con la excelencia OneSails.
            </p>
          </div>

          {/* Imagen del proceso/infografía */}
          <div className="relative">
            <Image
              src="/images/carousel/ONESAIL_HOME.jpg"
              alt="WinSail - Distribuidor Oficial OneSails"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Descripción técnica adicional */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-onesails-navy text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-onesails-green">
              LA INTEGRIDAD ESTRUCTURAL EXCEPCIONAL DE LA TECNOLOGÍA DE COMPOSITE CON FILAMENTOS CONTINUOS.
            </h3>
            <p className="text-sm leading-relaxed">
              Una malla estructural central, construida con fibra de alto módulo, se encarga de las cargas principales,
              mientras que las microcapas orientadas proporcionan resistencia en otras direcciones secundarias.
              Toda la superficie está encapsulada entre escudos de ripstop, que son resistentes a los rayos UV,
              la humedad y el moho.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SustainabilitySection
