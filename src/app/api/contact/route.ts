import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Save to database
    const contactSubmission = await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company,
        phone: validatedData.phone || null,
        service: validatedData.service,
        budget: validatedData.budget,
        message: validatedData.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: contactSubmission.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
