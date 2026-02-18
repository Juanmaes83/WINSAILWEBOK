import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-onesails-navy mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">¿Qué son las cookies?</h2>
              <p className="text-gray-700 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
                visita nuestro sitio web. WinSail utiliza cookies para mejorar su experiencia de
                navegación y ofrecer servicios personalizados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Tipos de cookies que utilizamos</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Cookies Funcionales</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Propósito:</strong> Esenciales para el funcionamiento del sitio web.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Duración:</strong> Sesión y persistentes (hasta 1 año).
                  </p>
                  <p className="text-gray-700">
                    Estas cookies son necesarias para que WinSail pueda ofrecer servicios básicos
                    como navegación, acceso a áreas seguras y recordar sus preferencias de cookies.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Cookies de Preferencias</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Propósito:</strong> Recordar sus configuraciones y preferencias.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Duración:</strong> Hasta 2 años.
                  </p>
                  <p className="text-gray-700">
                    Permiten que nuestro sitio web recuerde información como su idioma preferido,
                    región y otras configuraciones para personalizar su experiencia.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Cookies Estadísticas</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Propósito:</strong> Análisis del uso del sitio web.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Duración:</strong> Hasta 2 años.
                  </p>
                  <p className="text-gray-700">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web
                    recopilando información de forma anónima para mejorar nuestros servicios.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-onesails-navy mb-3">Cookies de Marketing</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Propósito:</strong> Publicidad personalizada y seguimiento.
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Duración:</strong> Hasta 2 años.
                  </p>
                  <p className="text-gray-700">
                    Se utilizan para mostrar anuncios relevantes y medir la efectividad de
                    nuestras campañas publicitarias relacionadas con productos OneSails.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Cookies de terceros</h2>
              <p className="text-gray-700 mb-4">
                WinSail puede utilizar servicios de terceros que establecen sus propias cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Para análisis de tráfico y comportamiento de usuarios</li>
                <li><strong>YouTube:</strong> Para reproducir videos integrados de OneSails</li>
                <li><strong>Redes sociales:</strong> Para funcionalidades de compartir contenido</li>
                <li><strong>Chat en vivo:</strong> Para soporte al cliente instantáneo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Gestión de cookies</h2>
              <p className="text-gray-700 mb-4">
                Puede gestionar sus preferencias de cookies de las siguientes maneras:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-onesails-navy mb-3">A través de nuestro sitio web</h3>
                <p className="text-gray-700">
                  Puede cambiar sus preferencias de cookies en cualquier momento usando el
                  banner de consentimiento de cookies que aparece en su primera visita.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-onesails-navy mb-3">A través de su navegador</h3>
                <p className="text-gray-700 mb-2">
                  Puede configurar su navegador para rechazar todas las cookies o para que
                  le avise cuando se envíe una cookie. Sin embargo, tenga en cuenta que
                  algunas funciones del sitio pueden no funcionar correctamente.
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
                  <li>Firefox: Configuración → Privacidad y seguridad</li>
                  <li>Safari: Preferencias → Privacidad</li>
                  <li>Edge: Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Base legal</h2>
              <p className="text-gray-700 mb-4">
                WinSail procesa cookies bajo las siguientes bases legales:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Consentimiento:</strong> Para cookies no esenciales (marketing, estadísticas)</li>
                <li><strong>Interés legítimo:</strong> Para cookies funcionales necesarias para el servicio</li>
                <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por la normativa aplicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas sobre nuestra política de cookies, puede contactarnos:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>WinSail - Distribuidor Oficial OneSails</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Pol. Industrial Las Maromas, Calle Holanda nº 8<br />
                  03160 Almoradí, Alicante, España
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
              <h2 className="text-2xl font-bold text-onesails-navy mb-4">Actualizaciones</h2>
              <p className="text-gray-700">
                WinSail puede actualizar esta política de cookies ocasionalmente. Le recomendamos
                que revise esta página periódicamente para estar informado de cualquier cambio.
                Las modificaciones entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
