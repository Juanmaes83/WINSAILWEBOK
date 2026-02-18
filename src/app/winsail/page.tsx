import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowLeft, Clock, MapPin, Phone, Mail, Users, Award, Wrench, Heart } from 'lucide-react'

const WinSailPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-primary">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">WinSail</span>
            </nav>
            <UniversalNavigation />
          </div>
        </div>
      </div>

      <main>
        {/* Hero WIN SAIL */}
        <section className="py-16 bg-onesails-navy text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('/uploads/WIN_SAIL_SERVICIOS_(1).JPG')`
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  WIN SAIL
                </h1>
                <div className="text-2xl lg:text-3xl font-bold text-onesails-green">
                  Distribuidor Oficial OneSails
                </div>
                <p className="text-xl opacity-90 leading-relaxed">
                  El viento ya tiene dueño. Somos especialistas en velas de alta tecnología
                  con más de 20 años de experiencia en el sector náutico.
                </p>
              </div>

              {/* Imagen WIN SAIL destacada */}
              <div className="relative">
                <Image
                  src="/uploads/WINSAIL.jpg"
                  alt="WIN SAIL - Logotipo y Equipo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ¿Quiénes somos? */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-onesails-navy mb-8">
                ¿Quiénes somos?
              </h1>
            </div>

            {/* Nuestra Historia */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8 text-center">
                Nuestra Historia
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    WinSail nació de la pasión y la experiencia acumulada de dos amigos amantes de las velas y los barcos que se convirtieron en regatistas profesionales, <strong>Andrés Manresa y José Ballester</strong>. Desde los primeros días hasta ahora, en WinSail hemos evolucionado continuamente, adaptándonos a los desafíos del mercado náutico moderno.
                  </p>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Como empresa y como individuos, asumimos cada desafío que nos presentan como propio. Nuestro compromiso va más allá de ofrecer productos excepcionales; brindamos un servicio cercano y personalizado, asegurando calidad y rendimiento en cada detalle.
                  </p>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Hoy, nos esforzamos con la misma intensidad por ofrecer un servicio, atención al cliente, formación, apoyo y mentoría de primer nivel. Así es como seguiremos ayudando a navegantes de todos los niveles a perseguir su pasión por la vela y alcanzar sus aspiraciones.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/uploads/EQUIPOWINSAIL.jpg"
                    alt="EQUIPO WINSAIL - Nuestra Historia"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              <div className="mt-12 bg-onesails-navy text-white p-8 rounded-lg">
                <p className="text-xl text-center leading-relaxed">
                  <strong>WINSAIL</strong> ha llevado el arte y la ciencia de la velería al máximo nivel para producir las formas más eficientes y rápidas posibles.
                </p>
                <p className="text-lg text-center mt-4 opacity-90">
                  Al integrar métodos de diseño y fabricación de velas de última generación con pruebas en el agua, las velas® se perfeccionan para ofrecer a los navegantes de todos los niveles un rendimiento, una consistencia y una repetibilidad excepcionales.
                </p>
              </div>
            </div>

            {/* Andrés Manresa y José Ballester */}
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8 text-center">
                Andrés Manresa y José Ballester
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/uploads/WIN_SAIL_EQUIPO_REGATA_(1).JPG"
                    alt="EQUIPO WIN SAIL - Andrés Manresa y José Ballester"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    <strong>Andrés y José</strong> somos mucho más que expertos navegantes; somos deportistas laureados y auténticos innovadores náuticos.
                  </p>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Nuestra experiencia en múltiples clases de embarcaciones y regatas internacionales nos permite entender exactamente lo que tu embarcación necesita para destacar en rendimiento y seguridad.
                  </p>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    En WinSail personalizamos cada vela, cada barco, y cada servicio como si fuera nuestro, garantizando tu éxito en cada travesía.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-onesails-navy mb-4">Experiencia Profesional</h3>
                    <ul className="space-y-2 text-onesails-gray">
                      <li>• Regatistas profesionales con más de 20 años de experiencia</li>
                      <li>• Participación en regatas internacionales de alto nivel</li>
                      <li>• Especialistas en múltiples clases de embarcaciones</li>
                      <li>• Innovadores en técnicas náuticas avanzadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Nuestra Fábrica */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8 text-center">
                Nuestra Fábrica
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Ubicada estratégicamente en <strong>Alicante</strong>, nuestra velería ofrece amplias instalaciones con más de <strong>1.000 metros cuadrados</strong> dedicados al diseño, fabricación, reparación, limpieza, y almacenamiento de velas, toldos, fundas y tapicería náutica.
                  </p>
                  <p className="text-lg text-onesails-gray leading-relaxed">
                    Cada producto que sale de nuestra nave refleja nuestro compromiso absoluto con la calidad y la atención al detalle.
                  </p>

                  <div className="bg-onesails-green/10 p-6 rounded-lg border-l-4 border-onesails-green">
                    <h3 className="text-xl font-bold text-onesails-navy mb-4">Nuestras Instalaciones</h3>
                    <ul className="space-y-2 text-onesails-gray">
                      <li>• <strong>+1.000 m²</strong> de instalaciones modernas</li>
                      <li>• Área de diseño y desarrollo de velas</li>
                      <li>• Taller de fabricación con tecnología avanzada</li>
                      <li>• Centro de reparación y mantenimiento</li>
                      <li>• Zona de limpieza y tratamiento de velas</li>
                      <li>• Almacén para velas, toldos y tapicería náutica</li>
                      <li>• Ubicación estratégica en el Polígono Industrial Las Maromas</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/uploads/REGATA_COMPETICION_WIN_SAIL_(1).JPG"
                    alt="Instalaciones WinSail - Fábrica de Velas en Alicante"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-onesails-navy/80 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">+1.000 m²</div>
                      <div className="text-xl">de instalaciones modernas</div>
                      <div className="text-lg opacity-90 mt-2">en Alicante</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información de Contacto */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-4">
                NUESTRA UBICACIÓN
              </h2>
              <p className="text-lg text-onesails-gray">
                Encuéntranos en el corazón del sector náutico de Alicante
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Información de contacto */}
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-onesails-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-onesails-navy mb-2">Dirección</h3>
                      <p className="text-onesails-gray">
                        Pol. Industrial Las Maromas<br />
                        Calle Holanda nº 8<br />
                        Almoradí 03160 - Alicante<br />
                        España
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-onesails-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-onesails-navy mb-2">Teléfonos</h3>
                      <div className="space-y-1 text-onesails-gray">
                        <p>
                          <Link href="tel:966777974" className="hover:text-onesails-green transition-colors">
                            966 77 79 74
                          </Link>
                        </p>
                        <p>
                          <Link href="tel:678436821" className="hover:text-onesails-green transition-colors">
                            678 436 821
                          </Link>
                        </p>
                        <p>
                          <Link href="tel:610018772" className="hover:text-onesails-green transition-colors">
                            610 018 772
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-onesails-green mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-onesails-navy mb-2">Email</h3>
                      <div className="space-y-1 text-onesails-gray">
                        <p>
                          <Link href="mailto:jose@winsail.org" className="hover:text-onesails-green transition-colors">
                            jose@winsail.org
                          </Link>
                        </p>
                        <p>
                          <Link href="mailto:andres@winsail.org" className="hover:text-onesails-green transition-colors">
                            andres@winsail.org
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagen del local / mapa */}
              <div className="relative">
                <Image
                  src="/uploads/Win_Sail_Andres_y_Jose_regatas.png"
                  alt="TRIPULACIÓN WINSAIL - Instalaciones"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <Button className="bg-onesails-green hover:bg-onesails-green/90 text-white font-medium">
                    Ver en Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué elegir WinSail */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-4">
                ¿POR QUÉ ELEGIR WINSAIL?
              </h2>
              <p className="text-lg text-onesails-gray">
                Más de 20 años de experiencia nos avalan como líderes en el sector
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Profesionales cualificados */}
              <div className="text-center">
                <div className="w-16 h-16 bg-onesails-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-3">
                  PROFESIONALES CUALIFICADOS
                </h3>
                <p className="text-onesails-gray text-sm">
                  Te guiamos en la selección de materiales, hardware y dimensionamiento.
                  Te acompañamos durante todo el proceso.
                </p>
              </div>

              {/* Calidad garantizada */}
              <div className="text-center">
                <div className="w-16 h-16 bg-onesails-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-3">
                  CALIDAD GARANTIZADA
                </h3>
                <p className="text-onesails-gray text-sm">
                  Distribuidores oficiales de OneSails. Somos garantía de calidad,
                  vanguardia, tecnología y diseño.
                </p>
              </div>

              {/* Servicio integral */}
              <div className="text-center">
                <div className="w-16 h-16 bg-onesails-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-3">
                  SERVICIO INTEGRAL
                </h3>
                <p className="text-onesails-gray text-sm">
                  Desde fabricación hasta mantenimiento. Ofrecemos servicios completos
                  para todas las necesidades de tu embarcación.
                </p>
              </div>

              {/* Asesoramiento personalizado */}
              <div className="text-center">
                <div className="w-16 h-16 bg-onesails-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-3">
                  ASESORAMIENTO PERSONALIZADO
                </h3>
                <p className="text-onesails-gray text-sm">
                  Técnicos certificados para asesorar sobre el uso de velas y
                  ayudarte a aprovechar al máximo tu inversión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas con las que trabajamos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-4">
                TRABAJAMOS CON LOS MEJORES
              </h2>
              <p className="text-lg text-onesails-gray">
                Marcas líderes en tecnología náutica y materiales de primera calidad
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="text-center">
                <div className="text-2xl font-bold text-onesails-navy">OneSails</div>
                <div className="text-sm text-onesails-gray">Distribuidor Oficial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-onesails-navy">Harken</div>
                <div className="text-sm text-onesails-gray">Acastillaje Premium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-onesails-navy">Lewmar</div>
                <div className="text-sm text-onesails-gray">Equipamiento Náutico</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-onesails-navy">Selden</div>
                <div className="text-sm text-onesails-gray">Mástiles y Rigging</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-onesails-navy text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿LISTO PARA NAVEGAR CON NOSOTROS?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Visítanos en nuestras instalaciones o contáctanos para más información.
              Estaremos encantados de atenderte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-onesails-green hover:bg-onesails-green/90 text-white font-medium px-8 py-3">
                  Contacta con nosotros
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy px-8 py-3">
                  Ver nuestros servicios
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WinSailPage
