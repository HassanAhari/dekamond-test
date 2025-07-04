'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import Input from '@/components/Input';
import Button from '@/components/Button';
import styles from './auth.module.scss';

export default function AuthPage() {
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { user, isAuthLoading, login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthLoading && user) {
            router.push('/dashboard');
        }
    }, [user, isAuthLoading, router]);

    if (user || isAuthLoading) return null;

    const validatePhone = (phone: string) => {
        const phoneRegex = /^09[0-9]{9}$/;
        return phoneRegex.test(phone);
    };

    const handleLogin = async () => {
        if (!validatePhone(phone)) {
            setError('لطفاً شماره تلفن معتبر ایران وارد کنید (09xxxxxxxxx)');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
            const data = await response.json();
            const user = data.results[0];
            login({
                name: user.name,
                email: user.email,
            });
        } catch (err) {
            setError('خطا در ارتباط با سرور');
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>ورود</h1>
                <Input
                    value={phone}
                    onChange={setPhone}
                    type='tel'
                    placeholder="(09xxxxxxxxx) شماره تلفن"
                    error={error}
                    direction='ltr'
                    placeholderDirection='rtl'
                />
                <Button onClick={handleLogin} disabled={isLoading}>
                    {isLoading ? 'در حال پردازش...' : 'ورود'}
                </Button>
            </div>
        </div>
    );
}