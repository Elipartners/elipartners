import Image from 'next/image';

export const metadata = {
    title: 'NAS 스토리지 솔루션 | 주식회사 엘리파트너스',
    description: '전 세계 1위 프라이빗 클라우드 솔루션, 비즈니스 역량을 강화하는 Synology NAS 데이터 스토리지 제안',
};

export default function NasSolutionPage() {
    return (
        <div className="w-full bg-gray-50 text-gray-900 font-sans">
            {/* Hero Section */}
            <header className="pt-32 pb-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-4 animate-bounce">전 세계 1위 프라이빗 클라우드 솔루션</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            데이터 그 이상의 가치를 담다 <br />
                            <span className="bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">Synology Private Cloud</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                            단순한 저장을 넘어 백업, 협업, 보안까지 <br className="hidden md:block" />기업의 모든 데이터를 하나의 시스템으로 통합 관리하십시오.
                        </p>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            </header>

            {/* Product Image Section (New) */}
            <section className="relative z-20 -mt-20 mb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[3rem] bg-white p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]">
                        <Image
                            src="/images/solution/nas.png"
                            alt="Synology NAS 제품 이미지"
                            fill
                            className="object-contain rounded-[2.5rem]"
                            priority
                            sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                    </div>
                </div>
            </section>

            {/* 7 Major Features Section */}
            <section id="features" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">비즈니스 역량을 강화하는 <br />7가지 핵심 데이터 솔루션</h2>
                        <div className="w-20 h-1.5 bg-slate-800 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">통합 백업 (ABB)</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">PC, 서버, VM, 클라우드 데이터를 라이선스 비용 없이 하나로 백업하고 관리합니다.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">Synology Drive</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">언제 어디서나 접근 가능한 프라이빗 클라우드를 통해 팀원 간의 원활한 파일 공유와 협업을 지원합니다.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">데이터 무결성</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Btrfs 파일 시스템을 통해 데이터 자가 치유 기능을 제공하며 랜섬웨어 위협으로부터 보호합니다.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">영상 보안 관리</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Surveillance Station을 통해 지능형 AI 기반 IP 카메라 통합 관제 시스템을 구축합니다.</p>
                        </div>
                        {/* Feature 5 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">스냅샷 복구</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">실수나 공격으로 데이터가 삭제되어도 단 몇 초 만에 이전 시점으로 데이터를 복원합니다.</p>
                        </div>
                        {/* Feature 6 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">가상화 인프라</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">VMM을 지원하여 NAS 내부에서 윈도우나 리눅스 등 독립적인 가상 머신을 운영할 수 있습니다.</p>
                        </div>
                        {/* Feature 7 */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:-translate-y-2.5 hover:shadow-xl transition-all duration-300 lg:col-span-2 lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-6">
                                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-3">직관적인 DSM OS</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">마치 윈도우를 사용하듯 웹 브라우저에서 편리하게 모든 기능을 제어하는 독보적인 운영체제를 제공합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Synology? (Brand Power) */}
            <section id="why" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">전 세계가 선택한 <br />스마트 스토리지 솔루션</h2>
                            <p className="text-gray-500 mb-8">시놀로지는 단순한 하드웨어를 넘어 기업의 디지털 전환을 이끄는 포괄적인 생태계를 제공합니다. 수많은 사용자가 증명하는 안정성을 직접 경험하십시오.</p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold">1</span>
                                    <span className="font-medium text-gray-700">포춘 500대 기업의 50% 이상이 도입</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold">2</span>
                                    <span className="font-medium text-gray-700">ISO 27001 등 글로벌 보안 및 품질 인증 준수</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold">3</span>
                                    <span className="font-medium text-gray-700">별도 비용 없는 강력한 기업용 앱 패키지 제공</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
                                <div className="text-4xl font-bold text-slate-800 mb-2">9M+</div>
                                <div className="text-sm text-gray-500">전 세계 설치 기기</div>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-3xl text-center text-white">
                                <div className="text-4xl font-bold mb-2">No.1</div>
                                <div className="text-sm opacity-80">마켓 쉐어 순위</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
                                <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
                                <div className="text-sm text-gray-500">무중단 서비스 보장</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
                                <div className="text-4xl font-bold text-gray-800 mb-2">Zero</div>
                                <div className="text-sm text-gray-500">백업 라이선스 비용</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Lineup Section */}
            <section id="lineup" className="py-24 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">비즈니스 성장에 따른 유연한 선택</h2>
                        <p className="text-gray-400">소규모 사무실부터 대규모 엔터프라이즈 데이터 센터까지 최적의 라인업을 제공합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Business Plus Series */}
                        <div className="border border-slate-800 bg-slate-800/50 p-10 rounded-[2rem] hover:border-blue-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Plus 시리즈 (+)</h3>
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Small & Medium Business</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m4 0H9" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                스타트업 및 중소기업을 위한 최적의 비용 효율성. 데이터 보호와 원활한 파일 공유 환경을 위한 기본기가 탄탄한 라인업입니다.
                            </p>
                        </div>

                        {/* Enterprise XS/XS+ Series */}
                        <div className="border border-slate-800 bg-slate-800/50 p-10 rounded-[2rem] hover:border-blue-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Enterprise 시리즈 (XS/XS+)</h3>
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Large Enterprise</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                대규모 사용자와 가상화 환경, 딥러닝 애플리케이션 등 막대한 데이터 처리 성능이 필요한 대기업용 고성능 스토리지 시스템입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
