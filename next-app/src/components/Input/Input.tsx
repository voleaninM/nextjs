import React, { ReactNode } from "react";
import styles from "./Input.module.css";
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  children?: ReactNode;
};
export default function Input({
  onChange,
  value,
  placeholder,
  children,
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <button className={styles.button}>{children}</button>
      <input
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
