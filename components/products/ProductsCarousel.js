import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Fade } from '@material-ui/core';
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
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <Button className="CheckButton">
                                    Check it out!
                                </Button>
                            </div>
                        </Fade>)
                        : null
                })
            }
        </div>
    )
}

export default ProductsCarousel
