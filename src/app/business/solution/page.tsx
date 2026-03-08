import Link from 'next/link';

export const metadata = {
    title: 'ICT Solutions | 주식회사 엘리파트너스',
    description: '엘리파트너스의 방화벽(UTM), 보안(DLP), 스토리지(NAS), 문서보안(DRM) 솔루션',
};

export default function SolutionPage() {
    return (
        <div className="w-full">
            <div className="bg-brand-blue py-20 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">ICT 솔루션 영역</h1>
                <p className="text-blue-200">UTM, DLP, NAS, DRM 등 맞춤형 인프라 기술 솔루션을 제공합니다.</p>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-7xl space-y-16">

                {/* Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 tracking-wide">
                    {/* DLP Card */}
                    <Link href="/business/solution/dlp" className="bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 hover:border-brand-teal hover:shadow-lg transition-all group flex flex-col h-full">
                        <div className="border-b border-gray-100 pb-3 mb-4">
                            <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-teal transition-colors">DLP (매체제어)</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">기업 내부의 중요 데이터를 보호하고 정보 유출을 원천적으로 차단, 추적하여 기밀을 보호합니다.</p>
                        <div className="w-full bg-slate-50 group-hover:bg-brand-teal text-slate-500 group-hover:text-white py-3 rounded-lg text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                            자세히 보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </Link>

                    {/* DRM Card */}
                    <Link href="/business/solution/drm" className="bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 hover:border-brand-teal hover:shadow-lg transition-all group flex flex-col h-full">
                        <div className="border-b border-gray-100 pb-3 mb-4">
                            <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-teal transition-colors">DRM (문서보안)</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">핵심 자산인 문서 파일을 암호화하고 무단 접근을 방지하여 오프라인/온라인 문서 보안을 강화합니다.</p>
                        <div className="w-full bg-slate-50 group-hover:bg-brand-teal text-slate-500 group-hover:text-white py-3 rounded-lg text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                            자세히 보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </Link>

                    {/* NAS Card */}
                    <Link href="/business/solution/nas" className="bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 hover:border-brand-teal hover:shadow-lg transition-all group flex flex-col h-full">
                        <div className="border-b border-gray-100 pb-3 mb-4">
                            <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-teal transition-colors">NAS (스토리지)</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">효율적인 데이터 보관과 원활한 원격 협업을 위한 대용량/고성능 스토리지 시스템 구성을 제안합니다.</p>
                        <div className="w-full bg-slate-50 group-hover:bg-brand-teal text-slate-500 group-hover:text-white py-3 rounded-lg text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                            자세히 보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </Link>

                    {/* UTM Card */}
                    <Link href="/business/solution/utm" className="bg-white p-6 md:p-8 rounded-xl shadow border border-gray-100 hover:border-brand-teal hover:shadow-lg transition-all group flex flex-col h-full">
                        <div className="border-b border-gray-100 pb-3 mb-4">
                            <h3 className="text-xl font-bold text-brand-blue group-hover:text-brand-teal transition-colors">UTM (방화벽)</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">통합 위협 관리 솔루션으로 안전하고 신뢰할 수 있는 외부 네트워크 인프라 보호 환경을 구축합니다.</p>
                        <div className="w-full bg-slate-50 group-hover:bg-brand-teal text-slate-500 group-hover:text-white py-3 rounded-lg text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-auto">
                            자세히 보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
