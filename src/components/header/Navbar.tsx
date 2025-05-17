import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import { Menu, UnstyledButton } from '@mantine/core';
import { IconChevronDown, IconUser } from '@tabler/icons-react';

import Login from '@components/forms/Login';
import Register from '@components/forms/Register';
import styles from './styles.module.css';

const categories = [
  { name: 'Lifestyle', link: '/blogs?category=lifestyle' },
  { name: 'Travel', link: '/blogs?category=travel' },
  { name: 'Music', link: '/blogs?category=music' },
  { name: 'Fashion', link: '/blogs?category=fashion' },
  { name: 'Food', link: '/blogs?category=food' },
]

export default function Navbar() {
  const [popupType, setPopupType] = useState<'login' | 'register' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    const handleAuthStateChange = () => {
      if(status === 'authenticated') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    handleAuthStateChange();
  }, [status]);

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
                  {categories.map((category) => (
                    <Menu.Item key={category.name}>
                      <Link href={category.link} className="text-sm">
                        {category.name}
                      </Link>
                    </Menu.Item>
                  ))}
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
                      onClick={() => {signOut({ callbackUrl: '/' });}}
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
