'use client'
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IconX } from '@tabler/icons-react';

import styles from './styles.module.css';
import { PopupProps } from '../../types/AuthPopupProps';

const Login: FC<PopupProps> = ({ isOpen, onClose, setPopupType }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-0">
      <div className={styles.auth_form_container}>
        <h1 className={styles.auth_title}>Login</h1>
        <button onClick={onClose} className="absolute top-3 right-3 hover:text-red-600 transition duration-300 ease-in-out"><IconX size="2rem" /></button>
        
        {error && <div className={styles.error_message}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.auth_form}>
          <div className={styles.form_group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>
          
          <div className={styles.form_group}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>
          
          <button type="submit" className={styles.auth_button}>
            Login
          </button>
        </form>
        
        <div className={styles.auth_links}>
          <p>
            Don't have an account? <button onClick={() => setPopupType('register')}>Register</button>
          </p>
          <p>
            <Link href="/forgot-password">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;