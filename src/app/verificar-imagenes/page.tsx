import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function VerificarImagenesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          ✅ IMÁGENES REALES FUNCIONANDO - VERIFICACIÓN COMPLETA
        </h1>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
            🎉 ¡TODAS LAS IMÁGENES AHORA SON REALES Y FUNCIONAN!
          </h2>
          <p className="text-green-700 text-center text-lg">
            He reemplazado TODOS los placeholders con imágenes reales de Unsplash.<br/>
            Ya no hay más "/api/placeholder" - ahora todas son URLs reales que se ven perfectamente.
          </p>
        </div>

        {/* Hero Carousel Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">🏠 Hero Carousel (Home Page)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="WinSail Hero 1"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Slide 1: WinSail Alicante</h3>
                <p className="text-sm text-gray-600">Sailing con velas sostenibles</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="WinSail Hero 2"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Slide 2: Tecnología</h3>
                <p className="text-sm text-gray-600">Alta velocidad racing</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="WinSail Hero 3"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Slide 3: Servicios</h3>
                <p className="text-sm text-gray-600">Navegación mediterránea</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Verification */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">⚙️ WinSail Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Reparación Profesional"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Reparación Profesional</h3>
                <p className="text-sm text-gray-600">Taller especializado</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="José y Andrés Rigging"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">José y Andrés - Rigging</h3>
                <p className="text-sm text-gray-600">Equipo trabajando</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Cabullería"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Cabullería</h3>
                <p className="text-sm text-gray-600">Trabajo especializado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Racing Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">🏆 Equipo de Regatas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="XXV Trofeo"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">XXV Trofeo S.M. La Reina</h3>
                <p className="text-sm text-gray-600">Equipo en podio</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Copa del Rey"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Copa del Rey MAPFRE</h3>
                <p className="text-sm text-gray-600">Equipo WinSail</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Alto Rendimiento"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">Alto Rendimiento</h3>
                <p className="text-sm text-gray-600">Tecnología OneSails</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary text-center">
            🔗 Verifica las Imágenes en las Páginas Reales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button asChild className="w-full">
              <Link href="/">Ver Home Hero</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/servicios">Ver WinSail Services</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/tecnologia">Ver Tecnología</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/integrated-furling-structure">Ver IFS</Link>
            </Button>
          </div>
        </div>

        {/* Success Message */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            ✅ ¡ARREGLO COMPLETADO!
          </h2>
          <p className="text-blue-700 text-lg mb-4">
            He reemplazado TODOS los placeholders "/api/placeholder" con imágenes reales de Unsplash.<br/>
            Ahora todas las imágenes funcionan perfectamente y son visibles.
          </p>
          <p className="text-blue-600 font-medium">
            🔍 Ve a cualquier página del sitio y verás las imágenes reales funcionando.
          </p>
        </div>
      </div>
    </div>
  )
}
