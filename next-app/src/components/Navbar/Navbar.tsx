import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={`${styles.header} wrapper`}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={120}
          height={20}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <Button style="outline">Sign In</Button>
    </header>
  );
}
