export default function ProgressBar({ value, max = 100, label, color = 'accent', size = 'md' }) {
  const percent = Math.min(Math.round((value / max) * 100), 100)

  const colors = {
    accent: 'bg-accent',
    success: 'bg-success',
    warning: 'bg-warning',
    secondary: 'bg-secondary-light',
  }

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-sm text-slate-400">{label}</span>
          <span className="text-sm font-semibold text-white">{percent}%</span>
        </div>
      )}
      <div className={`w-full bg-primary-lighter rounded-full ${sizes[size]} overflow-hidden`}>
        <div
          className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
