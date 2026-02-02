
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ dimensions: string[] }> }
) {
    const { dimensions } = await params;
    const [width, height] = dimensions || ['200', '200'];

    // Use placehold.co as a fallback service since we can't generate images natively easily without canvas
    const url = `https://placehold.co/${width}x${height}/png`;

    return NextResponse.redirect(url);
}
