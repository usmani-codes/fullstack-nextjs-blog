import Image from 'next/image'
import styles from './page.module.css'

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, adipisci.
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              magnam, quae possimus minus dignissimos illo.
            </p>
            <div className={styles.avatar_wapper}>
              <div className={styles.avatar}>
                <Image
                  className={styles.avt_img}
                  src={
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                  fill={true}
                  alt=''
                />
              </div>
              <div>
                <h3 style={{ marginBlock: 8 }}>john doe</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image
            src={
              'https://images.pexels.com/photos/4039155/pexels-photo-4039155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            fill={true}
            className={styles.img}
            alt='item'
          />
        </div>
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat
        eius voluptatum commodi temporibus. Repudiandae, eos cum dolore labore
        eum, placeat modi exercitationem voluptates maxime ducimus dolores nemo
        pariatur at dolor? Corrupti vel, veritatis, ullam nulla totam corporis
        saepe expedita eligendi sequi, nostrum odio. Facilis earum, atque
        inventore nostrum sint vero deserunt quis sequi cum dolor dolorem veniam
        ipsa sed perspiciatis. Cumque, fuga totam officiis omnis dolores iusto
        veniam obcaecati? Officiis quis error laudantium facere ea corrupti amet
        fugiat quas nam accusantium, pariatur inventore alias voluptatum soluta
        consequuntur quos impedit aperiam. Libero nam, deleniti dolor maxime
        <br />
        <br />
        culpa repellat nobis veritatis enim repudiandae provident illo
        temporibus sed quis totam expedita tenetur accusantium velit, vitae ut!
        Laboriosam consectetur magnam inventore delectus rem! Minus, temporibus
        <br />
        <br />
        suscipit? Impedit at natus veniam aperiam, placeat est ipsa a mollitia
        aut cumque explicabo, dignissimos provident blanditiis maxime quae unde
        numquam fugit amet nobis exercitationem. Cumque excepturi deleniti
        accusantium perferendis! Harum nihil cumque fugiat quidem tempore?
        Obcaecati fuga incidunt dolor repellat sunt doloremque? A sequi fugiat
        cupiditate, qui placeat quia enim debitis at nihil labore dolor iste
        neque expedita assumenda repudiandae cumque incidunt nisi earum ad non
        accusantium. Praesentium ipsa laborum nostrum quam quibusdam, nihil
        voluptatum non aliquid!
      </p>
    </div>
  )
}

export default BlogPost
