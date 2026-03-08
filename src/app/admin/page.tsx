import { cookies } from 'next/headers';
import AdminDashboard from '../../components/admin/AdminDashboard';
import LoginForm from '../../components/admin/LoginForm';
import prisma from '../../lib/prisma';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: '관리자 페이지 | 주식회사 엘리파트너스',
    description: '엘리파트너스 통합 관리 시스템',
};

export default async function AdminPage() {
    const cookieStore = await cookies();
    const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

    if (!isAuthenticated) {
        return (
            <div className="flex-1 w-full bg-gray-50 pb-20">
                <div className="bg-brand-blue py-12 text-white text-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Portal</h1>
                </div>
                <LoginForm />
            </div>
        );
    }

    // Fetch data for the dashboard
    const notices = await prisma.notice.findMany({ orderBy: { createdAt: 'desc' } });
    const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: 'desc' } });

    return (
        <div className="flex-1 w-full bg-gray-50 pb-20">
            <div className="bg-brand-blue py-10 text-white text-center">
                <h1 className="text-3xl font-bold">인트라넷 관리자 시스템</h1>
            </div>
            <AdminDashboard initialNotices={notices} initialInquiries={inquiries} />
        </div>
    );
}
