import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemText, IconButton, Paper, InputBase, Popover, Divider, Typography } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import styles from './styles/ProductSearchInput.module.scss';

function ProductSearchInput(props) {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const suggestionOpen = Boolean(anchorEl);
    const id = suggestionOpen ? 'product-search-popover' : undefined;

    const handleChange = (event) => {
        setSearchText(event.target.value);
        if (searchText.trim().length > 3) {
            setSearchResults([]);
            let dummy = [];
            for (let i = 0; i < 10; i++) {
                dummy.push({ description: `${searchText} ${i}`, category: `${searchText} ${i}` });
            }
            setSearchResults(dummy);
            setAnchorEl(event.currentTarget);
        } else {
            setSearchResults([]);
            setAnchorEl(null);
        }
    };

    const handleSuggestionClose = () => {
        setAnchorEl(null);
    };

    const onSearchItemSelect = () => {
        router.push('/product/search?search=test');
    }

    return (
        <>
            <Paper component="form" className={styles.searchInputContainer}>
                {props.children}
                <InputBase
                    aria-describedby={id}
                    onChange={handleChange}
                    placeholder="Search Surplusss Store"
                    inputProps={{ 'aria-label': 'search surplus store' }}
                    className={styles.searchInput}
                />
                <IconButton type="submit" aria-label="search">
                    <SearchRoundedIcon />
                </IconButton>
            </Paper>
            <Popover id={id} open={suggestionOpen} anchorEl={anchorEl} onClose={handleSuggestionClose}
                disableAutoFocus={true} disableEnforceFocus={true}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <List className={styles.suggestionsList}>
                    {searchResults.map((item, index) => (
                        <>
                            <ListItem key={index} className={styles.suggestionsListItem} onClick={onSearchItemSelect}>
                                <ListItemText primary={item.description} secondary={item.category} />
                            </ListItem>
                            {index < (searchResults.length - 1) && <Divider className={styles.suggestionsListItem} />}
                        </>
                    ))}
                </List>
            </Popover>
        </>
    )
}

export default ProductSearchInput
