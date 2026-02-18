import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Compañía */}
          <div>
            <h3 className="font-bold text-onesails-navy mb-4">COMPAÑÍA</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Noticias y Artículos
                </Link>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-bold text-onesails-navy mb-4">SOPORTE</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicio-reparacion" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Servicio y Reparación
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-onesails-navy mb-4">LEGAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terminos-condiciones-venta" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Términos y Condiciones de Venta
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones-uso" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Términos y Condiciones de Uso
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-onesails-gray hover:text-onesails-green transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* WinSail Contacto */}
          <div>
            <h3 className="font-bold text-onesails-navy mb-4">WINSAIL ALICANTE</h3>
            <div className="text-sm text-onesails-gray space-y-2">
              <p className="font-semibold">Distribuidor Oficial OneSails</p>
              <p>Pol. Industrial Las Maromas</p>
              <p>Calle Holanda nº 8</p>
              <p>Almoradí 03160 - Alicante</p>
              <div className="mt-3 space-y-1">
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
              <div className="mt-3 space-y-1">
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
              <div className="mt-3 text-xs">
                <p className="font-medium">Horario de atención:</p>
                <p>Lunes a Viernes: 8:00 - 17:00h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="text-onesails-gray hover:text-onesails-green transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-onesails-gray hover:text-onesails-green transition-colors">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-onesails-gray hover:text-onesails-green transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-onesails-gray hover:text-onesails-green transition-colors">
              <Youtube className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-onesails-gray">
            <p>© 2024 WinSail - Distribuidor Oficial OneSails. Todos los derechos reservados.</p>
            <Link href="/sitemap" className="hover:text-onesails-green transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
