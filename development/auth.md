# Authentication System Plan

This document outlines the plan for implementing a comprehensive authentication system using Supabase SSR, Next.js, and `shadcn/ui`.

### 1. Authentication Flow & Routes

A dedicated route group `(auth)` will be created under `src/app/` to house all authentication-related pages.

-   **/login**: The main sign-in page for existing users.
-   **/signup**: The user registration page for new users.
-   **/forgot-password**: A page for users to submit their email to initiate the password reset process.
-   **/reset-password**: A page where users, after clicking the link from the reset email, can enter and confirm their new password.
-   **/auth/callback**: A server-side route to handle OAuth callbacks from Supabase.
-   **/auth/confirm**: A server-side route to handle the confirmation link sent to a user's email upon signup.
-   **/error**: A page to display any authentication-related errors to the user.

The existing middleware in `src/middleware.ts` will be leveraged to protect application routes and redirect unauthenticated users to the `/login` page.

### 2. UI Components & Dependencies

To build a modern and robust user interface, we will use `shadcn/ui` components and add libraries for form management and validation.

#### New Dependencies
The following npm packages will be installed to manage form state and validation:
-   `zod`: For schema-based validation.
-   `react-hook-form`: For efficient and scalable form state management.
-   `@hookform/resolvers`: To connect `react-hook-form` with `zod`.

#### `shadcn/ui` Components
The following components will be installed and used:
-   `Button`
-   `Card` (including CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
-   `Input`
-   `Label`
-   `Form` (a wrapper around `react-hook-form` for `shadcn/ui` styling)
-   `Progress` (for the password strength indicator)

#### New Component Structure
The new authentication components will be organized as follows:

```
src/
├── components/
│   └── auth/
│       ├── auth-form.tsx         # The main form container, handling logic for all auth states (login, signup, etc.)
│       ├── password-input.tsx    # A reusable password input component with a show/hide toggle.
│       └── password-strength.tsx # A visual indicator for password strength.
└── lib/
    └── schema.ts                 # Zod schemas for validating all authentication forms.
```

### 3. Key Features Implementation

-   **Forms & Validation**: All forms will be built with `react-hook-form` and validated against `zod` schemas defined in `src/lib/schema.ts`. This provides immediate, client-side feedback for errors such as invalid email formats, mismatched passwords, or empty required fields.

-   **Additional User Fields**: The signup form will include fields for **Username**, **First Name**, and **Last Name**. This data will be passed to Supabase upon registration and stored in the `profiles` table, linked by the user's ID.

-   **Password View Toggle**: The `PasswordInput` component will include an eye icon (`lucide-react`) that allows users to toggle the visibility of their password, improving usability and reducing input errors.

-   **Password Strength Indicator**: The `PasswordStrength` component will provide real-time feedback on the strength of the user's password as they type. It will use the `Progress` bar to visually represent strength levels (e.g., weak, medium, strong), encouraging the creation of more secure passwords.

-   **Forgot/Reset Password Logic**:
    1.  A user navigates to `/forgot-password` and submits their email address.
    2.  A Server Action is triggered, calling Supabase's `resetPasswordForEmail()` function.
    3.  Supabase sends a secure, one-time password reset link to the user's email.
    4.  The user clicks the link, which directs them to the `/reset-password` page.
    5.  On this page, the user enters and confirms their new password. The backend logic will use Supabase's `updateUser()` function to securely update the user's credentials.
