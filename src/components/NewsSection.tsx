import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "WinSail amplía sus instalaciones en Alicante",
      excerpt: "Estamos emocionados de anunciar la ampliación de nuestras instalaciones en el Polígono Industrial Las Maromas. Las nuevas instalaciones nos permitirán ofrecer un servicio aún más completo a nuestros clientes, con espacios dedicados a fabricación, reparación y almacenamiento de velas.",
      date: "enero 15, 2025",
      image: "https://ext.same-assets.com/755356355/3996009496.jpeg"
    },
    {
      id: 2,
      title: "Nueva temporada con tecnología OneSails 4T FORTE",
      excerpt: "Comenzamos el 2025 con la incorporación completa de la tecnología OneSails 4T FORTE en nuestros servicios. Esta innovadora tecnología sostenible representa el futuro de las velas de alto rendimiento, combinando durabilidad excepcional con responsabilidad medioambiental.",
      date: "diciembre 20, 2024",
      image: "https://ext.same-assets.com/726020858/1208285213.jpeg"
    },
    {
      id: 3,
      title: "Éxito en el servicio de mantenimiento de invierno",
      excerpt: "Durante los meses de invierno, nuestro equipo ha trabajado intensamente en el mantenimiento y reparación de más de 200 velas. Gracias a la confianza de nuestros clientes, hemos podido perfeccionar nuestros procesos y garantizar que todas las embarcaciones estén listas para la nueva temporada.",
      date: "noviembre 30, 2024",
      image: "https://ext.same-assets.com/755356355/1620445271.jpeg"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-onesails-navy mb-4">
            ÚLTIMAS NOTICIAS
          </h2>
        </div>

        {/* Grid de noticias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-onesails-navy mb-3 group-hover:text-onesails-green transition-colors">
                  {article.title}
                </h3>

                <p className="text-onesails-gray text-sm leading-relaxed mb-4 line-clamp-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-onesails-gray">
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-white p-8 rounded-lg text-center">
          <p className="text-lg text-onesails-navy mb-4">
            Suscríbete a nuestro boletín para recibir actualizaciones, información, noticias, insights o promociones:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-green"
            />
            <button className="bg-onesails-red hover:bg-onesails-red/90 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
