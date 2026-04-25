import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

// Prevent caching to guarantee active popups are fetched accurately
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const now = new Date();
        const activePopups = await prisma.popup.findMany({
            where: {
                isActive: true,
                startDate: { lte: now },
                endDate: { gte: now }
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(activePopups);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch active popups' }, { status: 500 });
    }
}
