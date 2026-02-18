import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-onesails-navy mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Información del responsable</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Razón social:</strong> WinSail - Distribuidor Oficial OneSails
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Dirección:</strong> Pol. Industrial Las Maromas, Calle Holanda nº 8, 03160 Almoradí, Alicante, España
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> jose@winsail.org, andres@winsail.org
                </p>
                <p className="text-gray-700">
                  <strong>Teléfono:</strong> 966 77 79 74, 678 436 821, 610 018 772
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Información que recopilamos</h2>
              <p className="text-gray-700 mb-4">
                WinSail recopila diferentes tipos de información para brindar y mejorar nuestros
                servicios como distribuidor oficial de OneSails:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Información de contacto</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Nombre y apellidos</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Dirección postal</li>
                    <li>Empresa o organización</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Información del barco</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Tipo y modelo de embarcación</li>
                    <li>Dimensiones del barco</li>
                    <li>Tipo de navegación (crucero, regata)</li>
                    <li>Puerto base</li>
                    <li>Especificaciones técnicas relevantes</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Información de navegación</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Páginas visitadas en nuestro sitio web</li>
                    <li>Tiempo de navegación</li>
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Referencia de origen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Cómo utilizamos su información</h2>
              <p className="text-gray-700 mb-4">
                WinSail utiliza la información recopilada para los siguientes propósitos:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-winsail-blue pl-4">
                  <h3 className="text-lg font-semibold text-onesails-navy mb-2">Servicios de velas OneSails</h3>
                  <p className="text-gray-700">
                    Proporcionar cotizaciones, recomendaciones personalizadas y servicios
                    relacionados con velas, rigging y equipamiento náutico.
                  </p>
                </div>

                <div className="border-l-4 border-winsail-blue pl-4">
                  <h3 className="text-lg font-semibold text-onesails-navy mb-2">Comunicación</h3>
                  <p className="text-gray-700">
                    Responder a consultas, enviar actualizaciones sobre productos OneSails,
                    noticias del sector náutico y ofertas especiales.
                  </p>
                </div>

                <div className="border-l-4 border-winsail-blue pl-4">
                  <h3 className="text-lg font-semibold text-onesails-navy mb-2">Mejora de servicios</h3>
                  <p className="text-gray-700">
                    Analizar el uso de nuestro sitio web para mejorar la experiencia
                    del usuario y desarrollar nuevos servicios.
                  </p>
                </div>

                <div className="border-l-4 border-winsail-blue pl-4">
                  <h3 className="text-lg font-semibold text-onesails-navy mb-2">Cumplimiento legal</h3>
                  <p className="text-gray-700">
                    Cumplir con obligaciones legales, resolver disputas y hacer
                    cumplir nuestros acuerdos.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Base legal para el procesamiento</h2>
              <p className="text-gray-700 mb-4">
                Procesamos sus datos personales bajo las siguientes bases legales:
              </p>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Consentimiento</h3>
                  <p className="text-gray-700 text-sm">
                    Cuando ha dado su consentimiento específico para el procesamiento
                    (por ejemplo, marketing directo).
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Ejecución de contrato</h3>
                  <p className="text-gray-700 text-sm">
                    Para cumplir con contratos de venta, reparación o servicios de OneSails.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Interés legítimo</h3>
                  <p className="text-gray-700 text-sm">
                    Para mejorar nuestros servicios, seguridad del sitio web y
                    comunicaciones comerciales relevantes.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Obligación legal</h3>
                  <p className="text-gray-700 text-sm">
                    Para cumplir con obligaciones legales como facturación y contabilidad.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Compartir información</h2>
              <p className="text-gray-700 mb-4">
                WinSail puede compartir su información en las siguientes circunstancias:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>OneSails Group:</strong> Como distribuidor oficial, podemos compartir
                  información relevante con OneSails para garantizar el mejor servicio.
                </li>
                <li>
                  <strong>Proveedores de servicios:</strong> Con empresas que nos ayudan a
                  operar nuestro negocio (hosting, email, análisis).
                </li>
                <li>
                  <strong>Requisitos legales:</strong> Cuando sea requerido por ley o
                  autoridades competentes.
                </li>
                <li>
                  <strong>Protección de derechos:</strong> Para proteger nuestros derechos,
                  propiedades o seguridad.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Retención de datos</h2>
              <p className="text-gray-700 mb-4">
                WinSail conserva sus datos personales durante los siguientes períodos:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Datos de clientes activos:</strong> Mientras mantenga una relación comercial con nosotros</li>
                  <li><strong>Datos de cotizaciones:</strong> 3 años desde la última interacción</li>
                  <li><strong>Datos de facturación:</strong> 7 años (requisito legal fiscal)</li>
                  <li><strong>Datos de marketing:</strong> Hasta que retire su consentimiento</li>
                  <li><strong>Datos de navegación web:</strong> Máximo 2 años</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Sus derechos</h2>
              <p className="text-gray-700 mb-4">
                Como titular de datos personales, usted tiene los siguientes derechos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Acceso</h3>
                  <p className="text-gray-700 text-sm">
                    Solicitar información sobre qué datos personales procesamos sobre usted.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Rectificación</h3>
                  <p className="text-gray-700 text-sm">
                    Corregir datos personales inexactos o incompletos.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Supresión</h3>
                  <p className="text-gray-700 text-sm">
                    Solicitar la eliminación de sus datos personales en ciertas circunstancias.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Portabilidad</h3>
                  <p className="text-gray-700 text-sm">
                    Recibir sus datos en un formato estructurado y legible por máquina.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Limitación</h3>
                  <p className="text-gray-700 text-sm">
                    Restringir el procesamiento de sus datos personales.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-onesails-navy mb-2">Oposición</h3>
                  <p className="text-gray-700 text-sm">
                    Oponerse al procesamiento basado en intereses legítimos.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Seguridad</h2>
              <p className="text-gray-700 mb-4">
                WinSail implementa medidas técnicas y organizativas apropiadas para proteger
                sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción:
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cifrado SSL/TLS para transmisión de datos</li>
                <li>Acceso restringido a datos personales</li>
                <li>Copias de seguridad regulares</li>
                <li>Formación regular del personal en protección de datos</li>
                <li>Evaluaciones periódicas de seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Contacto y ejercicio de derechos</h2>
              <p className="text-gray-700 mb-4">
                Para ejercer sus derechos o realizar consultas sobre esta política de privacidad:
              </p>

              <div className="bg-winsail-blue/10 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> jose@winsail.org, andres@winsail.org
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Teléfono:</strong> 966 77 79 74, 678 436 821, 610 018 772
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Dirección postal:</strong> Pol. Industrial Las Maromas, Calle Holanda nº 8, 03160 Almoradí, Alicante
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Horario de atención:</strong> Lunes a Viernes de 8:00 a 17:00h
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Cambios en esta política</h2>
              <p className="text-gray-700">
                WinSail puede actualizar esta política de privacidad ocasionalmente.
                Le notificaremos sobre cambios significativos publicando la nueva política
                en nuestro sitio web. Le recomendamos revisar esta página periódicamente
                para estar informado de cualquier cambio.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
