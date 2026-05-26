import styles from './MainPage.module.scss'
import MainHeader from '@/Widgets/MainHeader/ui/MainHeader.tsx';
import Button from '@/Shared/ui/Button/ui/Button.tsx';
export default function MainPage() {
  return (
    <div className={styles.mainPage}>
      <MainHeader />
      <div className={styles.mainPage__hero}>
        <img src={'/images/hero-img.svg'} alt={'Kanban'}/>
        <div className={styles.mainPage__heroInfo}>
          <h1 className={styles.mainPage__heroInfoTitle}>Все задачи - в одном месте!</h1>
          <p className={styles.mainPage__heroInfoDescription}>Создавайте доски, ставьте задачи, отслеживайте прогресс - всё, что нужно для продуктивной работы</p>
          <Button variant={'secondary'}>
            Начать работу
          </Button>
        </div>
      </div>
    </div>
  );
}