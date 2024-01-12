"use client";
import React, { ReactNode } from "react";
import styles from "./Modal.module.css";
import { Button } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
type Props = {
  children: ReactNode;
  closeModal: () => void;
};
export default function Modal({ children, closeModal }: Props) {
  const router = useRouter();
  if (!open) return null;
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <Button
            style="outline"
            onClick={() => {
              closeModal();
              router.back;
            }}
            additionalStyles={styles.button}
          >
            <Image src="/close.svg" height={20} width={20} alt="close" />
          </Button>
          {children}
        </div>
      </div>
    </>
  );
}
