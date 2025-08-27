'use server';

import { createClient } from '@/utils/supabase/server';
import { LoginSchema, SignupSchema, ForgotPasswordSchema, ResetPasswordSchema } from '@/lib/schema';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function login(data: z.infer<typeof LoginSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return { error: error.message };
  }
  redirect('/');
}

export async function signup(data: z.infer<typeof SignupSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
        username: data.username,
      },
    },
  });
  if (error) {
    return { error: error.message };
  }
  redirect('/login?message=Check your email to complete the sign-up process.');
}

export async function forgotPassword(data: z.infer<typeof ForgotPasswordSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(data.email);
  if (error) {
    return { error: error.message };
  }
  return { message: 'Check your email for a link to reset your password.' };
}

export async function resetPassword(data: z.infer<typeof ResetPasswordSchema>) {
  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password: data.password });
  if (error) {
    return { error: error.message };
  }
  redirect('/');
}

export async function checkUsernameAvailability(username: string) {
  if (!username || username.length < 3) {
    return;
  }
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found
    return { error: 'Error checking username' };
  }

  if (data) {
    return { isAvailable: false };
  }

  return { isAvailable: true };
}