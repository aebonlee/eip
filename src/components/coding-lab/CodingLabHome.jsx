import { Link } from 'react-router-dom'
import { languages } from '../../data/coding-exercises'
import Card from '../ui/Card'

const langInfo = {
  c: { color: 'from-blue-600 to-blue-800', desc: '포인터, 배열, 구조체 등 C언어 실습' },
  java: { color: 'from-orange-500 to-red-600', desc: '클래스, 상속, 컬렉션 등 Java 실습' },
  python: { color: 'from-green-500 to-teal-600', desc: '리스트, 딕셔너리, 문자열 등 Python 실습' },
}

export default function CodingLabHome() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">코딩 실습</h1>
        <p className="text-slate-400">온라인 코드 에디터로 C, Java, Python 프로그래밍을 연습하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(languages).map(lang => (
          <Link key={lang.id} to={`/coding-lab/${lang.id}`} className="no-underline">
            <Card hover className="h-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${langInfo[lang.id].color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                {lang.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{lang.name}</h2>
              <p className="text-sm text-slate-400">{langInfo[lang.id].desc}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-r from-secondary/10 to-accent/5 border-secondary/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">코딩 실습 안내</h3>
            <p className="text-sm text-slate-400">
              Monaco Editor 기반의 온라인 코드 에디터를 제공합니다.
              코드를 작성하고 실행 버튼을 눌러 결과를 확인하세요.
              Judge0 API를 통해 서버에서 코드가 실행됩니다.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
