import React from 'react'

const ProcessSection = () => {
  const steps = [
    {
      number: "1.",
      title: "PLANTA DE PRODUCCIÓN",
      description: "Cumple con los más altos estándares de prácticas ambientales y con la obtención responsable de materiales y fuentes de energía."
    },
    {
      number: "2.",
      title: "PRODUCCIÓN",
      description: "Las velas fabricadas con 4T FORTE se producen con un bajo nivel de emisiones de CO2 a la atmósfera y sin el uso de contaminantes como pegamentos, resinas y disolventes."
    },
    {
      number: "3.",
      title: "DISPOSICIÓN",
      description: "Al final de su vida útil, estas velas se reciclan dentro de los procesos normales de recuperación de materiales base de polietileno para generar el grano de PE."
    },
    {
      number: "4.",
      title: "RECUPERACIÓN",
      description: "El grano de polietileno se utiliza para la producción de accesorios (como cabezales) que se emplean en la fabricación de nuevas velas."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-onesails-green text-white p-6 rounded-lg space-y-4 min-h-[280px] flex flex-col"
            >
              <div className="text-4xl font-bold">{step.number}</div>
              <h3 className="text-lg font-bold leading-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
