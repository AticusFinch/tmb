"use client";

import styles from "./navbar.module.css";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

const DownloadNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`${styles.navbarContainer} fixed top-0 left-0 right-0 z-10 w-full`}
    >
      <div className={`${styles.downloadNav}  w-full`}>
        <div
          className={`${styles.downloadNavContent} w-2/4 mx-auto py-1.5 flex items-end gap-1.5`}
        >
          <h4 className={`${styles.downloadNavText} flex items-center gap-1.5`}>
            <SlMenu />
            <span>Transfeministička Platforma br. 6</span>
          </h4>
          <Link href="/download" className={styles.downloadNavLink}>
            download
          </Link>
        </div>
      </div>
      <div
        className={`${styles.navbarContent} w-4/5 mx-auto py-5 flex justify-between items-center`}
      >
        <div className={styles.navbarContentLeft}>
          <div className={styles.navbarLogo}>
            <Image src="/logo/logo.png" alt="Logo" width={694} height={312} />
          </div>
          <div className={styles.navbarLogoMobile}>
            <Image src="/logo/mobile.png" alt="Logo" width={157} height={156} />
          </div>
        </div>
        <div className={styles.navbarContentRight}>
          <ul
            className={`${styles.navbarLinks} flex items-center lg:gap-2 2xl:gap-3.5`}
          >
            <li className={styles.navbarLink}>
              <Link href="/lol">POČETNA</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">TRANSFEMINISTIČKA PLATFORMA</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">VIJESTI</Link>
            </li>
            <li
              className={styles.navbarLink}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link href="/">PROMJENA DOKUMENATA</Link>
              <ul
                className={`${styles.navbarDropdown} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              >
                <li className={styles.navbarDropdownItem}>
                  <Link href="/">Bosna i Hercegovina</Link>
                </li>
                <li className={styles.navbarDropdownItem}>
                  <Link href="/">Crna Gora</Link>
                </li>
                <li className={styles.navbarDropdownItem}>
                  <Link href="/">Hrvatska</Link>
                </li>
                <li className={styles.navbarDropdownItem}>
                  <Link href="/">Srbija</Link>
                </li>
              </ul>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">ZDRAVSTVO</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">PODRŠKA</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">UČIONICA</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">TMBLOG</Link>
            </li>
            <li className={styles.navbarLink}>
              <Link href="/">DOGAĐAJI</Link>
            </li>
          </ul>
          <div className={styles.navbarMobileHamburger}>
            <SlMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadNav;
