import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogHome = async () => {
  const data = await getData()
  return (
    <div className={styles.main_container}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.img_container}>
            <Image
              src={item.img}
              width={400}
              height={250}
              className={styles.img}
              alt='item'
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default BlogHome
