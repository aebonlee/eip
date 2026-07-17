import { useState } from 'react'

type TabId = 'apply' | 'eligibility' | 'passrate' | 'venue'

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'apply', label: '원서 접수', icon: 'fa-solid fa-file-pen' },
  { id: 'eligibility', label: '응시 자격', icon: 'fa-solid fa-user-check' },
  { id: 'passrate', label: '합격 기준·합격률', icon: 'fa-solid fa-chart-line' },
  { id: 'venue', label: '시험장 안내', icon: 'fa-solid fa-location-dot' },
]

export default function ExamInfoPage() {
  const [active, setActive] = useState<TabId>('apply')

  return (
    <>
      <div className="page-header">
        <div className="container page-header-inner">
          <div className="page-header-icon"><i className="fa-solid fa-circle-info"></i></div>
          <div>
            <h1>시험 정보</h1>
            <p>원서 접수부터 시험장 확인까지, 정보처리 자격증 응시에 필요한 정보를 한곳에 모았습니다.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '32px 24px 64px' }}>
        {/* 탭 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {tabs.map(t => (
            <button
              key={t.id}
              className={`btn ${active === t.id ? 'btn-accent' : 'btn-outline'}`}
              onClick={() => setActive(t.id)}
            >
              <i className={t.icon} style={{ marginRight: 6 }}></i>
              {t.label}
            </button>
          ))}
        </div>

        {active === 'apply' && (
          <div className="card">
            <h2>원서 접수 절차</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
              정보처리기사·산업기사·기능사 시험은 모두 한국산업인력공단 <strong>큐넷(Q-net)</strong>에서 접수합니다.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="md-table">
                <thead>
                  <tr><th>단계</th><th>내용</th><th>주의사항</th></tr>
                </thead>
                <tbody>
                  <tr><td>1. 회원가입</td><td>큐넷(q-net.or.kr) 회원가입 후 본인 인증</td><td>사진 등록 필수 (6개월 이내 촬영, 규격 준수)</td></tr>
                  <tr><td>2. 원서 접수</td><td>접수 기간에 로그인 후 응시 종목·시험장 선택</td><td>접수 시작 직후 선호 시험장이 빨리 마감됨</td></tr>
                  <tr><td>3. 수수료 결제</td><td>필기·실기 각각 별도 결제</td><td>결제 완료까지 해야 접수 확정</td></tr>
                  <tr><td>4. 수험표 출력</td><td>시험 전 수험표 출력 후 신분증과 함께 지참</td><td>신분증 미지참 시 응시 불가</td></tr>
                  <tr><td>5. 합격 확인</td><td>발표일에 큐넷에서 확인</td><td>필기 합격 후 2년 안에 실기 응시 가능</td></tr>
                </tbody>
              </table>
            </div>
            <div className="hint-box" style={{ marginTop: 16 }}>
              <p>
                연간 시험 일정(회차별 접수·시험·발표일)은 매년 공단이 공고합니다.
                정확한 날짜는 <strong>큐넷 &gt; 원서접수 &gt; 시험일정</strong>에서 확인해 주세요.
              </p>
            </div>
            <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>
              큐넷 바로가기 <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 6 }}></i>
            </a>
          </div>
        )}

        {active === 'eligibility' && (
          <div className="card">
            <h2>응시 자격</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
              등급에 따라 응시 자격이 다릅니다. 자세한 인정 범위는 큐넷의 응시자격 자가진단에서 확인할 수 있습니다.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="md-table">
                <thead>
                  <tr><th>자격증</th><th>대표적인 응시 자격 (하나만 충족하면 됨)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>정보처리기사</strong></td>
                    <td>4년제 관련 학과 졸업(예정) / 3년제 전문대 졸업 후 실무 1년 / 2년제 전문대 졸업 후 실무 2년 / 산업기사 취득 후 실무 1년 / 기능사 취득 후 실무 3년 / 관련 실무 경력 4년</td>
                  </tr>
                  <tr>
                    <td><strong>정보처리산업기사</strong></td>
                    <td>2년제 이상 관련 학과 졸업(예정) / 기능사 취득 후 실무 1년 / 관련 실무 경력 2년</td>
                  </tr>
                  <tr>
                    <td><strong>프로그래밍기능사</strong></td>
                    <td>제한 없음 (누구나 응시 가능)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="hint-box" style={{ marginTop: 16 }}>
              <p>
                학점은행제 106학점(기사) / 41학점(산업기사) 이수로도 응시 자격이 인정됩니다.
                응시 자격 서류는 필기 합격 후 제출 기한 안에 큐넷으로 제출해야 하며, 기한을 넘기면 필기 합격이 무효 처리되니 주의하세요.
              </p>
            </div>
          </div>
        )}

        {active === 'passrate' && (
          <div className="card">
            <h2>합격 기준</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="md-table">
                <thead>
                  <tr><th>구분</th><th>시험 형식</th><th>합격 기준</th></tr>
                </thead>
                <tbody>
                  <tr><td>필기</td><td>객관식 4지선다, 과목당 20문항</td><td>과목당 40점 이상 + 전 과목 평균 60점 이상</td></tr>
                  <tr><td>실기</td><td>필답형 (단답·서술·코드 읽기·SQL)</td><td>100점 만점에 60점 이상</td></tr>
                </tbody>
              </table>
            </div>

            <h2 style={{ marginTop: 24 }}>합격률 경향</h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              정보처리기사 필기는 절반 안팎이 합격하는 반면, <strong>실기 합격률은 회차에 따라 20% 안팎까지 떨어질 만큼 어렵습니다.</strong>
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              실기가 어려운 이유는 명확합니다. 프로그래밍 코드 읽기(C·Java·Python)와 SQL 문제 비중이 크고, 용어를 정확한 명칭으로 직접 써내야 하기 때문입니다.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              그래서 이 사이트의 <strong>코드 결과 예측</strong>과 <strong>실기 이론</strong> 메뉴로 코드 읽기와 용어 암기를 집중 훈련하는 것이 합격의 지름길입니다.
            </p>
            <div className="hint-box" style={{ marginTop: 16 }}>
              <p>
                회차별 공식 합격률 통계는 큐넷의 <strong>자격정보 &gt; 국가기술자격 통계</strong>에서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        )}

        {active === 'venue' && (
          <div className="card">
            <h2>시험장 안내</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>
              필기(CBT)는 전국 상설 시험장에서, 실기(필답형)는 회차별로 지정되는 학교·기관 시험장에서 치릅니다.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="md-table">
                <thead>
                  <tr><th>구분</th><th>내용</th></tr>
                </thead>
                <tbody>
                  <tr><td>시험장 선택</td><td>원서 접수 시 지역·시험장을 직접 선택 (선착순 마감)</td></tr>
                  <tr><td>위치 확인</td><td>수험표에 시험장 주소가 표기됨, 큐넷 시험장 안내에서 약도 확인 가능</td></tr>
                  <tr><td>입실 시간</td><td>수험표에 안내된 입실 완료 시간 엄수 (지각 시 응시 불가)</td></tr>
                  <tr><td>지참물</td><td>신분증, 수험표, 검은색 볼펜 (실기 필답형), 계산기는 공학용 불가 여부 사전 확인</td></tr>
                </tbody>
              </table>
            </div>
            <a href="https://www.q-net.or.kr" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>
              큐넷에서 시험장 찾기 <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 6 }}></i>
            </a>
          </div>
        )}
      </div>
    </>
  )
}
