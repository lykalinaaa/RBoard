import styles from './MainHeader.module.scss';
import Button from '@/Shared/ui/Button/ui/Button.tsx';
import {Link, useNavigate} from "react-router-dom";

export default function MainHeader() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className={styles.mainMenu}>
      <div className={styles.mainMenu__logoWrapper}>
        <img src={'/images/logo.svg'} alt={'R'} className={styles.mainMenu__logo} />
        <Button variant="primary" className={styles.mainMenu__project}>
          О проекте
        </Button>
       </div>
      <Link to="/profile" className={styles.linkNoDecor}>
        <Button variant="border" onClick={goToProfile}>
          Профиль
        </Button>
      </Link>
    </div>
  );
}