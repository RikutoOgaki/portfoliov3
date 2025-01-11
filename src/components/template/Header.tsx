'use client'

import { useState, useEffect, useRef } from 'react'
import styles from '@/styles/components/template/header.module.css'

export default function Header() {


  return (
    <header className={styles.headerWrap}>
      <ul className={styles.listBox}>
        <li><a href="">TOP</a></li>
        <li><a href="">ABOUT</a></li>
        <li><a href="">SERVICE</a></li>
        <li><a href="">CONTACT</a></li>
      </ul>
    </header>
  )
}