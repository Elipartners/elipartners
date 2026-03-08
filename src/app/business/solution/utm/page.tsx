import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '섀도우월 - 차세대 통합 위협 관리 솔루션 (UTM) | 주식회사 엘리파트너스',
    description: '네트워크 보안의 진화, 완벽한 쉴드 ShadowWall V6.0',
};

export default function UTMSolutionPage() {
    return (
        <div className="bg-gray-50 text-gray-900 w-full font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
                .gradient-text {
                    background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); /* 두루안 네트워크 보안 테마: 틸(Teal) */
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
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 text-xs font-bold mb-4 animate-bounce">국내 최고 등급 CC인증 EAL4급 획득</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            네트워크 보안의 진화 <br /><span className="gradient-text">완벽한 쉴드, ShadowWall V6.0</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                            Full Conntrack DB 기반의 압도적인 성능과 지능형 위협 대응으로 <br />귀사의 비즈니스 네트워크를 24시간 철저히 방어합니다.
                        </p>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            </header>

            {/* 7 Major Features Section */}
            <section id="features" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">중단 없는 비즈니스를 위한 <br />7가지 통합 보안 모듈</h2>
                        <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">차세대 방화벽</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">애플리케이션 제어 및 사용자 식별을 통해 복잡한 L7 계층의 보안 위협을 정교하게 차단합니다.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">강력한 IPS</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">실시간 취약점 분석 및 침입 방지 시스템으로 외부 해킹 시도를 네트워크 진입 단계에서 무력화합니다.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">고성능 VPN</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">IPSec/SSL VPN을 모두 지원하여 재택근무 및 원격 지사 간에 안전하고 빠른 암호화 통신을 보장합니다.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">콘텐츠 필터링</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">유해 사이트 및 비업무용 웹/앱 접속을 카테고리별로 차단하여 네트워크 자원을 최적화합니다.</p>
                        </div>
                        {/* Feature 5 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">실시간 모니터링</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">대시보드를 통해 실시간 트래픽 현황 및 위협 탐지 내역을 직관적으로 확인하고 대응합니다.</p>
                        </div>
                        {/* Feature 6 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">통합 DB 연동</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Full Conntrack DB 기술을 통해 수만 건의 동시 세션 처리 시에도 성능 저하 없는 안정성을 제공합니다.</p>
                        </div>
                        {/* Feature 7 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 lg:col-span-2 lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-6">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-3">고가용성 (HA)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Active-Active/Standby 구성을 통해 하드웨어 장애 시에도 보안 서비스가 끊김 없이 유지됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why ShadowWall? (Trust & Certs) */}
            <section id="why" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">검증된 신뢰, <br />네트워크 보안의 표준</h2>
                            <p className="text-gray-500 mb-8">섀도우월은 국가보안요구사항을 완벽하게 충족하며, 국내 수많은 공공기관 및 대기업에서 그 성능과 안정성을 인정받았습니다.</p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">1</span>
                                    <span className="font-medium text-gray-700">공통평가기준(CC) EAL4급 인증 보유</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">2</span>
                                    <span className="font-medium text-gray-700">가상사설망(VPN) 제품 보안요구사항 적합판정</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">3</span>
                                    <span className="font-medium text-gray-700">KT, LG U+ Managed Service 전용 공급 제품</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-teal-600 mb-2">V6.0</div>
                                <div className="text-sm text-gray-500">최신 메이저 버전</div>
                            </div>
                            <div className="bg-teal-600 p-6 rounded-3xl text-center text-white">
                                <div className="text-4xl font-bold mb-2">2027</div>
                                <div className="text-sm opacity-80">인증 유효 기간(6월)</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">Gigabit</div>
                                <div className="text-sm text-gray-500">초고속 패킷 처리</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">No.1</div>
                                <div className="text-sm text-gray-500">UTM 기술 혁신 리더</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Type Section */}
            <section id="service" className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">비즈니스 규모에 따른 유연한 라인업</h2>
                        <p className="text-gray-400">네트워크 속도와 동시 접속자 수에 따라 최적의 하드웨어를 제안합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Appliance Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-teal-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">하드웨어 어플라이언스</h3>
                                    <span className="text-teal-400 text-sm font-bold uppercase tracking-widest">Standard UTM</span>
                                </div>
                                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>전용 하드웨어 기반의 고성능 엔진</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>강력한 일체형 보안(One-Box) 제공</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>최적화된 보안 가속 솔루션 탑재</li>
                            </ul>
                            <div className="text-sm text-gray-500">사내 전산실 및 데이터 센터에 직접 설치하여 네트워크 전체를 방어합니다.</div>
                        </div>

                        {/* Virtual/NFV Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-blue-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">가상화/NFV 모델</h3>
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Next-Gen NFV</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>클라우드 및 가상화 서버 환경 대응</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>물리적 장비 없는 소프트웨어 기반 UTM</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>트래픽 증가에 따른 유연한 리소스 확장</li>
                            </ul>
                            <div className="text-sm text-gray-500">클라우드 인프라(AWS, Azure, KT Cloud 등) 환경 보안에 최적화되어 있습니다.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 bg-teal-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">전문가 그룹이 지원하는 맞춤형 네트워크 설계</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-teal-900">신속한 관제 지원</div>
                            <p className="text-gray-600 text-sm italic">"전문 관제 팀의 24/7 보안 이벤트 대응"</p>
                        </div>
                        <div className="p-6 border-x border-teal-100">
                            <div className="text-xl font-bold mb-3 text-teal-900">위협 인텔리전스</div>
                            <p className="text-gray-600 text-sm italic">"신종 악성코드 및 취약점 DB 수시 업데이트"</p>
                        </div>
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-teal-900">유연한 망 구성</div>
                            <p className="text-gray-600 text-sm italic">"귀사 환경에 맞는 하이브리드 네트워크 설계"</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
