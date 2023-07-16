'use client'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '@/components/darkMode/DarkModeToggle'

const nav_links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
]

const Navebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>UsmaniCodes</Link>
      </div>
      <div className={styles.links}>
        <DarkModeToggle />
        {nav_links.map((item) => (
          <Link key={item.id} href={item.url} className={styles.link}>
            {item.title}
          </Link>
        ))}
        <button
          className={styles.btn_logout}
          onClick={() => {
            console.log('logout')
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
export default Navebar
