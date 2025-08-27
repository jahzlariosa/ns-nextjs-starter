# Next.js Supabase Starter

[![CI](https://github.com/jahzlariosa/ns-nextjs-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jahzlariosa/ns-nextjs-starter/actions/workflows/ci.yml)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), pre-configured with Supabase for authentication and database management.

## Features

*   **Next.js 15** with Turbopack
*   **Supabase SSR** for authentication and data
*   **shadcn/ui** for UI components
*   **Tailwind CSS** for styling
*   **TypeScript** for type safety
*   **ESLint** for linting

## Authentication

This starter kit includes a complete authentication system with the following features:

*   Login / Signup
*   Forgot / Reset Password
*   Email Confirmation
*   Password Strength Indicator
*   Real-time Username Availability Check
*   Toast Notifications with `sonner`

For more details, see the [Authentication Documentation](./docs/authentication.md).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jahzlariosa/ns-nextjs-starter.git
cd ns-nextjs-starter
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your Supabase project

1.  Go to [supabase.com](https://supabase.com) and create a new project.
2.  Navigate to the **SQL Editor** in your Supabase project dashboard.
3.  Copy the contents of `database/initial-schema.sql` and run it to set up the necessary tables and functions.

### 4. Configure environment variables

1.  Rename the `.env.example` file to `.env.local`.
2.  Find your project's **API URL** and **anon key** in your Supabase project's **API Settings**.
3.  Update the `.env.local` file with your Supabase credentials:

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_ANON_KEY
    ```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
