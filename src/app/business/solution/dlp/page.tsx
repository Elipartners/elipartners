import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '오피스키퍼 - 통합 PC 보안 솔루션 | 주식회사 엘리파트너스',
    description: '13,000개 고객사가 선택한 No.1 DLP. 기업의 가치를 지키는 가장 완벽한 통합 PC 보안',
};

export default function DLPSolutionPage() {
    return (
        <div className="bg-gray-50 text-gray-900 w-full font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
                .gradient-text {
                    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
            `}} />

            {/* Back Button */}
            <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <Link href="/business/solution" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-teal transition-colors">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        솔루션 목록으로 돌아가기
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <header className="pt-24 pb-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4 animate-bounce">13,000개 고객사가 선택한 No.1 DLP</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            기업의 가치를 지키는 <br /><span className="gradient-text">가장 완벽한 통합 PC 보안</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                            정보유출방지부터 자산관리까지, <br />복잡한 보안은 줄이고 비즈니스의 안전함은 더합니다.
                        </p>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl opacity-50"></div>
            </header>

            {/* 7 Major Features Section */}
            <section id="features" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">하나의 에이전트로 경험하는 <br />7가지 핵심 보안 기능</h2>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">정보유출방지(DLP)</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">USB, 메신저, 메일 등 다양한 경로를 통한 중요 파일 반출을 강력히 제어합니다.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">민감정보관리</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">개인정보 및 기밀 문서를 실시간 검출하고 암호화하여 외부 유출을 방지합니다.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">웹/소프트웨어 차단</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">유해 사이트 및 비업무용 소프트웨어 실행을 차단하여 업무 몰입도를 높입니다.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">출력물 보안</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">워터마크 삽입 및 출력 차단 기능을 통해 종이 문서를 통한 유출을 차단합니다.</p>
                        </div>
                        {/* Feature 5 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">문서백업</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">랜섬웨어 및 고의적 삭제에 대비하여 원본 파일을 자동으로 안전하게 백업합니다.</p>
                        </div>
                        {/* Feature 6 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">PC취약점 점검</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">국정원 보안 가이드를 기준으로 사내 PC의 보안 상태를 점검하고 조치합니다.</p>
                        </div>
                        {/* Feature 7 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 lg:col-span-2 lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-6">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-3">IT 자산관리</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">SW 라이선스 수량 관리 및 HW 지급 이력을 체계적으로 관리하여 관리 효율을 극대화합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why OfficeKeeper? (Trust & Certs) */}
            <section id="why" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">검증된 기술력, <br />국가 인증이 증명합니다</h2>
                            <p className="text-gray-500 mb-8">오피스키퍼는 국내 최초 클라우드 DLP 서비스를 시작한 이래 14년의 운영 노하우를 쌓아왔습니다. 각종 국가기관 및 금융권에서 요구하는 모든 보안 규격을 충족합니다.</p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</span>
                                    <span className="font-medium text-gray-700">CSAP 클라우드 보안인증 획득 (국내 DLP 최초)</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</span>
                                    <span className="font-medium text-gray-700">보안인증확인서 및 GS인증 1등급 보유</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</span>
                                    <span className="font-medium text-gray-700">22건 이상의 독자적인 기술 특허 보유</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">13,000+</div>
                                <div className="text-sm text-gray-500">누적 고객사 수</div>
                            </div>
                            <div className="bg-blue-600 p-6 rounded-3xl text-center text-white">
                                <div className="text-4xl font-bold mb-2">96%</div>
                                <div className="text-sm opacity-80">연장계약 희망률</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">No.1</div>
                                <div className="text-sm text-gray-500">시장 점유율 1위</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">2010</div>
                                <div className="text-sm text-gray-500">최초 출시 연도</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Type Section */}
            <section id="service" className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">기업의 환경에 맞는 유연한 도입</h2>
                        <p className="text-gray-400">클라우드형부터 구축형까지, 규모와 예산에 맞춰 선택하세요.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Cloud Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-blue-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">클라우드형 (Cloud)</h3>
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">SaaS Subscription</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>별도 서버 구축 없이 즉시 도입</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>최적화 및 커스터마이징 가능</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>1인 기업부터 무제한 확장 가능</li>
                            </ul>
                            <div className="text-sm text-gray-500">IDC 서초 SK IDC 내 1급 보안 구역에서 안전하게 운영됩니다.</div>
                        </div>

                        {/* On-Premise Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-purple-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">구축형 (On-Premise)</h3>
                                    <span className="text-purple-400 text-sm font-bold uppercase tracking-widest">Perpetual License</span>
                                </div>
                                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>사내 서버에 독립적인 환경 구축</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>최적화 및 커스터마이징 가능</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>영구 라이선스 형태의 자산화</li>
                            </ul>
                            <div className="text-sm text-gray-500">대규모 인원(25PC 이상) 및 조직도 연동이 필요한 기업에 추천합니다.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">도입 후 더 만족하는 전방위 지원 서비스</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-blue-900">신속한 기술지원</div>
                            <p className="text-gray-600 text-sm italic">"유선/원격/방문을 통한 즉각적인 문제 해결"</p>
                        </div>
                        <div className="p-6 border-x border-blue-100">
                            <div className="text-xl font-bold mb-3 text-blue-900">무상 업데이트</div>
                            <p className="text-gray-600 text-sm italic">"DB 최신화 및 기능 개선 무상 제공"</p>
                        </div>
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-blue-900">보안 실무 교육</div>
                            <p className="text-gray-600 text-sm italic">"무료 보안 세미나 및 실무 가이드 지원"</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
