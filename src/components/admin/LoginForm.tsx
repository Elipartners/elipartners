'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            if (res.ok) {
                router.refresh(); // This will trigger server to re-render AdminPage
            } else {
                setError('비밀번호가 일치하지 않습니다.');
                setIsLoading(false);
            }
        } catch (err) {
            setError('로그인 중 문제가 발생했습니다.');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[400px] flex items-center justify-center px-4">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md transform transition-all hover:-translate-y-1">
                <div className="text-center mb-8">
                    <svg className="w-16 h-16 mx-auto text-brand-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-gray-900">관리자 인증</h1>
                    <p className="text-sm text-gray-500 mt-2">시스템에 접근하려면 비밀번호를 입력해주세요.</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">접속 비밀번호</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-brand-teal/20 focus:border-brand-teal outline-none transition-all shadow-sm"
                            placeholder="••••••••"
                            disabled={isLoading}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
                    <button
                        type="submit"
                        disabled={isLoading || password.length === 0}
                        className={`w-full py-4 bg-brand-blue text-white rounded-xl font-bold transition-all shadow-md mt-4 ${isLoading || password.length === 0 ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800 hover:shadow-lg'}`}
                    >
                        {isLoading ? '인증 확인 중...' : '시스템 로그인'}
                    </button>
                </form>
            </div>
        </div>
    );
}
