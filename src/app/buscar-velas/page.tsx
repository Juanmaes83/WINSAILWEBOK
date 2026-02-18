"use client"

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Search, Filter, Star, ExternalLink } from 'lucide-react'

interface SailProduct {
  id: string
  name: string
  category: string
  type: string
  technology: string
  usage: string
  boatSize: string
  windRange: string
  price: string
  description: string
  image: string
  link: string
  features: string[]
}

const sailsDatabase: SailProduct[] = [
  {
    id: '1',
    name: 'Vela Mayor 4T FORTE Racing',
    category: 'Regata',
    type: 'Mayor',
    technology: '4T FORTE',
    usage: 'Competición',
    boatSize: '8-15m',
    windRange: '5-25 nudos',
    price: 'Consultar',
    description: 'Vela mayor de alto rendimiento con tecnología 4T FORTE para competición',
    image: 'https://ext.same-assets.com/726020858/443761685.webp',
    link: '/velas-de-regata',
    features: ['Sin adhesivos', 'Fibras continuas', 'Máximo rendimiento']
  },
  {
    id: '2',
    name: 'Spinnaker Asimétrico IFS',
    category: 'Regata',
    type: 'Spinnaker',
    technology: 'IFS',
    usage: 'Competición',
    boatSize: '6-12m',
    windRange: '6-18 nudos',
    price: 'Consultar',
    description: 'Spinnaker asimétrico con sistema de enrollado integrado sin cable',
    image: 'https://ext.same-assets.com/726020858/140602678.webp',
    link: '/spinnakers-simetricos-y-asimetricos-de-regata',
    features: ['Sin cable anti-torsión', 'Fácil manejo', 'Enrollado integrado']
  },
  {
    id: '3',
    name: 'Vela Mayor Vektor2 Crucero',
    category: 'Crucero',
    type: 'Mayor',
    technology: 'Vektor2',
    usage: 'Crucero',
    boatSize: '9-18m',
    windRange: '4-22 nudos',
    price: 'Consultar',
    description: 'Vela mayor de crucero con tecnología Vektor2 para durabilidad y facilidad',
    image: 'https://ext.same-assets.com/726020858/1311712684.webp',
    link: '/velas-de-crucero-y-de-crucero-de-alto-rendimiento',
    features: ['Durabilidad excepcional', 'Fácil trimming', 'Fibras continuas']
  },
  {
    id: '4',
    name: 'Génova Enrollable M3',
    category: 'Crucero',
    type: 'Génova',
    technology: 'M3',
    usage: 'Crucero',
    boatSize: '8-16m',
    windRange: '3-20 nudos',
    price: 'Consultar',
    description: 'Génova enrollable con tecnología M3 para máxima comodidad',
    image: 'https://ext.same-assets.com/726020858/2307083180.jpeg',
    link: '/velas-de-crucero-y-de-crucero-de-alto-rendimiento',
    features: ['Laminado sin resina', '3 años garantía', 'Resistente UV']
  },
  {
    id: '5',
    name: 'Super Yacht Mainsail 4T FORTE',
    category: 'Super Yacht',
    type: 'Mayor',
    technology: '4T FORTE',
    usage: 'Luxury',
    boatSize: '25m+',
    windRange: '2-30 nudos',
    price: 'Consultar',
    description: 'Vela mayor para super yates con tecnología de una sola pieza',
    image: 'https://ext.same-assets.com/726020858/674465462.jpeg',
    link: '/super-yachts-sails-2',
    features: ['Una sola pieza', 'Tamaño ilimitado', 'Colores personalizados']
  },
  {
    id: '6',
    name: 'Vela Mayor Optimist',
    category: 'One Design',
    type: 'Mayor',
    technology: 'Dacron Premium',
    usage: 'One Design',
    boatSize: '2.3m',
    windRange: '3-15 nudos',
    price: 'Consultar',
    description: 'Vela mayor para Optimist homologada IODA',
    image: 'https://ext.same-assets.com/726020858/1926367772.jpeg',
    link: '/one-design/optimist',
    features: ['Certificación IODA', 'Fabricada bajo pedido', 'Garantía 12 meses']
  },
  {
    id: '7',
    name: 'Vela Ocean Offshore 4T FORTE',
    category: 'Ocean Offshore',
    type: 'Mayor',
    technology: '4T FORTE',
    usage: 'Ocean Racing',
    boatSize: '12-20m',
    windRange: '5-35 nudos',
    price: 'Consultar',
    description: 'Vela mayor ultra-resistente para navegación oceánica',
    image: 'https://ext.same-assets.com/726020858/1021162998.jpeg',
    link: '/velas-ocean-offshore',
    features: ['Ultra resistente', 'Condiciones extremas', 'Refuerzos adicionales']
  },
  {
    id: '8',
    name: 'Vela Multihull Catamaran',
    category: 'Multihull',
    type: 'Mayor',
    technology: 'Triradial',
    usage: 'Crucero',
    boatSize: '10-16m',
    windRange: '4-25 nudos',
    price: 'Consultar',
    description: 'Vela mayor especializada para catamaranes de crucero',
    image: 'https://ext.same-assets.com/726020858/2471648804.jpeg',
    link: '/velas-multihull',
    features: ['Diseño multihull', 'Alta velocidad', 'Forma optimizada']
  },
  {
    id: '9',
    name: 'Vela Clásica Tradicional',
    category: 'Clásico',
    type: 'Mayor',
    technology: 'Dacron Tradicional',
    usage: 'Clásico',
    boatSize: '8-25m',
    windRange: '3-22 nudos',
    price: 'Consultar',
    description: 'Vela para yates clásicos con acabados artesanales',
    image: 'https://ext.same-assets.com/726020858/409158032.jpeg',
    link: '/velas-para-yates-clasicos',
    features: ['Acabado artesanal', 'Materiales tradicionales', 'Investigación histórica']
  }
]

export default function BuscarVelasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    technology: '',
    usage: '',
    boatSize: ''
  })
  const [showFilters, setShowFilters] = useState(false)

  const filteredSails = useMemo(() => {
    return sailsDatabase.filter(sail => {
      const matchesSearch = sail.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           sail.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = !filters.category || sail.category === filters.category
      const matchesType = !filters.type || sail.type === filters.type
      const matchesTechnology = !filters.technology || sail.technology === filters.technology
      const matchesUsage = !filters.usage || sail.usage === filters.usage
      const matchesBoatSize = !filters.boatSize || sail.boatSize.includes(filters.boatSize)

      return matchesSearch && matchesCategory && matchesType && matchesTechnology && matchesUsage && matchesBoatSize
    })
  }, [searchTerm, filters])

  const resetFilters = () => {
    setFilters({
      category: '',
      type: '',
      technology: '',
      usage: '',
      boatSize: ''
    })
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-onesails-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              BÚSQUEDA AVANZADA DE VELAS
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Encuentra la vela OneSails perfecta para tu embarcación con nuestro sistema de búsqueda avanzada
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar velas por nombre, tipo o descripción..."
                className="pl-12 pr-4 py-3 text-lg w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <div className="text-center mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white"
            >
              <Filter className="mr-2 h-4 w-4" />
              {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    <option value="">Todas</option>
                    <option value="Regata">Regata</option>
                    <option value="Crucero">Crucero</option>
                    <option value="Super Yacht">Super Yacht</option>
                    <option value="One Design">One Design</option>
                    <option value="Ocean Offshore">Ocean Offshore</option>
                    <option value="Multihull">Multihull</option>
                    <option value="Clásico">Clásico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Vela</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                  >
                    <option value="">Todos</option>
                    <option value="Mayor">Mayor</option>
                    <option value="Génova">Génova</option>
                    <option value="Foque">Foque</option>
                    <option value="Spinnaker">Spinnaker</option>
                    <option value="Gennaker">Gennaker</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tecnología</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={filters.technology}
                    onChange={(e) => setFilters({...filters, technology: e.target.value})}
                  >
                    <option value="">Todas</option>
                    <option value="4T FORTE">4T FORTE</option>
                    <option value="Vektor2">Vektor2</option>
                    <option value="M3">M3</option>
                    <option value="IFS">IFS</option>
                    <option value="Triradial">Triradial</option>
                    <option value="Dacron Premium">Dacron Premium</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Uso</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={filters.usage}
                    onChange={(e) => setFilters({...filters, usage: e.target.value})}
                  >
                    <option value="">Todos</option>
                    <option value="Competición">Competición</option>
                    <option value="Crucero">Crucero</option>
                    <option value="One Design">One Design</option>
                    <option value="Ocean Racing">Ocean Racing</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Clásico">Clásico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño Barco</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={filters.boatSize}
                    onChange={(e) => setFilters({...filters, boatSize: e.target.value})}
                  >
                    <option value="">Todos</option>
                    <option value="2.3m">2.3m (Optimist)</option>
                    <option value="6-12m">6-12m</option>
                    <option value="8-15m">8-15m</option>
                    <option value="12-20m">12-20m</option>
                    <option value="25m+">25m+</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-onesails-navy">
              Resultados ({filteredSails.length} velas encontradas)
            </h2>
          </div>

          {filteredSails.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
                <p className="text-gray-600 mb-4">
                  Intenta ajustar tus criterios de búsqueda o contacta con WinSail para asesoramiento personalizado.
                </p>
                <Link href="/contacto">
                  <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                    Contactar WinSail
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSails.map((sail) => (
                <div key={sail.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={sail.image}
                      alt={sail.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-onesails-blue text-white px-2 py-1 rounded text-xs font-medium">
                        {sail.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-onesails-navy mb-2">{sail.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{sail.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tipo:</span>
                        <span className="font-medium">{sail.type}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tecnología:</span>
                        <span className="font-medium">{sail.technology}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Tamaño barco:</span>
                        <span className="font-medium">{sail.boatSize}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Rango viento:</span>
                        <span className="font-medium">{sail.windRange}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-1">
                        {sail.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link href={sail.link} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver detalles
                        </Button>
                      </Link>
                      <Link href="/solicite-presupuesto">
                        <Button size="sm" className="bg-onesails-red hover:bg-onesails-red/90 text-white">
                          Presupuesto
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-6">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Nuestros expertos de WinSail te ayudarán a encontrar la vela OneSails perfecta para tu embarcación y estilo de navegación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculadora-velas">
              <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white font-medium px-8 py-3">
                Calculadora de velas
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white px-8 py-3">
                Contactar experto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
