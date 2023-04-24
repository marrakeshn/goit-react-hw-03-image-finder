import styles from './Loader.module.css';
import SyncLoader from 'react-spinners/SyncLoader';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <SyncLoader size={20} speedMultiplier={0.5} color={'#461646'} className={styles.loader}/>
    </div>
  );
};