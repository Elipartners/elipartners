import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await context.params;
        const id = parseInt(paramId, 10);
        const notice = await prisma.notice.findUnique({
            where: { id }
        });

        if (!notice) {
            return NextResponse.json({ error: 'Notice not found' }, { status: 404 });
        }
        return NextResponse.json(notice);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch notice' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await context.params;
        const id = parseInt(paramId, 10);
        const body = await request.json();
        const { title, content } = body;

        const notice = await prisma.notice.update({
            where: { id },
            data: { title, content }
        });

        return NextResponse.json(notice);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update notice' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await context.params;
        const id = parseInt(paramId, 10);
        await prisma.notice.delete({
            where: { id }
        });

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete notice' }, { status: 500 });
    }
}
