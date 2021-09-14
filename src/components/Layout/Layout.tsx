import { FC } from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
