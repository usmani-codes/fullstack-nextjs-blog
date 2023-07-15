import Link from 'next/link'
import styles from './page.module.css'

const PortfolioHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.select_title}>
        <h2>Choose a gallery</h2>
        <div className={styles.items}>
          <Link href={'/portfolio/illustrations'} className={styles.item}>
            <span className={styles.title}>Illustration</span>
          </Link>

          <Link href={'/portfolio/websites'} className={styles.item}>
            <span className={styles.title}>Websites</span>
          </Link>

          <Link href={'/portfolio/applications'} className={styles.item}>
            <span className={styles.title}>Applications</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default PortfolioHome
