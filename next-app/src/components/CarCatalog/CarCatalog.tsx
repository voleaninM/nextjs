import React from "react";
import styles from "./CarCatalog.module.css";
import { SearchBar, CustomFilter, CarCards } from "@/components";
import { fetchCars } from "@/utils";

export default async function CarCatalog() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className={`${styles.catalog} wrapper`}>
      <div className={styles.header}>
        <h2 className="heading-2">Car Catalog</h2>
        <p>Explore the cars you might like</p>
      </div>
      <div className={styles.filters}>
        <SearchBar />
      </div>
      {!isDataEmpty ? <CarCards data={allCars} /> : <h2>{allCars.message}</h2>}
    </div>
  );
}
