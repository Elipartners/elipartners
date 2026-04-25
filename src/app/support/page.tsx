import prisma from '../../lib/prisma';
import { Suspense } from 'react';
import NoticeTable from '../../components/support/NoticeTable';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: '고객지원 | 주식회사 엘리파트너스',
    description: '엘리파트너스의 최신 공지사항 및 1:1 고객 문의 접수, 원격 지원을 제공합니다.',
};

async function NoticeList() {
    let notices: any[] = [];
    try {
        notices = await prisma.notice.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5
        });
    } catch (error) {
        console.error("Failed to fetch notices:", error);
        // Fallback or empty state if DB connection fails
    }

    if (!notices || notices.length === 0) {
        return (
            <div className="py-12 text-center text-gray-500 bg-gray-50 rounded-lg border border-gray-100">
                등록된 공지사항이 없습니다.
            </div>
        );
    }

    return <NoticeTable notices={notices} />;
}

export default function SupportPage() {
    return (
        <div className="w-full">
            <div className="bg-brand-blue py-20 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">고객지원</h1>
                <p className="text-blue-200">엘리파트너스의 빠르고 정확한 고객 지원 서비스입니다.</p>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-7xl space-y-20">

                {/* Remote Support Banner */}
                <section>
                    <div className="bg-gradient-to-r from-brand-teal to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-lg overflow-hidden relative group">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L5.43 7.82l6.57 3.69 6.57-3.69L12 4.15zM4.5 15.68l6.5 3.66v-7.39L4.5 8.29v7.39zm15 0V8.29l-6.5 3.66v7.39l6.5-3.66z" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">빠른 원격 기술 지원</h2>
                                <p className="text-blue-100 max-w-lg leading-relaxed text-sm md:text-base">
                                    솔루션 사용 중 발생한 문제나 기타 원격 지원이 필요한 문의사항에 대해 전문 엔지니어가 접속하여 신속하게 해결해 드립니다.
                                </p>
                            </div>
                            <a
                                href="#download-remote-support"
                                className="shrink-0 bg-white text-brand-teal px-8 py-4 rounded-full font-bold text-sm md:text-lg hover:bg-gray-50 flex items-center gap-2 transition-transform hover:scale-105 shadow-md"
                            >
                                원격 지원 다운로드
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                <div className="w-full">
                    {/* Notice Section */}
                    <section id="notice" className="scroll-mt-24">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">공지사항</h2>
                                <p className="text-gray-500 text-sm">엘리파트너스의 최신 소식과 안내입니다.</p>
                            </div>
                            
                            {/* Kakao Channel Chat Button */}
                            <a
                                href="https://pf.kakao.com/_xoxaLCX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#FEE500] hover:bg-[#FDD800] text-black px-6 py-3 rounded-full font-bold text-sm md:text-base transition-colors shadow-sm"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 3c-5.5 0-10 3.5-10 7.8 0 2.8 1.8 5.2 4.6 6.5l-1.1 4.1c-.1.3.1.6.4.5l4.8-3.2c.4.1.9.1 1.3.1 5.5 0 10-3.5 10-7.8s-4.5-7.8-10-7.8z" />
                                </svg>
                                카톡으로 문의하기
                            </a>
                        </div>

                        <Suspense fallback={<div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl animate-pulse text-gray-400">명단 불러오는 중...</div>}>
                            <NoticeList />
                        </Suspense>
                    </section>
                </div>

            </div>
        </div>
    );
}
