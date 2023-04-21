import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ onLoadMore, loading }) => {
  return (
    <div className={styles.thumb}>
      {!loading && (
        <button onClick={onLoadMore} className={styles.button} type="button">
          Load More
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};