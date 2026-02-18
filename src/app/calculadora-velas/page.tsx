"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calculator, Ruler, Wind, Ship, CheckCircle, AlertTriangle } from 'lucide-react'

interface BoatData {
  name: string
  length: string
  beam: string
  draft: string
  displacement: string
  mastHeight: string
  sailingType: string
  experience: string
  budget: string
}

interface SailRecommendation {
  type: string
  technology: string
  area: string
  description: string
  price: string
  features: string[]
  priority: 'high' | 'medium' | 'low'
}

export default function CalculadoraVelasPage() {
  const [boatData, setBoatData] = useState<BoatData>({
    name: '',
    length: '',
    beam: '',
    draft: '',
    displacement: '',
    mastHeight: '',
    sailingType: '',
    experience: '',
    budget: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [recommendations, setRecommendations] = useState<SailRecommendation[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleInputChange = (field: keyof BoatData, value: string) => {
    setBoatData(prev => ({ ...prev, [field]: value }))
  }

  const calculateRecommendations = () => {
    const length = parseFloat(boatData.length)
    const beam = parseFloat(boatData.beam)
    const mastHeight = parseFloat(boatData.mastHeight)

    const newRecommendations: SailRecommendation[] = []

    // Vela Mayor
    const mainsailArea = mastHeight * beam * 0.4 // Fórmula aproximada
    let mainsailTech = 'Dacron'
    let mainsailPrice = '2.500-4.000€'

    if (boatData.sailingType === 'regata') {
      mainsailTech = length > 12 ? '4T FORTE' : 'Vektor2'
      mainsailPrice = length > 12 ? '8.000-15.000€' : '5.000-10.000€'
    } else if (boatData.sailingType === 'crucero-alto') {
      mainsailTech = 'M3'
      mainsailPrice = '4.000-8.000€'
    }

    newRecommendations.push({
      type: 'Vela Mayor',
      technology: mainsailTech,
      area: `${mainsailArea.toFixed(1)} m²`,
      description: `Vela mayor ${mainsailTech} optimizada para ${length}m de eslora`,
      price: mainsailPrice,
      features: getTechFeatures(mainsailTech),
      priority: 'high'
    })

    // Génova/Foque
    const headsailArea = length * beam * 0.3
    let headsailTech = 'Dacron'
    let headsailPrice = '1.800-3.500€'

    if (boatData.sailingType === 'regata') {
      headsailTech = '4T FORTE'
      headsailPrice = '4.000-8.000€'
    } else if (boatData.sailingType === 'crucero-alto') {
      headsailTech = 'Vektor2'
      headsailPrice = '3.000-6.000€'
    }

    newRecommendations.push({
      type: length > 10 ? 'Génova Enrollable' : 'Foque',
      technology: headsailTech,
      area: `${headsailArea.toFixed(1)} m²`,
      description: `${length > 10 ? 'Génova' : 'Foque'} ${headsailTech} con sistema de enrollado`,
      price: headsailPrice,
      features: getTechFeatures(headsailTech),
      priority: 'high'
    })

    // Spinnaker (si es apropiado)
    if (length > 6 && boatData.sailingType !== 'crucero-basico') {
      const spinnakerArea = length * beam * 1.8
      let spinnakerTech = 'Nylon'
      let spinnakerPrice = '2.500-4.500€'

      if (boatData.sailingType === 'regata') {
        spinnakerTech = 'IFS'
        spinnakerPrice = '5.000-9.000€'
      }

      newRecommendations.push({
        type: 'Spinnaker Asimétrico',
        technology: spinnakerTech,
        area: `${spinnakerArea.toFixed(1)} m²`,
        description: `Spinnaker asimétrico ${spinnakerTech} para navegación de popa`,
        price: spinnakerPrice,
        features: ['Fácil manejo', 'Versátil', 'Gran potencia'],
        priority: 'medium'
      })
    }

    // Recomendaciones adicionales
    if (length > 15) {
      newRecommendations.push({
        type: 'Vela de Estay',
        technology: 'Triradial',
        area: `${(length * 2).toFixed(1)} m²`,
        description: 'Vela de estay para navegación en condiciones fuertes',
        price: '1.500-3.000€',
        features: ['Viento fuerte', 'Fácil manejo', 'Seguridad'],
        priority: 'low'
      })
    }

    setRecommendations(newRecommendations)
    setShowResults(true)
  }

  const getTechFeatures = (tech: string): string[] => {
    switch (tech) {
      case '4T FORTE':
        return ['Sin adhesivos', 'Fibras continuas', 'Máximo rendimiento', 'Sostenible']
      case 'Vektor2':
        return ['Fibras continuas', 'Excelente forma', 'Durabilidad', 'Precio competitivo']
      case 'M3':
        return ['Sin resina', '3 años garantía', 'Flexible', 'Resistente UV']
      case 'IFS':
        return ['Sin cable', 'Enrollado integrado', 'Ligero', 'Fácil manejo']
      default:
        return ['Resistente', 'Económico', 'Fácil mantenimiento']
    }
  }

  const resetCalculator = () => {
    setBoatData({
      name: '',
      length: '',
      beam: '',
      draft: '',
      displacement: '',
      mastHeight: '',
      sailingType: '',
      experience: '',
      budget: ''
    })
    setCurrentStep(1)
    setShowResults(false)
    setRecommendations([])
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </div>
        </div>

        <section className="py-12 bg-onesails-navy text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <CheckCircle className="mx-auto h-16 w-16 mb-4" />
            <h1 className="text-4xl font-bold mb-4">Recomendaciones para {boatData.name || 'tu embarcación'}</h1>
            <p className="text-xl opacity-90">Eslora: {boatData.length}m | Manga: {boatData.beam}m | Uso: {boatData.sailingType}</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-8">
              {recommendations.map((rec, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
                  rec.priority === 'high' ? 'border-onesails-red' :
                  rec.priority === 'medium' ? 'border-onesails-blue' : 'border-gray-300'
                }`}>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-onesails-navy">{rec.type}</h3>
                          <p className="text-onesails-blue font-semibold">Tecnología {rec.technology}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                          rec.priority === 'medium' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {rec.priority === 'high' ? 'Prioridad Alta' :
                           rec.priority === 'medium' ? 'Recomendado' : 'Opcional'}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{rec.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-gray-500">Área estimada:</span>
                          <p className="font-semibold">{rec.area}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Precio estimado:</span>
                          <p className="font-semibold text-onesails-blue">{rec.price}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-gray-500">Características:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {rec.features.map((feature, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Link href="/solicite-presupuesto">
                        <Button className="w-full bg-onesails-red hover:bg-onesails-red/90 text-white">
                          Solicitar presupuesto
                        </Button>
                      </Link>
                      <Link href="/buscar-velas">
                        <Button variant="outline" className="w-full border-onesails-blue text-onesails-blue hover:bg-onesails-blue hover:text-white">
                          Ver más detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <AlertTriangle className="mx-auto h-8 w-8 text-yellow-600 mb-2" />
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Importante</h3>
                <p className="text-yellow-700">
                  Estas recomendaciones son estimaciones basadas en los datos proporcionados. Para una selección precisa,
                  recomendamos una consulta con nuestros expertos de WinSail.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetCalculator} variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                  Nueva consulta
                </Button>
                <Link href="/reservar-cita">
                  <Button className="bg-onesails-blue hover:bg-onesails-blue/90 text-white">
                    Reservar consulta técnica
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="border-onesails-navy text-onesails-navy hover:bg-onesails-navy hover:text-white">
                    Contactar WinSail
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <section className="bg-onesails-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Calculator className="mx-auto h-16 w-16 mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            CALCULADORA DE VELAS
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Obtén recomendaciones personalizadas de velas OneSails basadas en las características de tu embarcación
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-onesails-navy">Paso {currentStep} de 3</span>
              <span className="text-sm text-gray-500">{Math.round((currentStep / 3) * 100)}% completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-onesails-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Boat Basic Info */}
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Ship className="mx-auto h-12 w-12 text-onesails-blue mb-4" />
                <h2 className="text-2xl font-bold text-onesails-navy mb-2">Información de tu embarcación</h2>
                <p className="text-gray-600">Datos básicos de tu barco para calcular las recomendaciones</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la embarcación (opcional)
                  </label>
                  <Input
                    type="text"
                    placeholder="Ej: Nautilus"
                    value={boatData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Eslora (metros) *
                    </label>
                    <Input
                      type="number"
                      placeholder="Ej: 12.5"
                      value={boatData.length}
                      onChange={(e) => handleInputChange('length', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Manga (metros) *
                    </label>
                    <Input
                      type="number"
                      placeholder="Ej: 3.8"
                      value={boatData.beam}
                      onChange={(e) => handleInputChange('beam', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calado (metros)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ej: 1.8"
                      value={boatData.draft}
                      onChange={(e) => handleInputChange('draft', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Altura del mástil (metros) *
                    </label>
                    <Input
                      type="number"
                      placeholder="Ej: 18.5"
                      value={boatData.mastHeight}
                      onChange={(e) => handleInputChange('mastHeight', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Desplazamiento (kg) - opcional
                  </label>
                  <Input
                    type="number"
                    placeholder="Ej: 8500"
                    value={boatData.displacement}
                    onChange={(e) => handleInputChange('displacement', e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={() => setCurrentStep(2)}
                  disabled={!boatData.length || !boatData.beam || !boatData.mastHeight}
                  className="bg-onesails-blue hover:bg-onesails-blue/90 text-white px-8 py-3"
                >
                  Siguiente paso
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Sailing Style */}
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Wind className="mx-auto h-12 w-12 text-onesails-blue mb-4" />
                <h2 className="text-2xl font-bold text-onesails-navy mb-2">Estilo de navegación</h2>
                <p className="text-gray-600">¿Cómo utilizas tu embarcación principalmente?</p>
              </div>

              <div className="space-y-4">
                {[
                  { value: 'regata', label: 'Regata competitiva', desc: 'Participas en regatas y buscas máximo rendimiento' },
                  { value: 'crucero-alto', label: 'Crucero alto rendimiento', desc: 'Navegación de crucero pero priorizas velocidad' },
                  { value: 'crucero-recreativo', label: 'Crucero recreativo', desc: 'Navegación relajada, facilidad de uso prioritaria' },
                  { value: 'mixto', label: 'Uso mixto', desc: 'Combinas regatas ocasionales con cruceros' }
                ].map((option) => (
                  <label key={option.value} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="sailingType"
                      value={option.value}
                      checked={boatData.sailingType === option.value}
                      onChange={(e) => handleInputChange('sailingType', e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-onesails-navy">{option.label}</div>
                      <div className="text-sm text-gray-600">{option.desc}</div>
                    </div>
                  </label>
                ))}
              </div>

              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nivel de experiencia
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                  value={boatData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="principiante">Principiante (menos de 2 años)</option>
                  <option value="intermedio">Intermedio (2-10 años)</option>
                  <option value="avanzado">Avanzado (más de 10 años)</option>
                  <option value="profesional">Profesional/Instructor</option>
                </select>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setCurrentStep(1)}
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  Anterior
                </Button>
                <Button
                  onClick={() => setCurrentStep(3)}
                  disabled={!boatData.sailingType}
                  className="bg-onesails-blue hover:bg-onesails-blue/90 text-white px-8 py-3"
                >
                  Siguiente paso
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Budget and Calculate */}
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Ruler className="mx-auto h-12 w-12 text-onesails-blue mb-4" />
                <h2 className="text-2xl font-bold text-onesails-navy mb-2">Presupuesto y cálculo</h2>
                <p className="text-gray-600">Últimos detalles para generar tu recomendación personalizada</p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto aproximado
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-onesails-blue"
                    value={boatData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                  >
                    <option value="">Selecciona rango de presupuesto</option>
                    <option value="basico">Básico (2.000-5.000€)</option>
                    <option value="intermedio">Intermedio (5.000-10.000€)</option>
                    <option value="alto">Alto (10.000-20.000€)</option>
                    <option value="premium">Premium (20.000€+)</option>
                    <option value="sin-limite">Sin límite específico</option>
                  </select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Resumen de tu embarcación:</h3>
                  <div className="text-sm text-blue-800 space-y-1">
                    <p><strong>Nombre:</strong> {boatData.name || 'No especificado'}</p>
                    <p><strong>Dimensiones:</strong> {boatData.length}m x {boatData.beam}m</p>
                    <p><strong>Altura mástil:</strong> {boatData.mastHeight}m</p>
                    <p><strong>Uso:</strong> {boatData.sailingType}</p>
                    <p><strong>Experiencia:</strong> {boatData.experience}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={() => setCurrentStep(2)}
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  Anterior
                </Button>
                <Button
                  onClick={calculateRecommendations}
                  className="bg-onesails-red hover:bg-onesails-red/90 text-white px-8 py-3"
                >
                  Calcular recomendaciones
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
