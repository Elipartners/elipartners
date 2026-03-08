import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '섀도우큐브 - 국내 유일의 풀패키지 eDRM 솔루션 | 주식회사 엘리파트너스',
    description: '도면부터 문서까지 경계를 넘는 강력한 암호화, 섀도우큐브',
};

export default function DRMSolutionPage() {
    return (
        <div className="bg-gray-50 text-gray-900 w-full font-sans">
            <style dangerouslySetInnerHTML={{
                __html: `
                .gradient-text {
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); /* 두루안의 브랜드 컬러: 오렌지 */
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
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold mb-4 animate-bounce">국내 유일의 업그레이드 프로젝트가 필요 없는 eDRM</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            도면부터 문서까지 <br /><span className="gradient-text">경계를 넘는 강력한 암호화</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
                            기존 업무 환경의 변화 없이, 내부자에 의한 정보 유출을 <br />근본적으로 차단하는 국내 최다 판매 엔터프라이즈 솔루션입니다.
                        </p>
                    </div>
                </div>

                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            </header>

            {/* 7 Major Features Section */}
            <section id="features" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">비즈니스 연속성을 보장하는 <br />7가지 핵심 eDRM 기술</h2>
                        <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">투명암호화</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">사용자는 암호화를 의식하지 않고 평소처럼 업무를 진행해도 실시간 자동 암호화가 이루어집니다.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">전문 도면 보안</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">AutoCAD, CATIA, SolidWorks 등 고성능 도면 파일에 최적화된 강력한 보안을 지원합니다.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">결재 시스템 내장</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">별도 구축 없이도 보안 문서의 반출을 승인하고 이력을 관리하는 시스템을 기본 제공합니다.</p>
                        </div>
                        {/* Feature 4 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">LifeCycle 관리</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">외부 제공 문서의 유통 기한, 열람 횟수 제어 및 원격 파기 기능으로 2차 유출을 차단합니다.</p>
                        </div>
                        {/* Feature 5 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">Secure PDF</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">원본 수정 없이 협업에 필요한 보안 PDF로의 변환 및 정교한 인쇄 제어를 지원합니다.</p>
                        </div>
                        {/* Feature 6 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                            </div>
                            <h3 className="text-lg font-bold mb-3">다국어 완벽 지원</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">유니코드 기반 설계로 글로벌 지사나 협력사와도 언어 장벽 없는 보안 환경을 구축합니다.</p>
                        </div>
                        {/* Feature 7 */}
                        <div className="feature-card bg-white p-8 rounded-3xl border border-gray-100 transition-all duration-300 lg:col-span-2 lg:flex lg:items-center">
                            <div className="lg:flex-shrink-0">
                                <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 lg:mb-0 lg:mr-6">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-3">DevKit (API 연동)</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">C++, Java, .NET 등 다양한 언어와 OS를 지원하여 그룹웨어나 ERP 등 기간계 시스템과 유연하게 연동됩니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why ShadowCube? (Trust & Certs) */}
            <section id="why" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">섀도우큐브가 <br />보안의 새로운 기준이 된 이유</h2>
                            <p className="text-gray-500 mb-8">국내 유일의 풀패키지 배포 방식으로, 타 솔루션 대비 획기적인 구축 기간과 안정적인 유지보수를 보장합니다.</p>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">1</span>
                                    <span className="font-medium text-gray-700">국내 유일의 업그레이드 프로젝트가 필요 없는 제품</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">2</span>
                                    <span className="font-medium text-gray-700">국제용 CC인증 및 20년 이상의 정보보호 노하우</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">3</span>
                                    <span className="font-medium text-gray-700">현대로템, 한화오션 등 국내 주요 대기업 레퍼런스</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                                <div className="text-sm text-gray-500">주요 대형 고객사</div>
                            </div>
                            <div className="bg-orange-600 p-6 rounded-3xl text-center text-white">
                                <div className="text-4xl font-bold mb-2">EAL4</div>
                                <div className="text-sm opacity-80">최고 수준 CC인증</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">2007</div>
                                <div className="text-sm text-gray-500">두루안 설립 연도</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-3xl text-center">
                                <div className="text-4xl font-bold text-gray-800 mb-2">75%</div>
                                <div className="text-sm text-gray-500">기술 전문 인력 비율</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Type Section */}
            <section id="service" className="py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">규모와 환경에 최적화된 도입 방식</h2>
                        <p className="text-gray-400">보안 환경에 따라 클라우드와 구축형 중 가장 적합한 방식을 제안합니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Cloud Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-orange-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">클라우드 서비스</h3>
                                    <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Powered by LG U+</span>
                                </div>
                                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>LG U+ 인프라 기반의 안정적 서비스</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>중소/벤처기업을 위한 합리적 비용</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>복호화 결재시스템 기본 포함</li>
                            </ul>
                            <div className="text-sm text-gray-500">별도 서버 구축이 부담스러운 기업에 추천하는 최적의 솔루션입니다.</div>
                        </div>

                        {/* On-Premise Type */}
                        <div className="border border-gray-800 bg-gray-800/50 p-10 rounded-[2rem] hover:border-blue-500 transition-all group">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">독립 구축형</h3>
                                    <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Enterprise SI</span>
                                </div>
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-10 text-gray-300">
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>사내 보안 가이드에 따른 맞춤 최적화</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>무기한(영구) 라이선스 통한 자산화</li>
                                <li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>ERP, PLM 등 다양한 시스템 연동</li>
                            </ul>
                            <div className="text-sm text-gray-500">대규모 인프라와 강력한 통제가 필요한 엔터프라이즈 환경에 권장합니다.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">도입부터 사후 관리까지, 두루안의 약속</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-orange-900">전문적인 장애 처리</div>
                            <p className="text-gray-600 text-sm italic">"경력 10년 이상의 전문 엔지니어 실시간 지원"</p>
                        </div>
                        <div className="p-6 border-x border-orange-100">
                            <div className="text-xl font-bold mb-3 text-orange-900">무상 기능 개선</div>
                            <p className="text-gray-600 text-sm italic">"고객 요구사항을 반영한 수시 업데이트 제공"</p>
                        </div>
                        <div className="p-6">
                            <div className="text-xl font-bold mb-3 text-orange-900">유연한 라이선스</div>
                            <p className="text-gray-600 text-sm italic">"오프라인 및 원격지에서도 중단 없는 보안 보장"</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
