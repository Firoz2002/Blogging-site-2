import BlogCard from '@components/cards/BlogCard'
import Sidebar from './Sidebar'
import styles from './styles.module.css'

export default function ContentSection() {
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className="flex items-end flex-wrap">
          <div className="w-full lg:w-1/3 mb-[100px] px-[15px]">
            <div className={styles.line}></div>
            <h5 className={styles.post_tag}> Lifestyle </h5>
            <h4 className={styles.post_title}> Welcome to this Lifestyle blog </h4>

            <p className={styles.post_content} style={{marginBottom: '70px'}}>Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. Morbi sodales, dolor id ultricies dictum</p>
            <button className={styles.original_btn}>Read More</button>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-[100px] px-[15px] relative">
              <img src="/blog_img/1.jpg" alt="" />

              <h1 className={styles.category_title_box}> 
                <a href="#" className={styles.category_title}> Lifestyle posts </a> 
              </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-[100px] px-[15px] relative">
              <img src="/blog_img/2.jpg" alt="" />

              <h1 className={styles.category_title_box}> 
                <a href="#" className={styles.category_title}> Latests posts </a> 
              </h1>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="flex lg:flex-row sm:flex-col">
          <div className="w-full lg:w-9/12 px-[15px]">
          <BlogCard 
              date={"12"}
              tag={"Lifestyle"} 
              cover_image={"/blog_img/3.jpg"}
              title={"We love colors in 2018"} 
              comments={3} author_name={"james smith"} 
              content={"Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt."} 
            />

            <BlogCard 
              date={"12"}
              tag={"Lifestyle"} 
              cover_image={"/blog_img/4.jpg"}
              title={"Party people in the house"} 
              comments={3} author_name={"james smith"} 
              content={"Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt."} 
            />

            <div className="flex mb-[50px]">
              <div className="w-full mx-[15px] relative">
                <img src="/blog_img/7.jpg" alt="" />
                <div className={styles.post_date}>
                  <a href="#">
                    10
                    <span>march</span>
                  </a>
                </div>
                <div className="mt-[50px]">
                  <div className={styles.line}></div>
                  <h5 className={styles.post_tag}> Lifestyle </h5>

                  <h4 className={styles.post_title}> 10 Tips to organize the perfect party </h4>
                  <p className={styles.post_content}> Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt. </p>
                  <div className={styles.post_meta}>
                    <p>
                      By <a href="#">james smith</a>
                    </p>
                    <p> 3 comments </p>
                  </div>
                </div>
              </div>
            </div>

            <BlogCard 
              date={"12"}
              tag={"Lifestyle"} 
              cover_image={"/blog_img/5.jpg"}
              title={"Party people in the house"} 
              comments={3} author_name={"james smith"} 
              content={"Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt."} 
            />

            <BlogCard 
              date={"12"}
              tag={"Lifestyle"} 
              cover_image={"/blog_img/6.jpg"}
              title={"We love colors in 2018"} 
              comments={3} author_name={"james smith"} 
              content={"Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt."} 
            />

            <div className="mt-[100px]">
              <button className={styles.original_btn}> Read more </button>
            </div>
          </div>

          <Sidebar />
        </div>

      </div>
    </div>
  )
}
