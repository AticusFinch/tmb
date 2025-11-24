import Link from "next/link";
import Container from "./container";
import styles from "./footer.module.css";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div
          className={`${styles.newsletter} flex flex-col items-center justify-center`}
        >
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={694}
            height={312}
            className={styles.footerLogo}
          />
          <div
            className={`${styles.newsletterTextContainer} sm:w-4/5 xl:w-2/3 2xl:w-3/5 mx-auto`}
          >
            <p className={`${styles.newsletterText} text-center`}>
              Želiš da ostaneš u toku s našim pričama, borbama i pobjedama?
              Prijavi se na naš newsletter i primi mjesečne poruke nade, podrške
              i otpora — direktno u svoj inbox.
            </p>
            <p className={`${styles.newsletterText} text-center`}>
              Zajedno pišemo nove stranice slobode.
            </p>
          </div>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="UPIŠI SVOJ E-MAIL"
              className={styles.newsletterInput}
            />
            <button type="submit" className={styles.newsletterButton}>
              POŠALJI
            </button>
          </form>
        </div>
        <div
          className={`${styles.footerContent} grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`}
        >
          <div className={styles.footerContentTopLogo}>
            <Image src="/logo/logo.png" alt="logo" width={694} height={312} />
          </div>
          <div
            className={`${styles.footerContentTopSocial} sm:col-span-2 lg:col-span-5 flex items-center gap-2`}
          >
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
          </div>
          <div className={styles.footerContentBottomSegment}>
            <p>info@transbalkan.org</p>
            <p>Ul. crnogorskih junaka 71</p>
            <p>81000, Podgorica, Montenegro</p>
          </div>
          <div className={styles.footerContentBottomSegment}>
            <p>Još o našem impresumu:</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div
            className={`${styles.footerContentBottomSegment} hidden sm:block`}
          >
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div
            className={`${styles.footerContentBottomSegment} hidden lg:block`}
          >
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div
            className={`${styles.footerContentBottomSegment} hidden lg:block`}
          >
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
          <div
            className={`${styles.footerContentBottomSegment} hidden lg:block`}
          >
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </Container>
      <div className={`${styles.footerBottom} text-center`}>
        <p>©Trans Mreža Balkan {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
