"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
type Props = {
  children: ReactNode;
  style?: "default" | "outline";
  state?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
};
export default function Button({
  children,
  style = "default",
  state = false,
  type = "button",
  onClick,
}: Props) {
  return (
    <button
      disabled={state}
      type={type}
      className={`${styles.button} ${style === "outline" && styles.outline}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
