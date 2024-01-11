import React from "react";
import styles from "./CarCatalog.module.css";
import { SearchBar, CarCards, CustomFilter, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { FilterT } from "@/types";
import { yearsOfProduction, fuels } from "@/constants";
type Props = {
  searchParams: FilterT;
};
export default async function CarCatalog({ searchParams }: Props) {
  const allCars = await fetchCars({
    make: searchParams.make || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className={`${styles.catalog} wrapper`}>
      <div className={styles.header}>
        <h2 className="heading-2">Car Catalog</h2>
        <p>Explore the cars you might like</p>
      </div>
      <div className={styles.filters}>
        <SearchBar />
        <CustomFilter title="fuel" options={fuels} />
        <CustomFilter title="year" options={yearsOfProduction} />
      </div>
      {!isDataEmpty ? (
        <>
          <CarCards data={allCars} />
          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
          />
        </>
      ) : (
        <>
          <h2 className="heading-2">Oops, no results</h2>
          <h2 className="heading-2">{allCars.message}</h2>
        </>
      )}
    </div>
  );
}
