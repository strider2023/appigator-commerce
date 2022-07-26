import React, { useState, useEffect } from 'react';
import { Button, Fade } from '@mui/material';
import { carouselItems } from '../../services/Products.service';

import styles from './styles/ProductsCarousel.module.scss';

function ProductsCarousel(props) {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (currentItem === (carouselItems.length - 1)) {
                setCurrentItem(0);
            } else {
                setCurrentItem(currentItem + 1);
            }
        }, 5000);
    }, [currentItem]);

    return (
        <div className={styles.productCarouselContainer}>
            {
                carouselItems.map((item, i) => {
                    return (currentItem === i) ?
                        (<Fade in={currentItem === i ? true : false} key={i}>
                            <div className={styles.carouselItemContainer}>
                                <img src={item.img} alt={item.name} className={styles.productImage} />
                                <div className={styles.productDescription}>
                                    <h2>{item.name}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Fade>)
                        : null
                })
            }
        </div>
    )
}

export default ProductsCarousel
