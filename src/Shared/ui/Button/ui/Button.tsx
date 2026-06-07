import styles from './Button.module.scss'

export default function Button({ variant = 'primary', children, onClick, className, }: ButtonProps) {
  return (
    <button
      className={`
        ${styles.button} 
        ${variant === 'primary' && styles.primary}
        ${variant === 'secondary' && styles.secondary}
        ${variant === 'border' && styles.border}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}