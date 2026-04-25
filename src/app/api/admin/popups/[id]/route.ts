import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function PUT(request: Request, context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

        const body = await request.json();
        const popup = await prisma.popup.update({
            where: { id },
            data: {
                title: body.title,
                type: body.type,
                content: body.content,
                linkUrl: body.linkUrl !== undefined ? body.linkUrl : undefined,
                startDate: body.startDate ? new Date(body.startDate) : undefined,
                endDate: body.endDate ? new Date(body.endDate) : undefined,
                isActive: body.isActive,
            }
        });
        return NextResponse.json(popup);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update popup' }, { status: 500 });
    }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
    try {
        const id = parseInt(context.params.id);
        if (isNaN(id)) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

        await prisma.popup.delete({ where: { id } });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete popup' }, { status: 500 });
    }
}
