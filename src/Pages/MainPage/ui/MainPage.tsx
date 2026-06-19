import styles from './MainPage.module.scss'
import MainHeader from '@/Widgets/MainHeader/ui/MainHeader.tsx';
import Button from '@/Shared/ui/Button/ui/Button.tsx';
import {Link, useNavigate} from "react-router-dom";
export default function MainPage() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
    <div className={styles.mainPage}>
      <MainHeader />
      <div className={styles.mainPage__hero}>
        <img src={'/images/hero-img.svg'} alt={'Kanban'} />
        <div className={styles.mainPage__heroInfo}>
          <h1 className={styles.mainPage__heroInfoTitle}>Все задачи - в одном месте!</h1>
          <p className={styles.mainPage__heroInfoDescription}>Создавайте доски, ставьте задачи, отслеживайте прогресс -
            всё, что нужно для продуктивной работы</p>
          <Link to="/profile" className={styles.linkNoDecor}>
            <Button variant={'secondary'} onClick={goToProfile}>
              Начать работу
            </Button>
          </Link>
        </div>
      </div>
      <section>
        <h2 className={styles.title}>
          Возможности
        </h2>
        <div className={styles.content}>
          <div className={`${styles.oppCard} ${styles.orange}`}>
            <div className={`${styles.oppCard__header} ${styles.oppCard__headerOrange}`}>
              Управление досками
            </div>
            <p>Создавайте неограниченное количество досок для разных проектов. Перетаскивайте карточки, меняйте статусы,
              назначайте ответственных.</p>
          </div>
          <div className={`${styles.oppCard} ${styles.green}`}>
            <div className={`${styles.oppCard__header} ${styles.oppCard__headerGreen}`}>
              Командная работа
            </div>
            <p>Приглашайте коллег на доски, комментируйте задачи и следите за обновлениями в реальном времени.</p>
          </div>
          <div className={`${styles.oppCard} ${styles.purple}`}>
            <div className={`${styles.oppCard__header} ${styles.oppCard__headerPurple}`}>
              Аналитика
            </div>
            <p>Отслеживайте прогресс с помощью графиков и статистики. Какие задачи выполнены, а какие требуют
              внимания?</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className={styles.title}>
          Как работает RBoard?
        </h2>
        <div className={styles.content}>
          <div className={styles.workCard}>
            <div className={styles.workCard__header}>
              Шаг 1
            </div>
            <div className={styles.workCard__content}>
              <p className={styles.workCard__contentTitle}>Регистрация</p>
              <p className={styles.workCard__contentDescription}>Создайте аккаунт</p>
              <p className={styles.workCard__contentCheckbox}><img src={'/images/checkbutton.svg'} alt={'checkbox'} />
              </p>
            </div>
          </div>
          <div className={styles.workCard}>
            <div className={styles.workCard__header}>
              Шаг 2
            </div>
            <div className={styles.workCard__content}>
              <p className={styles.workCard__contentTitle}>Первая доска</p>
              <p className={styles.workCard__contentDescription}>Добавьте задачи, установите дедлайны и приоритеты</p>
              <p className={styles.workCard__contentCheckbox}><img src={'/images/checkbutton.svg'} alt={'checkbox'} />
              </p>
            </div>
          </div>
          <div className={styles.workCard}>
            <div className={styles.workCard__header}>
              Шаг 3
            </div>
            <div className={styles.workCard__content}>
              <p className={styles.workCard__contentTitle}>Работа в команде</p>
              <p className={styles.workCard__contentDescription}>Приглашайте участников и двигайтесь к цели вместе</p>
              <p className={styles.workCard__contentCheckbox}><img src={'/images/checkbutton.svg'} alt={'checkbox'} />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Почему выбирают нас
          </h2>
          <Link to="/profile" className={styles.linkNoDecor}>
            <Button variant={'secondary'} onClick={goToProfile}>
              Стать частью RBoard
            </Button>
          </Link>
        </div>
        <div className={styles.list}>
          <p>
            <img src={'/images/plus.svg'} alt={'+'} />
            <span>Уже 1000+ команд используют наш сервис</span>
          </p>
          <p>
            <img src={'/images/plus.svg'} alt={'+'} />
            <span>Интеграция с Telegram</span>
          </p>
          <p>
            <img src={'/images/plus.svg'} alt={'+'} />
            <span>Open Source</span>
          </p>
        </div>
      </section>
    </div>
      <footer>
        <h2>
          О проекте
        </h2>
        <p>Связь с разработчиком:</p>
        <p>
          <img src={'/images/telegram.svg'} alt={'+'} />
          <span>@loulien</span>
        </p>
        <p>
          <img src={'/images/gmail.svg'} alt={'+'} />
          <span>lykalinz@gmail.com</span>
        </p>
      </footer>
    </div>
  );
}