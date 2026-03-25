import { Link, useLocation } from 'react-router-dom'

const menuGroups = [
  {
    title: '필기시험',
    items: [
      { path: '/written-exam', label: '자격증 선택' },
      { path: '/written-exam/engineer', label: '정보처리기사' },
      { path: '/written-exam/industrial', label: '정보처리산업기사' },
      { path: '/written-exam/functional', label: '프로그래밍기능사' },
    ],
  },
  {
    title: '실기시험',
    items: [
      { path: '/practical-exam', label: '실기 홈' },
      { path: '/practical-exam/sql', label: 'SQL 실습' },
      { path: '/practical-exam/algorithm', label: '알고리즘 실습' },
      { path: '/practical-exam/short-answer', label: '단답형 연습' },
    ],
  },
  {
    title: '코딩실습',
    items: [
      { path: '/coding-lab', label: '코딩실습 홈' },
      { path: '/coding-lab/c', label: 'C언어' },
      { path: '/coding-lab/java', label: 'Java' },
      { path: '/coding-lab/python', label: 'Python' },
    ],
  },
  {
    title: '기타',
    items: [
      { path: '/lectures', label: '온라인 강의' },
      { path: '/mypage', label: '마이페이지' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-primary-light border-r border-primary-lighter min-h-screen hidden lg:block">
      <div className="p-4 space-y-6">
        {menuGroups.map(group => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              {group.title}
            </h3>
            <ul className="space-y-0.5 list-none p-0 m-0">
              {group.items.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors no-underline ${
                      location.pathname === item.path
                        ? 'bg-secondary/20 text-accent border-l-2 border-accent'
                        : 'text-slate-400 hover:text-white hover:bg-primary-lighter'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
