'use client'

import React from 'react'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
}

export default function LogoAsfalizo({ size = 'medium', showText = true }: LogoProps) {
  const sizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-14 h-14',
    large: 'w-20 h-20'
  }

  const textSizes = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-4xl'
  }

  const lambdaSizes = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  }

  return (
    <div className="flex items-center gap-3">
      {/* Logo Frame with Lambda */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Main Frame Border */}
        <div className="absolute inset-0 border-2 border-burgundy/20 rounded-sm"></div>

        {/* Decorative Corners and Lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Top left corner decoration */}
          <path d="M 0,15 L 15,0" stroke="#D4A017" strokeWidth="3" fill="none" />
          <path d="M 20,0 L 30,0" stroke="#D4A017" strokeWidth="3" fill="none" />
          <path d="M 0,20 L 0,30" stroke="#D4A017" strokeWidth="3" fill="none" />

          {/* Top right corner decoration */}
          <path d="M 85,0 L 100,15" stroke="#2C3E50" strokeWidth="3" fill="none" />
          <path d="M 70,0 L 80,0" stroke="#2C3E50" strokeWidth="3" fill="none" />
          <path d="M 100,20 L 100,30" stroke="#2C3E50" strokeWidth="3" fill="none" />

          {/* Bottom left corner decoration */}
          <path d="M 0,85 L 15,100" stroke="#2E5F3E" strokeWidth="3" fill="none" />
          <path d="M 20,100 L 30,100" stroke="#2E5F3E" strokeWidth="3" fill="none" />
          <path d="M 0,70 L 0,80" stroke="#2E5F3E" strokeWidth="3" fill="none" />

          {/* Bottom right corner decoration */}
          <path d="M 85,100 L 100,85" stroke="#8B2635" strokeWidth="3" fill="none" />
          <path d="M 70,100 L 80,100" stroke="#8B2635" strokeWidth="3" fill="none" />
          <path d="M 100,70 L 100,80" stroke="#8B2635" strokeWidth="3" fill="none" />

          {/* Diagonal decorative lines */}
          <line x1="25" y1="5" x2="45" y2="25" stroke="#8B2635" strokeWidth="2" opacity="0.6" />
          <line x1="55" y1="5" x2="75" y2="25" stroke="#2C3E50" strokeWidth="2" opacity="0.6" />
          <line x1="75" y1="55" x2="95" y2="75" stroke="#2E5F3E" strokeWidth="2" opacity="0.6" />
          <line x1="5" y1="55" x2="25" y2="75" stroke="#D4A017" strokeWidth="2" opacity="0.6" />
        </svg>

        {/* Lambda Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={`${lambdaSizes[size]} font-bold text-burgundy`}
            style={{
              fontFamily: 'Georgia, serif',
              transform: 'scaleY(1.1)',
              letterSpacing: '-0.05em'
            }}
          >
            λ
          </span>
        </div>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold text-navy-dark leading-tight`}>
            Asfalizo
          </span>
          {size !== 'small' && (
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Seguros
            </span>
          )}
        </div>
      )}
    </div>
  )
}