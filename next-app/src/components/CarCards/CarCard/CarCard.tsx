"use client";
import { CarT } from "@/types";
import styles from "./CarCard.module.css";
import React, { useState } from "react";
import {
  calculateCarRent,
  generateCarImageUrl,
  updateSearchParams,
} from "@/utils";
import Image from "next/image";
import CarDetails from "@/components/CarDetails/CarDetails";
import Modal from "@/components/Modal/Modal";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
type Props = {
  car: CarT;
};

export default function CarCard({ car }: Props) {
  const { model, make, transmission, year, drive, city_mpg } = car;
  const [selectedCar, setSelectedCar] = useState<CarT | null>(null);
  const carRent = calculateCarRent(city_mpg, year);
  const searchParams = useSearchParams();
  const router = useRouter();

  const openModal = (car: CarT) => {
    setSelectedCar(car);

    const newPathName = updateSearchParams("modal", "true");
    router.push(newPathName, { scroll: false });
  };
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
          sizes="(max-width: 640px) 100vw, 25vw"
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
        <Button onClick={() => openModal(car)} additionalStyles={styles.button}>
          View More
        </Button>
      </div>
      {modal && selectedCar && (
        <Modal closeModal={() => setSelectedCar(null)}>
          <CarDetails car={selectedCar} />
        </Modal>
      )}
    </div>
  );
}
