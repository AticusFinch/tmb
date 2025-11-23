"use client";

import Navbar from "./components/navbar";
import Image from "next/image";
import styles from "./not-found.module.css";
import Button from "./components/button";
import Container from "./components/container";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex flex-col items-start justify-center"
        style={{ backgroundColor: "var(--error)" }}
      >
        <Container>
          <h1 className={`${styles.notFoundErrorCode} flex items-center`}>
            4
            <span className={styles.notFoundImage}>
              <Image src="/load/load.png" alt="404" width={468} height={468} />
            </span>
            4
          </h1>
          <div className="sm:w-full lg:w-4/5 mx-auto">
            <h2 className={styles.notFoundTitle}>Stranica nije pronađena.</h2>
            <p className={styles.notFoundDescription}>
              Kao ni mnoge istine koje sistem briše. Mi ih ipak nastavljamo
              pisati.
            </p>
            <Button href="/" className={styles.notFoundButton}>
              Vrati se na početnu
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
