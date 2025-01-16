'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Menu, UnstyledButton } from '@mantine/core';

import styles from './styles.module.css';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';

export function OldNavbar() {
  return (
    <div className={`${styles.container}`}>
      <nav className="flex h-[100px] items-center justify-between">
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
                <li className="inline-block"><a href="#">Home</a></li>
                <li className={styles.dropdown_item}><a href="#">Pages</a>
                    <ul className={styles.dropdown}>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="single-post.html">Single Post</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </li>
                <li className="inline-block"><a href="#">Catagory</a>
                    <ul className={styles.dropdown}>
                        <li><a href="#">Catagory 1</a></li>
                        <li><a href="#">Catagory 1</a></li>
                        <li><a href="#">Catagory 1</a>
                            <ul className={styles.dropdown}>
                                <li><a href="#">Catagory 2</a></li>
                                <li><a href="#">Catagory 2</a></li>
                                <li><a href="#">Catagory 2</a>
                                    <ul className={styles.dropdown}>
                                        <li><a href="#">Catagory 3</a></li>
                                        <li><a href="#">Catagory 3</a></li>
                                        <li><a href="#">Catagory 3</a></li>
                                        <li><a href="#">Catagory 3</a></li>
                                        <li><a href="#">Catagory 3</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Catagory 2</a></li>
                                <li><a href="#">Catagory 2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Catagory 1</a></li>
                        <li><a href="#">Catagory 1</a></li>
                    </ul>
                </li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="#">Megamenu</a>
                    <div className={styles.dropdown}>
                        <ul className="single-mega cn-col-4">
                            <li className="title">Headline 1</li>
                            <li><a href="#">Mega Menu Item 1</a></li>
                            <li><a href="#">Mega Menu Item 2</a></li>
                            <li><a href="#">Mega Menu Item 3</a></li>
                            <li><a href="#">Mega Menu Item 4</a></li>
                            <li><a href="#">Mega Menu Item 5</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                            <li className="title">Headline 2</li>
                            <li><a href="#">Mega Menu Item 1</a></li>
                            <li><a href="#">Mega Menu Item 2</a></li>
                            <li><a href="#">Mega Menu Item 3</a></li>
                            <li><a href="#">Mega Menu Item 4</a></li>
                            <li><a href="#">Mega Menu Item 5</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                            <li className="title">Headline 3</li>
                            <li><a href="#">Mega Menu Item 1</a></li>
                            <li><a href="#">Mega Menu Item 2</a></li>
                            <li><a href="#">Mega Menu Item 3</a></li>
                            <li><a href="#">Mega Menu Item 4</a></li>
                            <li><a href="#">Mega Menu Item 5</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                            <li className="title">Headline 4</li>
                            <li><a href="#">Mega Menu Item 1</a></li>
                            <li><a href="#">Mega Menu Item 2</a></li>
                            <li><a href="#">Mega Menu Item 3</a></li>
                            <li><a href="#">Mega Menu Item 4</a></li>
                            <li><a href="#">Mega Menu Item 5</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="contact.html">Contact</a></li>
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
                <li className="inline-block"><a href="#">Home</a></li>
                
                <li className={styles.dropdown_item}>
                    <Menu width={200} shadow='md' trigger='click-hover' styles={{ dropdown: { width: 200 } }}>
                        <Menu.Target> 
                            <UnstyledButton className='flex items-center uppercase' style={{fontSize: '14px'}}>
                                Pages <IconChevronDown className='pt-1'/>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Home</Menu.Item>
                            <Menu.Item>About us</Menu.Item>
                            <Menu.Item>Single Post</Menu.Item>
                            <Menu.Item>Contact</Menu.Item>
                            <Menu.Item>Coming Soon</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </li>

                <li className="inline-block">
                    <Menu width={200} shadow='md' trigger='click-hover'>
                        <Menu.Target> 
                            <UnstyledButton className='flex items-center uppercase' style={{fontSize: '14px'}}>
                                Category <IconChevronDown className='pt-1'/>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Category 1</Menu.Item>
                            <Menu.Item>Category 2</Menu.Item>
                            <Menu.Item>Category 3</Menu.Item>
                            <Menu.Item>Category 4</Menu.Item>
                            <Menu.Item>Category 5</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </li>

                <li><a href="about-us.html">About Us</a></li>

                <li>
                    <Menu width={200} shadow='md' trigger='click-hover'>
                        <Menu.Target> 
                            <UnstyledButton className='flex items-center uppercase' style={{fontSize: '14px'}}>
                                Megamenu <IconChevronDown className='pt-1'/>
                            </UnstyledButton>
                        </Menu.Target>
                        <Menu.Dropdown>
                            <Menu.Item>Megamenu Item 1</Menu.Item>
                            <Menu.Item>Megamenu Item 2</Menu.Item>
                            <Menu.Item>Megamenu Item 3</Menu.Item>
                            <Menu.Item>Megamenu Item 4</Menu.Item>
                            <Menu.Item>Megamenu Item 5</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </li>

                <li><a href="contact.html">Contact</a></li>
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