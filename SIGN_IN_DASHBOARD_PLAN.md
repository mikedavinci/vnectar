# Sign-In & Dashboard Implementation Plan

## Overview
Create a basic authentication system with admin credentials and a dashboard to view contact form submissions.

## Authentication Details
- **Email**: admin@visionnectar.com
- **Password**: Godbless25!
- **Route**: /sign-in

## Database Context
Based on existing setup:
- Using Prisma with PostgreSQL database
- ContactSubmission model exists with fields: id, name, email, company, phone, service, budget, message, createdAt, updatedAt
- Database: PostgreSQL at 174.138.33.86:5432/vnectar

## Implementation Steps

### 1. Sign-In Page (`/sign-in`)
- Create Next.js page at `src/app/sign-in/page.tsx`
- Simple form with email and password fields
- Basic client-side validation
- Submit to API endpoint for authentication

### 2. Authentication API (`/api/auth`)
- Create API route at `src/app/api/auth/route.ts`
- Hardcoded credential check (admin@visionnectar.com / Godbless25!)
- Set session/cookie for authenticated state
- Return success/failure response

### 3. Dashboard Page (`/dashboard`)
- Create protected route at `src/app/dashboard/page.tsx`
- Fetch and display all contact form submissions
- Show submission details in a table/card format
- Include pagination if needed

### 4. Dashboard API (`/api/submissions`)
- Create API route at `src/app/api/submissions/route.ts`
- Fetch all ContactSubmission records from database
- Protect route with authentication check
- Return formatted submission data

### 5. Session Management
- Simple session handling (cookies or localStorage)
- Redirect logic for protected routes
- Sign-out functionality

## UI/UX Considerations
- Clean, professional design matching existing site
- Responsive layout
- Loading states and error handling
- Clear navigation between sign-in and dashboard

## Security Notes
- This is a basic implementation for initial setup
- In production, would need proper password hashing, JWT tokens, etc.
- Currently using hardcoded credentials as requested

## Files to Create/Modify
1. `src/app/sign-in/page.tsx` - Sign-in form
2. `src/app/api/auth/route.ts` - Authentication endpoint
3. `src/app/dashboard/page.tsx` - Dashboard with submissions
4. `src/app/api/submissions/route.ts` - Fetch submissions endpoint
5. Update `src/lib/prisma.ts` if needed for new queries

## Testing Checklist
- [ ] Sign-in with correct credentials works
- [ ] Sign-in with incorrect credentials fails
- [ ] Dashboard displays contact submissions
- [ ] Protected route redirects when not authenticated
- [ ] Data fetching and display works correctly
