"use client";

import styles from "./values.module.css";
import Image from "next/image";
import { useState } from "react";

const values = [
  {
    title: "Poštivanje ljudskih prava",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "Tjelesni integritet",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "EJednakost i uključivanje svih identiteta i pozadina",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "Feminizam",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "Intersekcionalnost",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "Podrška",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
  {
    title: "Transparentnost",
    description:
      "Ovđe nešto uopšteno o vrijednosti. U nekoliko rečenica... lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsu.",
  },
];

const Values = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleValue = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.valuesSection}>
      <div className={styles.organizationContainer}>
        <div className={styles.organization}>
          <div className={styles.organizationImageContainer}>
            <Image
              src="/load/load.png"
              alt="Logo"
              width={468}
              height={468}
              className={styles.organizationImage}
            />
          </div>
          <div className={styles.organizationContent}>
            <h2 className={styles.organizationTitle}>
              trans mreža
              <br />
              BALKAN
            </h2>
            <p className={styles.organizationText}>
              Ovđe nešto uopšteno o organizaciji. U nekoliko rečenica... lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsu.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.values}>
          <h2 className={styles.valuesTitle}>TBM vrijednosti</h2>
          <div className={styles.valuesContent}>
            {values.map((value, index) => (
              <div className={styles.valuesItem} key={index}>
                <h3
                  className={styles.valuesItemTitle}
                  onClick={() => toggleValue(index)}
                >
                  {value.title}
                </h3>
                <div
                  className={`${styles.valuesItemDescriptionWrapper} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  <p className={styles.valuesItemDescription}>
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
