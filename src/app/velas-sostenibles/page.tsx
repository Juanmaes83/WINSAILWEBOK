import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Leaf, Recycle, Award, Factory, Globe, TreePine } from 'lucide-react'

export default function VelasSosteniblesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-onesails-blue">Inicio</Link>
            <span className="mx-2">/</span>
            <Link href="/tecnologia" className="hover:text-onesails-blue">Tecnología</Link>
            <span className="mx-2">/</span>
            <span>Velas Sostenibles</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-onesails-navy text-white py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/726020858/2353844360.webp')`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              VELAS<br />
              <span className="text-green-400">SOSTENIBLES</span><br />
              <span className="text-onesails-blue">por WinSail</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8">
              Las primeras velas 100% reciclables del mundo disponibles en WinSail Alicante
            </p>
            <p className="text-lg opacity-80 max-w-3xl">
              WinSail te ofrece acceso exclusivo a las velas sostenibles 4T FORTE™: las primeras velas certificadas ISO 14040 completamente reciclables, para navegación responsable con el medio ambiente.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-onesails-navy mb-6">
              WINSAIL: PIONERO EN NAVEGACIÓN SOSTENIBLE
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              <strong>WinSail Alicante</strong> lidera la revolución sostenible en el sector náutico mediterráneo, ofreciendo las únicas velas completamente reciclables del mercado con certificación ISO 14040.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  El grupo OneSails, distribuido por <strong>WinSail</strong>, comparte una pasión por la vela y el mar. El respeto por el medio ambiente nos mantiene enfocados en cómo podemos mejorar continuamente la sostenibilidad de nuestras velas.
                </p>
                <p>
                  <strong>El compromiso de WinSail</strong> para reducir la huella de carbono de las velas se centra en los materiales y en lo que sucede con una vela al final de su vida útil.
                </p>
                <p>
                  En 2015, OneSails y <strong>WinSail</strong> lanzaron el proceso de reciclaje de velas y membranas 4T FORTE. Con certificación ISO 14040 de Evaluación del Ciclo de Vida, las 4T FORTE son las únicas membranas completamente reciclables en el mercado actual.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2754307117.webp"
                alt="Velas sostenibles WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            CICLO DE VIDA SOSTENIBLE CON WINSAIL
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Factory className="w-10 h-10 text-green-600" />
                <span className="absolute -mt-8 -ml-8 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">PLANTA DE FABRICACIÓN</h3>
              <p className="text-gray-600">WinSail garantiza que la fabricación mantiene los más altos estándares de prácticas ambientales y abastecimiento responsable de materiales y fuentes de energía.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-green-600" />
                <span className="absolute -mt-8 -ml-8 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">PRODUCCIÓN</h3>
              <p className="text-gray-600">Las velas 4T FORTE de WinSail se producen con bajas emisiones de CO2 a la atmósfera y sin uso de contaminantes como pegamentos, resinas y solventes.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-10 h-10 text-green-600" />
                <span className="absolute -mt-8 -ml-8 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">ELIMINACIÓN</h3>
              <p className="text-gray-600">Al final de su vida útil, WinSail gestiona el reciclaje de estas velas dentro de los procesos normales de recuperación de materias primas basadas en polietileno para generar pellets PE.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-green-600" />
                <span className="absolute -mt-8 -ml-8 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-onesails-navy mb-4">RECUPERACIÓN</h3>
              <p className="text-gray-600">WinSail utiliza los pellets de polietileno para la producción de accesorios (como cabeceras) que se utilizan en la producción de nuevas velas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            CERTIFICACIONES OFICIALES WINSAIL
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/1323387806.png"
                alt="Certificación ISO WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <h3 className="text-2xl font-bold text-onesails-navy">Un Compromiso Certificado</h3>
                <p>
                  <strong>WinSail</strong> cree firmemente en la sostenibilidad. Nuestro compromiso es concreto y certificado según: <strong>ISO 14021:2021</strong> e <strong>ISO 14001:2015</strong> por auditores independientes (IQNet).
                </p>
                <p>
                  La tecnología 4T Forte, desarrollada por FLEXON para OneSails y distribuida por <strong>WinSail</strong>, se utiliza para velas de crucero, deportivas y comerciales.
                </p>
                <div className="bg-onesails-blue/10 p-6 rounded-lg">
                  <h4 className="font-bold text-onesails-navy mb-3">Ventajas certificadas WinSail:</h4>
                  <ul className="space-y-2">
                    <li>• <strong>Diseñadas para desmontaje y reciclaje</strong></li>
                    <li>• <strong>Emisiones de producción entre 6.60 y 7.67 kg CO2/kg membrana</strong></li>
                    <li>• <strong>Más sostenibles que el Dacron</strong> ya en la etapa de producción ({'>'}10 kg CO2/kg)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy text-center mb-12">
            PROCESO DE RECICLAJE WINSAIL
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Preparación para Reciclaje</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>WinSail</strong> gestiona el proceso completo siguiendo las instrucciones de Flexon para la separación efectiva de componentes:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Remover accesorios</strong> de metal o materiales rígidos</li>
                  <li>• <strong>Eliminar decoraciones</strong> y protecciones incompatibles</li>
                  <li>• <strong>Retirar refuerzos</strong> y cordones</li>
                </ul>
                <div className="bg-green-50 p-4 rounded mt-4">
                  <p className="text-sm text-green-800">
                    <strong>Compromiso WinSail:</strong> Gestión completa del proceso desde la recolección hasta el reciclaje final
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-onesails-navy mb-6">Resultado del Reciclaje</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  El reciclaje produce <strong>gránulos PE</strong> que pueden reutilizarse en la industria de plásticos:
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Nuevos accesorios náuticos</strong> para velas</li>
                  <li>• <strong>Componentes reciclados</strong> para industria marina</li>
                  <li>• <strong>Materiales base</strong> para nuevos productos</li>
                </ul>
                <div className="bg-onesails-blue/10 p-4 rounded mt-4">
                  <p className="text-sm text-onesails-navy">
                    <strong>Red WinSail:</strong> Sin plantas de reciclaje locales, Flexon y OneSails manejan la recolección y envío a plantas europeas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-8">
                TECNOLOGÍA SOLAR INTEGRADA WINSAIL
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>WinSail</strong> puede entregar velas mayores 4T FORTE con paneles PV de células delgadas integrados, que regeneran las baterías del yate usando energía solar.
                </p>
                <p>
                  Debido a la construcción de alto módulo del material compuesto 4T FORTE, el impacto de los paneles PV es mínimo en términos de características y rendimiento de las velas.
                </p>
                <p>
                  <strong>Ejemplo WinSail:</strong> El Spirit 44CR(e) es un yate completamente eléctrico. OneSails trabajó estrechamente con Spirit Yachts y Solar Cloth para integrar paneles solares en la vela mayor 4T FORTE reciclable.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-onesails-navy font-medium">
                    <strong>Capacidad:</strong> 560 watts por lado (1,120 watts total) para regeneración continua de baterías
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/726020858/2841738307.webp"
                alt="Velas con paneles solares WinSail"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              COMPROMISO AMBIENTAL WINSAIL
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              WinSail Alicante: Tu centro de navegación sostenible en el Mediterráneo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Certificación ISO</h3>
              <p className="opacity-90">WinSail ofrece velas con certificación ISO 14040 y 14001 para navegación responsable</p>
            </div>
            <div className="text-center">
              <TreePine className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">Reducción CO2</h3>
              <p className="opacity-90">Menos emisiones que materiales tradicionales desde la etapa de producción</p>
            </div>
            <div className="text-center">
              <Recycle className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-4">100% Reciclables</h3>
              <p className="opacity-90">WinSail gestiona el ciclo completo: desde fabricación hasta reciclaje final</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Listo para navegación sostenible?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contacta con <strong>WinSail Alicante</strong> para las primeras velas 100% reciclables del mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solicite-presupuesto">
              <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3">
                Solicitar presupuesto sostenible
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
