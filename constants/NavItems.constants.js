import ForumIcon from '@material-ui/icons/Forum';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ApartmentIcon from '@material-ui/icons/Apartment';
import BookIcon from '@material-ui/icons/Book';

export const navItems = [
    {
        name: 'Home',
        path: '/',
        icon: <LocalMallIcon />
    },
    {
        name: 'About Us',
        path: '/about',
        icon: <ApartmentIcon />
    },
    {
        name: 'Contact Us',
        path: '/contact',
        icon: <ForumIcon />
    },
    {
        name: 'Policy',
        path: '/policy',
        icon: <BookIcon />
    }
];