import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
const BlogHome = () => {
  return (
    <div className={styles.main_container}>
      <Link href={'/blog/testId'} className={styles.container}>
        <div className={styles.img_container}>
          <Image
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            width={400}
            height={250}
            className={styles.img}
            alt='item'
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href={'/blog/testId'} className={styles.container}>
        <div className={styles.img_container}>
          <Image
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            width={400}
            height={250}
            className={styles.img}
            alt='item'
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}
export default BlogHome
