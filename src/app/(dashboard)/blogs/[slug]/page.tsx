"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter, useParams, usePathname } from 'next/navigation';


import styles from "./styles.module.css";
import Sidebar from '@components/sections/Sidebar';

export default function BlogPostPage() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    fetch('/api' + pathname)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="w-full h-auto mb-[50px] relative">
        <img src={'/bg_img/b5.jpg'} alt="blog-cover-image" className="object-cover"/>
        <div className={`post_date`}>
          <a href="#">
            12
            <span>march</span>
          </a>
        </div>
      </div>
      <div className="flex container lg:flex-row sm:flex-col">
        <div className="lg:max-w-[75%] px-[15px]">
          <div>
            <div className="line"></div>
            <h5 className="post_tag"> Lifestyle </h5>
            <h4 className="post_title" style={{marginBottom: "8px"}}> Party people in the house </h4>

            <div className="post_meta" style={{marginBottom: "50px"}}>
              <p>
                By <a href="#">james smith</a>
              </p>
              <p> 3 comments </p>
            </div>
          </div>
          <div className="post_content">
            <p>
              Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu libero consequat tempus. Quisque molestie convallis tempus. Ut semper purus metus, a euismod sapien sodales ac. Duis viverra eleifend fermentum. Donec sagittis lacus sit amet augue sodales, vel cursus enim tristique. Maecenas vitae massa ut est consectetur sagittis quis vitae tortor. Sed et massa vel nisi dapibus pretium et et leo.
            </p>

            <p>
              Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum, diam odio tempor purus, at ultrices elit nulla ac nisl. Vestibulum enim sapien, blandit finibus elit vitae, venenatis tempor enim. Ut varius eros at fringilla aliquet. Sed sed sodales quam. Nam fermentum sed turpis sollicitudin lobortis.
            </p>

            <p>
              Proin a nibh dignissim, volutpat mauris vitae, pellentesque nisi. In euismod non ligula at gravida. Nunc blandit eget enim vel mattis. Sed semper, purus ac suscipit scelerisque, eros dui fermentum tortor, vitae facilisis lacus nulla sit amet diam. Nullam eget sagittis mi. Suspendisse vitae volutpat lorem. Cras porta velit id sagittis ultrices. Maecenas efficitur tellus ac aliquam molestie. Morbi vel ipsum gravida, ultricies nunc sed, posuere purus. Donec ipsum lectus, congue ut fermentum vitae, molestie hendrerit erat. Sed lacinia accumsan egestas. Cras ac ipsum a ante placerat pellentesque.
            </p>

          </div>

          <div className={styles.blog_post_author}>
            <div className={styles.author_thumbnail}>
                <img src="/bg_img/b6.jpg" alt="" />
            </div>
            <div className={styles.author_info}>
                <div className="line"></div>
                <span className="author-role">Author</span>
                <h4><a href="#" className="author-name">James Morrison</a></h4>
                <p>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero.</p>
            </div>
          </div>

          <div className={styles.comment_section}>
            <h5 className={styles.title}> Comments </h5>

            <ol>
              <li className={styles.comment}>
                <div className={styles.comment_content}>
                  <div className={styles.comment_author}>
                    <img src="/bg_img/b7.jpg" alt="author" />
                  </div>
                  <div className={styles.comment_meta}>
                    <a href="#" className={styles.comment_date}>March 12</a>
                    <p><a href="#" className={styles.post_author}>William James</a></p>
                    <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                    <a href="#" className={styles.comment_reply}>Reply</a>
                  </div>
                </div>
                <ol className={styles.children}>
                  <li className={styles.comment}>
                    <div className={styles.comment_content}>
                      <div className={styles.comment_author}>
                        <img src="/bg_img/b7.jpg" alt="author" />
                      </div>
                      <div className={styles.comment_meta}>
                        <a href="#" className={styles.comment_date}>March 12</a>
                        <p><a href="#" className={styles.post_author}>William James</a></p>
                        <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                        <a href="#" className={styles.comment_reply}>Reply</a>
                      </div>
                    </div>
                  </li>
                </ol>
              </li>
              
              <li className={styles.comment}>
                <div className={styles.comment_content}>
                  <div className={styles.comment_author}>
                    <img src="/bg_img/b7.jpg" alt="author" />
                  </div>
                  <div className={styles.comment_meta}>
                    <a href="#" className={styles.comment_date}>March 12</a>
                    <p><a href="#" className={styles.post_author}>William James</a></p>
                    <p>Efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.</p>
                    <a href="#" className={styles.comment_reply}>Reply</a>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  )
}
