import Link from 'next/link';
import classNames from 'classnames';
import styles from '../ui/Navbar.module.css';


const NavItem = ({title, link, isActive, index}) => {
    return (
        <li className={classNames(styles.navbarLinks, {[styles.isLinkActive]: isActive,})}>
            <Link href={link}><b>{index}</b> {title}</Link>
        </li>
    )
};

export default NavItem;

