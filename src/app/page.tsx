import Image from "next/image";
import styles from '@/styles/page.module.css'

import Flame from '@/components/template/Flame'
import Header from '@/components/template/Header'

export default function Home() {
  return (
    <Flame>
      <Header />
      <div></div>
    </Flame>
  );
}
