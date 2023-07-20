import Image from 'next/image'
import styles from './page.module.css'

import { notFound } from 'next/navigation'

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)

  return {
    title: post.title,
    desc: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <div className={styles.avatar_wapper}>
              <div className={styles.avatar}>
                <Image
                  className={styles.avt_img}
                  src={data.img}
                  fill={true}
                  alt=''
                />
              </div>
              <div>
                <h3 style={{ marginBlock: 8 }}>{data.username}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image src={data.img} fill={true} className={styles.img} alt='item' />
        </div>
      </div>
      <p className={styles.desc}>{data.content}</p>
    </div>
  )
}

export default BlogPost
