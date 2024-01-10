import { Hero } from "@/components";
import styles from "./page.module.css";
import CarCatalog from "@/components/CarCatalog/CarCatalog";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <CarCatalog />
    </main>
  );
}
