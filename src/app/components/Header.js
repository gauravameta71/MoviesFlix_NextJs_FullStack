import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav.js";
// @/ = this will target src folder

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
            <Image src="/logo.png" alt="logo"
            width={150} height={102}/>
        </Link>
      </div>

      <Nav/>
    </header>
  );
};

export default Header;
