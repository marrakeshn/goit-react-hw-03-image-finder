import styles from './Loader.module.css';
import SyncLoader from 'react-spinners/SyncLoader';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <SyncLoader size={20} speedMultiplier={0.5} color="#000afc" />
    </div>
  );
};