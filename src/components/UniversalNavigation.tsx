import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface UniversalNavigationProps {
  showBackToVelas?: boolean
  backToVelasLabel?: string
  customBackPath?: string
}

const UniversalNavigation: React.FC<UniversalNavigationProps> = ({
  showBackToVelas = true,
  backToVelasLabel = "Volver a Velas",
  customBackPath = "/velas"
}) => {
  return (
    <div className="bg-gray-50 py-4 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackToVelas && (
              <Link href={customBackPath} className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {backToVelasLabel}
              </Link>
            )}
          </div>
          <Link href="/" className="inline-flex items-center text-onesails-gray hover:text-onesails-blue transition-colors">
            <Home className="h-4 w-4 mr-2" />
            Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UniversalNavigation
