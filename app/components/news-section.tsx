import styles from "./news-section.module.css";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

interface MainPostProps {
  image: string;
  title: string;
  hashtag: string;
  date: string;
  href: string;
}

const MainPost = ({ image, title, hashtag, date, href }: MainPostProps) => {
  return (
    <article className={styles.mainPost}>
      <div className={styles.mainPostImageContainer}>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className={styles.mainPostImage}
        />
      </div>
      <div className={styles.mainPostContent}>
        <h2 className={styles.mainPostTitle}>{title}</h2>
        <p className={styles.mainPostHashTag}>{hashtag}</p>
        <div className={styles.mainPostExtraContent}>
          <Button href={href} className={styles.mainPostButton}>
            Saznaj više
          </Button>
          <span className={styles.mainPostDate}>{date}</span>
          <span className={styles.mainPostHashTagExtra}>{hashtag}</span>
        </div>
      </div>
    </article>
  );
};

interface RegularPostProps {
  image: string;
  title: string;
  href: string;
  excerpt: string;
}

const RegularPost = ({ image, title, href, excerpt }: RegularPostProps) => {
  return (
    <Link href={href} className={styles.regularPost}>
      <div className={styles.regularPostImageContainer}>
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className={styles.regularPostImage}
        />
      </div>
      <div className={styles.regularPostContent}>
        <h3 className={styles.regularPostTitle}>{title}</h3>
        <div className={styles.regularPostExtraContent}>
          <p className={styles.regularPostExcerpt}>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <MainPost
        image="/hero/01.png"
        title='U ime dostojanstva i slobode svih — „Živjeli!"'
        hashtag="#TDoR2024"
        date="27.11.2025."
        href="/"
      />
      <RegularPost
        image="/hero/01.png"
        title="Erasmus projekt: Inkluzija i antidiskriminacija kroz međusektorsku suradnju"
        href="/vijesti"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <RegularPost
        image="/hero/01.png"
        title="Erasmus projekt: Inkluzija i antidiskriminacija kroz međusektorsku suradnju"
        href="/vijesti"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <RegularPost
        image="/hero/01.png"
        title="Erasmus projekt: Inkluzija i antidiskriminacija kroz međusektorsku suradnju"
        href="/vijesti"
        excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
    </section>
  );
};

export default NewsSection;
