"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowLeft, ArrowRight as ChevronRight, ChevronLeft } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: "/images/carousel/FORTE4.jpg",
      title: "WinSail Alicante",
      subtitle: "Tu Distribuidor Oficial OneSails",
      description: "Más de 20 años navegando hacia la excelencia con velas de alta tecnología",
      cta: "Descubre Nuestras Velas",
      ctaLink: "/velas",
      ctaSecondary: "Contactar WinSail",
      ctaSecondaryLink: "/contacto"
    },
    {
      image: "/images/carousel/FOTO_CARRUSEL2.jpg",
      title: "Tecnología WinSail",
      subtitle: "4T FORTE • VEKTOR2 • M3",
      description: "Las tecnologías más avanzadas del mundo disponibles en el Mediterráneo",
      cta: "Ver Tecnologías",
      ctaLink: "/tecnologia",
      ctaSecondary: "Presupuesto",
      ctaSecondaryLink: "/solicite-presupuesto"
    },
    {
      image: "/images/carousel/ONESAIL_HOME.jpg",
      title: "Servicios Integrales",
      subtitle: "Rigging • Reparación • Mantenimiento",
      description: "Tu centro náutico completo en el Polígono Industrial Las Maromas",
      cta: "Nuestros Servicios",
      ctaLink: "/servicios",
      ctaSecondary: "Visítanos",
      ctaSecondaryLink: "/contacto"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl text-white">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl lg:text-3xl mb-6 text-blue-200">
                  {slide.subtitle}
                </h2>
                <p className="text-lg lg:text-xl mb-8 text-blue-100 max-w-3xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-winsail-blue hover:bg-winsail-blue/90">
                    <Link href={slide.ctaLink}>
                      {slide.cta} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                    <Link href={slide.ctaSecondaryLink}>
                      {slide.ctaSecondary}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 text-white/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Desplázate</span>
          <div className="w-px h-8 bg-white/50"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
