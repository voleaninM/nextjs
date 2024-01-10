"use client";
import { CarT } from "@/types";
import styles from "./CarCard.module.css";
import React from "react";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import Button from "@/components/Button/Button";
import CarDetails from "@/components/CarDetails/CarDetails";
import Modal from "@/components/Modal/Modal";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type Props = {
  car: CarT;
};
export default function CarCard({ car }: Props) {
  const { model, make, transmission, year, drive, city_mpg } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const searchParams = useSearchParams();
  const modal = searchParams.has("modal");

  return (
    <div className={styles.car}>
      <h2 className={`${styles.model} heading-2`}>
        {make} {model}
      </h2>
      <div className={`${styles.price} subtitle-1`}>
        <span className="subtitle-2">$</span>
        <h2 className="heading-2">{carRent}</h2>/
        <span className="subtitle-2">day</span>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={generateCarImageUrl(car)}
          alt="car"
          fill
          priority
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.detailContainer}>
          <div className={styles.description}>
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="subtitle-1">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className={styles.description}>
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="subtitle-1">{drive.toUpperCase()}</p>
          </div>
          <div className={styles.description}>
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="subtitle-2">{city_mpg} MPG</p>
          </div>
        </div>
        <Link href="/?modal=true" className={styles.button} scroll={false}>
          View More
        </Link>
      </div>
      {modal && (
        <Modal>
          <CarDetails car={car} />
        </Modal>
      )}
    </div>
  );
}
