import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { Menu, UnstyledButton } from '@mantine/core';

import styles from './styles.module.css';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';

export default function Navbar () {
  return (
    <div className={`${styles.container}`} style={{overflow: 'visible', top: 0, zIndex: 100}}>
      <nav className="flex h-[100px] items-center justify-between sticky">
        <button className={styles.subscribe_btn}>
            Subscribe
        </button>

        <motion.div className={styles.navbar_toggle}>
            <span></span>
            <span></span>
            <span></span>
        </motion.div>

        <div className={styles.navbar}>
            <ul className="flex align-middle">
                <li className="inline-block">
                  <Link href="/">Home</Link>
                </li>

                <li className="inline-block">
                    <Menu width={200} shadow='md' trigger='click-hover'>
                        <Menu.Target> 
                            <UnstyledButton className='flex items-center uppercase' style={{fontSize: '14px'}}>
                                Category <IconChevronDown className='pt-1'/>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Lifestyle</Menu.Item>
                            <Menu.Item> Travel </Menu.Item>
                            <Menu.Item> Music </Menu.Item>
                            <Menu.Item> Fashion </Menu.Item>
                            <Menu.Item> Food </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </li>

                <li>
                  <Link href="/blogs"> Blogs </Link>
                </li>

                <li>
                  <Link href="/write-a-blog">Write a blog</Link>
                </li>

                <li>
                  <Link href="/about-us">About Us</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <div id={styles.search_wrapper}>
                <form action="#">
                    <input type="text" id={styles.search} placeholder="Search something..." />
                    <div id={styles.search_icon}></div>
                    <input className={styles.d_none} type="submit" value="" />
                </form>
            </div>
        </div>
      </nav>
    </div>
  )
}
