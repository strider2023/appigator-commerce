import ForumIcon from '@mui/icons-material/Forum';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BookIcon from '@mui/icons-material/Book';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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