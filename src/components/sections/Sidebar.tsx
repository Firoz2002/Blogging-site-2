import styles from "./styles.module.css";

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 lg:w-1/4 mx-[15px]">
        <div className="relative z-10 mb-[60px] text-[18px]">
            <form action="#" className={styles.search_form}>
            <input type="search" name="search" id='searchForm' placeholder='Search' />
            <input type="submit" className="hidden" value={"submit"} />
            </form>
        </div>

        <div className="relative z-10 mb-[60px]">
            <h5 className="mb-5 text-[18px]"> Subscribe to my newsletter </h5>

            <form action="#" className={styles.newsletter_form}>
            <input type="email" name="email" placeholder="Your e-mail here" />
            <button className={styles.original_btn} type='submit'> Subscribe </button>
            </form>
        </div>

        <div className="relative z-10 mb-[60px]">
            <h5 className="text-[18px] mb-[52px]"> Advertisement </h5>
            <a href="">
            <img src="/bg_img/add.gif" alt="" />
            </a>
        </div>

        <div className="relative z-10 mb-[60px]">
            <h5 className="text-[18px] mb-[52px]"> Latest Posts </h5>

            <div className="mb-[25px] flex">
            <img className={styles.blogpost_thumbnail} src="/blog_img/lp1.jpg" alt="" />

            <div>
                <a href="#" className={styles.blogpost_tag} style={{marginBottom: "0px"}}> Lifestyle </a>
                <h4 className="mb-[10px] leading-[1]"> Party people in the house </h4>
                <p className={styles.post_meta}> 12 March</p>
            </div>
            </div>
            <div className="mb-[25px] flex">
            <img className={styles.blogpost_thumbnail} src="/blog_img/lp2.jpg" alt="" />

            <div>
                <a href="#" className={styles.blogpost_tag} style={{marginBottom: "0px"}}> Lifestyle </a>
                <h4 className="mb-[10px] leading-[1]"> Party people in the house </h4>
                <p className={styles.post_meta}> 12 March</p>
            </div>
            </div>
            <div className="mb-[25px] flex">
            <img className={styles.blogpost_thumbnail} src="/blog_img/lp3.jpg" alt="" />

            <div>
                <a href="#" className={styles.blogpost_tag} style={{marginBottom: "0px"}}> Lifestyle </a>
                <h4 className="mb-[10px] leading-[1]"> Party people in the house </h4>
                <p className={styles.post_meta}> 12 March</p>
            </div>
            </div>
            <div className="mb-[25px] flex">
            <img className={styles.blogpost_thumbnail} src="/blog_img/lp4.jpg" alt="" />

            <div>
                <a href="#" className={styles.blogpost_tag} style={{marginBottom: "0px"}}> Lifestyle </a>
                <h4 className="mb-[10px] leading-[1]"> Party people in the house </h4>
                <p className={styles.post_meta}> 12 March</p>
            </div>
            </div>
        </div>

        <div className={`${styles.tags} relative z-10 mb-[60px]`}>
            <h5 className="mb-[52px] text-[18px]"> Tags </h5>
            <ul>
            <li> <a href='#'> design</a> </li>
            <li> <a href='#'> fashion </a> </li>
            <li> <a href='#'> travel </a> </li>
            <li> <a href='#'> music </a> </li>
            <li> <a href='#'> party </a> </li>
            <li> <a href='#'> video </a> </li>
            <li> <a href='#'> photography </a> </li>
            <li> <a href='#'> adventure </a> </li>
            </ul>
        </div>
        
        </div>
  )
}
