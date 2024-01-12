import React from "react";
import styles from "./CarDetails.module.css";
import { CarT } from "@/types";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";
type Props = {
  car: CarT;
};
export default function CarDetails({ car }: Props) {
  const { make, model } = car;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={generateCarImageUrl(car)}
          alt="car"
          fill
          sizes="calc(50.63vw - 64px)"
          className={styles.image}
        />
      </div>

      <div className={styles.detailImages}>
        <div className={styles.detailImage}>
          <Image
            src={generateCarImageUrl(car, "29")}
            alt="car"
            fill
            sizes="calc(16.89vw - 30px)"
            className={styles.image}
          />
        </div>
        <div className={styles.detailImage}>
          <Image
            src={generateCarImageUrl(car, "33")}
            alt="car"
            fill
            sizes="calc(16.89vw - 30px)"
            className={styles.image}
          />
        </div>
        <div className={styles.detailImage}>
          <Image
            src={generateCarImageUrl(car, "13")}
            alt="car"
            fill
            sizes="calc(16.89vw - 30px)"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.details}>
        <h2 className={`${styles.model} heading-2`}>
          {make} {model}
        </h2>
        <div className={styles.carSpecs}>
          {Object.entries(car).map(([key, value]) => (
            <div key={key} className={styles.carSpec}>
              <h3 className={`${styles.specName} heading-3`}>
                {key.split("_").join(" ")}
              </h3>
              <p className={`${styles.specValue} subtitle-2`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
