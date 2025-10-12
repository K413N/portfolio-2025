import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Welcome from "./welcome";
import EverythingWrapper from "../components/EverythingWrapper";

export default function Home() {
  return (
      <EverythingWrapper>
      <Welcome />
      </EverythingWrapper>
  );
}
