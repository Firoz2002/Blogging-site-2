'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from './styles.module.css';
import { signOut } from 'next-auth/react';
import BlogCard from '@/components/cards/BlogCard';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  joinedDate: string;
  blogCount: number;
  picture?: string;
}

interface Blog {
  id: string;
  title: string;
  content: string;
  banner: string;
  category: string;
  user_id: any;
  createdAt?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<UserProfile>();

  const { data: session, status } = useSession();

  useEffect(() => {
    const handleAuthStateChange = () => {
      if (status === 'authenticated') {
        setIsLoggedIn(true);
        setProfile({
          name: session?.user?.name || 'User',
          email: session?.user?.email || '',
          bio: 'Description about yourself.',
          joinedDate: (session?.user as any)?.joinedDate || new Date().toISOString(),
          blogCount: 12,
          picture: session?.user?.image
        });
      } else {
        setIsLoggedIn(false);
      }
      setLoading(false);
    };

    handleAuthStateChange();
  }, [status, session]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?user=current');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        const processedBlogs = data.map((blog: Blog) => ({
          ...blog,
          createdAt: blog.createdAt || new Date().toISOString()
        }));
        
        setBlogs(processedBlogs);
        if (profile) {
          setProfile({
            ...profile,
            blogCount: processedBlogs.length
          });
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (isLoggedIn) {
      fetchBlogs();
    }
  }, [isLoggedIn, profile]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_header}>
        <div className={styles.profile_avatar}>
          {profile.picture ? (
            <img src={profile.picture} alt="Profile Picture" className={styles.avatar_image} />
          ) : (
            <span>{profile.name.charAt(0)}</span>
          )}
        </div>
        <div className={styles.profile_info}>
          <h1>{profile.name}</h1>
          <p className={styles.profile_email}>{profile.email}</p>
          <p className={styles.profile_joined}>
            Member since {new Date(profile.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
      
      <div className={styles.profile_content}>
        {/* Left Column */}
        <div>
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
          
          <div className={styles.profile_actions}>
            <Link href="/settings" className={styles.profile_button}>
              Edit Profile
            </Link>
            <button 
              className={`${styles.profile_button} ${styles.logout_button}`}
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Logout
            </button>
          </div>
        </div>
        
        {/* Right Column */}
        <div>
          <div className={styles.profile_section}>
            <div className={styles.section_header}>
              <h2>Recent Blogs</h2>
              <Link href="/my-blogs" className={styles.view_all}>
                View All →
              </Link>
            </div>
            
            <div className={styles.recent_blogs}>
              {blogs.length > 0 ? (
                blogs.slice(0, 3).map((blog) => (
                  <BlogCard
                    key={blog.id}
                    tag={blog.category}
                    date={new Date(blog.createdAt || Date.now()).getDate().toString()}
                    title={blog.title}
                    content={blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...'}
                    comments={0}
                    cover_image={blog.banner}
                    author_name={profile?.name || 'Anonymous'}
                  />
                ))
              ) : (
                <p className={styles.placeholder_text}>
                  Your recent blog posts will appear here.
                </p>
              )}
            </div>
          </div>
          
          <div className={styles.profile_section}>
            <div className={styles.section_header}>
              <h2>Recent Activity</h2>
            </div>
            
            <div className={styles.recent_blogs}>
              <p className={styles.placeholder_text}>
                Your recent activity will appear here, including comments and likes on other blogs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}