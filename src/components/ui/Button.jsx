export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const variantClass = {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
    secondary: 'btn-secondary',
    link: 'btn-link',
  }

  const sizeClass = {
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
