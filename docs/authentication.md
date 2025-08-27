# Authentication

This document details the authentication system, which is built using Supabase SSR and `shadcn/ui`.

## Authentication Flow

The authentication flow is designed to be secure and user-friendly, covering all standard user account management features.

```mermaid
graph TD
    subgraph Unauthenticated
        A[/login] --> B{Submit Credentials};
        B -- Valid --> C[/];
        B -- Invalid --> D[Show Error];
        A --> E[/signup];
        E --> F{Submit Info};
        F -- Success --> G[/login?message=...];
        F -- Invalid --> H[Show Error];
        A --> I[/forgot-password];
        I --> J{Submit Email};
        J -- Success --> K[Show Success Message];
    end

    subgraph Authenticated
        C --> L[User Dashboard];
        L --> M{Logout};
        M --> A;
    end
```

### Routes

*   `/login`: The main sign-in page.
*   `/signup`: The user registration page.
*   `/forgot-password`: A page for users to request a password reset link.
*   `/reset-password`: A page where users can set a new password after clicking the reset link.
*   `/auth/callback`: Handles OAuth callbacks.
*   `/auth/confirm`: Handles the email confirmation link.
*   `/error`: Displays authentication-related errors.

## Components

The authentication UI is built with reusable components from `shadcn/ui`.

*   `AuthForm`: A versatile form component that handles login, signup, forgot password, and reset password states.
*   `PasswordInput`: A reusable password input with a show/hide toggle.
*   `PasswordStrength`: A visual indicator for password strength.

## Validation

All forms are validated using `zod` and `react-hook-form`.

*   **Client-Side**: Provides instant feedback on errors like invalid email format or mismatched passwords.
*   **Server-Side**: The `handle_new_user` function in the database ensures that `first_name` and `last_name` are capitalized.
*   **Username Availability**: The signup form includes a real-time, debounced check to see if a username is already taken.

## Notifications

The application uses `sonner` to display toast notifications for success and error messages.
