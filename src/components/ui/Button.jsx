export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-secondary hover:bg-secondary-light text-white shadow-lg shadow-secondary/25',
    accent: 'bg-accent hover:bg-accent-light text-primary font-semibold',
    outline: 'border border-primary-lighter hover:border-accent text-slate-300 hover:text-accent',
    ghost: 'text-slate-400 hover:text-white hover:bg-primary-light',
    success: 'bg-success hover:bg-success-light text-white',
    warning: 'bg-warning hover:bg-warning-light text-primary font-semibold',
    danger: 'bg-danger hover:bg-red-500 text-white',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
