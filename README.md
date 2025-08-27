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

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
