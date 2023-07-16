import Image from 'next/image'
import styles from './page.module.css'

const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.cat_title}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.img_container}>
          <Image
            fill={true}
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            className={styles.img}
            alt='item'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.img_container}>
          <Image
            fill={true}
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            className={styles.img}
            alt='item'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
        <div className={styles.img_container}>
          <Image
            fill={true}
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            className={styles.img}
            alt='item'
          />
        </div>
      </div>
    </div>
  )
}

export default Category
