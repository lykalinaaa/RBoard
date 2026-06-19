import styles from './ProfileLayout.module.scss'
import {Navigate} from "react-router-dom";
import {useEffect} from "react";

export default function ProfileLayout() {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    document.title = "RBoard | Профиль";

    return () => {
      document.title = "RBoard - Reactивная доска";
    };
  }, []);

  return (
    <div className={styles.profile}>

    </div>
  )
}