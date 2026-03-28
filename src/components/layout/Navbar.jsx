import { Link, useLocation } from 'react-router-dom'
import { PenIcon } from '../icons'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandIcon}><PenIcon /></span>
          <span className={styles.brandText}>Ashhad<span className={styles.brandDot}>.</span>dev</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/" className={`${styles.navLink} ${isHome ? styles.active : ''}`}>
            Posts
          </Link>
          <a
            href="https://github.com/Ashhadk7"
            target="_blank"
            rel="noreferrer"
            className={styles.navLink}
          >
            GitHub ↗
          </a>
        </nav>
      </div>

      {/* Rule */}
      <div className={styles.rule} />
    </header>
  )
}
