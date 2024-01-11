"use client";
import React, { useState } from "react";
import styles from "./CustomFilter.module.css";
import { OptionT } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
type Props = {
  title: string;
  options: OptionT[];
};
export default function CustomFilter({ title, options }: Props) {
  const [selected, setSelected] = useState(options[0].value);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  };
  return (
    <div className={styles.filter}>
      <select
        name={title}
        className={styles.select}
        onChange={(e) => {
          setSelected(e.target.value);
          handleUpdateParams(e.target);
        }}
        value={selected}
      >
        {options.map((option) => (
          <option value={option.value} key={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
