'use client'
import React from 'react';

import Navbar from './Navbar';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container h-[65px] flex items-center overflow-hidden">
        <div className={`${styles.ticker} max-h-[21px] w-full sm:w-2/3 `}>
          <ul>
            <li><a href="#">Hello World!</a></li>
            <li><a href="#">Hello Universe!</a></li>
            <li><a href="#">Hello Original!</a></li>
            <li><a href="#">Hello Earth!</a></li>
            <li><a href="#">Hello Colorlib!</a></li>
          </ul>
        </div>
      </div>
      <div className={`${styles.logo} text-center`}>
          <img src="/logo.png" alt="" />
      </div>
      <Navbar />
    </header>
  )
}
