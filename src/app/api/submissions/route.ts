import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Helper function to check authentication
function isAuthenticated(request: NextRequest): boolean {
  const authToken = request.cookies.get('auth-token')?.value;
  return authToken === 'authenticated';
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized access' },
        { status: 401 }
      );
    }

    // Fetch all contact submissions from database
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc', // Most recent first
      },
    });

    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length,
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
