'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Loading from '@/components/Loading';

export default function Home() {
  const { user, isAuthLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthLoading) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/auth');
      }
    }
  }, [user, isAuthLoading, router]);

  if (isAuthLoading) {
    return <Loading></Loading>;
  }

  return null;
}