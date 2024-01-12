import React from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={`${styles.hero} wrapper`}>
      <div className={styles.title}>
        <h1 className="heading-1">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className={`${styles.subtitle} subtitle-1`}>
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <Button>Explore Cars</Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.png"
          alt="hero"
          fill={true}
          sizes="(min-width: 1500px) 630px, (min-width: 1080px) calc(60.75vw - 269px), calc(100vw - 80px)"
          className={styles.image}
          priority={true}
        />
      </div>
    </div>
  );
}
