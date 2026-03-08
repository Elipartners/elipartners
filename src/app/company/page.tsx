import Image from 'next/image';

export const metadata = {
    title: '회사소개 | 주식회사 엘리파트너스',
    description: '엘리파트너스의 인사말, 조직도, 오시는 길을 안내해 드립니다.',
};

export default function CompanyPage() {
    return (
        <div className="w-full">
            {/* 1. Page Header (Subpage Common) */}
            <div className="bg-brand-blue py-20 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">회사소개</h1>
                <p className="text-blue-200">초연결 시대를 선도하는 엘리파트너스를 소개합니다.</p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 space-y-24">
                {/* 2. 인사말 (Greetings) */}
                <section id="greeting" className="scroll-mt-24">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <Image
                                    src="/images/company/company-intro.png"
                                    alt="엘리파트너스 회사 전경"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                최고의 전문성과 신뢰로 <br className="hidden md:block" />
                                <span className="text-brand-teal">고객의 성공적인 오늘을 함께합니다.</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
                                <p>
                                    안녕하십니까, 주식회사 엘리파트너스 입니다.
                                </p>
                                <p>
                                    엘리파트너스는 급변하는 IT 환경 속에서 시스템 통합, 맞춤형 솔루션 제공, 네트워크 인프라 구축에 이르기까지 전문적인 서비스를 바탕으로 IT 혁신을 선도하고자 합니다. 더 나아가, 첨단 인프라를 바탕으로 고부가가치 부동산 자산을 창출하는 부동산 개발 분야에서도 확고한 위치를 다져가고 있습니다.
                                </p>
                                <p>
                                    고객의 만족과 동반 성장을 제1의 가치로 삼고, 각 분야 최고의 에코 파트너들과 함께 최적의 솔루션을 약속드립니다. 변화를 기회로 만들고 혁신을 실현하는 파트너, 엘리파트너스가 되겠습니다.
                                </p>
                                <p className="font-semibold text-gray-900 pt-4 text-right md:text-left">
                                    주식회사 엘리파트너스 임직원 일동
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 조직도 (Org Chart) */}
                <section id="organization" className="scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">조직도</h2>
                        <p className="text-gray-600 mx-auto whitespace-nowrap">유기적인 협업과 체계적인 프로세스를 위해 구성된 엘리파트너스의 조직도입니다.</p>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-x-auto pb-4">
                        <div className="flex flex-col items-center min-w-[600px]">
                            {/* CEO Box */}
                            <div className="bg-brand-blue text-white px-10 py-4 rounded-lg font-bold text-xl shadow-md z-10 w-48 text-center">
                                대표이사
                            </div>
                            <div className="w-1 h-8 bg-brand-blue"></div>
                            <div className="w-full max-w-2xl border-t-2 border-brand-blue relative"></div>

                            <div className="w-full max-w-2xl flex justify-between relative mt-0">
                                <div className="w-1 h-8 bg-brand-blue absolute left-0" style={{ marginLeft: "15%" }}></div>
                                <div className="w-1 h-8 bg-brand-blue absolute left-1/2 transform -translate-x-1/2"></div>
                                <div className="w-1 h-8 bg-brand-blue absolute right-0" style={{ marginRight: "15%" }}></div>
                            </div>

                            {/* Departments Grid */}
                            <div className="grid grid-cols-3 gap-6 w-full max-w-4xl mt-8">
                                {/* Department 1 */}
                                <div className="bg-white border-t-4 border-brand-teal rounded-b-lg shadow p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 py-2 rounded">ICT 사업부</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="border-b border-gray-100 pb-2">시스템 통합(SI)</li>
                                        <li className="border-b border-gray-100 pb-2">네트워크 솔루션</li>
                                        <li className="border-b border-gray-100 pb-2">보안 (UTM, DLP)</li>
                                        <li>유지보수(SM)</li>
                                    </ul>
                                </div>

                                {/* Department 2 */}
                                <div className="bg-white border-t-4 border-brand-teal rounded-b-lg shadow p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 py-2 rounded">부동산 개발부</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="border-b border-gray-100 pb-2">기획/타당성 분석</li>
                                        <li className="border-b border-gray-100 pb-2">프로젝트 수주/시행</li>
                                        <li className="border-b border-gray-100 pb-2">시공 관리(CM)</li>
                                        <li>분양 마케팅</li>
                                    </ul>
                                </div>

                                {/* Department 3 */}
                                <div className="bg-white border-t-4 border-brand-teal rounded-b-lg shadow p-6 text-center">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 bg-gray-50 py-2 rounded">경영지원부</h3>
                                    <ul className="text-gray-600 space-y-2 text-sm">
                                        <li className="border-b border-gray-100 pb-2">재무 / 회계</li>
                                        <li className="border-b border-gray-100 pb-2">인사 / 노무</li>
                                        <li className="border-b border-gray-100 pb-2">총무 / 기획</li>
                                        <li>법무 지원</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. 오시는 길 (Location) */}
                <section id="location" className="scroll-mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">오시는 길</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-gray-50/50">
                                <h3 className="text-2xl font-bold text-brand-blue mb-8">주식회사 엘리파트너스</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-semibold text-gray-900">주소</p>
                                            <p className="text-gray-600 mt-1 text-sm md:text-base">대전광역시 서구 둔산중로 40, 621호(둔산동)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-semibold text-gray-900">연락처</p>
                                            <p className="text-gray-600 mt-1 text-sm md:text-base">Tel. 010-7486-1407</p>
                                            <p className="text-gray-600 text-sm md:text-base">FAX. 0504-070-9031</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <svg className="w-5 h-5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-semibold text-gray-900">이메일</p>
                                            <p className="text-gray-600 mt-1 text-sm md:text-base">eli1407@elipartners.co.kr</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Real Google Maps Embed */}
                            <div className="relative h-[300px] lg:h-auto min-h-[400px] bg-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3213.913075677815!2d127.3846474758504!3d36.350289172379374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654964dfb38e07%3A0xeebd121dc1aee9df!2z64yA7KCE6rSR7Jet7IucIOyEnOq1rCDrk5zsgbDrsoTroZwgNDA!5e0!3m2!1sko!2skr!4v1709828453472!5m2!1sko!2skr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="주식회사 엘리파트너스 오시는 길"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
