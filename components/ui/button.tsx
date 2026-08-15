import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  children?: React.ReactNode
}

export function Button({
  className = '',
  variant = 'default',
  size = 'default',
  children,
  style = {},
  ...props
}: ButtonProps) {
  // Map variant styling to match global system
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
      case 'default':
        return 'btn-primary'
      case 'secondary':
      case 'outline':
        return 'btn-secondary'
      default:
        return 'btn-primary'
    }
  }

  // Handle standard component sizing inline
  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return { padding: '0.4rem 0.875rem', fontSize: '0.8125rem' }
      case 'lg':
        return { padding: '0.875rem 1.75rem', fontSize: '1rem' }
      case 'icon':
        return { padding: '0.5rem', width: '36px', height: '36px', justifyContent: 'center' }
      default:
        return {}
    }
  }

  return (
    <button
      className={`${getVariantClass()} ${className}`}
      style={{ ...getSizeStyles(), ...style }}
      {...props}
    >
      {children}
    </button>
  )
}
