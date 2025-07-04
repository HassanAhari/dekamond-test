import { HTMLInputTypeAttribute } from 'react';
import styles from './input.module.scss';

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    error?: string;
    placeholderDirection?: 'rtl' | 'ltr';
    direction?: 'rtl' | 'ltr';
}

export default function Input({ value, onChange, type, placeholder, error, placeholderDirection, direction }: InputProps) {
    return (
        <div
            className={styles.inputContainer}
            style={{
                '--direction': direction,
                '--text-align': direction === 'rtl' ? 'right' : 'left',
                '--placeholder-direction': placeholderDirection,
                '--placeholder-text-align': placeholderDirection === 'rtl' ? 'right' : 'left',
            } as React.CSSProperties}
        >
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}