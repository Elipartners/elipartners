import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await context.params;
        const id = parseInt(paramId, 10);
        const inquiry = await prisma.inquiry.findUnique({
            where: { id }
        });

        if (!inquiry) {
            return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 });
        }
        return NextResponse.json(inquiry);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch inquiry' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id: paramId } = await context.params;
        const id = parseInt(paramId, 10);
        await prisma.inquiry.delete({
            where: { id }
        });

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete inquiry' }, { status: 500 });
    }
}
