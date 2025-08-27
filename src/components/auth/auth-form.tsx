'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  LoginSchema,
  SignupSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from '@/lib/schema';
import { PasswordInput } from './password-input';
import { PasswordStrength } from './password-strength';
import { login, signup, forgotPassword, resetPassword, checkUsernameAvailability } from '@/app/auth/actions';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDebounce } from '@/hooks/use-debounce';
import { toast } from 'sonner';

interface AuthFormProps {
  type: 'login' | 'signup' | 'forgot-password' | 'reset-password';
}

export function AuthForm({ type }: AuthFormProps) {
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null);

  const formSchema =
    type === 'login'
      ? LoginSchema
      : type === 'signup'
      ? SignupSchema
      : type === 'forgot-password'
      ? ForgotPasswordSchema
      : ResetPasswordSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:
      type === 'login'
        ? { email: '', password: '' }
        : type === 'signup'
        ? {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }
        : type === 'forgot-password'
        ? { email: '' }
        : { password: '', confirmPassword: '' },
  } as any); // TODO: Fix this type casting

  const password = form.watch('password');
  const username = type === 'signup' ? form.watch('username' as any) : undefined; // TODO: Fix this type casting
  const debouncedUsername = useDebounce(username, 500);

  useEffect(() => {
    if (type === 'signup' && debouncedUsername && debouncedUsername.length >= 3) {
      setIsCheckingUsername(true);
      checkUsernameAvailability(debouncedUsername).then(result => {
        setIsCheckingUsername(false);
        if (result?.isAvailable) {
          setIsUsernameAvailable(true);
          form.clearErrors('username' as any); // TODO: Fix this type casting
        } else {
          setIsUsernameAvailable(false);
          form.setError('username' as any, { type: 'manual', message: 'Username is already taken' }); // TODO: Fix this type casting
        }
      });
    }
  }, [debouncedUsername, type, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    let result;
    if (type === 'login') {
      result = await login(values as z.infer<typeof LoginSchema>);
    } else if (type === 'signup') {
      if (!isUsernameAvailable) {
        form.setError('username' as any, { type: 'manual', message: 'Username is already taken' }); // TODO: Fix this type casting
        return;
      }
      result = await signup(values as z.infer<typeof SignupSchema>);
    } else if (type === 'forgot-password') {
      result = await forgotPassword(values as z.infer<typeof ForgotPasswordSchema>);
    } else {
      result = await resetPassword(values as z.infer<typeof ResetPasswordSchema>);
    }

    if (result && 'error' in result && result.error) {
      toast.error(result.error);
    } else if (result && 'message' in result && result.message) {
      toast.success(result.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {type === 'signup' && (
          <>
            <FormField
              control={form.control}
              name={"firstName" as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"lastName" as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"username" as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                  {isCheckingUsername && <FormDescription>Checking...</FormDescription>}
                  {isUsernameAvailable === true && debouncedUsername && (
                    <FormDescription className="text-green-500">Username is available</FormDescription>
                  )}
                </FormItem>
              )}
            />
          </>
        )}
        {type !== 'reset-password' && (
          <FormField
            control={form.control}
            name={"email" as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {(type === 'login' || type === 'signup' || type === 'reset-password') && (
          <FormField
            control={form.control}
            name={"password" as any}
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel>Password</FormLabel>
                  {type === 'login' && (
                    <Link href="/forgot-password">
                      <p className="text-sm text-blue-500 hover:underline">
                        Forgot Password?
                      </p>
                    </Link>
                  )}
                </div>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {(type === 'signup' || type === 'reset-password') && (
          <>
            <FormField
              control={form.control}
              name={"confirmPassword" as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <PasswordStrength password={password} />
          </>
        )}
        <Button type="submit" className="w-full">
          {type === 'login'
            ? 'Login'
            : type === 'signup'
            ? 'Sign Up'
            : type === 'forgot-password'
            ? 'Send Reset Link'
            : 'Reset Password'}
        </Button>
      </form>
    </Form>
  );
}
