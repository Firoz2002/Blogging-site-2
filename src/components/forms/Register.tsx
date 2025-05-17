'use client'
import React, { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import { signIn } from 'next-auth/react';
import { IconX } from '@tabler/icons-react';
import { PopupProps } from '@/types/AuthPopupProps';

const Register:FC<PopupProps> = ({ isOpen, onClose, setPopupType }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        const res = await signIn('credentials', {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });

        if (res?.error) {
          setError('Login failed. Please try again.');
        } else {
          onClose();
          router.refresh();
        }
      } else {
        setError(data.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 md:p-0">
      <div className={styles.auth_form_container}>
        <h1 className={styles.auth_title}>Register</h1>
        <button onClick={onClose} className="absolute top-3 right-3 hover:text-red-600 transition duration-300 ease-in-out"><IconX size='2rem' /></button>
        
        {error && <div className={styles.error_message}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.auth_form}>
          <div className={styles.form_group}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>
          
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
          
          <div className={styles.form_group}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={styles.form_input}
            />
          </div>
          
          <button type="submit" className={styles.auth_button}>
            Register
          </button>
        </form>
        
        <div className={styles.auth_links}>
          <p>
            Already have an account? <button onClick={() => setPopupType('login')}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;