'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Notice = { id: number; title: string; content: string; createdAt: Date };
type Inquiry = { id: number; name: string; email: string; content: string; createdAt: Date };

export default function AdminDashboard({ initialNotices, initialInquiries }: { initialNotices: Notice[], initialInquiries: Inquiry[] }) {
    const [activeTab, setActiveTab] = useState<'notices' | 'inquiries'>('notices');
    const [notices, setNotices] = useState(initialNotices);
    const [inquiries, setInquiries] = useState(initialInquiries);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Notice form states
    const [isEditingNotice, setIsEditingNotice] = useState(false);
    const [currentNotice, setCurrentNotice] = useState({ id: 0, title: '', content: '' });

    const handleLogout = async () => {
        await fetch('/api/admin/login', { method: 'DELETE' });
        router.refresh();
    };

    const deleteNotice = async (id: number) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        await fetch(`/api/notices/${id}`, { method: 'DELETE' });
        setNotices(notices.filter(n => n.id !== id));
    };

    const deleteInquiry = async (id: number) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
        setInquiries(inquiries.filter(i => i.id !== id));
    };

    const saveNotice = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (currentNotice.id === 0) {
                // Create
                const res = await fetch('/api/notices', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: currentNotice.title, content: currentNotice.content })
                });
                const newNotice = await res.json();
                setNotices([newNotice, ...notices]);
            } else {
                // Update
                const res = await fetch(`/api/notices/${currentNotice.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: currentNotice.title, content: currentNotice.content })
                });
                const updated = await res.json();
                setNotices(notices.map(n => n.id === updated.id ? updated : n));
            }
            setIsEditingNotice(false);
            setCurrentNotice({ id: 0, title: '', content: '' });
        } catch {
            alert("오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                    종합 관리 패널
                </h2>
                <button onClick={handleLogout} className="px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-gray-200 transition-colors">
                    시스템 로그아웃
                </button>
            </div>

            <div className="flex gap-4 border-b border-gray-200 mb-8">
                <button
                    className={`pb-4 px-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'notices' ? 'border-brand-teal text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('notices')}
                >
                    공지사항 관리 ({notices.length})
                </button>
                <button
                    className={`pb-4 px-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'inquiries' ? 'border-brand-teal text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('inquiries')}
                >
                    1:1 문의 접수 내역 ({inquiries.length})
                </button>
            </div>

            {activeTab === 'notices' && (
                <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">공지사항 데이터베이스</h3>
                        <button
                            onClick={() => { setCurrentNotice({ id: 0, title: '', content: '' }); setIsEditingNotice(!isEditingNotice); }}
                            className={`text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm ${isEditingNotice ? 'bg-gray-500 hover:bg-gray-600' : 'bg-brand-blue hover:bg-blue-800'}`}
                        >
                            {isEditingNotice ? '작성 취소' : '+ 새 공지사항 등록'}
                        </button>
                    </div>

                    {isEditingNotice && (
                        <form onSubmit={saveNotice} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
                            <h4 className="text-xl font-bold mb-6 text-brand-blue">{currentNotice.id === 0 ? '공지사항 작성' : '공지사항 수정'}</h4>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">제목</label>
                                <input
                                    type="text" required value={currentNotice.title} onChange={e => setCurrentNotice({ ...currentNotice, title: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal outline-none transition-all focus:border-transparent"
                                    placeholder="공지사항의 제목을 입력하세요"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">내용</label>
                                <textarea
                                    required rows={8} value={currentNotice.content} onChange={e => setCurrentNotice({ ...currentNotice, content: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal outline-none transition-all resize-none focus:border-transparent"
                                    placeholder="텍스트 에디터 기반 내용 입력 (현재는 단순 텍스트 지원)"
                                />
                            </div>
                            <div className="flex justify-end gap-3">
                                <button type="button" onClick={() => setIsEditingNotice(false)} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">취소</button>
                                <button type="submit" disabled={isLoading} className="px-8 py-3 bg-brand-teal text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 shadow-md">
                                    {isLoading ? '저장 중...' : '발행 및 저장하기'}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="p-5 font-semibold text-gray-600 w-20 text-center">번호</th>
                                        <th className="p-5 font-semibold text-gray-600">등록된 제목</th>
                                        <th className="p-5 font-semibold text-gray-600 w-40 text-center">작성 일자</th>
                                        <th className="p-5 font-semibold text-gray-600 w-32 text-center">관리자 도구</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {notices.length === 0 ? (
                                        <tr><td colSpan={4} className="p-12 text-center text-gray-500 font-medium">등록된 공지사항 데이터가 없습니다.</td></tr>
                                    ) : (
                                        notices.map(notice => (
                                            <tr key={notice.id} className="hover:bg-blue-50/50 transition-colors">
                                                <td className="p-5 text-center text-gray-500 font-mono text-sm">{notice.id}</td>
                                                <td className="p-5 font-bold text-gray-800">{notice.title}</td>
                                                <td className="p-5 text-gray-500 text-sm text-center">{new Date(notice.createdAt).toLocaleDateString()}</td>
                                                <td className="p-5 text-center space-x-3">
                                                    <button onClick={() => { setCurrentNotice(notice); setIsEditingNotice(true); }} className="text-brand-teal font-medium hover:underline text-sm px-2 py-1 rounded hover:bg-teal-50">수정</button>
                                                    <button onClick={() => deleteNotice(notice.id)} className="text-red-500 font-medium hover:underline text-sm px-2 py-1 rounded hover:bg-red-50">삭제</button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'inquiries' && (
                <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">1:1 고객 문의 모니터링</h3>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
                        {inquiries.length === 0 ? (
                            <div className="p-16 text-center text-gray-500 font-medium">현재 접수 및 대기중인 문의가 없습니다.</div>
                        ) : (
                            inquiries.map(inquiry => (
                                <div key={inquiry.id} className="p-8 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-start md:mb-4 gap-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-bold text-xl text-brand-blue">{inquiry.name}</h3>
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-medium">신규 접수 건</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                                    {inquiry.email}
                                                </span>
                                                <span className="flex items-center gap-1 border-l border-gray-300 pl-4">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                    {new Date(inquiry.createdAt).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                        <button onClick={() => deleteInquiry(inquiry.id)} className="text-red-500 hover:text-red-700 text-sm border border-red-200 px-4 py-2 rounded-lg bg-white hover:bg-red-50 transition-colors font-medium flex-shrink-0">
                                            대화 영구 삭제
                                        </button>
                                    </div>

                                    <div className="mt-4 md:mt-0 bg-white p-6 rounded-xl text-gray-700 whitespace-pre-wrap text-sm md:text-base border border-gray-200 shadow-inner">
                                        {inquiry.content}
                                    </div>

                                    <div className="mt-6 text-right">
                                        <a href={`mailto:${inquiry.email}?subject=주식회사 엘리파트너스 - 문의하신 사항에 대한 답변입니다.`} className="text-sm text-brand-blue hover:text-white bg-blue-50 hover:bg-brand-blue px-6 py-3 rounded-full border border-blue-200 inline-flex items-center gap-2 font-bold transition-all shadow-sm">
                                            이메일 클라이언트로 회신하기
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
