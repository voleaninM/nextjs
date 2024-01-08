import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className={`${styles.footer} wrapper`}>
      <div className={styles.details}>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={120}
            height={20}
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <p>
          Carhub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>
      <div className={styles.element}>
        {footerLinks.map((item) => (
          <div key={item.title}>
            <h3 className={`${styles.title} heading-3`}>{item.title}</h3>
            <ul className={styles.list}>
              {item.links.map((link) => (
                <li key={link.title}>
                  <Link href={link.url} className={styles.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
