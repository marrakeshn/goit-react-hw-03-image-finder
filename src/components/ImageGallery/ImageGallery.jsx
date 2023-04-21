import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onToggleModal, onClickImg }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          onClickImg={onClickImg}
          URL={webformatURL}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClickImg: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleModal: PropTypes.func.isRequired,
};