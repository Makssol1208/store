import Poster from "../Poster/Poster";
import Sidebar from "../Sidebar/Sidebar";
import Category from "./Category";

import styles from "../../styles/base.module.css";

export default function SingleCategory() {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />
        <Poster />
      </div>
      <Category />
    </>
  );
}
