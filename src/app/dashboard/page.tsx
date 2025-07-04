'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import styles from './dashboard.module.scss';
import Loading from '@/components/Loading';

export default function DashboardPage() {
    const { user, logout, isAuthLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthLoading && !user) {
            router.push('/auth');
        }
    }, [user, isAuthLoading, router]);

    if (isAuthLoading) {
        return <Loading></Loading>;
    }

    if (!user) return null;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>خوش آمدید، {user.name.first} {user.name.last}</h1>
                <button onClick={logout} className={styles.logoutButton}>
                    خروج
                </button>
            </div>
        </div>
    );
}