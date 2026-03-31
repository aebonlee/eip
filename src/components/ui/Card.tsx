interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function Card({ children, className = '', hover = false, ...props }: CardProps) {
  return (
    <div
      className={`card ${hover ? 'card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
