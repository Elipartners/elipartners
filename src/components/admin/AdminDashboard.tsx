'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Notice = { id: number; title: string; content: string; createdAt: Date };
type Popup = { id: number; title: string; type: string; content: string; linkUrl: string | null; startDate: Date; endDate: Date; isActive: boolean; createdAt: Date };

export default function AdminDashboard({ initialNotices, initialPopups }: { initialNotices: Notice[], initialPopups: Popup[] }) {
    const [activeTab, setActiveTab] = useState<'notices' | 'popups'>('notices');
    const [notices, setNotices] = useState(initialNotices);
    const [popups, setPopups] = useState(initialPopups);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Notice form states
    const [isEditingNotice, setIsEditingNotice] = useState(false);
    const [currentNotice, setCurrentNotice] = useState({ id: 0, title: '', content: '' });

    // Popup form states
    const defaultPopup = { id: 0, title: '', type: 'HTML', content: '', linkUrl: '', startDate: new Date(), endDate: new Date(), isActive: true };
    const [isEditingPopup, setIsEditingPopup] = useState(false);
    const [currentPopup, setCurrentPopup] = useState<any>(defaultPopup);

    const handleLogout = async () => {
        await fetch('/api/admin/login', { method: 'DELETE' });
        router.refresh();
    };

    const deleteNotice = async (id: number) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        await fetch(`/api/notices/${id}`, { method: 'DELETE' });
        setNotices(notices.filter(n => n.id !== id));
    };

    const deletePopup = async (id: number) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        await fetch(`/api/admin/popups/${id}`, { method: 'DELETE' });
        setPopups(popups.filter(p => p.id !== id));
    };

    const savePopup = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const bodyData = {
                ...currentPopup,
                startDate: new Date(currentPopup.startDate).toISOString(),
                endDate: new Date(currentPopup.endDate).toISOString(),
            };
            
            if (currentPopup.id === 0) {
                const res = await fetch('/api/admin/popups', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodyData)
                });
                const newPopup = await res.json();
                setPopups([newPopup, ...popups]);
            } else {
                const res = await fetch(`/api/admin/popups/${currentPopup.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodyData)
                });
                const updated = await res.json();
                setPopups(popups.map((p: any) => p.id === updated.id ? updated : p));
            }
            setIsEditingPopup(false);
            setCurrentPopup(defaultPopup);
        } catch {
            alert("팝업 저장 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
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
                    className={`pb-4 px-4 font-bold text-lg border-b-4 transition-colors ${activeTab === 'popups' ? 'border-brand-teal text-brand-blue' : 'border-transparent text-gray-400 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('popups')}
                >
                    홈페이지 팝업 관리 ({popups.length})
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


            {activeTab === 'popups' && (
                <div className="animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800">웹사이트 팝업 관리</h3>
                        <button
                            onClick={() => { setCurrentPopup(defaultPopup); setIsEditingPopup(!isEditingPopup); }}
                            className={`text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm ${isEditingPopup ? 'bg-gray-500 hover:bg-gray-600' : 'bg-brand-blue hover:bg-blue-800'}`}
                        >
                            {isEditingPopup ? '작성 취소' : '+ 새 팝업 등록'}
                        </button>
                    </div>

                    {isEditingPopup && (
                        <form onSubmit={savePopup} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
                            <h4 className="text-xl font-bold mb-6 text-brand-blue">{currentPopup.id === 0 ? '메인 팝업 작성' : '메인 팝업 수정'}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">관리용 제목</label>
                                    <input
                                        type="text" required value={currentPopup.title} onChange={e => setCurrentPopup({ ...currentPopup, title: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                                        placeholder="이벤트 팝업"
                                    />
                                </div>
                                <div className="flex gap-4 items-end">
                                    <div className="flex-1">
                                        <label className="block text-sm font-semibold mb-2 text-gray-700">타입 (IMAGE / HTML)</label>
                                        <select
                                            value={currentPopup.type} onChange={e => setCurrentPopup({ ...currentPopup, type: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal outline-none transition-all"
                                        >
                                            <option value="HTML">입력창 텍스트/HTML</option>
                                            <option value="IMAGE">이미지 주소(URL) 입력</option>
                                        </select>
                                    </div>
                                    <div className="flex-1 flex items-center h-12 gap-2">
                                        <input
                                            type="checkbox" id="isActive" checked={currentPopup.isActive} onChange={e => setCurrentPopup({ ...currentPopup, isActive: e.target.checked })}
                                            className="w-5 h-5 text-brand-teal rounded"
                                        />
                                        <label htmlFor="isActive" className="font-semibold text-gray-700 cursor-pointer">팝업 사용하기</label>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">노출 시작 일자</label>
                                    <input
                                        type="datetime-local" required value={new Date(new Date(currentPopup.startDate).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)} onChange={e => setCurrentPopup({ ...currentPopup, startDate: new Date(e.target.value) })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">노출 종료 일자</label>
                                    <input
                                        type="datetime-local" required value={new Date(new Date(currentPopup.endDate).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)} onChange={e => setCurrentPopup({ ...currentPopup, endDate: new Date(e.target.value) })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-5">
                                <label className="block text-sm font-semibold mb-2 text-gray-700">팝업 내용 ({currentPopup.type === 'IMAGE' ? '이미지 URL' : 'HTML 등 텍스트 내용'})</label>
                                <textarea
                                    required rows={5} value={currentPopup.content} onChange={e => setCurrentPopup({ ...currentPopup, content: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-teal outline-none text-sm"
                                    placeholder={currentPopup.type === 'IMAGE' ? 'https://example.com/popup.png (이미지 절대경로 주소 입력)' : '<b>안녕하세요,</b>\n텍스트나 HTML 태그를 입력할 수 있습니다.'}
                                />
                            </div>

                            {currentPopup.type === 'IMAGE' && (
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold mb-2 text-gray-700">클릭 시 이동할 링크 URL (있을 경우만 작성)</label>
                                    <input
                                        type="text" value={currentPopup.linkUrl || ''} onChange={e => setCurrentPopup({ ...currentPopup, linkUrl: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
                                        placeholder="https://elipartners.com"
                                    />
                                </div>
                            )}

                            <div className="flex justify-end gap-3 mt-4">
                                <button type="button" onClick={() => setIsEditingPopup(false)} className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">취소</button>
                                <button type="submit" disabled={isLoading} className="px-8 py-3 bg-brand-teal text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50">
                                    {isLoading ? '저장 중...' : '발행 및 저장하기'}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                         <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="p-4 font-semibold text-gray-600 w-16 text-center">ID</th>
                                    <th className="p-4 font-semibold text-gray-600 w-24 text-center">사용여부</th>
                                    <th className="p-4 font-semibold text-gray-600">제목</th>
                                    <th className="p-4 font-semibold text-gray-600 w-64 text-center">적용 기간</th>
                                    <th className="p-4 font-semibold text-gray-600 w-32 text-center">관리</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {popups.length === 0 ? (
                                    <tr><td colSpan={5} className="p-8 text-center text-gray-500 font-medium">등록된 팝업이 없습니다.</td></tr>
                                ) : (
                                    popups.map((popup: any) => (
                                        <tr key={popup.id} className="hover:bg-blue-50/50">
                                            <td className="p-4 text-center text-gray-500 font-mono text-sm">{popup.id}</td>
                                            <td className="p-4 text-center">
                                                <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${popup.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                                    {popup.isActive ? '사용 중' : '중지됨'}
                                                </span>
                                            </td>
                                            <td className="p-4 font-bold text-gray-800">{popup.title}</td>
                                            <td className="p-4 text-center text-xs text-gray-500">
                                                {new Date(popup.startDate).toLocaleDateString()} ~ {new Date(popup.endDate).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 text-center space-x-3">
                                                <button onClick={() => { setCurrentPopup(popup); setIsEditingPopup(true); }} className="text-brand-teal font-medium hover:underline text-sm px-2 py-1">수정</button>
                                                <button onClick={() => deletePopup(popup.id)} className="text-red-500 font-medium hover:underline text-sm px-2 py-1">삭제</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
