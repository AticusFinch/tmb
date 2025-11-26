import styles from "./hero.module.css";
import Image from "next/image";
import Button from "./button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <Image
          src="/hero/01.png"
          alt="Hero"
          width={1920}
          height={1080}
          className={styles.heroImage}
        />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          U ime dostojanstva i slobode svih — „Živjeli!”
        </h1>
        <p className={styles.heroHashTag}>#TDoR2024</p>
        <div className={styles.heroExtraContent}>
          <Button href="/" className={styles.heroButtonText}>
            Saznaj više
          </Button>
          <span className={styles.heroExtraDate}>27.11.2025.</span>
          <span className={styles.heroExtraHashTag}>#TDoR2024</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
