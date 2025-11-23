import Container from "./container";
import styles from "./footer.module.css";
import Image from "next/image";

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
        <div className={styles.footerContent}>
          <div className={styles.footerContentLeft}>
            <h2>About</h2>
            <p>About</p>
          </div>
          <div className={styles.footerContentRight}></div>
        </div>
      </Container>
      <div className={`${styles.footerBottom} text-center`}>
        ©Trans Mreža Balkan {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
