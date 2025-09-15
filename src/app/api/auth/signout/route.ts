import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Signed out successfully',
    });

    // Clear the auth cookie
    response.cookies.delete('auth-token');

    return response;
  } catch (error) {
    console.error('Sign out error:', error);
    return NextResponse.json(
      { success: false, message: 'Sign out failed' },
      { status: 500 }
    );
  }
}
