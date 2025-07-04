import styles from './button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
}