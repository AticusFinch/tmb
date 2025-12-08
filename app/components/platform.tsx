import styles from "./platform.module.css";
import Container from "./container";
import Image from "next/image";
import Button from "./button";

const Platform = () => {
  return (
    <div className={styles.platform}>
      <div className={styles.platformImageContainer}>
        <Image
          src="/platform/6.jpg"
          alt="Platform"
          width={1920}
          height={1080}
          className={styles.platformImage}
        />
      </div>
      <div className={styles.platformContent}>
        <h1 className={styles.platformTitle}>
          Trans
          <br />
          <span>feministička</span>
          <br /> <span className={styles.platformTitleSpan}>Platforma</span>
        </h1>
        <h3 className={styles.platformSubtitle}>
          S velikim uzbuđenjem predstavljamo šesto izdanje magazina
          Transfeministička platforma, koje istražuje temu Transfeminizam:
          značaj građenja savezništva.
        </h3>
        <p className={styles.platformText}>
          Šta vas čeka u ovom broju? Rubrika Novosti donosi aktuelne informacije
          o važnim događajima iz regiona vezanim za TIRV teme, feminizam i
          aktivizam.
        </p>
        <div className={styles.platformExtra}>
          <Button href="/" className={styles.platformExtraButton}>
            Saznaj više
          </Button>
          <span className={styles.platformExtraDate}>27.11.2025.</span>
          <div className={styles.platformExtraHashTags}>
            <span>#TDoR2024</span>
            <span>#TIRV</span>
            <span>#Feminizam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
