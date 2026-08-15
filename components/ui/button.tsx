import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  children?: React.ReactNode
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'default',
  children,
  style = {},
  ...props
}: ButtonProps) {
  // Simple style selection based on how clear and visible the button needs to be
  const buttonStyle = variant === 'secondary' || variant === 'outline' ? 'btn-secondary' : 'btn-primary'

  const sizeStyle: React.CSSProperties = 
    size === 'sm' ? { padding: '0.4rem 0.875rem', fontSize: '0.875rem' } :
    size === 'lg' ? { padding: '0.875rem 1.75rem', fontSize: '1.0625rem' } : {}

  return (
    <button
      className={`${buttonStyle} ${className}`}
      style={{ ...sizeStyle, ...style }}
      {...props}
    >
      {/* If no custom text is provided, show simple, friendly default text */}
      {children || 'Click Here'}
    </button>
  )
}
