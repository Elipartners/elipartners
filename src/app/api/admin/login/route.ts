import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        // Using a designated default admin password
        if (password === 'admin123!') {
            const cookieStore = await cookies();
            cookieStore.set('admin_auth', 'true', { httpOnly: true, path: '/' });
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: '비밀번호가 일치하지 않습니다.' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_auth');
    return NextResponse.json({ success: true });
}
