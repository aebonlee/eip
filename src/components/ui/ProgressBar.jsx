export default function ProgressBar({ value, max = 100, label, size = 'md' }) {
  const percent = Math.min(Math.round((value / max) * 100), 100)

  const sizeClass = size === 'sm' ? 'progress-sm' : size === 'lg' ? 'progress-lg' : ''

  return (
    <div className={`progress-bar-wrapper ${sizeClass}`}>
      {label && <span className="progress-text" style={{ fontSize: '13px' }}>{label}</span>}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <span className="progress-text">{percent}%</span>
    </div>
  )
}
