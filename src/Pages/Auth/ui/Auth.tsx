import styles from './Auth.module.scss'
import {useEffect} from "react";

export default function Auth() {
  useEffect(() => {
    document.title = "RBoard | Авторизация";

    return () => {
      document.title = "RBoard - Reactивная доска";
    };
  }, []);

  return (
    <div className={styles.auth}>
      <div className={styles.auth__form}>

      </div>
    </div>
  );
}