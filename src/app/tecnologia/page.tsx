import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import TechnologyComparison from '@/components/TechnologyComparison'
import UniversalNavigation from '@/components/UniversalNavigation'
import { ArrowRight, Star, Layers, Wind, Smartphone, Compass, Wrench, Shield, type LucideIcon } from 'lucide-react'

const continuousYarnTechs = [
  {
    id: '4t-forte',
    name: '4T FORTE',
    description: 'Tecnología de velas de una sola pieza con hilos de carbono continuo. La tecnología más avanzada para máximo rendimiento.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Ultra Premium',
    performance: 5,
    applications: ['Regata de Alto Nivel', 'Crucero de Rendimiento', 'Competiciones Mundiales'],
    icon: Star,
    link: '/4t-forte'
  },
  {
    id: 'vektor2',
    name: 'Vektor2',
    description: 'Membrana de hilos continuos con equilibrio perfecto entre rendimiento y durabilidad.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Premium',
    performance: 4,
    applications: ['Crucero de Rendimiento', 'Regata Club', 'Navegación Oceánica'],
    icon: Shield,
    link: '/vektor2'
  },
  {
    id: 'm3',
    name: 'M3',
    description: 'Membranas Film-Film sin resina con proceso de fusión revolucionario.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Premium',
    performance: 4,
    applications: ['Crucero', 'Regata', 'Uso Polivalente'],
    icon: Layers,
    link: '/m3'
  }
]

const paneledTechs = [
  {
    id: 'vantage-one',
    name: 'Vantage One',
    description: 'Membranas panelizadas de alto rendimiento con película y sin película.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Medio',
    performance: 3,
    applications: ['Crucero', 'Regata Club', 'Uso General'],
    icon: Layers,
    link: '/vantage-one'
  },
  {
    id: 'triradial-cross-cut',
    name: 'Triradial y Cross-Cut',
    description: 'Velas de tejido panelado tradicionales y confiables para máxima durabilidad.',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Económico',
    performance: 2,
    applications: ['Crucero Tradicional', 'Navegación Recreativa', 'Escuelas de Vela'],
    icon: Shield,
    link: '/triradial-cross-cut'
  }
]

const structuredLuffTechs = [
  {
    id: 'ifs',
    name: 'IFS (Integrated Furling Structure)',
    description: 'Velas enrollables sin cable anti-torsión con estructura integrada.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Premium',
    performance: 4,
    applications: ['Velas de Proa Enrollables', 'Downwind', 'Crucero Cómodo'],
    icon: Wind,
    link: '/integrated-furling-structure'
  },
  {
    id: 'zero-sag',
    name: 'Zero Sag (ZS)',
    description: 'Jibs con grátil estructurado que eliminan virtualmente el combado del estay.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    level: 'Premium',
    performance: 5,
    applications: ['Regata de Alto Nivel', 'Velas de Proa de Rendimiento'],
    icon: Compass,
    link: '/zero-sag'
  }
]

const innovationTechs = [
  {
    id: 'design',
    name: 'Diseño',
    description: 'Tecnología de diseño de vanguardia con análisis FSI y CFD.',
    image: 'https://ext.same-assets.com/726020858/4052565436.jpeg',
    level: 'Exclusivo',
    performance: 5,
    applications: ['Análisis Avanzado', 'Formas Personalizadas', 'Investigación'],
    icon: Compass,
    link: '/design'
  },
  {
    id: 'onesd',
    name: 'OneSD',
    description: 'Velas inteligentes con chip electrónico integrado para monitoreo.',
    image: 'https://ext.same-assets.com/726020858/2020065014.jpeg',
    level: 'Ultra Premium',
    performance: 5,
    applications: ['Velas 4T FORTE', 'Monitoreo Avanzado', 'Tecnología del Futuro'],
    icon: Smartphone,
    link: '/onesd'
  }
]

interface TechItem {
  id: string
  name: string
  description: string
  image: string
  level: string
  performance: number
  applications: string[]
  icon: LucideIcon
  link: string
}

const TechnologyCard = ({ tech, category }: { tech: TechItem, category: string }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Económico': return 'bg-green-100 text-green-800'
      case 'Medio': return 'bg-blue-100 text-blue-800'
      case 'Premium': return 'bg-orange-100 text-orange-800'
      case 'Ultra Premium': return 'bg-red-100 text-red-800'
      case 'Exclusivo': return 'bg-purple-100 text-purple-800'
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

  const IconComponent = tech.icon

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
      <div className="relative mb-4">
        <Image
          src={tech.image}
          alt={tech.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getLevelColor(tech.level)}>{tech.level}</Badge>
        </div>
      </div>

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold">{tech.name}</h3>
        <div className="bg-primary/10 p-2 rounded-full">
          <IconComponent className="h-5 w-5 text-primary" />
        </div>
      </div>

      <p className="text-gray-600 mb-4">{tech.description}</p>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">Rendimiento:</span>
        <div className="flex">{getPerformanceStars(tech.performance)}</div>
      </div>

      <div className="mb-4">
        <span className="text-sm font-medium text-gray-700">Aplicaciones:</span>
        <div className="flex flex-wrap gap-1 mt-2">
          {tech.applications.slice(0, 2).map((app: string, index: number) => (
            <Badge key={index} variant="secondary" className="text-xs">{app}</Badge>
          ))}
          {tech.applications.length > 2 && (
            <Badge variant="outline" className="text-xs">+{tech.applications.length - 2} más</Badge>
          )}
        </div>
      </div>

      <Button asChild className="w-full">
        <Link href={tech.link}>
          Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </Card>
  )
}

interface CategorySectionProps {
  title: string
  description: string
  technologies: TechItem[]
  icon: LucideIcon
}

const CategorySection = ({ title, description, technologies, icon: Icon }: CategorySectionProps) => (
  <section className="mb-16">
    <div className="flex items-center mb-6">
      <div className="bg-primary text-white p-3 rounded-full mr-4">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech: TechItem) => (
        <TechnologyCard key={tech.id} tech={tech} category={title} />
      ))}
    </div>
  </section>
)

export default function TecnologiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tecnología WinSail
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              WinSail distribuye la tecnología de velas más avanzada del mundo.
              Descubre toda la gama de innovaciones OneSails disponibles a través de nuestro servicio local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="#comparador">
                  Comparar Tecnologías <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                <Link href="/solicite-un-presupuesto">
                  Presupuesto
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">La Próxima Generación de Velas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Durante más de 15 años, el equipo de diseño de OneSails ha desarrollado tecnologías exclusivas
              que WinSail pone a tu disposición con servicio local especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tecnología Exclusiva</h3>
              <p className="text-gray-600">
                Velas de hilo continuo de una sola pieza para embarcaciones de crucero y regata
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rendimiento Superior</h3>
              <p className="text-gray-600">
                Peso optimizado, control de forma y resistencia a la deformación
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Fabricadas con los más altos estándares y componentes seleccionados
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-white p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Compass className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Servicio WinSail</h3>
              <p className="text-gray-600">
                Soporte local especializado y red de servicio OneSails
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <CategorySection
            title="Hilos Continuos"
            description="Tecnología de vanguardia para máximo rendimiento"
            technologies={continuousYarnTechs}
            icon={Star}
          />

          <CategorySection
            title="Membranas Panelizadas"
            description="Soluciones versátiles y rentables"
            technologies={paneledTechs}
            icon={Layers}
          />

          <CategorySection
            title="Grátil Estructurado"
            description="Innovación en velas de proa y enrollables"
            technologies={structuredLuffTechs}
            icon={Wind}
          />

          <CategorySection
            title="Innovaciones"
            description="El futuro de las velas inteligentes"
            technologies={innovationTechs}
            icon={Smartphone}
          />
        </div>
      </section>

      {/* Technology Comparison Tool */}
      <section id="comparador" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <TechnologyComparison />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Navegación Rápida</h2>
            <p className="text-xl text-gray-600">
              Accede directamente a la información detallada de cada tecnología
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...continuousYarnTechs, ...paneledTechs, ...structuredLuffTechs, ...innovationTechs].map((tech) => (
              <Card key={tech.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">{tech.name}</h3>
                  <Badge className={`text-xs ${
                    tech.level === 'Ultra Premium' ? 'bg-red-100 text-red-800' :
                    tech.level === 'Premium' ? 'bg-orange-100 text-orange-800' :
                    tech.level === 'Medio' ? 'bg-blue-100 text-blue-800' :
                    tech.level === 'Económico' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {tech.level}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{tech.description.slice(0, 80)}...</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={tech.link}>
                    Ver Detalles <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para la Próxima Generación de Velas?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Descubre cómo la tecnología WinSail puede transformar tu experiencia de navegación.
            WinSail te ofrece acceso completo a todas las innovaciones con servicio local especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/solicite-un-presupuesto">
                Presupuesto <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contacto">
                Contactar WinSail
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
