import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

const SolicitePresupuestoPage = () => {
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
            En Win Sail respaldamos nuestra reputación brindando asesoramiento experto sobre los productos OneSails que mejor se adaptan a las
            necesidades de nuestros clientes. Póngase en contacto con nosotros y permítanos ayudarle a encontrar la solución ideal. Contamos con
            una amplia gama de velas para todo tipo de proyecto, siempre a precios competitivos. Puede contactar con Win Sail completando el
            formulario a continuación, o por correo electrónico o teléfono. Los campos marcados con un asterisco (*) son obligatorios.
          </p>
        </div>

        {/* Formulario */}
        <form className="space-y-12">
          {/* Sails to be quoted */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Sails to be quoted</h2>
            <div className="space-y-4">
              {/* Fila 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sailing Activity*</option>
                  <option value="racing">Racing</option>
                  <option value="cruising">Cruising</option>
                  <option value="one-design">One Design</option>
                  <option value="super-yacht">Super Yacht</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sail Type*</option>
                  <option value="mainsail">Mainsail</option>
                  <option value="jib">Jib</option>
                  <option value="genoa">Genoa</option>
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

              {/* Fila 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sailing Activity</option>
                  <option value="racing">Racing</option>
                  <option value="cruising">Cruising</option>
                  <option value="one-design">One Design</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sail Type</option>
                  <option value="mainsail">Mainsail</option>
                  <option value="jib">Jib</option>
                  <option value="genoa">Genoa</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Material</option>
                  <option value="4t-forte">4T FORTE</option>
                  <option value="vektor2">Vektor2</option>
                </select>
              </div>

              {/* Fila 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sailing Activity</option>
                  <option value="racing">Racing</option>
                  <option value="cruising">Cruising</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Sail Type</option>
                  <option value="mainsail">Mainsail</option>
                  <option value="jib">Jib</option>
                </select>
                <select className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700">
                  <option value="">Material</option>
                  <option value="4t-forte">4T FORTE</option>
                  <option value="vektor2">Vektor2</option>
                </select>
              </div>
            </div>
          </section>

          {/* Boat data */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Boat data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yard-model" className="block text-sm font-medium text-onesails-navy mb-2">
                  Yard and Model*
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
                  Year
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
                  Length*
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
                  Boat Name
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
                <label htmlFor="sailmaker-brand" className="block text-sm font-medium text-onesails-navy mb-2">
                  Sailmaker brand currently onboard*
                </label>
                <Input
                  type="text"
                  id="sailmaker-brand"
                  name="sailmaker-brand"
                  required
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="sail-number" className="block text-sm font-medium text-onesails-navy mb-2">
                  Sail Number
                </label>
                <Input
                  type="text"
                  id="sail-number"
                  name="sail-number"
                  className="w-full h-12"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="home-port" className="block text-sm font-medium text-onesails-navy mb-2">
                  Home Port*
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
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Owner Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-onesails-navy mb-2">
                  Surname*
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
                  Name*
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
                  Email Address*
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
                  Telephone*
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
                  Country*
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

          {/* Win Sail Loft */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">
              I would like to get the quote from the following Win Sail Loft:
            </h2>
            <div>
              <label htmlFor="select-country" className="block text-sm font-medium text-onesails-navy mb-2">
                Select Country*
              </label>
              <select
                id="select-country"
                name="select-country"
                required
                className="w-full md:w-64 px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue text-gray-700"
              >
                <option value="">Select Country*</option>
                <option value="spain">España</option>
                <option value="portugal">Portugal</option>
                <option value="france">Francia</option>
                <option value="italy">Italia</option>
              </select>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-onesails-navy mb-2">Win Sail - Alicante</h3>
              <p className="text-sm text-onesails-gray">
                Pol. Industrial Las Maromas, Calle Holanda nº 8<br />
                Almoradí 03160 - Alicante, España<br />
                Tel: 966 77 79 74 | Email: jose@winsail.org
              </p>
            </div>
          </section>

          {/* Questions */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Questions, comments or additional details</h2>
            <textarea
              id="comments"
              name="comments"
              rows={6}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue resize-vertical"
              placeholder="Incluya cualquier información adicional que pueda ayudarnos a preparar su presupuesto..."
            ></textarea>
          </section>

          {/* File Upload */}
          <section>
            <h2 className="text-xl font-bold text-onesails-navy mb-6">Upload any useful file (max. 7Mb)</h2>
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-onesails-blue file:text-white hover:file:bg-onesails-blue/90"
            />
            <p className="text-xs text-onesails-gray mt-2">
              Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG, GIF. Tamaño máximo: 7MB
            </p>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-bold py-3 px-8 text-lg">
              Submit
            </Button>
          </div>
        </form>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-onesails-gray">
              Suscríbete a nuestro boletín para recibir actualizaciones, información, noticias, insights o promociones:
            </p>
            <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-6 py-2">
              Suscribirme
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default SolicitePresupuestoPage
