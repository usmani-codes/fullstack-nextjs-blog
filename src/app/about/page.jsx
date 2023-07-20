import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

export const metadata = {
  title: 'about',
  description: 'blog by usmaniCodes',
}

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={
            'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
          fill={true}
          alt=''
          className={styles.img}
        />
        <div className={styles.img_text}>
          <h1 className={styles.img_title}>Digital Storytellers</h1>
          <h2 className={styles.img_desc}>
            Handcrafing award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.text_container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We? </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nihil
            similique saepe voluptatum veniam, minima Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Nemo nihil similique saepe voluptatum
            veniam, minima
            <br />
            <br />
            incidunt nulla placeat amet neque qui. Incidunt pariatur natus
            aliquam, ipsam quos soluta molestiae obcaecati tenetur mollitia cum
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do? </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus
            quae ea quisquam non neque? Non cum totam ipsum aperiam. Placeat,
            temporibus voluptatem repellat ipsum consectetur magnam tempora
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Find and Handy
            <br />
            <br />- Mobile Apps
          </p>
          <Button text='Contact' url='contact' />
        </div>
      </div>
    </div>
  )
}
export default page
