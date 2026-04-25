import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET() {
    try {
        const popups = await prisma.popup.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(popups);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch popups' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const popup = await prisma.popup.create({
            data: {
                title: body.title,
                type: body.type, // 'HTML' or 'IMAGE'
                content: body.content,
                linkUrl: body.linkUrl || null,
                startDate: new Date(body.startDate),
                endDate: new Date(body.endDate),
                isActive: body.isActive ?? true,
            }
        });
        return NextResponse.json(popup);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create popup' }, { status: 500 });
    }
}
