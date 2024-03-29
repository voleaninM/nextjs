"use client";
import React, { useRef, useState } from "react";
import styles from "./SearchBar.module.css";
import { manufacturers } from "@/constants";
import { SearchBarButton, Input } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useClickedOutside from "@/utils/useClickedOutside";

export default function SearchBar() {
  const [make, setMake] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);
  const [results, setResults] = useState<string[]>([]);
  const [model, setModel] = useState("");
  const router = useRouter();
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    const searchResult = e.target.value.toLowerCase();
    setIsOpen(true);

    const filteredData = manufacturers.filter((value) =>
      value.toLowerCase().includes(searchResult)
    );
    if (searchResult === "") {
      setResults([]);
      setIsOpen(false);
    } else {
      setResults(filteredData);
    }
    setMake(searchResult);
  }
  function handleResultClick(brand: string) {
    setMake(brand);
    setResults([]);
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (make === "" && model === "") {
      alert("Provide values");
    }
    updateSearchParams(model.toLowerCase(), make.toLowerCase());
    setMake("");
    setModel("");
  }

  function updateSearchParams(model: string, make: string) {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (make) {
      searchParams.set("make", make);
    } else {
      searchParams.delete("make");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  }
  useClickedOutside<HTMLFormElement>(formRef, () => setIsOpen(false), isOpen);

  return (
    <form className={styles.searchBar} onSubmit={handleSearch} ref={formRef}>
      <Input
        onChange={handleFilter}
        value={make}
        placeholder="Search for a brand"
      >
        <Image src="/car-logo.svg" width={20} height={20} alt="car logo" />
      </Input>
      <SearchBarButton additionalStyles={styles.makeButton} />

      <Input
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Search for a model"
      >
        <Image src="/model-icon.png" width={20} height={20} alt="car logo" />
      </Input>
      <SearchBarButton />

      {isOpen && (
        <ul
          className={`${styles.list} ${
            results.length > 0 ? styles.active : ""
          }`}
        >
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
      )}
    </form>
  );
}
