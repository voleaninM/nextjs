"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";
type Props = {
  children: ReactNode;
  additionalStyles?: string;
  style?: "default" | "outline";
  state?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
};
export default function Button({
  children,
  additionalStyles = "",
  style = "default",
  state = false,
  type = "button",
  onClick,
}: Props) {
  const buttonClasses = `${styles.button} ${additionalStyles || ""}`;
  return (
    <button
      disabled={state}
      type={type}
      className={`${buttonClasses} ${style === "outline" && styles.outline}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
