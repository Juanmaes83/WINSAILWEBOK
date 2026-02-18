"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top bar con logo y navegación principal */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - REDUCIDO 80% */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-onesails-red text-2xl lg:text-3xl font-bold">
              1
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-onesails-navy leading-tight opacity-60">
                THE NEXT
              </span>
              <span className="text-xs font-medium text-onesails-navy leading-tight opacity-60">
                GENERATION
              </span>
              <span className="text-sm font-bold text-onesails-navy leading-tight opacity-60">
                OF SAILS
              </span>
            </div>
          </Link>

          {/* Navegación desktop - MÁS ESPACIADO */}
          <nav className="hidden lg:flex items-center space-x-16">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/winsail" className="text-onesails-navy font-medium text-sm hover:text-onesails-blue transition-colors">
                      WIN SAIL
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-onesails-navy font-medium text-sm">
                    Velas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[700px] lg:w-[900px] lg:grid-cols-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">REGATA</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/velas-de-regata" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Velas de Regata</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/spinnakers-regata" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Spinnakers Simétricos y Asimétricos</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">CRUCERO</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/velas-de-crucero" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Velas de Crucero</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/spinnakers-crucero" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Spinnakers Simétricos y Asimétricos</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">ONE DESIGN</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/optimist" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Optimist</div>
                                <div className="text-xs text-yellow-600">Campeón Mundial</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">PERSONALIZADOS</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/super-yachts" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Super Yachts Sails</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/yates-clasicos" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Velas para Yates Clásicos</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-onesails-navy font-medium text-sm">
                    Tecnología
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-4 p-6 w-[700px] lg:w-[900px] lg:grid-cols-4">
                      {/* Hilos Continuos */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">HILOS CONTINUOS</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/4t-forte" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">4T FORTE</div>
                                <div className="text-xs text-gray-500">Ultra Premium</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vektor2" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Vektor2</div>
                                <div className="text-xs text-gray-500">Premium</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/m3" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">M3</div>
                                <div className="text-xs text-gray-500">Film-Film sin resina</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Paneladas */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">PANELADAS</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/vantage-one" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Vantage One</div>
                                <div className="text-xs text-gray-500">Membranas panelizadas</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/triradial-cross-cut" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Triradial y Cross-Cut</div>
                                <div className="text-xs text-gray-500">Tejidos tradicionales</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Grátil Estructurado */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">GRÁTIL ESTRUCTURADO</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/integrated-furling-structure" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">IFS</div>
                                <div className="text-xs text-gray-500">Enrollado integrado</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/zero-sag" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Zero Sag</div>
                                <div className="text-xs text-gray-500">Eliminación combado</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>

                      {/* Innovaciones */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">INNOVACIONES</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/design" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Diseño</div>
                                <div className="text-xs text-gray-500">FSI y CFD</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/onesd" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">OneSD</div>
                                <div className="text-xs text-gray-500">Velas inteligentes</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/velas-sostenibles" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Sostenibilidad</div>
                                <div className="text-xs text-gray-500">Velas certificadas</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <NavigationMenuLink asChild>
                        <Link href="/tecnologia" className="flex items-center justify-center text-sm font-medium text-onesails-blue hover:text-onesails-navy transition-colors">
                          Ver Todas las Tecnologías y Comparador →
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-onesails-navy font-medium">
                    How to
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] lg:w-[700px] lg:grid-cols-3">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">CUIDADO Y MANTENIMIENTO</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/manual-usuario" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Manual de Usuario</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">GUÍAS DE TRIMMING</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/mainsail-trimming" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Mainsail Trimming</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/spinnaker-trimming" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Spinnaker Trimming</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">HERRAMIENTAS</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/disena-spinnaker" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Diseña tu Spinnaker</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/novedades" className="text-onesails-navy font-medium text-sm hover:text-onesails-blue transition-colors">
                      Novedades
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-onesails-navy font-medium text-sm">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">FABRICACIÓN</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/servicios#fabricacion" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Fabricación de Velas</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/servicios#serigrafia" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Serigrafía y Personalización</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-onesails-navy">MANTENIMIENTO</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/servicios#reparacion" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Reparación de Velas</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <Link href="/servicios#acastillaje" className="block select-none space-y-1 rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">Acastillaje y Rigging</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/solicite-presupuesto" className="text-onesails-navy font-medium text-sm hover:text-onesails-blue transition-colors">
                      Presupuesto
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contacto" className="text-onesails-navy font-medium text-sm hover:text-onesails-blue transition-colors">
                      Contacto
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Barra de búsqueda */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 w-48 focus:w-64 transition-all duration-300"
              />
            </div>

            {/* Selector de idioma */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Image
                    src="https://ext.same-assets.com/726020858/1838614006.svg"
                    alt="Español"
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Image
                    src="https://ext.same-assets.com/726020858/1838614006.svg"
                    alt="Español"
                    width={20}
                    height={15}
                    className="mr-2 rounded-sm"
                  />
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="w-5 h-4 mr-2 bg-blue-500 rounded-sm"></div>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="w-5 h-4 mr-2 bg-green-white-red rounded-sm"></div>
                  Italiano
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Botón CTA */}
            <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white font-medium">
              Presupuesto
            </Button>
          </nav>

          {/* Menú móvil toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
            <nav className="p-4 space-y-4">
              <Link href="/winsail" className="block text-onesails-navy font-medium py-2">
                WIN SAIL
              </Link>
              <Link href="/velas" className="block text-onesails-navy font-medium py-2">
                Velas
              </Link>
              <Link href="/tecnologia" className="block text-onesails-navy font-medium py-2">
                Tecnología
              </Link>
              <Link href="/how-to" className="block text-onesails-navy font-medium py-2">
                How to
              </Link>
              <Link href="/novedades" className="block text-onesails-navy font-medium py-2">
                Novedades
              </Link>
              <Link href="/servicios" className="block text-onesails-navy font-medium py-2">
                Servicios
              </Link>
              <Link href="/solicite-presupuesto" className="block text-onesails-navy font-medium py-2">
                Presupuesto
              </Link>
              <Link href="/contacto" className="block text-onesails-navy font-medium py-2">
                Contacto
              </Link>
              <div className="pt-4 border-t">
                <Button className="w-full bg-onesails-red hover:bg-onesails-red/90 text-white">
                  Presupuesto
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
