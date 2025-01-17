import Image from "next/image";
import styles from '@/styles/page.module.css'

import Flame from '@/components/template/Flame'
import Header from '@/components/template/Header'
import About from '@/components/common/About'

export default function Home() {
  return (
    <Flame>
      <Header />
      <div className={styles.topWrap}>
        <h1 className={styles.nameTitle}>RikutoOgaki</h1>
        <p className={styles.text}>Front End Engineer</p>
      </div>
      <About />
    </Flame>
  );
}
