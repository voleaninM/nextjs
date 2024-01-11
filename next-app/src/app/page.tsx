import { Hero } from "@/components";
import styles from "./page.module.css";
import CarCatalog from "@/components/CarCatalog/CarCatalog";
import { FilterT } from "@/types";
type Props = {
  searchParams: FilterT;
};
export default function Home({ searchParams }: Props) {
  return (
    <main className={styles.main}>
      <Hero />
      <CarCatalog searchParams={searchParams} />
    </main>
  );
}
