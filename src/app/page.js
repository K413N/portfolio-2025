import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
        <Welcome />
    </div>
  );
}
