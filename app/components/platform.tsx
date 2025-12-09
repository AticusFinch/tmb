"use client";

import styles from "./platform.module.css";
import Image from "next/image";
import Button from "./button";
import useEmblaCarousel from "embla-carousel-react";
import { IoMdArrowDropright } from "react-icons/io";
import { useEffect, useState, useCallback, useRef } from "react";

const slides = [
  {
    image: "/platform/4.png",
    type: "kolumna",
    title: "Transfeministička Platforma br. 6",
    author: "Jovan Džoli Ulićević",
    date: "27.11.2025.",
    hashtags: "#TFPlatforma",
  },
  {
    image: "/platform/21.png",
    type: "kolumna",
    title: "Transfeministička Platforma br. 6",
    author: "Jovan Džolić Ulićević",
    date: "27.11.2025.",
    hashtags: "#TFPlatforma",
  },
  {
    image: "/platform/4.png",
    type: "kolumna",
    title: "Transfeministička Platforma br. 6",
    author: "Jovan Džolić Ulićević",
    date: "27.11.2025.",
    hashtags: "#TFPlatforma",
  },
  {
    image: "/platform/21.png",
    type: "kolumna",
    title: "Transfeministička Platforma br. 6",
    author: "Jovan Džolić Ulićević",
    date: "27.11.2025.",
    hashtags: "#TFPlatforma",
  },
];

const Carousel = ({
  isMobile,
  onApiReady,
}: {
  isMobile: boolean;
  onApiReady: (api: ReturnType<typeof useEmblaCarousel>[1] | null) => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: isMobile ? "y" : "x",
    slidesToScroll: 2,
    dragFree: false,
    watchDrag: true,
  });

  const onApiReadyRef = useRef(onApiReady);
  useEffect(() => {
    onApiReadyRef.current = onApiReady;
  }, [onApiReady]);

  useEffect(() => {
    onApiReadyRef.current(emblaApi || null);
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slideImageContainer}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1920}
                  height={1080}
                  className={styles.platformImage}
                />
              </div>
              <div className={styles.embla__slideContent}>
                <h3 className={styles.embla__slideType}>{slide.type}</h3>
                <h2 className={styles.embla__slideTitle}>{slide.title}</h2>
                <p className={styles.embla__slideAuthor}>
                  Piše: {slide.author}
                </p>
                <div className={styles.embla__slideMeta}>
                  <p className={styles.embla__slideMetaDate}>{slide.date}</p>
                  <p className={styles.embla__slideMetaHashtags}>
                    {slide.hashtags}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Platform = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [emblaApi, setEmblaApi] = useState<
    ReturnType<typeof useEmblaCarousel>[1] | null
  >(null);

  const handleApiReady = useCallback(
    (api: ReturnType<typeof useEmblaCarousel>[1] | null) => {
      setEmblaApi(api);
    },
    []
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div className={styles.platformContainer}>
      <div className={styles.platform}>
        <div
          className={`${styles.platformImageContainer} w-8/10 lg:w-full mx-auto`}
        >
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
            Šta vas čeka u ovom broju? Rubrika Novosti donosi aktuelne
            informacije o važnim događajima iz regiona vezanim za TIRV teme,
            feminizam i aktivizam.
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

      <div className={styles.platformColumns}>
        <Carousel
          key={isMobile ? "vertical" : "horizontal"}
          isMobile={isMobile}
          onApiReady={handleApiReady}
        />
        <button
          className={styles.embla__next}
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
};

export default Platform;
