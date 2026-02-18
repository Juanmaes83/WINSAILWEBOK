'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, X, Star, Info, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Technology {
  id: string
  name: string
  category: string
  description: string
  price: 'Económico' | 'Medio' | 'Premium' | 'Ultra Premium'
  performance: number // 1-5
  durability: number // 1-5
  easeOfUse: number // 1-5
  weight: 'Muy Ligero' | 'Ligero' | 'Medio' | 'Pesado'
  applications: string[]
  pros: string[]
  cons: string[]
  bestFor: string[]
  boatSize: string
  sailingType: string[]
  link: string
}

const technologies: Technology[] = [
  {
    id: '4t-forte',
    name: '4T FORTE',
    category: 'Hilos Continuos',
    description: 'Tecnología de velas de una sola pieza con hilos de carbono continuo',
    price: 'Ultra Premium',
    performance: 5,
    durability: 5,
    easeOfUse: 4,
    weight: 'Muy Ligero',
    applications: ['Regata de Alto Nivel', 'Crucero de Rendimiento', 'Competiciones Mundiales'],
    pros: ['Máximo rendimiento', 'Peso mínimo', 'Sin delaminación', 'Tecnología sostenible'],
    cons: ['Precio premium', 'Requiere cuidado especializado'],
    bestFor: ['Regatistas profesionales', 'Cruceros de alto rendimiento', 'Yates de competición'],
    boatSize: 'Todas las esloras',
    sailingType: ['Regata', 'Crucero de Alto Rendimiento'],
    link: '/4t-forte'
  },
  {
    id: 'vektor2',
    name: 'Vektor2',
    category: 'Hilos Continuos',
    description: 'Membrana de hilos continuos con equilibrio rendimiento-durabilidad',
    price: 'Premium',
    performance: 4,
    durability: 5,
    easeOfUse: 4,
    weight: 'Ligero',
    applications: ['Crucero de Rendimiento', 'Regata Club', 'Navegación Oceánica'],
    pros: ['Excelente durabilidad', 'Buen rendimiento', 'Versatilidad', 'Mantenimiento sencillo'],
    cons: ['Precio elevado', 'Menos ligero que 4T FORTE'],
    bestFor: ['Cruceros largos', 'Regatas de club', 'Navegación frecuente'],
    boatSize: '8-30 metros',
    sailingType: ['Crucero', 'Regata', 'Offshore'],
    link: '/vektor2'
  },
  {
    id: 'm3',
    name: 'M3',
    category: 'Hilos Continuos',
    description: 'Membranas Film-Film sin resina con proceso de fusión',
    price: 'Premium',
    performance: 4,
    durability: 4,
    easeOfUse: 4,
    weight: 'Ligero',
    applications: ['Crucero', 'Regata', 'Uso Polivalente'],
    pros: ['Sin resina', 'Reducción peso 15-30%', 'Garantía anti-delaminación', 'Proceso fusión'],
    cons: ['Costo superior a paneladas', 'Tecnología específica'],
    bestFor: ['Navegantes exigentes', 'Uso intensivo', 'Durabilidad a largo plazo'],
    boatSize: '6-25 metros',
    sailingType: ['Crucero', 'Regata', 'Uso Mixto'],
    link: '/m3'
  },
  {
    id: 'vantage-one',
    name: 'Vantage One',
    category: 'Paneladas',
    description: 'Membranas panelizadas de alto rendimiento con película y sin película',
    price: 'Medio',
    performance: 3,
    durability: 4,
    easeOfUse: 4,
    weight: 'Medio',
    applications: ['Crucero', 'Regata Club', 'Uso General'],
    pros: ['Alternativa rentable', 'Eliminación de fallas en costuras', 'Variedad de opciones'],
    cons: ['Menor rendimiento que hilos continuos', 'Peso superior'],
    bestFor: ['Presupuesto equilibrado', 'Crucero regular', 'Navegación recreativa'],
    boatSize: '5-20 metros',
    sailingType: ['Crucero', 'Regata Club'],
    link: '/vantage-one'
  },
  {
    id: 'triradial-cross-cut',
    name: 'Triradial y Cross-Cut',
    category: 'Tejidos Tradicionales',
    description: 'Velas de tejido panelado tradicionales y confiables',
    price: 'Económico',
    performance: 2,
    durability: 5,
    easeOfUse: 5,
    weight: 'Pesado',
    applications: ['Crucero Tradicional', 'Navegación Recreativa', 'Escuelas de Vela'],
    pros: ['Máxima durabilidad', 'Bajo costo', 'Fácil mantenimiento', 'Confiabilidad probada'],
    cons: ['Menor rendimiento', 'Mayor peso', 'Forma menos estable'],
    bestFor: ['Presupuesto ajustado', 'Navegación ocasional', 'Máxima durabilidad'],
    boatSize: 'Hasta 15 metros',
    sailingType: ['Crucero', 'Recreativo'],
    link: '/triradial-cross-cut'
  },
  {
    id: 'ifs',
    name: 'IFS (Integrated Furling Structure)',
    category: 'Grátil Estructurado',
    description: 'Velas enrollables sin cable anti-torsión con estructura integrada',
    price: 'Premium',
    performance: 4,
    durability: 4,
    easeOfUse: 5,
    weight: 'Ligero',
    applications: ['Velas de Proa Enrollables', 'Downwind', 'Crucero Cómodo'],
    pros: ['Sin cable anti-torsión', 'Reducción 35% tensión', 'Fácil manejo', 'Mejor aerodinámica'],
    cons: ['Precio premium', 'Tecnología específica'],
    bestFor: ['Navegación cómoda', 'Tripulaciones reducidas', 'Facilidad de maniobra'],
    boatSize: '8-40 metros',
    sailingType: ['Crucero', 'Offshore'],
    link: '/integrated-furling-structure'
  },
  {
    id: 'zero-sag',
    name: 'Zero Sag (ZS)',
    category: 'Grátil Estructurado',
    description: 'Jibs con grátil estructurado que eliminan el combado del estay',
    price: 'Premium',
    performance: 5,
    durability: 4,
    easeOfUse: 4,
    weight: 'Ligero',
    applications: ['Regata de Alto Nivel', 'Velas de Proa de Rendimiento'],
    pros: ['Elimina combado del estay', 'Control directo', 'Máximo rendimiento', 'Menos cargas'],
    cons: ['Precio alto', 'Requiere conocimiento técnico'],
    bestFor: ['Regatistas exigentes', 'Máximo rendimiento ceñida', 'Competición'],
    boatSize: '6-30 metros',
    sailingType: ['Regata', 'Alto Rendimiento'],
    link: '/zero-sag'
  },
  {
    id: 'onesd',
    name: 'OneSD',
    category: 'Innovaciones',
    description: 'Velas inteligentes con chip electrónico integrado para monitoreo',
    price: 'Ultra Premium',
    performance: 5,
    durability: 5,
    easeOfUse: 4,
    weight: 'Muy Ligero',
    applications: ['Velas 4T FORTE', 'Monitoreo Avanzado', 'Tecnología del Futuro'],
    pros: ['Primera tecnología mundial', 'Monitoreo completo', 'Datos en tiempo real', 'Futuro PRO'],
    cons: ['Precio premium', 'Tecnología nueva'],
    bestFor: ['Navegantes tecnológicos', 'Análisis de rendimiento', 'Velas de competición'],
    boatSize: 'Todas las esloras',
    sailingType: ['Regata', 'Crucero Premium'],
    link: '/onesd'
  }
]

interface Filters {
  budget: string
  boatSize: string
  sailingType: string
  priority: string
}

export default function TechnologyComparison() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [filters, setFilters] = useState<Filters>({
    budget: '',
    boatSize: '',
    sailingType: '',
    priority: ''
  })
  const [showComparison, setShowComparison] = useState(false)

  const filteredTechnologies = technologies.filter(tech => {
    if (filters.budget && tech.price !== filters.budget) return false
    if (filters.sailingType && !tech.sailingType.includes(filters.sailingType)) return false
    return true
  })

  const getRecommendations = () => {
    let recommendations = [...technologies]

    if (filters.budget === 'Económico') {
      recommendations = recommendations.filter(t => t.price === 'Económico' || t.price === 'Medio')
    } else if (filters.budget === 'Premium') {
      recommendations = recommendations.filter(t => t.price === 'Premium' || t.price === 'Ultra Premium')
    }

    if (filters.priority === 'performance') {
      recommendations.sort((a, b) => b.performance - a.performance)
    } else if (filters.priority === 'durability') {
      recommendations.sort((a, b) => b.durability - a.durability)
    } else if (filters.priority === 'ease') {
      recommendations.sort((a, b) => b.easeOfUse - a.easeOfUse)
    }

    return recommendations.slice(0, 3)
  }

  const toggleTechSelection = (techId: string) => {
    setSelectedTech(prev =>
      prev.includes(techId)
        ? prev.filter(id => id !== techId)
        : prev.length < 3 ? [...prev, techId] : prev
    )
  }

  const getPriceColor = (price: string) => {
    switch (price) {
      case 'Económico': return 'bg-green-100 text-green-800'
      case 'Medio': return 'bg-blue-100 text-blue-800'
      case 'Premium': return 'bg-orange-100 text-orange-800'
      case 'Ultra Premium': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPerformanceStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Comparador de Tecnologías WinSail</h2>
        <p className="text-xl text-gray-600">
          Encuentra la tecnología perfecta para tu embarcación y estilo de navegación
        </p>
      </div>

      {/* Filters */}
      <Card className="p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Filtros y Recomendaciones</h3>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Presupuesto</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.budget}
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
            >
              <option value="">Todos</option>
              <option value="Económico">Económico</option>
              <option value="Medio">Medio</option>
              <option value="Premium">Premium</option>
              <option value="Ultra Premium">Ultra Premium</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tipo de Navegación</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.sailingType}
              onChange={(e) => setFilters({...filters, sailingType: e.target.value})}
            >
              <option value="">Todos</option>
              <option value="Regata">Regata</option>
              <option value="Crucero">Crucero</option>
              <option value="Offshore">Offshore</option>
              <option value="Recreativo">Recreativo</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Prioridad</label>
            <select
              className="w-full p-2 border rounded-md"
              value={filters.priority}
              onChange={(e) => setFilters({...filters, priority: e.target.value})}
            >
              <option value="">Ninguna</option>
              <option value="performance">Rendimiento</option>
              <option value="durability">Durabilidad</option>
              <option value="ease">Facilidad de Uso</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full"
              variant={showComparison ? "secondary" : "default"}
            >
              {showComparison ? 'Ocultar Comparación' : 'Mostrar Comparación'}
            </Button>
          </div>
        </div>

        {/* Recommendations */}
        {(filters.budget || filters.sailingType || filters.priority) && (
          <div>
            <h4 className="font-bold mb-3 text-primary">Recomendaciones para ti:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {getRecommendations().map((tech, index) => (
                <div key={tech.id} className="bg-white p-4 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${index === 0 ? 'bg-gold text-black' : index === 1 ? 'bg-gray-400 text-white' : 'bg-orange-400 text-white'}`}>
                      {index === 0 ? '🥇 Recomendado' : index === 1 ? '🥈 Segunda opción' : '🥉 Alternativa'}
                    </Badge>
                  </div>
                  <h5 className="font-bold">{tech.name}</h5>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                  <div className="mt-2">
                    <Badge className={getPriceColor(tech.price)}>{tech.price}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Technology Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {filteredTechnologies.map((tech) => (
          <Card key={tech.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <Badge variant="outline" className="mb-2">{tech.category}</Badge>
              </div>
              <Button
                size="sm"
                variant={selectedTech.includes(tech.id) ? "default" : "outline"}
                onClick={() => toggleTechSelection(tech.id)}
                disabled={!selectedTech.includes(tech.id) && selectedTech.length >= 3}
              >
                {selectedTech.includes(tech.id) ? <CheckCircle className="h-4 w-4" /> : '+'}
              </Button>
            </div>

            <p className="text-gray-600 mb-4">{tech.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Precio:</span>
                <Badge className={getPriceColor(tech.price)}>{tech.price}</Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Rendimiento:</span>
                <div className="flex">{getPerformanceStars(tech.performance)}</div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Durabilidad:</span>
                <div className="flex">{getPerformanceStars(tech.durability)}</div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Facilidad:</span>
                <div className="flex">{getPerformanceStars(tech.easeOfUse)}</div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm mb-2">
                <strong>Ideal para:</strong>
                <div className="flex flex-wrap gap-1 mt-1">
                  {tech.bestFor.slice(0, 2).map((item, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{item}</Badge>
                  ))}
                </div>
              </div>

              <Button asChild size="sm" className="w-full mt-2">
                <Link href={tech.link}>
                  Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      {showComparison && selectedTech.length > 0 && (
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Comparación Detallada</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Característica</th>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return <th key={techId} className="text-left p-2">{tech?.name}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Precio</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return (
                      <td key={techId} className="p-2">
                        <Badge className={getPriceColor(tech?.price || '')}>{tech?.price}</Badge>
                      </td>
                    )
                  })}
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Rendimiento</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return (
                      <td key={techId} className="p-2">
                        <div className="flex">{getPerformanceStars(tech?.performance || 0)}</div>
                      </td>
                    )
                  })}
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Durabilidad</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return (
                      <td key={techId} className="p-2">
                        <div className="flex">{getPerformanceStars(tech?.durability || 0)}</div>
                      </td>
                    )
                  })}
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Peso</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return <td key={techId} className="p-2">{tech?.weight}</td>
                  })}
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Ventajas</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return (
                      <td key={techId} className="p-2">
                        <ul className="text-sm">
                          {tech?.pros.slice(0, 3).map((pro, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-2 font-medium">Desventajas</td>
                  {selectedTech.map(techId => {
                    const tech = technologies.find(t => t.id === techId)
                    return (
                      <td key={techId} className="p-2">
                        <ul className="text-sm">
                          {tech?.cons.slice(0, 2).map((con, index) => (
                            <li key={index} className="flex items-center">
                              <X className="h-3 w-3 text-red-500 mr-1" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* CTA */}
      <div className="text-center mt-8">
        <Card className="p-8 bg-primary text-white">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas Asesoramiento Personalizado?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Nuestros expertos de WinSail te ayudan a elegir la tecnología perfecta para tu embarcación
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contacto">
                Contactar Expertos
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
