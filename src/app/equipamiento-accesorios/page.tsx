import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Anchor, Settings, Zap, Wind, Shield, Package, Compass, Wrench, Truck, Archive } from 'lucide-react'

export default function EquipamientoAccesoriosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-onesails-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/servicios" className="hover:text-onesails-blue">Servicios</Link>
            <span className="mx-2">/</span>
            <span>Equipamiento y Accesorios</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/3526763690.jpeg')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              EQUIPAMIENTO<br />
              BARCO<br />
              <span className="text-onesails-blue">ACCESORIOS WINSAIL</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Venta e instalación profesional de accesorios náuticos en Alicante
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              WinSail ofrece la gama más completa de accesorios náuticos para equipar tu embarcación: desde enrolladores de Génova hasta fundas protectoras y sistemas de acastillaje profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-onesails-navy mb-6">
              EQUIPAMIENTO COMPLETO WINSAIL
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>WinSail Alicante</strong> es tu centro de referencia para equipamiento náutico profesional. Ofrecemos venta, instalación y mantenimiento de accesorios de las mejores marcas internacionales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>WinSail</strong> realiza venta e instalación de enrolladores de Génova con la máxima profesionalidad. Nuestros técnicos especializados aseguran instalaciones perfectas adaptadas a cada embarcación.
              </p>
              <div className="bg-onesails-blue/10 p-6 rounded-lg">
                <h4 className="font-bold text-onesails-navy mb-3">Productos estrella WinSail:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Fundas One Design</strong> personalizadas</li>
                  <li>• <strong>Fundas de botavara</strong> estándar o con Lazy-jack</li>
                  <li>• <strong>Bandas de protección solar</strong> UV resistentes</li>
                  <li>• <strong>Cabos profesionales</strong> para todas las aplicaciones</li>
                  <li>• <strong>Anclas de última generación</strong></li>
                  <li>• <strong>Calcetines para genáker, spi, asimétricos</strong></li>
                  <li>• <strong>Fundas de bitácora, timón, winches</strong></li>
                  <li>• <strong>Todo tipo de toldos náuticos</strong></li>
                  <li>• <strong>Capotas y Biminis</strong> a medida</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/3896421574.jpeg"
                alt="Equipamiento náutico WinSail"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-16">
            SISTEMAS Y COMPONENTES ESPECIALIZADOS WINSAIL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <Settings className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Winches y Sistemas de Escota</h3>
              <p className="text-gray-600">
                <strong>WinSail</strong> ofrece componentes robustos y fiables que aseguran una maniobra rápida y segura de tus velas. Sistemas profesionales para máximo rendimiento.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Zap className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Poleas y Sistemas</h3>
              <p className="text-gray-600">
                Sistemas eficientes que optimizan cargas y esfuerzos, facilitando maniobras con precisión y seguridad. <strong>WinSail</strong> instala los mejores sistemas del mercado.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Wind className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Grímpolas</h3>
              <p className="text-gray-600">
                Indicadores visuales de viento precisos y duraderos para una navegación eficaz. <strong>WinSail</strong> selecciona los mejores indicadores para condiciones mediterráneas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Anchor className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Cabos y Escotas</h3>
              <p className="text-gray-600">
                Materiales resistentes y confiables para todo tipo de maniobras náuticas. <strong>WinSail</strong> garantiza seguridad y rendimiento con cabos de primera calidad.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Wrench className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Herrajes de Cubierta</h3>
              <p className="text-gray-600">
                Componentes resistentes y duraderos que mejoran la funcionalidad y seguridad de la cubierta de tu embarcación. <strong>WinSail</strong> instala herrajes de máxima calidad.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <Compass className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Accesorios y Recambios</h3>
              <p className="text-gray-600">
                <strong>WinSail</strong> ofrece una gama completa de accesorios y recambios esenciales para mantener tu equipo náutico siempre operativo y en perfecto estado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-16">
            PROTECCIÓN Y ALMACENAMIENTO WINSAIL
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <Shield className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Fundas para Cubiertas, Casco, Timón y Orza</h3>
              <p className="text-gray-600 mb-4">
                <strong>WinSail</strong> ofrece protección especializada que prolonga la vida útil de tu embarcación, manteniéndola en óptimas condiciones contra los elementos.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Materiales UV resistentes con garantía WinSail</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Package className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Fundas para Velas</h3>
              <p className="text-gray-600 mb-4">
                Soluciones efectivas para almacenar y proteger velas, previniendo daños causados por factores ambientales. <strong>WinSail</strong> fabrica fundas a medida.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Diseño personalizado con logo de embarcación</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Archive className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Bolsas Estancas</h3>
              <p className="text-gray-600 mb-4">
                Bolsas resistentes al agua para mantener seguros tus objetos personales y equipo durante la navegación. <strong>WinSail</strong> selecciona las mejores marcas.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Garantía 100% impermeables</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Truck className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Sacos de Pantalán</h3>
              <p className="text-gray-600 mb-4">
                Ideales para transportar y almacenar equipo de forma organizada y segura en el muelle. <strong>WinSail</strong> ofrece diferentes tamaños y resistencias.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Materiales resistentes al desgaste</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Settings className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Poleas Clásicas</h3>
              <p className="text-gray-600 mb-4">
                Poleas tradicionales que combinan funcionalidad clásica con rendimiento moderno. <strong>WinSail</strong> las recomienda para embarcaciones de estilo clásico.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Diseño tradicional con tecnología moderna</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <Package className="w-10 h-10 text-onesails-blue mb-4" />
              <h3 className="text-lg font-bold text-onesails-navy mb-3">Equipamiento Completo</h3>
              <p className="text-gray-600 mb-4">
                Todo lo necesario para equipar tu embarcación: desde el más pequeño accesorio hasta sistemas completos de acastillaje. <strong>WinSail</strong> tiene la solución.
              </p>
              <div className="bg-white p-4 rounded">
                <p className="text-sm text-onesails-navy font-medium">Asesoramiento técnico incluido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-onesails-navy text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              INSTALACIÓN PROFESIONAL WINSAIL
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              No solo vendemos accesorios: WinSail ofrece instalación profesional y garantía completa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wrench className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Instalación Técnica</h3>
              <p className="opacity-90">Técnicos especializados WinSail para instalación profesional de todos los sistemas</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Garantía Completa</h3>
              <p className="opacity-90">Garantía WinSail en productos y mano de obra para total tranquilidad</p>
            </div>
            <div className="text-center">
              <Settings className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Mantenimiento</h3>
              <p className="opacity-90">Servicio post-venta WinSail con mantenimiento y ajustes incluidos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Necesitas equipar tu embarcación?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            <strong>WinSail Alicante</strong> tiene todo lo que necesitas: desde accesorios básicos hasta sistemas completos de acastillaje profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium px-8 py-3">
                Solicitar presupuesto equipamiento
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
