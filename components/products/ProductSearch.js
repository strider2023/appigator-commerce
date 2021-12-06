import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Paper, InputBase, Popover, Divider, Typography } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import styles from './styles/ProductSearch.module.scss';

function ProductSearch() {
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

    return (
        <>
            <Paper component="form" className={styles.searchInputContainer}>
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
                            <ListItem key={index} className={styles.suggestionsListItem}>
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

export default ProductSearch
