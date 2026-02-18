import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

export default function NovedadesPage() {
  const news = [
    {
      id: 1,
      title: "WinSail Alicante participa en la Copa del Rey de Vela",
      excerpt: "Nuestro equipo técnico estará presente en la prestigiosa competición proporcionando soporte técnico a los regatistas con velas OneSails.",
      image: "https://ext.same-assets.com/726020858/3282085053.jpeg",
      date: "2025-01-15",
      category: "Regatas"
    },
    {
      id: 2,
      title: "Nuevas instalaciones de serigrafía en WinSail",
      excerpt: "Ampliamos nuestros servicios con tecnología de última generación para personalización de velas, banderas y textiles náuticos.",
      image: "https://ext.same-assets.com/726020858/1494568360.webp",
      date: "2025-01-10",
      category: "Servicios"
    },
    {
      id: 3,
      title: "Velas sostenibles 4T Forte ya disponibles en WinSail",
      excerpt: "Las primeras velas sostenibles certificadas de alto rendimiento llegan a través de WinSail, distribuidor oficial de OneSails en España.",
      image: "https://ext.same-assets.com/726020858/3701542285.webp",
      date: "2025-01-05",
      category: "Tecnología"
    },
    {
      id: 4,
      title: "Curso de mantenimiento de velas en Alicante",
      excerpt: "WinSail organiza talleres prácticos para propietarios de embarcaciones sobre cuidado y mantenimiento de velas OneSails.",
      image: "https://ext.same-assets.com/726020858/2986094430.jpeg",
      date: "2024-12-20",
      category: "Formación"
    },
    {
      id: 5,
      title: "Colaboración con clubes náuticos de la Costa Blanca",
      excerpt: "WinSail establece acuerdos de colaboración con los principales clubes náuticos para ofrecer servicios especializados a sus socios.",
      image: "https://ext.same-assets.com/726020858/1445871684.jpeg",
      date: "2024-12-15",
      category: "Colaboraciones"
    },
    {
      id: 6,
      title: "Nuevos materiales para super yates disponibles",
      excerpt: "Incorporamos los últimos avances en materiales OneSails para velas de super yates y embarcaciones de gran eslora.",
      image: "https://ext.same-assets.com/726020858/409158032.jpeg",
      date: "2024-12-10",
      category: "Productos"
    }
  ]

  const categories = ["Todos", "Regatas", "Servicios", "Tecnología", "Formación", "Colaboraciones", "Productos"]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-onesails-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Últimas Noticias
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Mantente al día con las últimas novedades de WinSail, eventos del mundo de la vela
              y los avances tecnológicos de OneSails
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">

            {/* Category Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    className={category === "Todos"
                      ? "bg-onesails-blue hover:bg-onesails-blue/90"
                      : "border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Article */}
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-lg">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={news[0].image}
                      alt={news[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-onesails-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        Destacado
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-onesails-blue mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">15 enero 2025</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm font-medium">{news[0].category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-onesails-navy mb-4">
                      {news[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {news[0].excerpt}
                    </p>
                    <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white w-fit">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-onesails-blue text-white px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(article.date).toLocaleDateString('es-ES', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-onesails-navy line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/novedades/${article.id}`} className="w-full">
                      <Button variant="outline" className="w-full border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                        Leer más
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-onesails-navy mb-4">
                Suscríbete a nuestro boletín
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Recibe las últimas noticias de WinSail, actualizaciones de productos OneSails,
                consejos técnicos y eventos especiales directamente en tu correo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-onesails-blue focus:border-transparent"
                />
                <Button className="bg-onesails-red hover:bg-onesails-red/90 text-white px-8">
                  Suscribirse
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
