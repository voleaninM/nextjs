import React from "react";
import styles from "./SearchBarButton.module.css";
import Image from "next/image";
type Props = {
  additionalStyles?: string;
};
export default function SearchBarButton({ additionalStyles }: Props) {
  return (
    <button
      type="submit"
      className={`${styles.button} ${additionalStyles || ""}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="glass"
        height={40}
        width={40}
        className={styles.image}
      />
    </button>
  );
}
