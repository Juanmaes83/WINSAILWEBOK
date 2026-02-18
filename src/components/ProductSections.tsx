import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const ProductSections = () => {
  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Sección de Velas de Regata */}
      <section className="py-16 bg-onesails-navy text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/4093492826.webp')`
          }}
        >
          <div className="absolute inset-0 bg-onesails-navy/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge ORC */}
              <div className="mb-6">
                <Image
                  src="https://ext.same-assets.com/726020858/568537957.svg"
                  alt="ORC World Champion"
                  width={120}
                  height={120}
                  className="mb-4"
                />
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                VELAS DE REGATA Y<br />
                GRAND PRIX
              </h2>

              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium">
                Saber más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Velas de Crucero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy">
                VELAS DE CRUCERO Y DE<br />
                ALTO RENDIMIENTO
              </h2>

              <p className="text-lg text-onesails-gray leading-relaxed">
                Esta exclusiva gama de productos OneSails ha sido diseñada pensando especialmente
                en los propietarios de embarcaciones de crucero que desean la combinación perfecta
                de alto rendimiento, durabilidad excepcional y un diseño estéticamente atractivo
                para sus velas.
              </p>

              <Button variant="outline" className="border-onesails-red text-onesails-red hover:bg-onesails-red hover:text-white">
                Saber más →
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1881984229.jpeg"
                alt="Velas de crucero"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Super Yates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <Image
                src="https://ext.same-assets.com/726020858/36356023.jpeg"
                alt="Super yacht sails"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="space-y-6 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy">
                VELAS PARA SUPER Y<br />
                MEGA YATES
              </h2>

              <p className="text-lg text-onesails-gray leading-relaxed">
                OneSails dispone de la única tecnología del mundo capaz de fabricar velas
                de tamaño ilimitado en una sola pieza y utilizando hilos continuos.
              </p>

              <Button variant="outline" className="border-onesails-red text-onesails-red hover:bg-onesails-red hover:text-white">
                Saber más →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Yates Clásicos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy">
                VELAS PARA YATES<br />
                CLÁSICOS Y SPIRIT OF<br />
                TRADITION
              </h2>

              <p className="text-lg text-onesails-gray leading-relaxed">
                Nuestras velas se distinguen por la precisión y el cuidado utilizados en su acabado.
                El acceso a accesorios personalizados, así como a un extenso archivo sobre yates clásicos,
                nos permite fabricar velas especialmente diseñadas para conservar la esencia
                y el carácter atemporal de las embarcaciones clásicas.
              </p>

              <Button variant="outline" className="border-onesails-red text-onesails-red hover:bg-onesails-red hover:text-white">
                Saber más →
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2249630251.jpeg"
                alt="Yates clásicos"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Velas Downwind */}
      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              VELAS DOWNWIND
            </h2>
            <p className="text-lg max-w-4xl mx-auto leading-relaxed">
              Las velas que experimentan un desarrollo más significativo en la actualidad son las velas
              Downwind (velas portantes). Gracias a la incorporación de mejores tejidos y a la tecnología
              de fabricación de velas, éstas son mucho más eficientes a sotavento y pueden ceñirse a 45°
              de viento aparente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Spinnakers de regata */}
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/726020858/3569785962.jpeg"
                alt="Spinnakers de regata"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Spinnakers simétricos y asimétricos de regata.</h3>
              <p className="text-sm mb-4">
                OneSails fabrica una amplia gama de spinnakers de alto rendimiento para embarcaciones de regata.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy">
                Saber más →
              </Button>
            </div>

            {/* Velas IFS */}
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/726020858/1845349894.jpeg"
                alt="Velas IFS"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Velas Downwind enrollables IFS™ sin cable</h3>
              <p className="text-sm mb-4">
                Las velas IFS™ están diseñadas para incorporar una red de fibras estructurales continuas.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy">
                Saber más →
              </Button>
            </div>

            {/* Spinnakers de crucero */}
            <div className="text-center">
              <Image
                src="https://ext.same-assets.com/726020858/2309603650.jpeg"
                alt="Spinnakers de crucero"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Spinnakers simétricos y asimétricos para crucero</h3>
              <p className="text-sm mb-4">
                Los Spinnakers de OneSails están diseñados para adaptarse a una amplia gama de ángulos.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy">
                Saber más →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductSections
