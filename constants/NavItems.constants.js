import ForumIcon from '@material-ui/icons/Forum';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BookIcon from '@material-ui/icons/Book';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const navItems = [
    {
        name: 'Home',
        path: '/',
        icon: <LocalMallIcon />
    },
    {
        name: 'Shopping Cart',
        path: '/shopping-cart',
        icon: <ShoppingCartRoundedIcon />
    },
    {
        name: 'Profile',
        path: '/profile',
        icon: <AccountCircleIcon />
    },
    {
        name: 'Contact Us',
        path: '/contact',
        icon: <ForumIcon />
    },
    {
        name: 'About Us',
        path: '/about',
        icon: <ApartmentIcon />
    },
    {
        name: 'Policy',
        path: '/policy',
        icon: <BookIcon />
    }
];