import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Wrench, Ship, Anchor, Cable, Settings, Clock, Shield, Star, MapPin, Phone, Mail } from 'lucide-react'
import WinSailServices from '@/components/WinSailServices'
import { Card, CardContent } from '@/components/ui/card'
import UniversalNavigation from '@/components/UniversalNavigation'

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <UniversalNavigation />

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-onesails-navy mb-6">
            Servicios Profesionales de WinSail
          </h1>
          <p className="text-xl text-onesails-gray max-w-3xl mx-auto">
            Distribuidor oficial OneSails en Alicante. Más de 20 años de experiencia
            ofreciendo servicios integrales de velas, rigging y equipamiento náutico.
          </p>
        </div>

        <WinSailServices />
      </div>
    </div>
  )
}
