import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Card from '../ui/Card'
import Button from '../ui/Button'

const features = [
  {
    title: '필기시험 학습',
    description: '과목별 이론 정리와 CBT 모의시험',
    path: '/written-exam',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: '실기시험 학습',
    description: 'SQL, 알고리즘, 단답형 연습',
    path: '/practical-exam',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    title: '코딩 실습',
    description: 'C, Java, Python 온라인 코딩',
    path: '/coding-lab',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    title: '온라인 강의',
    description: '유튜브 강의 모아보기',
    path: '/lectures',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-purple-500 to-purple-700',
  },
]

const certBadges = [
  { name: '정보처리기사', level: '기사', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { name: '정보처리산업기사', level: '산업기사', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  { name: '프로그래밍기능사', level: '기능사', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
]

export default function HomePage() {
  const { user, profile } = useAuth()

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-accent">EIP</span> 정보처리 학습센터
        </h1>
        <p className="text-lg text-slate-400 mb-6 max-w-2xl mx-auto">
          정보처리기사 · 산업기사 · 프로그래밍기능사<br />
          필기/실기 종합 학습 플랫폼
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {certBadges.map(cert => (
            <span key={cert.name} className={`px-4 py-2 rounded-full text-sm font-medium border ${cert.color}`}>
              {cert.name}
            </span>
          ))}
        </div>
        {!user && (
          <Link to="/login">
            <Button variant="accent" size="lg">
              무료로 시작하기
            </Button>
          </Link>
        )}
        {user && profile && (
          <Card className="max-w-lg mx-auto text-left">
            <div className="flex items-center gap-4">
              {profile.avatar_url ? (
                <img src={profile.avatar_url} alt="" className="w-12 h-12 rounded-full" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white text-lg font-bold">
                  {profile.nickname?.[0] || '?'}
                </div>
              )}
              <div>
                <p className="text-white font-semibold">{profile.nickname}님, 환영합니다!</p>
                <p className="text-sm text-slate-400">오늘도 열심히 공부해볼까요?</p>
              </div>
            </div>
          </Card>
        )}
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">학습 메뉴</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(feature => (
            <Link key={feature.path} to={feature.path} className="no-underline">
              <Card hover className="h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: '이론 챕터', value: '50+', unit: '개' },
            { label: 'CBT 문제', value: '500+', unit: '문항' },
            { label: '코딩 실습', value: '30+', unit: '문제' },
            { label: '영상 강의', value: '20+', unit: '편' },
          ].map(stat => (
            <Card key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
