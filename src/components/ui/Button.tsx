interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'secondary' | 'link'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  const variantClass: Record<string, string> = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    secondary: 'btn-secondary',
    link: 'btn-link',
  }

  const sizeClass: Record<string, string> = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  return (
    <button
      className={`btn ${variantClass[variant] || ''} ${sizeClass[size] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
