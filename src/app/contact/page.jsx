import Image from 'next/image'
import styles from './page.module.css'

const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <Image
            src={'/contact.png'}
            alt='contact'
            fill={true}
            className={styles.img}
          />
        </div>

        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='email' placeholder='name' className={styles.input} />
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            className={styles.textarea}
          ></textarea>
        </form>
      </div>
    </div>
  )
}

export default contact
