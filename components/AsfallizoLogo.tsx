import React from 'react'

interface LogoProps {
  className?: string
}

export default function AsfallizoLogo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Container with decorative frame */}
      <div className="relative mr-3">
        {/* Decorative Frame */}
        <div className="w-12 h-12 relative">
          {/* Diagonal decorative lines in corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-mustard"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-navy"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-forest"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-burgundy"></div>

          {/* Lambda Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-burgundy" style={{ fontFamily: 'serif' }}>λ</span>
          </div>

          {/* Decorative diagonal lines */}
          <div className="absolute -top-1 left-1/2 w-8 h-0.5 bg-burgundy transform -rotate-45 origin-left"></div>
          <div className="absolute -top-1 right-1/2 w-8 h-0.5 bg-navy transform rotate-45 origin-right"></div>
        </div>
      </div>

      {/* Company Name */}
      <span className="text-2xl font-bold text-navy-dark">Asfalizo</span>
    </div>
  )
}