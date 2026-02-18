import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Wrench, Ship, Anchor, Cable, Settings, Clock, Shield, Star, MapPin, Phone, Mail } from 'lucide-react'

const WinSailServices = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/755356355/3587960923.jpeg"
            alt="Puerto WinSail - Servicios Náuticos"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              SERVICIOS<br />
              PROFESIONALES<br />
              <span className="text-onesails-blue">WINSAIL</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Distribución OneSails y servicios integrales náuticos en Alicante
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3" />
                <span className="text-lg font-bold">Horario de Atención WinSail:</span>
              </div>
              <p className="text-xl font-bold text-onesails-blue">
                Lunes a Viernes: 8:00 - 17:00h
              </p>
              <p className="text-sm opacity-90 mt-2">
                Pol. Industrial Las Maromas, Alicante
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-onesails-navy mb-6">
              WINSAIL: TU SOCIO NÁUTICO INTEGRAL EN ALICANTE
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Con más de 20 años de experiencia, <strong>WinSail</strong> es tu centro de referencia para tecnología OneSails y servicios náuticos profesionales en la Comunidad Valenciana.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-onesails-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-onesails-blue" />
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-2">Ubicación Estratégica</h3>
              <p className="text-gray-600">Pol. Industrial Las Maromas, el hub náutico de Alicante</p>
            </div>
            <div className="text-center">
              <div className="bg-onesails-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-onesails-blue" />
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-2">Distribuidor Oficial</h3>
              <p className="text-gray-600">Acceso directo a toda la gama de tecnología OneSails</p>
            </div>
            <div className="text-center">
              <div className="bg-onesails-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-onesails-blue" />
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-2">Horario Profesional</h3>
              <p className="text-gray-600">8:00-17:00h L-V para mejor servicio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fabricación */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              FABRICACIÓN
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-semibold text-onesails-navy">
                  La fórmula perfecta para hacer volar los mejores barcos del mundo cada temporada.
                </p>
                <p>
                  Fabricamos velas para barcos únicos que cortan las olas al viento como si fuera un traje hecho a medida. Porque en <strong>WINSAIL</strong> somos pioneros en introducir los mejores y más vanguardistas tejidos.
                </p>
                <p>
                  Contamos con una nave específica de almacenaje entre temporadas de navegación para guardar tus velas y además para crear nuevas. Tenemos en cuenta las cargas que generan los vientos en la vela y pensamos en qué direcciones y en qué densidad se tienen que disponer las fibras que las componen.
                </p>
                <p>
                  Gracias a nuestra forma de trabajar conseguimos imitar las cualidades de distribución de cargas y mantenimiento de forma de una vela rígida, pero añadiendo ligereza, durabilidad y facilidad de uso con el paso del tiempo.
                </p>
                <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90">
                  <Link href="/contacto">Pídenos presupuesto</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/uploads/fabricacion_winsail.jpeg"
                alt="Fabricación de velas WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reparación */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              REPARACIÓN
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative">
              <Image
                src="/uploads/reparacion_winsail.jpeg"
                alt="Reparación de velas WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-semibold text-onesails-navy">
                  Brindamos servicios de inspección y reparación de velas de cualquier tamaño.
                </p>
                <p>
                  Si el cliente lo solicita, es posible organizar el desmontaje y el montaje de las velas. También ofrecemos la oportunidad de almacenar sus velas en nuestro almacén durante los meses de invierno o durante largos períodos de inactividad.
                </p>
                <p>
                  Evaluamos cada trabajo de manera individual, mediante el examen de los daños en la vela, la vida útil de la vela y los planes futuros de navegación, para que el servicio de recomendaciones y estimaciones de presupuestos sean los más ajustados antes de proceder.
                </p>
                <div className="bg-onesails-blue/10 p-6 rounded-lg">
                  <h4 className="font-bold text-onesails-navy mb-3">Realizamos todo tipo de reparaciones:</h4>
                  <ul className="space-y-2">
                    <li>• Cambio de bandas de protección UV</li>
                    <li>• Reparación de desgarros</li>
                    <li>• Sustitución de paños</li>
                    <li>• Retrazado de velas</li>
                    <li>• Cambios de relingas y cremalleras</li>
                  </ul>
                </div>
                <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90">
                  <Link href="/contacto">Pídenos presupuesto</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimiento */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              MANTENIMIENTO
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-semibold text-onesails-navy">
                  Cuidamos tus velas como si fueran nuestras.
                </p>
                <p>
                  Como fabricantes de velas sabemos muy bien el costo de ellas como parte de la inversión de poseer y navegar un velero. Nuestra experiencia en el tema nos ha demostrado que el trato recibido por las velas después de salir de la velería puede extender o acortar la vida útil de las mismas.
                </p>
                <p>
                  Naturalmente, uno de los principales determinantes de la vida de las velas es la calidad de los materiales utilizados en su fabricación, su sistema constructivo y el trabajo que sobre ella realiza su fabricante.
                </p>
                <div className="bg-onesails-blue/10 p-6 rounded-lg">
                  <h4 className="font-bold text-onesails-navy mb-3">Te ayudamos a alargar la vida de tus velas en los 3 momentos vitales:</h4>
                  <ul className="space-y-2">
                    <li>• <strong>Preparación del barco y su aparejo</strong></li>
                    <li>• <strong>Trato adecuado de las velas a bordo</strong></li>
                    <li>• <strong>Cuidado y Mantenimiento de las Velas en Tierra</strong></li>
                  </ul>
                </div>
                <p>Si tienes dudas, visítanos o llámanos, estaremos encantados de ayudarte.</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/uploads/mantenimiento_winsail.jpeg"
                alt="Mantenimiento de velas WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Especializados Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-16">
            SERVICIOS ESPECIALIZADOS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Revisión hidráulica, backstay y contras de botavara</h3>
              <p className="text-gray-600">Evaluamos y ajustamos sistemas hidráulicos cruciales para el rendimiento y seguridad de tu embarcación, incluyendo backstay y contras de botavara.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Auditoría y medición detallada de daños a bordo</h3>
              <p className="text-gray-600">Realizamos inspecciones exhaustivas y detalladas, identificando con precisión daños existentes y posibles áreas de riesgo, permitiendo reparaciones oportunas y efectivas.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Servicio de Valet (final de temporada)</h3>
              <p className="text-gray-600">Nos encargamos de la retirada, almacenamiento y revisión completa de tus velas al finalizar la temporada, garantizando que estén listas y seguras para la próxima.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Trabajo vertical en mástiles</h3>
              <p className="text-gray-600">Nuestros técnicos especializados ejecutan trabajos en altura con rigurosos estándares de seguridad para inspección y reparación de mástiles.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Servicio de hibernación y almacenamiento de velas</h3>
              <p className="text-gray-600">Almacenamos tus velas en condiciones controladas durante la temporada baja, asegurando su conservación y protección contra elementos dañinos.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Servicio de mantenimiento anual de velas y lonas</h3>
              <p className="text-gray-600">Ofrecemos revisiones periódicas para mantener tus velas y lonas en óptimas condiciones, identificando posibles desgastes antes de que se conviertan en problemas mayores.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Inspección multipunto exhaustiva</h3>
              <p className="text-gray-600">Evaluamos cada detalle técnico y estructural de tus velas, proporcionando un diagnóstico preciso y soluciones efectivas para optimizar su rendimiento.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Servicio express 24 horas de reparación y cambio</h3>
              <p className="text-gray-600">Resolvemos rápidamente emergencias, asegurando que estés listo para navegar en el menor tiempo posible con reparaciones eficientes y confiables.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Servicio integral para regatas</h3>
              <p className="text-gray-600">Ofrecemos una solución completa para la gestión de velas, incluyendo su recogida, instalación y entrega, además de asesoría técnica y servicios de apoyo integral durante regatas.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90">
              <Link href="/contacto">Solicita información sobre nuestros servicios especializados</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WinSailServices
