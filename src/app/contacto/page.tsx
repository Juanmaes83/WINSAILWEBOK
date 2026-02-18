"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock, Star, ArrowRight, ArrowLeft } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'
import Footer from '@/components/Footer'

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-onesails-navy mb-6">
            Contacta con WinSail Alicante
          </h1>
          <p className="text-xl text-onesails-gray max-w-3xl mx-auto">
            Distribuidor oficial OneSails en el Mediterráneo. Más de 20 años de experiencia
            en servicios náuticos profesionales.
          </p>
        </div>

        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>

        <main>
          {/* Hero de Contacto */}
          <section className="py-16 bg-onesails-navy text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                CONTACTO
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
                Estamos aquí para ayudarte. Contacta con nuestro equipo de expertos.
              </p>
            </div>
          </section>

          {/* Información de contacto y formulario */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Información de contacto */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-onesails-navy mb-6">
                      INFORMACIÓN DE CONTACTO
                    </h2>
                    <p className="text-lg text-onesails-gray mb-8">
                      Nuestro equipo estará encantado de atenderte y resolver todas tus dudas sobre nuestros servicios.
                    </p>
                  </div>

                  {/* Tarjetas de información */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-onesails-blue mt-1 flex-shrink-0" />
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
                        <Phone className="h-6 w-6 text-onesails-blue mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-onesails-navy mb-2">Teléfonos</h3>
                          <div className="space-y-1 text-onesails-gray">
                            <p>
                              <Link href="tel:966777974" className="hover:text-onesails-blue transition-colors">
                                966 77 79 74
                              </Link>
                            </p>
                            <p>
                              <Link href="tel:678436821" className="hover:text-onesails-blue transition-colors">
                                678 436 821
                              </Link>
                            </p>
                            <p>
                              <Link href="tel:610018772" className="hover:text-onesails-blue transition-colors">
                                610 018 772
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-onesails-blue mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-onesails-navy mb-2">Email</h3>
                          <div className="space-y-1 text-onesails-gray">
                            <p>
                              <Link href="mailto:jose@winsail.org" className="hover:text-onesails-blue transition-colors">
                                jose@winsail.org
                              </Link>
                            </p>
                            <p>
                              <Link href="mailto:andres@winsail.org" className="hover:text-onesails-blue transition-colors">
                                andres@winsail.org
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-onesails-blue text-white p-6 rounded-lg">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold mb-2">Horario de Atención</h3>
                          <div className="space-y-1">
                            <p>Lunes a Viernes: 8:00 - 17:00h</p>
                            <p>Sábados y Domingos: Cerrado</p>
                            <p className="text-sm opacity-90 mt-2">Horario ininterrumpido</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulario de contacto */}
                <div>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold text-onesails-navy mb-6">
                      ENVÍANOS UN MENSAJE
                    </h2>

                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="nombre" className="block text-sm font-medium text-onesails-navy mb-2">
                            Nombre *
                          </label>
                          <Input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            className="w-full"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="apellidos" className="block text-sm font-medium text-onesails-navy mb-2">
                            Apellidos *
                          </label>
                          <Input
                            type="text"
                            id="apellidos"
                            name="apellidos"
                            required
                            className="w-full"
                            placeholder="Tus apellidos"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-onesails-navy mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full"
                            placeholder="tu@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefono" className="block text-sm font-medium text-onesails-navy mb-2">
                            Teléfono
                          </label>
                          <Input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            className="w-full"
                            placeholder="Tu teléfono"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="servicio" className="block text-sm font-medium text-onesails-navy mb-2">
                          Servicio de interés
                        </label>
                        <select
                          id="servicio"
                          name="servicio"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                        >
                          <option value="">Selecciona un servicio</option>
                          <option value="fabricacion">Fabricación de velas</option>
                          <option value="reparacion">Reparación de velas</option>
                          <option value="mantenimiento">Mantenimiento</option>
                          <option value="serigrafia">Serigrafía</option>
                          <option value="acastillaje">Acastillaje</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="mensaje" className="block text-sm font-medium text-onesails-navy mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          id="mensaje"
                          name="mensaje"
                          rows={5}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                          placeholder="Cuéntanos cómo podemos ayudarte..."
                        ></textarea>
                      </div>

                      <div className="flex items-center">
                        <input
                          id="privacidad"
                          name="privacidad"
                          type="checkbox"
                          required
                          className="h-4 w-4 text-onesails-blue focus:ring-onesails-blue border-gray-300 rounded"
                        />
                        <label htmlFor="privacidad" className="ml-2 block text-sm text-onesails-gray">
                          Acepto la política de privacidad y el tratamiento de mis datos *
                        </label>
                      </div>

                      <Button className="w-full bg-onesails-red hover:bg-onesails-red/90 text-white font-medium py-3">
                        Enviar mensaje
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mapa o CTA adicional */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-onesails-navy mb-6">
                ¿PREFIERES VISITARNOS?
              </h2>
              <p className="text-lg text-onesails-gray mb-8 max-w-3xl mx-auto">
                Ven a conocer nuestras instalaciones en Alicante. Podrás ver de primera mano
                cómo trabajamos y conocer a nuestro equipo de expertos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-onesails-blue hover:bg-onesails-blue/90 text-white font-medium px-8 py-3"
                  onClick={() => window.open('https://maps.google.com/?q=Pol.+Industrial+Las+Maromas,+Calle+Holanda+8,+03160+Almoradí,+Alicante,+España', '_blank')}
                >
                  Ver en Google Maps
                </Button>
                <Link href="/winsail">
                  <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                    Más información sobre WinSail
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
