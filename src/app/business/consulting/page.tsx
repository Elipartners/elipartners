export const metadata = {
    title: 'Consulting | 주식회사 엘리파트너스',
    description: '엘리파트너스의 경영 및 IT 지원 컨설팅',
};

export default function ConsultingPage() {
    return (
        <div className="w-full">
            <div className="bg-brand-blue py-20 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">경영 컨설팅</h1>
                <p className="text-blue-200">데이터 기반의 체계적이고 전문적인 비즈니스 컨설팅을 제공합니다.</p>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="bg-white rounded-2xl shadow-sm p-12 border border-gray-100 text-center min-h-[400px] flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">컨설팅 상세 장표 안내</h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                        세부 컨설팅 모델과 실적 포트폴리오 장표는 현재 콘텐츠 준비 중입니다. <br />
                        조만간 업데이트되어 해당 공간에 표시될 예정입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
