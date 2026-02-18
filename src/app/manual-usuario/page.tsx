"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ArrowLeft,
  BookOpen,
  Download,
  Wind,
  Sun,
  Anchor,
  ShipWheel,
  Settings,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Calendar
} from 'lucide-react'

const ManualUsuarioPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    embarcacion: '',
    servicio: '',
    descripcion: '',
    urgencia: 'normal'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se procesaría el formulario
    console.log('Formulario enviado:', formData)
    alert('Solicitud de presupuesto enviada. Nos pondremos en contacto contigo pronto.')
  }

  const serviceOptions = [
    'Mantenimiento y Reparación',
    'Lavado de Velas',
    'Serigrafiado',
    'Almacenamiento',
    'Inspección Completa',
    'Servicio Express 24h',
    'Consultoría de Trimming',
    'Otro'
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumb navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/how-to" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a How To
          </Link>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-onesails-navy text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url('https://ext.same-assets.com/726020858/2441312061.jpeg')`
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  MANUAL DE USUARIO WINSAIL
                </h1>
                <p className="text-xl lg:text-2xl opacity-90 mb-8">
                  Cómo usar y cuidar adecuadamente tus velas OneSails. Guía completa para maximizar
                  su rendimiento y durabilidad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white px-8 py-3">
                    <Download className="w-5 h-5 mr-2" />
                    Descargar PDF
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy px-8 py-3">
                    Solicitar Servicio
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/726020858/2441312061.jpeg"
                  alt="Manual de Usuario OneSails"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-onesails-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-onesails-navy mb-6">
                Cuidado Profesional de tus Velas OneSails
              </h2>
              <p className="text-lg text-onesails-gray leading-relaxed">
                Tus nuevas velas OneSails son productos únicos, construidos a medida basándose en la investigación
                e innovación que siempre ha distinguido la filosofía de fabricación de nuestro grupo. En WinSail
                seleccionamos rigurosamente nuestros materiales, que ensamblamos con los procesos tecnológicamente
                más avanzados, combinados con la pasión, conocimiento y atención al detalle de nuestros navegantes expertos.
              </p>
            </div>

            <div className="bg-onesails-blue/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-onesails-navy mb-4">En este manual encontrarás:</h3>
              <ul className="space-y-3 text-onesails-gray">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-onesails-blue mr-3 mt-0.5 flex-shrink-0" />
                  Consejos y sugerencias para aprovechar al máximo tus nuevas velas
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-onesails-blue mr-3 mt-0.5 flex-shrink-0" />
                  Técnicas para mantenerlas eficientes durante muchos años
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-onesails-blue mr-3 mt-0.5 flex-shrink-0" />
                  Información sobre nuestra red de servicio distribuida profesionalmente
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-onesails-blue mr-3 mt-0.5 flex-shrink-0" />
                  Procedimientos específicos según el tipo de vela y navegación
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Índice */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-onesails-navy text-center mb-12">ÍNDICE DEL MANUAL</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="#consejos-uso" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Wind className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    1. Consejos de Uso
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Primeras verificaciones, evitar rozaduras, rangos de viento y almacenamiento
                  </p>
                </div>
              </Link>

              <Link href="#velas-regata" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <ShipWheel className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    2. Velas de Regata
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Spinnakers, medición, tensión de sables y protección del aparejo
                  </p>
                </div>
              </Link>

              <Link href="#velas-crucero" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Anchor className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    3. Velas de Crucero
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Tensión de drizas, trimming, almacenamiento prolongado y revisiones
                  </p>
                </div>
              </Link>

              <Link href="#one-design" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Settings className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    4. One Design y Dinghy
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Velas nuevas, uso correcto, enrollado y cuidados específicos
                  </p>
                </div>
              </Link>

              <Link href="#cuidado-mantenimiento" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Sun className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    5. Cuidado y Mantenimiento
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Lavado, prevención de moho, productos de limpieza y advertencias
                  </p>
                </div>
              </Link>

              <Link href="#red-servicio" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Phone className="w-12 h-12 text-onesails-blue mb-4" />
                  <h3 className="text-xl font-bold text-onesails-navy group-hover:text-onesails-blue transition-colors mb-2">
                    6. Red de Servicio WinSail
                  </h3>
                  <p className="text-onesails-gray text-sm">
                    Upgrades, revisiones, reparaciones y almacenamiento profesional
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Consejos de Uso */}
        <section id="consejos-uso" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-onesails-navy text-center mb-12">1. CONSEJOS DE USO</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/2339610578.svg"
                      alt="Primeras verificaciones"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">PRIMERAS VERIFICACIONES</h3>
                    <p className="text-onesails-gray">
                      Antes de navegar, es aconsejable izar las velas nuevas en el muelle con viento suave
                      para verificar que las medidas sean correctas y todos los accesorios coincidan con
                      el hardware del barco (porta-sables, mosquetones, anillos de esquina, rizos, etc.)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/2482410550.svg"
                      alt="Evitar rozaduras"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">EVITAR ROZADURAS Y DESGASTE</h3>
                    <p className="text-onesails-gray">
                      La abrasión en superficies rugosas y el contacto con objetos afilados pueden causar
                      desgaste prematuro. Nunca arrastres las velas por el suelo o cubierta, incluso en
                      sus bolsas. Protege todos los elementos del aparejo que puedan tocar las velas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/2277978437.svg"
                      alt="No flamear velas"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">NO DEJAR FLAMEAR LAS VELAS</h3>
                    <p className="text-onesails-gray">
                      Dejar que las velas flamen con brisa puede dañar seriamente las fibras del tejido
                      y causar roturas o descosidos. Evita esto tanto como sea posible para extender
                      la vida útil de tus velas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/1403730006.svg"
                      alt="Rango de viento"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">NO EXCEDER EL RANGO DE VIENTO</h3>
                    <p className="text-onesails-gray">
                      Usar velas más allá de la velocidad máxima de viento para la que fueron diseñadas
                      puede causar deformación prematura y, en casos extremos, rotura. Si no estás seguro
                      del rango de viento, contacta tu loft WinSail local.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/4105572867.svg"
                      alt="Almacenamiento"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">ALMACENAR SECAS Y PLEGADAS</h3>
                    <p className="text-onesails-gray">
                      Siempre que sea posible, recomendamos guardar las velas correctamente plegadas
                      o enrolladas en sus bolsas, después de enjuagarlas con agua dulce y secarlas
                      completamente. Esto previene la oxidación de herrajes metálicos y la formación de moho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-onesails-blue/10 p-3 rounded-lg flex-shrink-0">
                    <Image
                      src="https://ext.same-assets.com/726020858/649413034.svg"
                      alt="Protección UV"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-onesails-navy mb-3">NO EXPONER AL UV INNECESARIAMENTE</h3>
                    <p className="text-onesails-gray">
                      Todas las velas están hechas de materiales sintéticos sensibles a la radiación UV.
                      La exposición innecesaria puede acelerar el deterioro. Guarda las velas bajo cubierta
                      o protégelas con fundas UV cuando no las uses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulario de Presupuesto */}
        <section className="py-16 bg-onesails-navy text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">SOLICITA PRESUPUESTO PERSONALIZADO</h2>
              <p className="text-xl opacity-90">
                ¿Necesitas servicios específicos para tus velas? Completa el formulario y recibe una cotización detallada.
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre completo *</label>
                      <Input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <Input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        placeholder="+34 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Embarcación</label>
                      <Input
                        type="text"
                        name="embarcacion"
                        value={formData.embarcacion}
                        onChange={handleInputChange}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        placeholder="Marca, modelo, eslora"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de servicio *</label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option} className="text-gray-900">
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Urgencia</label>
                      <select
                        name="urgencia"
                        value={formData.urgencia}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white"
                      >
                        <option value="normal" className="text-gray-900">Normal (7-14 días)</option>
                        <option value="rapido" className="text-gray-900">Rápido (3-5 días)</option>
                        <option value="express" className="text-gray-900">Express (24-48h)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Descripción del servicio</label>
                    <textarea
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white placeholder:text-white/70"
                      placeholder="Describe el estado de las velas, problema específico o servicio que necesitas..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button type="submit" className="bg-onesails-blue hover:bg-onesails-blue/90 text-white px-8 py-3">
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar Solicitud
                    </Button>
                    <Button type="button" variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-navy px-8 py-3">
                      <Phone className="w-5 h-5 mr-2" />
                      Llamar Ahora
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-75">
                * Campos obligatorios. Te responderemos en un plazo máximo de 24 horas.
              </p>
            </div>
          </div>
        </section>

        {/* Información de Contacto Rápido */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-onesails-navy text-center mb-12">CONTACTO DIRECTO WINSAIL</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-onesails-blue" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-2">Teléfono</h3>
                <p className="text-onesails-gray">
                  <Link href="tel:966777974" className="hover:text-onesails-blue">966 77 79 74</Link><br />
                  <Link href="tel:678436821" className="hover:text-onesails-blue">678 436 821</Link>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-onesails-blue" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-2">Email</h3>
                <p className="text-onesails-gray">
                  <Link href="mailto:jose@winsail.org" className="hover:text-onesails-blue">jose@winsail.org</Link><br />
                  <Link href="mailto:andres@winsail.org" className="hover:text-onesails-blue">andres@winsail.org</Link>
                </p>
              </div>

              <div className="text-center">
                <div className="bg-onesails-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-onesails-blue" />
                </div>
                <h3 className="text-xl font-bold text-onesails-navy mb-2">Horario</h3>
                <p className="text-onesails-gray">
                  Lunes a Viernes<br />
                  8:00 - 17:00h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-onesails-blue text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Necesitas más información?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              El equipo de WinSail está aquí para ayudarte con cualquier consulta sobre el cuidado y mantenimiento de tus velas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="bg-white text-onesails-blue hover:bg-gray-100 font-medium px-8 py-3">
                  Contactar con expertos
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-onesails-blue px-8 py-3">
                  Ver todos los servicios
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

export default ManualUsuarioPage
