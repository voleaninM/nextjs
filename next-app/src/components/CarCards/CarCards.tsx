import React from "react";
import styles from "./CarCards.module.css";
import { CarCard } from "@/components";
import { CarT } from "../../types/index";
type Props = {
  data: CarT[];
};

export default function CarCards({ data }: Props) {
  return (
    <div className={styles.cardsContainer}>
      {data.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
}
