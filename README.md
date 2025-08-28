# Next.js Supabase Starter

[![CI](https://github.com/jahzlariosa/ns-nextjs-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jahzlariosa/ns-nextjs-starter/actions/workflows/ci.yml)

A modern, production-ready [Next.js](https://nextjs.org) starter template with Supabase integration, featuring a complete authentication system and developer experience optimizations.

## 🚀 Quick Start

Create a new project using this template:

```bash
npx create-next-app my-app -e https://github.com/jahzlariosa/ns-nextjs-starter
cd my-app
```

## ✨ Features

- **Next.js 15** with Turbopack for blazing-fast development
- **Supabase SSR** for seamless authentication and database management
- **shadcn/ui** for beautiful, accessible UI components
- **Tailwind CSS** for utility-first styling
- **TypeScript** for enhanced developer experience and type safety
- **ESLint & Prettier** for consistent code quality

### 🔐 Authentication System

Complete authentication solution out-of-the-box:

- **User Registration & Login** with email/password
- **Password Reset** flow with email verification
- **Email Confirmation** for new accounts
- **Password Strength Indicator** for better UX
- **Real-time Username Availability Check**
- **Toast Notifications** using Sonner for user feedback

## 📖 Documentation

- [Authentication Guide](./docs/authentication.md) - Detailed authentication implementation
- [Gemini Standards](GEMINI.md) - Development standards and practices

## 🛠 Setup Instructions

### 1. Environment Setup

```bash
# Clone the repository
git clone https://github.com/jahzlariosa/ns-nextjs-starter.git
cd ns-nextjs-starter

# Install dependencies
npm install
```

### 2. Supabase Configuration

1. **Create Project**: Visit [supabase.com](https://supabase.com) and create a new project
2. **Database Setup**: 
   - Navigate to **SQL Editor** in your project dashboard
   - Copy and execute the contents of `database/initial-schema.sql`
3. **Get Credentials**: 
   - Go to **Settings** → **API** in your Supabase dashboard
   - Copy your **Project URL** and **anon/public key**

### 3. Environment Variables

```bash
# Rename the example file
cp .env.example .env.local
```

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### 4. Development

```bash
# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy**: Push your code to GitHub and connect it to [Vercel](https://vercel.com)
2. **Environment Variables**: Add your environment variables in the Vercel dashboard
3. **Domain**: Configure your custom domain (optional)

For detailed deployment instructions, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Platforms

This template works with any platform that supports Node.js applications:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. Make sure to:

1. Follow the existing code style
2. Add tests for new features
3. Update documentation as needed
4. Follow the [Gemini Standards](GEMINI.md)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](./docs/)
2. Search [existing issues](https://github.com/jahzlariosa/ns-nextjs-starter/issues)
3. Create a [new issue](https://github.com/jahzlariosa/ns-nextjs-starter/issues/new) if needed

---

Built with ❤️ using Next.js and Supabase