import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

const SoliciteUnPresupuestoPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Título principal */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-4">
            SOLICITE UN PRESUPUESTO
          </h1>
          <div className="w-24 h-1 bg-onesails-red mb-6"></div>
          <p className="text-lg text-onesails-gray leading-relaxed">
            En WinSail respaldamos nuestra reputación brindando asesoramiento experto sobre los productos OneSails que mejor se adaptan a las
            necesidades de nuestros clientes. Póngase en contacto con nosotros y permítanos ayudarle a encontrar la solución ideal. Contamos con
            una amplia gama de velas para todo tipo de proyecto, siempre a precios competitivos. Puede contactar con WinSail completando el
            formulario a continuación, o por correo electrónico o teléfono. Los campos marcados con un asterisco (*) son obligatorios.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-12">
          {/* Sails to be quoted */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Velas a cotizar</h2>
            <div className="space-y-4">
              {/* Fila 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Actividad de navegación*</option>
                  <option value="racing">Regata</option>
                  <option value="cruising">Crucero</option>
                  <option value="one-design">One Design</option>
                  <option value="super-yacht">Super Yacht</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Tipo de vela*</option>
                  <option value="mainsail">Mayor</option>
                  <option value="jib">Foque</option>
                  <option value="genoa">Génova</option>
                  <option value="spinnaker">Spinnaker</option>
                  <option value="gennaker">Gennaker</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Material*</option>
                  <option value="4t-forte">4T FORTE</option>
                  <option value="vektor2">Vektor2</option>
                  <option value="m3">M3</option>
                  <option value="dacron">Dacron</option>
                </select>
              </div>
            </div>
          </section>

          {/* Boat data */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Datos del barco</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yard-model" className="block text-sm font-medium text-onesails-navy mb-2">
                  Astillero y Modelo*
                </label>
                <Input
                  type="text"
                  id="yard-model"
                  name="yard-model"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-onesails-navy mb-2">
                  Año
                </label>
                <Input
                  type="text"
                  id="year"
                  name="year"
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="length" className="block text-sm font-medium text-onesails-navy mb-2">
                  Eslora*
                </label>
                <Input
                  type="text"
                  id="length"
                  name="length"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="boat-name" className="block text-sm font-medium text-onesails-navy mb-2">
                  Nombre del barco
                </label>
                <Input
                  type="text"
                  id="boat-name"
                  name="boat-name"
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="home-port" className="block text-sm font-medium text-onesails-navy mb-2">
                  Puerto base*
                </label>
                <Input
                  type="text"
                  id="home-port"
                  name="home-port"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
            </div>
          </section>

          {/* Owner Info */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Información del propietario</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-onesails-navy mb-2">
                  Apellidos*
                </label>
                <Input
                  type="text"
                  id="surname"
                  name="surname"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-onesails-navy mb-2">
                  Nombre*
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-onesails-navy mb-2">
                  Email*
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-onesails-navy mb-2">
                  Teléfono*
                </label>
                <Input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-onesails-navy mb-2">
                  País*
                </label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
            </div>
          </section>

          {/* WinSail Contact */}
          <section>
            <div className="bg-winsail-blue/10 p-6 rounded-lg">
              <h3 className="font-bold text-onesails-navy mb-4 text-lg">WinSail - Alicante</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-onesails-gray">
                <div>
                  <p><strong>Dirección:</strong></p>
                  <p>Pol. Industrial Las Maromas</p>
                  <p>Calle Holanda nº 8</p>
                  <p>Almoradí 03160 - Alicante, España</p>
                </div>
                <div>
                  <p><strong>Contacto:</strong></p>
                  <p>Tel: 966 77 79 74</p>
                  <p>Email: jose@winsail.org</p>
                  <p>Horario: L-V 8:00-17:00h</p>
                </div>
              </div>
            </div>
          </section>

          {/* Questions */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Preguntas, comentarios o detalles adicionales</h2>
            <textarea
              id="comments"
              name="comments"
              rows={6}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue resize-vertical"
              placeholder="Incluya cualquier información adicional que pueda ayudarnos a preparar su presupuesto..."
            ></textarea>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <Button className="bg-winsail-blue hover:bg-winsail-blue/90 text-white font-bold py-3 px-8 text-lg">
              Enviar solicitud
            </Button>
          </div>
        </form>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-onesails-gray">
              Suscríbete a nuestro boletín para recibir actualizaciones, información, noticias, insights o promociones:
            </p>
            <Button className="bg-winsail-blue hover:bg-winsail-blue/90 text-white font-medium px-6 py-2">
              Suscribirme
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SoliciteUnPresupuestoPage
