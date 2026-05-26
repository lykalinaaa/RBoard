import styles from './MainHeader.module.scss';
import Button from '@/Shared/ui/Button/ui/Button.tsx';

export default function MainHeader() {

  return (
    <div className={styles.mainMenu}>
      <div className={styles.mainMenu__logoWrapper}>
        <img src={'/images/logo.svg'} alt={'R'} className={styles.mainMenu__logo} />
        <Button variant="primary">
          О проекте
        </Button>
       </div>
      <Button variant="border">
        Личный кабинет
      </Button>
    </div>
  );
}