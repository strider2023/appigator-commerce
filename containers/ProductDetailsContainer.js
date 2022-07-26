import { Container } from '@mui/material';
import React from 'react';
import ProductGallery from '../components/products/ProductGallery';
import ProductDescription from '../components/products/ProductDescription';
import ProductReview from '../components/products/ProductReview';

import styles from './styles/ProductDetailsContainer.module.scss';

function ProductDetailsContainer(props) {
    return (
        <Container maxWidth="lg">
            <ProductGallery />
            <ProductDescription />
            <ProductReview />
        </Container>
    )
}

export default ProductDetailsContainer
