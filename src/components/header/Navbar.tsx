import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconUser } from '@tabler/icons-react';

import Login from '../forms/Login';
import Register from '../forms/Register';
import styles from './styles.module.css';

export default function Navbar() {
  const [popupType, setPopupType] = useState<'login' | 'register' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);
    window.addEventListener('authStateChanged', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('authStateChanged', checkLoginStatus);
    };
  }, []);

  const handleClick = (type: 'login' | 'register') => {
    setPopupType(type);
    setIsPopupOpen(true);
  };

  return (
    <div className="w-full px-10 sticky top-0 z-50 bg-white overflow-visible">
      <nav className="flex h-[100px] items-center justify-between sticky">
        <button className={styles.subscribe_btn}>Subscribe</button>

        <motion.div className={styles.navbar_toggle}>
          <span></span>
          <span></span>
          <span></span>
        </motion.div>

        <div className={styles.navbar}>
          <ul className="flex items-center">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Menu width={200} shadow="md" trigger="click-hover" position="bottom">
                <Menu.Target>
                  <UnstyledButton className="flex items-center uppercase" style={{ fontSize: '14px' }}>
                    Category <IconChevronDown className="pt-1" />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>Lifestyle</Menu.Item>
                  <Menu.Item>Travel</Menu.Item>
                  <Menu.Item>Music</Menu.Item>
                  <Menu.Item>Fashion</Menu.Item>
                  <Menu.Item>Food</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </li>

            <li>
              <Link href="/blogs">Blogs</Link>
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
            <li>
              
            </li>
          </ul>

          <div id={styles.search_wrapper}>
            <form action="#">
              <input type="text" id={styles.search} className='cursor-pointer' placeholder="Search something..." />
              <div id={styles.search_icon}></div>
              <input className={styles.d_none} type="submit" value="" />
            </form>
          </div>
        </div>

        {isLoggedIn ? (
              <div className="ml-4">
                <Menu width={200} shadow="md" position="bottom-end">
                  <Menu.Target>
                    <button className={styles.profile_btn}>
                      <IconUser size={18} />
                      <span className="ml-2">Profile</span>
                    </button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component={Link} href="/profile">My Profile</Menu.Item>
                    <Menu.Item component={Link} href="/my-blogs">My Blogs</Menu.Item>
                    <Menu.Item component={Link} href="/settings">Settings</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      onClick={() => {
                        localStorage.removeItem('isLoggedIn');
                        setIsLoggedIn(false);
                        window.dispatchEvent(new Event('authStateChanged'));
                      }}
                    >
                      Logout
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            ) : (
              <div className="ml-4 flex">
                <button onClick={() => handleClick('login')} type="button" className={styles.auth_btn}>
                  Login
                </button>
                <button onClick={() => handleClick('register')} type="button" className={`${styles.auth_btn} ml-2`}>
                  Register
                </button>
              </div>
            )}
      </nav>

      {isPopupOpen && popupType === 'login' && (
        <Login isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} setPopupType={setPopupType} />
      )}
      {isPopupOpen && popupType === 'register' && (
        <Register isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} setPopupType={setPopupType} />
      )}
    </div>
  );
}
