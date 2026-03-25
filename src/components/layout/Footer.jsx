export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-lighter mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
              <span className="text-primary font-bold text-xs">EIP</span>
            </div>
            <span className="text-slate-500 text-sm">정보처리 학습센터</span>
          </div>
          <p className="text-slate-600 text-sm text-center">
            본 사이트는 학습 목적으로 제작되었으며, 한국산업인력공단과 무관합니다.
          </p>
          <p className="text-slate-600 text-xs">
            &copy; 2026 DreamIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
