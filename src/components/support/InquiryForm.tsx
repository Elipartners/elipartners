'use client';

import { useState } from 'react';

export default function InquiryForm() {
    const [formData, setFormData] = useState({ name: '', email: '', content: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || '접수 중 오류가 발생했습니다.');
            }

            setStatus('success');

            // Trigger local email client
            const mailtoLink = `mailto:eli1407@elipartners.co.kr?subject=${encodeURIComponent(`[홈페이지 문의] ${formData.name}님의 문의입니다.`)}&body=${encodeURIComponent(`이름/담당자명: ${formData.name}\n연락처/답변 이메일: ${formData.email}\n\n문의 내용:\n${formData.content}`)}`;
            window.location.href = mailtoLink;

            setFormData({ name: '', email: '', content: '' });
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-teal-50 text-teal-800 p-8 rounded-xl border border-teal-100 text-center animate-fade-in">
                <svg className="w-16 h-16 text-teal-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-lg font-bold mb-2">문의가 성공적으로 접수되었습니다.</h3>
                <p className="text-sm">담당자가 빠른 시일 내에 이메일로 답변 드리겠습니다.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 bg-white text-teal-600 font-medium rounded-full border border-teal-200 hover:bg-teal-50 transition-colors"
                >
                    새로운 문의 작성하기
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-100">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름/담당자명</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none"
                        placeholder="홍길동"
                        disabled={status === 'submitting'}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">답변받으실 이메일</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none"
                        placeholder="example@domain.com"
                        disabled={status === 'submitting'}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                <textarea
                    id="content"
                    name="content"
                    required
                    rows={5}
                    value={formData.content}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none resize-none"
                    placeholder="상담을 원하시는 상세 내용을 기재해 주세요."
                    disabled={status === 'submitting'}
                />
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${status === 'submitting'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-brand-blue hover:bg-blue-800 hover:shadow-lg focus:ring-4 focus:ring-brand-blue/30'
                    }`}
            >
                {status === 'submitting' ? '접수 중...' : '문의 접수하기'}
            </button>
        </form>
    );
}
