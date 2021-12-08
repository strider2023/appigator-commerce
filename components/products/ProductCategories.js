import React from 'react';
import { Avatar } from '@material-ui/core';
import { categories } from '../../services/Products.service';

import styles from './styles/ProductCategories.module.scss';

function ProductCategories() {
    return (
        <div className={styles.productCategoriesContainer}>
            {categories.map((item, i) => (
                <div className={styles.productCategoryItem} key={i}>
                    {item.img.trim().length > 0 ?
                        <img alt={item.name} src={item.img} className={styles.avatarImage}/> :
                        <Avatar className={styles.avatarText}>{item.name.charAt(0).toUpperCase()}</Avatar>}
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductCategories
