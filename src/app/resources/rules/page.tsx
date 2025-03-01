'use client'

import { motion } from 'framer-motion'

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl px-6 py-24"
      >
        <div className="prose prose-invert mx-auto max-w-none">
          <h1 className="text-center text-4xl font-bold tracking-tight text-white mb-16">CoMit 회칙</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 1장 총칙</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 1조 (명칭)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본 동아리는 CoMit(이하 &apos;본회&apos;라 한다)이라 한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 2조 (목적)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회는 컴퓨터 프로그래밍에 관심이 있는 학우들이 모여 서로의 지식을 공유하고 발전시키며, 
                    실무 능력을 향상시키는 것을 목적으로 한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 3조 (소속)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회는 성균관대학교 중앙동아리로서 소속된다.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 2장 회원</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 4조 (자격)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회의 회원은 성균관대학교 재학생 중 본회의 목적에 찬성하고 회칙을 준수하며 
                    소정의 가입절차를 마친 자로 한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 5조 (권리와 의무)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 본회의 회원은 본회의 자치활동에 참여할 권리와 의무를 가진다.<br />
                    2. 본회의 회원은 회칙을 준수하고 회비를 납부할 의무를 가진다.<br />
                    3. 본회의 회원은 총회에 참석하여 발언권과 의결권을 가진다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 6조 (상벌)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 본회의 발전에 공로가 있는 회원에게는 운영위원회의 의결을 거쳐 포상할 수 있다.<br />
                    2. 본회의 회원으로서 본회의 명예를 훼손하거나 회칙을 위반한 자는 운영위원회의 의결을 거쳐 제명할 수 있다.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 3장 임원</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 7조 (구성)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회는 다음과 같은 임원을 둔다.<br />
                    1. 회장 1인<br />
                    2. 부회장 1인<br />
                    3. 총무 1인<br />
                    4. 운영진 약간 명
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 8조 (임기)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    임원의 임기는 1년으로 하며, 연임할 수 있다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 9조 (선출)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 회장은 총회에서 선출한다.<br />
                    2. 부회장, 총무, 운영진은 회장이 임명한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 10조 (직무)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 회장은 본회를 대표하고 회무를 총괄한다.<br />
                    2. 부회장은 회장을 보좌하며 회장 유고시 그 직무를 대행한다.<br />
                    3. 총무는 본회의 재정 및 행정 업무를 담당한다.<br />
                    4. 운영진은 본회의 사업 계획 및 집행을 담당한다.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 4장 회의</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 11조 (총회)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 총회는 정기총회와 임시총회로 구분한다.<br />
                    2. 정기총회는 매 학기 초에 개최한다.<br />
                    3. 임시총회는 회장이 필요하다고 인정할 때 또는 회원 3분의 1 이상의 요구가 있을 때 개최한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 12조 (의결정족수)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    총회는 재적회원 과반수의 출석으로 개회하고, 출석회원 과반수의 찬성으로 의결한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 13조 (운영위원회)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 운영위원회는 임원으로 구성한다.<br />
                    2. 운영위원회는 다음 사항을 심의 의결한다.<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;가. 사업계획 및 예산, 결산에 관한 사항<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;나. 회칙 개정안<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;다. 회원의 상벌에 관한 사항<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;라. 기타 중요한 사항
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 5장 재정</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 14조 (재정)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회의 재정은 회비와 보조금, 찬조금, 기타 수입으로 충당한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 15조 (회계연도)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본회의 회계연도는 매년 3월 1일부터 다음해 2월 말일까지로 한다.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">제 6장 보칙</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 16조 (회칙개정)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    1. 본 회칙의 개정은 운영위원회의 의결을 거쳐 총회에서 출석회원 3분의 2 이상의 찬성으로 의결한다.<br />
                    2. 개정된 회칙은 즉시 효력을 발생한다.
                  </p>
                </article>
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 17조 (시행세칙)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본 회칙의 시행에 필요한 세부사항은 운영위원회의 의결을 거쳐 시행세칙으로 정한다.
                  </p>
                </article>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#ad49e1] mb-6">부칙</h2>
              <div className="space-y-4">
                <article>
                  <h3 className="text-xl font-semibold text-white mb-2">제 1조 (시행일)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    본 회칙은 2024년 3월 1일부터 시행한다.
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 