"use client";
import React from "react";
import styles from "./ShowMore.module.css";
import { Button } from "@/components";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
type Props = {
  pageNumber: number;
  isNext: boolean;
};

export default function ShowMore({ pageNumber, isNext }: Props) {
  const router = useRouter();
  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  }
  return (
    <div className={styles.more}>
      {!isNext && <Button onClick={handleNavigation}>Show more</Button>}
    </div>
  );
}
