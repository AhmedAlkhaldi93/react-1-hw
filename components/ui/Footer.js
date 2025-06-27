"use client"

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link';
import SMItem from '../socialMediaItem/SocialMediaItem';

export const Footer = () => {
  const path = usePathname().split('?')[0];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul className={styles.footerList}>
          <li> <Link href="/about_us">About us</Link> </li>
          <li> <Link href="/destination">Destination</Link> </li>
          <li> <Link href="/nasa_collaboration">Nasa collaboration</Link> </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SMItem
            url={"https://facebook.com"}
            title={"Facebook"}
            icon={"Facebook_Logo_2023.png"}
          />

          <SMItem
            url={"https://instagram.com"}
            title={"Instagram"}
            icon={"Instagram-Icon.png"}
          />

          <SMItem
            url={"https://tiktok.com"}
            title={"Tiktok"}
            icon={"tiktok-icon-free-png.webp"}
          />

          <SMItem
            url={"https://linkedin.com"}
            title={"linkedin"}
            icon={"linkedin-icon-logo-png-transparent.png"}
          />

          <SMItem
            url={"https://google.com"}
            title={"On the streets at night"}
            icon={"Logo-google-icon-PNG.png"}
          />
        </ul>
      </div>
    </footer>
  );
}
