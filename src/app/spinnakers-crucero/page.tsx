import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Wind, Target, Zap, Globe, Star, ArrowRight } from 'lucide-react'

export default function SpinnakersCruceroPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-onesails-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <span>Spinnakers de Crucero</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/2145893642.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              SPINNAKERS<br />
              DE CRUCERO
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Simétricos y Asimétricos - Distribuidos por WinSail
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              Para navegantes que buscan velocidad y diversión en sus travesías, OneSails ofrece spinnakers de crucero diseñados para maximizar el rendimiento en portantes mientras mantienen la facilidad de manejo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-onesails-navy mb-8">
                VELOCIDAD Y FACILIDAD DE USO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Los spinnakers de crucero OneSails están diseñados específicamente para navegantes que quieren disfrutar de la velocidad en portantes sin la complejidad de las velas de regata. Ofrecen un equilibrio perfecto entre rendimiento y facilidad de manejo.
                </p>
                <p>
                  Disponibles tanto en configuración simétrica como asimétrica, nuestros spinnakers de crucero utilizan materiales y construcciones optimizadas para durabilidad y rendimiento a largo plazo, perfectos para navegación de crucero.
                </p>
                <p>
                  Cada spinnaker incluye un sistema de manipulación simplificado que permite izar, navegar y arriar con tripulaciones reducidas, manteniendo la seguridad y el control en todo momento.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3782460253.jpeg"
                alt="Spinnaker de crucero OneSails"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            TIPOS DE SPINNAKERS DE CRUCERO
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Wind className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-2xl font-bold text-onesails-navy">Spinnakers Simétricos</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Perfectos para navegación de crucero tradicional, los spinnakers simétricos OneSails ofrecen:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Excelente rendimiento en vientos de popa</li>
                  <li>• Facilidad de manejo con tripulaciones pequeñas</li>
                  <li>• Construcción robusta para uso frecuente</li>
                  <li>• Colores vibrantes y diseños personalizables</li>
                  <li>• Sistema de izado y arriado simplificado</li>
                </ul>
                <p className="font-medium text-onesails-navy">
                  Ideales para: Navegación oceánica, travesías largas, cruceros familiares
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-onesails-blue mr-4" />
                <h3 className="text-2xl font-bold text-onesails-navy">Spinnakers Asimétricos</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Para navegantes que buscan versatilidad y performance, los asimétricos proporcionan:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Mayor rango de ángulos de navegación</li>
                  <li>• Facilidad de manejo sin tangón</li>
                  <li>• Mejor rendimiento en vientos de través</li>
                  <li>• Izado y arriado más rápido y seguro</li>
                  <li>• Menos tripulación necesaria para maniobras</li>
                </ul>
                <p className="font-medium text-onesails-navy">
                  Ideales para: Navegación costera, regatas de crucero, navegación deportiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            CARACTERÍSTICAS TÉCNICAS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Target className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Materiales</h3>
              <p className="text-gray-600">Nylon ripstop de alta calidad, resistente a los rayos UV y al desgarro.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Star className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Construcción</h3>
              <p className="text-gray-600">Costuras reforzadas y herrajes de alta resistencia para máxima durabilidad.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Globe className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Diseño</h3>
              <p className="text-gray-600">Formas optimizadas para máximo rendimiento con facilidad de manejo.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Wind className="w-12 h-12 text-onesails-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-onesails-navy mb-3">Versatilidad</h3>
              <p className="text-gray-600">Amplio rango de vientos desde 6 hasta 20+ nudos según el modelo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2987634219.jpeg"
                alt="Navegación con spinnaker de crucero"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                CONFIGURACIÓN Y MANEJO
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Los spinnakers de crucero OneSails vienen con un sistema completo de jarcia y accesorios diseñados para facilitar su uso. Incluyen driza de spinnaker, escotas, y todos los herrajes necesarios.
                </p>
                <p>
                  Nuestro equipo técnico de WinSail proporciona asesoramiento completo sobre la configuración optimal del spinnaker para tu embarcación específica, asegurando el mejor rendimiento y facilidad de manejo.
                </p>
                <p>
                  Incluimos manual de uso detallado con diagramas de configuración, técnicas de izado y arriado, y consejos para optimizar el rendimiento en diferentes condiciones de viento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              SERVICIO ESPECIALIZADO WinSail
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              WinSail ofrece servicio completo para spinnakers de crucero, desde la selección hasta el mantenimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Asesoramiento Técnico</h3>
              <p className="opacity-90">Ayuda en la selección del spinnaker ideal para tu embarcación y estilo de navegación.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Instalación y Configuración</h3>
              <p className="opacity-90">Montaje profesional y configuración optimizada para máximo rendimiento.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Mantenimiento</h3>
              <p className="opacity-90">Servicios de reparación, limpieza y almacenamiento profesional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para más velocidad en portantes?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con WinSail para spinnakers OneSails que transformarán tu experiencia de navegación en portantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                Contactar WinSail
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
