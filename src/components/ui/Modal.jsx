import { useEffect } from 'react'

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
      />
      <div className="card" style={{ position: 'relative', maxWidth: '560px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
        {title && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{title}</h3>
            <button onClick={onClose} style={{ fontSize: '24px', color: 'var(--text-light)', cursor: 'pointer', background: 'none', border: 'none' }}>
              &times;
            </button>
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  )
}
