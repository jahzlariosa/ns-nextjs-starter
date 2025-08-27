'use client';

import { Progress } from '@/components/ui/progress';

interface PasswordStrengthProps {
  password?: string;
}

export function PasswordStrength({ password }: PasswordStrengthProps) {
  const getStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return (score / 5) * 100;
  };

  const strength = getStrength();
  const color =
    strength < 40 ? 'bg-red-500' : strength < 80 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div>
      <Progress value={strength} className={color} />
      <p className="text-sm mt-1">
        Password strength: {strength < 40 ? 'Weak' : strength < 80 ? 'Medium' : 'Strong'}
      </p>
    </div>
  );
}
