import React, { useState, useEffect } from 'react';
import { categories } from '../../services/Products.service';

import styles from './styles/ProductGallery.module.scss';

function ProductGallery() {
    const [currentSelectedImage, setCurrentSelectedImage] = useState(0);

    useEffect(() => {
        setCurrentSelectedImage(0);
    }, []);

    const handleImageSelection = (e, pos) => {
        setCurrentSelectedImage(pos);
    }

    return (
        <div className={styles.productGalleryContainer}>
            <img alt={categories[currentSelectedImage].name} src={categories[currentSelectedImage].img} className={styles.productImage}/>
            <div className={styles.productGalleryPreviewContainer}>
                {categories.map((item, i) => (
                    <div className={currentSelectedImage === i ? styles.selectedImageThumbnail: styles.imageThumbnail} key={i} onClick={(e) => handleImageSelection(e, i)}>
                        <img alt={item.name} src={item.img} className={styles.previewImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductGallery
