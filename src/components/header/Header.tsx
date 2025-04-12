'use client'
import React from 'react';
import Link from 'next/link';

import Navbar from './Navbar';
import { Ticker } from '../ticker/Ticker';
import styles from './styles.module.css';

const items = [
  "Hello World!",
  "Hello Universe!",
  "Hello Original!",
  "Hello Earth!",
  "Hello Colorlib!"
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Ticker items={items} />

      <Link href={"/"} className={`${styles.logo} text-center`}>
          <img src="/logo.png" alt="" />
      </Link>
      
      <Navbar />
    </header>
  )
}
