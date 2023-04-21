import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ URL, onToggleModal, onClickImg }) => (
  <li onClick={onToggleModal} className={styles.item}>
    <img onClick={onClickImg} className={styles.image} src={URL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  URL: PropTypes.string.isRequired,
  onClickImg: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};