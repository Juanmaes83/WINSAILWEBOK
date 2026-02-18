"use client"

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [preferences, setPreferences] = useState({
    functional: true, // Always enabled
    preferences: false,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Show the modal after a brief delay to simulate real behavior
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) {
        setShowConsent(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      functional: true,
      preferences: true,
      statistics: true,
      marketing: true,
    }))
    setShowConsent(false)
  }

  const handleDeny = () => {
    localStorage.setItem('cookie-consent', 'denied')
    localStorage.setItem('cookie-preferences', JSON.stringify({
      functional: true,
      preferences: false,
      statistics: false,
      marketing: false,
    }))
    setShowConsent(false)
  }

  const handleViewPreferences = () => {
    // For now, just save the current preferences and close
    localStorage.setItem('cookie-consent', 'custom')
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences))
    setShowConsent(false)
  }

  const handleClose = () => {
    setShowConsent(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'functional') return // Can't disable functional cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-xl">
        {/* WinSail Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="text-winsail-blue text-2xl font-bold mr-2">1</div>
          <div className="text-sm font-medium text-gray-800">
            WINSAIL
          </div>
        </div>

        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Manage Consent
        </h2>

        {/* Content */}
        <div className="text-sm text-gray-600 mb-6 leading-relaxed">
          <p>
            To provide the best experiences, we use technologies like cookies to store and/or access
            device information. Consenting to these technologies will allow us to process data such
            as browsing behavior or unique IDs on this site. Not consenting or withdrawing consent,
            may adversely affect certain features and functions.
          </p>
        </div>

        {/* Cookie categories */}
        <div className="space-y-4 mb-6">
          {/* Functional */}
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-winsail-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">Functional</h3>
              <p className="text-xs text-gray-500">Siempre activo</p>
              <p className="text-xs text-gray-600 mt-1">
                The technical storage or access is strictly necessary for the legitimate purpose of enabling
                the use of a specific service.
              </p>
            </div>
          </div>

          {/* Preferences */}
          <div className="flex items-start space-x-3">
            <button
              onClick={() => togglePreference('preferences')}
              className={`w-5 h-5 border-2 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                preferences.preferences
                  ? 'bg-winsail-blue border-winsail-blue'
                  : 'border-gray-300 hover:border-winsail-blue'
              }`}
            >
              {preferences.preferences && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </button>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">Preferences</h3>
              <p className="text-xs text-gray-600 mt-1">
                The technical storage or access is necessary for storing preferences that are not requested
                by the subscriber or user.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="flex items-start space-x-3">
            <button
              onClick={() => togglePreference('statistics')}
              className={`w-5 h-5 border-2 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                preferences.statistics
                  ? 'bg-winsail-blue border-winsail-blue'
                  : 'border-gray-300 hover:border-winsail-blue'
              }`}
            >
              {preferences.statistics && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </button>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">Statistics</h3>
              <p className="text-xs text-gray-600 mt-1">
                The technical storage or access that is used exclusively for statistical purposes.
              </p>
            </div>
          </div>

          {/* Marketing */}
          <div className="flex items-start space-x-3">
            <button
              onClick={() => togglePreference('marketing')}
              className={`w-5 h-5 border-2 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                preferences.marketing
                  ? 'bg-winsail-blue border-winsail-blue'
                  : 'border-gray-300 hover:border-winsail-blue'
              }`}
            >
              {preferences.marketing && <div className="w-2 h-2 bg-white rounded-full"></div>}
            </button>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm">Marketing</h3>
              <p className="text-xs text-gray-600 mt-1">
                The technical storage or access is required to create user profiles to send advertising.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleAccept}
            className="bg-gray-800 hover:bg-gray-700 text-white flex-1"
          >
            Accept
          </Button>
          <Button
            onClick={handleDeny}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
          >
            Deny
          </Button>
          <Button
            onClick={handleViewPreferences}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
          >
            View preferences
          </Button>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-4 mt-4 text-xs">
          <a href="/cookie-policy" className="text-winsail-blue hover:underline">
            Cookie Policy
          </a>
          <a href="/privacy-policy" className="text-winsail-blue hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
