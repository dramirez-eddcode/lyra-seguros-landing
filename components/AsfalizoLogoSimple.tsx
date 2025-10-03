'use client'

import React from 'react'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'light' | 'dark'
}

export default function AsfalizoLogoSimple({ size = 'medium', variant = 'light' }: LogoProps) {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-10',
    large: 'h-14'
  }

  const textColor = variant === 'light' ? 'text-navy-dark' : 'text-white'
  const lambdaColor = variant === 'light' ? '#8B2635' : '#FFFFFF'

  return (
    <div className="flex items-center gap-2">
      {/* Lambda with decorative frame */}
      <div className="relative">
        <svg
          className={`${sizeClasses[size]}`}
          viewBox="0 0 50 50"
          style={{ width: 'auto' }}
        >
          {/* Decorative frame corners */}
          <g strokeWidth="2.5" fill="none">
            {/* Top left */}
            <path d="M 5,15 L 5,5 L 15,5" stroke="#D4A017" />
            {/* Top right */}
            <path d="M 35,5 L 45,5 L 45,15" stroke="#2C3E50" />
            {/* Bottom left */}
            <path d="M 5,35 L 5,45 L 15,45" stroke="#2E5F3E" />
            {/* Bottom right */}
            <path d="M 35,45 L 45,45 L 45,35" stroke="#8B2635" />

            {/* Diagonal decorative lines */}
            <line x1="10" y1="10" x2="20" y2="20" stroke="#8B2635" strokeWidth="2" opacity="0.5" />
            <line x1="30" y1="10" x2="40" y2="20" stroke="#2C3E50" strokeWidth="2" opacity="0.5" />
            <line x1="10" y1="40" x2="20" y2="30" stroke="#D4A017" strokeWidth="2" opacity="0.5" />
            <line x1="30" y1="40" x2="40" y2="30" stroke="#2E5F3E" strokeWidth="2" opacity="0.5" />
          </g>

          {/* Lambda symbol */}
          <text
            x="25"
            y="35"
            textAnchor="middle"
            fill={lambdaColor}
            className="font-serif"
            style={{ fontSize: '32px' }}
          >
            λ
          </text>
        </svg>
      </div>

      {/* Company name */}
      <div className="flex items-center gap-1">
        <span className={`${textColor} font-bold tracking-tight`} style={{ fontSize: size === 'small' ? '1.25rem' : size === 'large' ? '2rem' : '1.5rem' }}>
          Asfalizo
        </span>
        {size !== 'small' && (
          <span className={`${textColor} opacity-60 uppercase tracking-wider`} style={{ fontSize: '0.65rem', marginLeft: '0.25rem' }}>
            Seguros
          </span>
        )}
      </div>
    </div>
  )
}