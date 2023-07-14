import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy;2023 usmaniCodes. All rights reserved</div>
      <div className={styles.social_icons}>
        <Image
          src='/1.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='social-icon'
        />
        <Image
          src='/2.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='social-icon'
        />
        <Image
          src='/3.png'
          width={15}
          height={15}
          className={styles.icon}
          alt='social-icon'
        />
      </div>
    </div>
  )
}
export default Footer
