import styles from './Header.module.scss';
import Button from '@/Shared/ui/Button/ui/Button.tsx';

export default function Header() {

    return (
        <div className={styles.menu}>
            <div className={styles.menu__logoWrapper}>
                <img src={'/images/logo.svg'} alt={'R'} className={styles.menu__logo} />
                <Button variant="primary" className={styles.menu__project}>
                    На главную
                </Button>
            </div>
            <Button variant="border">
                Новая задача
            </Button>
        </div>
    );
}