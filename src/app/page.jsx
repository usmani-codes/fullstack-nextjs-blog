import Image from 'next/image'
import styles from './page.module.css'
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className={styles.imgContainer}>
      <div className={styles.content}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your idea into Reality. We bring togather teams from the globe
        </p>
        <button>see our works</button>
      </div>
      <div className={styles.image_container}>
        <Image src={Hero} alt='hero-img' />
      </div>
    </div>
  )
}
