import React from 'react';
import { Chip, Divider, LinearProgress, Typography } from '@material-ui/core';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import styles from './styles/ProductReview.module.scss';

const resp = {
    overallRating: 4.4,
    ratingCount: 127,
    reviewCount: 34,
    ratings: [
        { rating: 5, count: 91 },
        { rating: 4, count: 20 },
        { rating: 3, count: 1 },
        { rating: 2, count: 5 },
        { rating: 1, count: 13 }
    ],
    reviews: [
        {
            rating: 5,
            title: 'Test 1',
            description: 'Long description 1111111111111111111111111111111111111111111111111111111111111111111111',
            author: 'test author',
            reviewDate: '12/12/2021'
        },
        {
            rating: 2,
            title: 'Test 2',
            description: 'Long description',
            author: 'test author',
            reviewDate: '12/12/2021'
        }
    ]
}

function ProductReview() {
    return (
        <div className={styles.productReviewContianer}>
            <Typography variant="h6">
                {'Ratings & Reviews'}
            </Typography>
            <div className={styles.productRatings}>
                <div className={styles.productRatingContainer}>
                    <p className={styles.productRating}>{resp.overallRating}<span><StarRoundedIcon /></span></p>
                    <p className={styles.productRatingsCount}>{`${resp.ratingCount} Ratings & ${resp.reviewCount} Reviews`}</p>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className={styles.productRatingBarContainer}>
                    {resp.ratings.map((item, i) => (
                        <div className={styles.ratingItem} key={i}>
                            <p className={styles.productRating}>{item.rating}</p>
                            <span><StarRoundedIcon /></span>
                            <LinearProgress variant="determinate" value={item.count} className={styles.productRatingBar} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.productReviewsListContainer}>
                {resp.reviews.map((item, i) => (
                    <div className={styles.reviewItem} key={i}>
                        <div className={styles.reviewItemHeader}>
                            <Chip icon={<StarRoundedIcon />} label={item.rating} color="primary" style={{ color: 'white', marginRight: '5px' }} />
                            <Typography variant="h6">{item.title}</Typography>
                        </div>
                        <div className={styles.reviewItemHeader}>
                            <Typography variant="subtitle2" style={{ marginRight: '5px' }}>{item.author}</Typography>
                            <p>{'-'}</p>
                            <Typography variant="subtitle1">{item.reviewDate}</Typography>
                        </div>
                        <Typography variant="body" style={{ wordBreak: 'break-all' }}>{item.description}</Typography>
                        {i < (resp.reviews.length - 1) && <Divider style={{ marginTop: '10px' }} />}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductReview
