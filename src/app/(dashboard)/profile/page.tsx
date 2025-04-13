'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './styles.module.css';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  joinedDate: string;
  blogCount: number;
}

export default function ProfilePage() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Mock user data - in a real app, this would come from your API
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate writer and avid reader. I love sharing my thoughts on various topics through my blog posts.',
    joinedDate: 'January 2023',
    blogCount: 12
  });

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    setLoading(false);
    
    // Redirect if not logged in
    if (!loggedIn && !loading) {
      router.push('/login');
    }
  }, [loading, router]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!isLoggedIn) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_header}>
        <div className={styles.profile_avatar}>
          {/* Display first letter of name as avatar */}
          <span>{profile.name.charAt(0)}</span>
        </div>
        <div className={styles.profile_info}>
          <h1>{profile.name}</h1>
          <p className={styles.profile_email}>{profile.email}</p>
          <p className={styles.profile_joined}>Member since {profile.joinedDate}</p>
        </div>
      </div>
      
      <div className={styles.profile_content}>
        <div className={styles.profile_section}>
          <h2>About Me</h2>
          <p>{profile.bio}</p>
        </div>
        
        <div className={styles.profile_section}>
          <h2>My Activity</h2>
          <div className={styles.profile_stats}>
            <div className={styles.stat_item}>
              <span className={styles.stat_number}>{profile.blogCount}</span>
              <span className={styles.stat_label}>Blogs Published</span>
            </div>
            <div className={styles.stat_item}>
              <span className={styles.stat_number}>24</span>
              <span className={styles.stat_label}>Comments</span>
            </div>
            <div className={styles.stat_item}>
              <span className={styles.stat_number}>156</span>
              <span className={styles.stat_label}>Likes Received</span>
            </div>
          </div>
        </div>
        
        <div className={styles.profile_section}>
          <div className={styles.section_header}>
            <h2>Recent Blogs</h2>
            <Link href="/my-blogs" className={styles.view_all}>
              View All
            </Link>
          </div>
          
          <div className={styles.recent_blogs}>
            <p className={styles.placeholder_text}>
              Your recent blog posts will appear here.
            </p>
          </div>
        </div>
        
        <div className={styles.profile_actions}>
          <Link href="/settings" className={styles.profile_button}>
            Edit Profile
          </Link>
          <button 
            className={`${styles.profile_button} ${styles.logout_button}`}
            onClick={() => {
              localStorage.removeItem('isLoggedIn');
              // Notify components about auth state change
              window.dispatchEvent(new Event('authStateChanged'));
              router.push('/');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}