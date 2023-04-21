import styles from './Loader.module.css';
import GridLoader from 'react-spinners/GridLoader';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <GridLoader size={20} speedMultiplier={0.5} color="#000afc" />
    </div>
  );
};