import React from 'react';
import styles from './styles.module.css';

interface BlogsHeaderProps {
  title?: string;
  subtitle?: string;
  tag?: string;
}

const BlogsHeader: React.FC<BlogsHeaderProps> = ({
  title = "Latest Articles",
  subtitle = "Discover our latest thoughts, ideas, and insights on various topics ranging from travel and food to technology and lifestyle.",
  tag = "OUR BLOG"
}) => {
  return (
    <div className="text-center mb-[70px]">
      <div className={`${styles.line} mx-auto`}></div>
      <h5 className={styles.post_tag}>{tag}</h5>
      <h2 className="text-3xl md:text-4xl font-medium mb-6 font-['helveticaneuemedium']">{title}</h2>
      <p className="max-w-2xl mx-auto text-[#878787] leading-8 text-sm md:text-base">{subtitle}</p>
    </div>
  );
};

export default BlogsHeader;