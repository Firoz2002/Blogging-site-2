import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';

interface BlogCardProps { 
  tag: string,
  date: string,
  title: string,
  content: string,
  comments: number,
  cover_image: string,
  author_name: string,
}

const BlogCard: FC<BlogCardProps> = ({tag, date, title, content, comments, cover_image, author_name}) => {
  return (
    <div className="mb-[50px] flex items-center lg:flex-row sm:flex-col">
      <div className="w-full md:w-1/2 mx-[15px] relative">
        <img src={cover_image} alt="blog_image" />
        <div className="post_date">
          <a href="#">
            {date}
            <span>march</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-[15px] relative">
        <div className="line"></div>
        <h5 className="post_tag"> {tag} </h5>

        <Link href={`/blogs/${title.replace(/\s+/g, '-').toLowerCase()}`}>
          <h4 className="post_title"> {title} </h4>
        </Link>
        <p className="post_content"> {content} </p>

        <div className="post_meta">
          <p>
            By <a href="#"> {author_name} </a>
          </p>
          <p> {comments} comments </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;