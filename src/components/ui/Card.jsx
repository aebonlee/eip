export default function Card({ children, className = '', hover = false, ...props }) {
  return (
    <div
      className={`bg-primary-light border border-primary-lighter rounded-xl p-6 ${
        hover ? 'hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
