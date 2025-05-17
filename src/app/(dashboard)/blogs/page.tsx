'use client'
import React, { useState, useEffect } from 'react'
import BlogCard from '@/components/cards/BlogCard'
import Pagination from '@/components/pagination/Pagination'
import BlogsHeader from '@/components/sections/BlogsHeader'
import LoadingState from '@/components/sections/LoadingState'
import { collection, getDocs, query, orderBy, limit, startAfter, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '@/app/config/firebase/config'
import styles from '@/components/sections/styles.module.css'
import Sidebar from '@/components/sections/Sidebar'

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 5
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage * blogsPerPage < mockBlogs.length) {
      setCurrentPage(prev => prev + 1)
    }
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      setTimeout(() => {
        setBlogs(mockBlogs)
        setLoading(false)
      }, 800)
    }
    fetchBlogs()
  }, [])

  const mockBlogs = [
    {
      id: '1',
      tag: 'Travel',
      date: '15',
      month: 'March',
      title: 'The Ultimate Guide to Bali',
      content: 'Bali, the famed Island of the Gods, with its varied landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces and barren volcanic hillsides all providing a picturesque backdrop to its colorful, deeply spiritual and unique culture.',
      comments: 24,
      cover_image: '/blog_img/3.jpg',
      author_name: 'John Doe'
    },
    {
      id: '2',
      tag: 'Food',
      date: '22',
      month: 'April',
      title: 'Exploring Street Food in Bangkok',
      content: "Bangkok is renowned for its bustling street food scene. From the savory to the sweet, from the mild to the mind-blowingly spicy, Bangkok's street food scene offers an amazing variety of flavors that will leave your taste buds tingling.",
      comments: 18,
      cover_image: '/blog_img/5.jpg',
      author_name: 'Jane Smith'
    },
    {
      id: '3',
      tag: 'Technology',
      date: '05',
      month: 'May',
      title: 'The Future of AI in Everyday Life',
      content: "Artificial Intelligence is no longer just a concept from science fiction. It's becoming increasingly integrated into our daily lives, from smart home devices to personalized recommendations and autonomous vehicles.",
      comments: 32,
      cover_image: '/blog_img/3.jpg',
      author_name: 'Alex Johnson'
    },
    {
      id: '4',
      tag: 'Lifestyle',
      date: '17',
      month: 'June',
      title: 'Minimalism: Living With Less',
      content: "Minimalism isn't about having less, it's about making room for more of what matters. This lifestyle choice focuses on the reduction of excess in favor of focusing on what's important in life.",
      comments: 15,
      cover_image: '/blog_img/4.jpg',
      author_name: 'Sarah Williams'
    },
    {
      id: '5',
      tag: 'Health',
      date: '09',
      month: 'July',
      title: 'The Benefits of Meditation',
      content: "Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.",
      comments: 27,
      cover_image: '/blog_img/5.jpg',
      author_name: 'Michael Brown'
    },
    {
      id: '6',
      tag: 'Travel',
      date: '30',
      month: 'August',
      title: 'Hidden Gems of Europe',
      content: 'Beyond the well-trodden paths of Paris, Rome, and Barcelona lie countless hidden gems waiting to be discovered. From charming small towns to breathtaking natural landscapes, Europe offers endless opportunities for exploration.',
      comments: 21,
      cover_image: '/blog_img/6.jpg',
      author_name: 'Emily Davis'
    },
  ]

  const filteredBlogs = selectedTag 
    ? mockBlogs.filter(blog => blog.tag === selectedTag)
    : mockBlogs

  const displayBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
  const mockHasMore = currentPage * blogsPerPage < filteredBlogs.length

  const uniqueTags = Array.from(new Set(mockBlogs.map(blog => blog.tag)))

  return (
    <div className="py-[100px]">
      <div className="container mx-auto px-4">
        <BlogsHeader 
          title="Our Latest Articles" 
          subtitle="Discover our thoughts, ideas, and insights on various topics from around the world"
          tag="THE BLOG"
        />

        <div className="flex lg:flex-row sm:flex-col">
          <div className="w-full lg:w-9/12 px-[15px]">
            {loading ? (
              <LoadingState message="Loading blogs..." />
            ) : displayBlogs.length === 0 ? (
              <div className="text-center py-20">
                <p className={styles.post_content}>No blogs found</p>
              </div>
            ) : (
              displayBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  tag={blog.tag}
                  date={blog.date}
                  title={blog.title}
                  content={blog.content}
                  comments={blog.comments}
                  cover_image={blog.cover_image}
                  author_name={blog.author_name}
                />
              ))
            )}

            {!loading && displayBlogs.length > 0 && (
              <div className="mt-[100px] flex justify-center">
                <button 
                  onClick={goToPreviousPage} 
                  disabled={currentPage === 1}
                  className={`${styles.original_btn} mr-4 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Previous
                </button>
                <button 
                  onClick={goToNextPage} 
                  disabled={!mockHasMore}
                  className={`${styles.original_btn} ${!mockHasMore ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  )
}
