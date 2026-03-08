export const metadata = {
    title: 'Real Estate | 주식회사 엘리파트너스',
    description: '부동산 개발, 시행 및 시공, 건설 PM 컨설팅',
};

export default function RealEstatePage() {
    return (
        <div className="w-full">
            <div className="bg-brand-blue py-20 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">부동산 개발</h1>
                <p className="text-blue-200">새로운 공간적 가치를 창출하는 창의적이고 혁신적인 부동산 디벨로퍼</p>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-16 border border-gray-100 text-center min-h-[400px]">
                    <div className="w-20 h-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">현장 사업 개요 및 조감도 안내</h2>
                    <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                        진행중인 주요 현장과 성공적인 완공 포트폴리오 정보가 업데이트될 예정입니다.<br />
                        상세한 조감도 시각 자료 및 준공 데이터가 향후 이 곳에 배치됩니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
