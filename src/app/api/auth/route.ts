import { NextRequest, NextResponse } from 'next/server';

// Hardcoded credentials as requested
const ADMIN_EMAIL = 'admin@visionnectar.com';
const ADMIN_PASSWORD = 'Godbless25!';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate request body
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check credentials
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Create response with success
      const response = NextResponse.json({
        success: true,
        message: 'Authentication successful',
      });

      // Set httpOnly cookie for session management
      response.cookies.set('auth-token', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
