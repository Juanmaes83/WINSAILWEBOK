import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Anchor, Calculator, Wrench, Ship, Settings, Clock, Star, MapPin, Sailboat, Trophy, Cog, Users } from 'lucide-react'

const WinSailHomeSection = () => {
  return (
    <div className="bg-white py-16 lg:py-24">
      {/* Sección principal con información de WinSail */}
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

      {/* Boards de navegación a páginas internas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
              SERVICIOS Y PRODUCTOS WINSAIL
            </h2>
            <p className="text-xl text-gray-600">
              Descubre toda nuestra gama de servicios náuticos profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Velas */}
            <Link href="/velas" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Sailboat className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">VELAS</h3>
                  <p className="text-gray-600 text-sm">Tecnología OneSails para regata y crucero</p>
                </CardContent>
              </Card>
            </Link>

            {/* Servicios */}
            <Link href="/servicios" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Settings className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">SERVICIOS</h3>
                  <p className="text-gray-600 text-sm">Fabricación, rigging y acastillaje profesional</p>
                </CardContent>
              </Card>
            </Link>

            {/* Reparaciones */}
            <Link href="/servicios#reparacion" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Wrench className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">REPARACIONES</h3>
                  <p className="text-gray-600 text-sm">Reparación y restauración de velas</p>
                </CardContent>
              </Card>
            </Link>

            {/* Mantenimiento */}
            <Link href="/servicios#mantenimiento" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Ship className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">MANTENIMIENTO</h3>
                  <p className="text-gray-600 text-sm">Cuidado integral de tus velas</p>
                </CardContent>
              </Card>
            </Link>

            {/* Calculadora de Velas */}
            <Link href="/calculadora-velas" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Calculator className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">CALCULADORA</h3>
                  <p className="text-gray-600 text-sm">Calcula las medidas para tus velas</p>
                </CardContent>
              </Card>
            </Link>

            {/* Optimist */}
            <Link href="/one-design/optimist" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Trophy className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">OPTIMIST</h3>
                  <p className="text-gray-600 text-sm">Velas para la clase más popular</p>
                </CardContent>
              </Card>
            </Link>

            {/* Servicios Especiales */}
            <Link href="/servicios#servicios-especializados" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Cog className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">SERVICIOS ESPECIALES</h3>
                  <p className="text-gray-600 text-sm">Soluciones técnicas especializadas</p>
                </CardContent>
              </Card>
            </Link>

            {/* Contacto/Equipo */}
            <Link href="/contacto" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-onesails-blue">
                <CardContent className="p-6 text-center">
                  <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-onesails-blue/20 transition-colors">
                    <Users className="w-8 h-8 text-onesails-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-onesails-navy mb-2">CONTACTO</h3>
                  <p className="text-gray-600 text-sm">Conoce a nuestro equipo profesional</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-onesails-blue hover:bg-onesails-blue/90 text-white px-8 py-3">
              <Link href="/solicite-presupuesto">
                Solicita tu presupuesto personalizado
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WinSailHomeSection
