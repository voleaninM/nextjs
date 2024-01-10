"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import Image from "next/image";
import { manufacturers } from "@/constants";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<string[]>([]);
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const searchResult = e.target.value.toLowerCase();

    const filteredData = manufacturers.filter((value) =>
      value.toLowerCase().includes(searchResult)
    );
    if (searchResult === "") {
      setResults([]);
    } else {
      setResults(filteredData);
    }
    setInputValue(searchResult);
  }
  function handleResultClick(brand: string) {
    setInputValue(brand);
    setResults([]);
  }

  function handleSearch() {}
  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <div className={styles.inputContainer}>
        <button className={styles.button}>
          <Image src="/car-logo.svg" width={20} height={20} alt="car logo" />
        </button>
        <input
          placeholder="Search for a brand"
          className={styles.input}
          onChange={handleFilter}
          value={inputValue}
        />
      </div>

      <ul className={`${styles.list} ${results.length > 0 && styles.active}`}>
        {results.map((brand) => (
          <li
            key={brand}
            className={styles.result}
            onClick={() => handleResultClick(brand)}
          >
            {brand}
          </li>
        ))}
      </ul>
    </form>
  );
}
