"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react'

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // Here you would integrate with your chat service
      console.log('Sending message:', message)
      setMessage('')
      // For now, we'll just show a confirmation message
      alert('¡Gracias por tu mensaje! Un experto de WinSail te contactará pronto.')
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={toggleChat}
            className="bg-winsail-blue hover:bg-winsail-blue/90 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-winsail-blue text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-semibold">WinSail Soporte</h3>
                <p className="text-xs text-blue-100">En línea - Respuesta inmediata</p>
              </div>
            </div>
            <Button
              onClick={toggleChat}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {/* Welcome Message */}
            <div className="bg-white p-3 rounded-lg mb-3 shadow-sm">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-winsail-blue rounded-full flex items-center justify-center text-white text-xs font-bold">
                  WS
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800 font-medium mb-1">Equipo WinSail</p>
                  <p className="text-sm text-gray-600">
                    ¡Hola! 👋 Somos el equipo de WinSail, distribuidor oficial OneSails en Alicante.
                    ¿En qué podemos ayudarte hoy?
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => setMessage('Quiero información sobre velas OneSails')}
                    >
                      Velas OneSails
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => setMessage('Necesito reparación de velas')}
                    >
                      Reparaciones
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => setMessage('Quiero solicitar presupuesto')}
                    >
                      Presupuesto
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-blue-50 p-3 rounded-lg mb-3">
              <p className="text-sm font-medium text-gray-800 mb-2">Contacto directo:</p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-3 w-3" />
                  <span>966 77 79 74</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-3 w-3" />
                  <span>jose@winsail.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-winsail-blue focus:border-transparent"
              />
              <Button
                type="submit"
                size="sm"
                className="bg-winsail-blue hover:bg-winsail-blue/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Horario: L-V 8:00-17:00h | Respuesta garantizada
            </p>
          </form>
        </div>
      )}
    </>
  )
}

export default LiveChatWidget
