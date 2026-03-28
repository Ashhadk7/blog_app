import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found.</h1>
      <p className={styles.sub}>This essay doesn't exist — or maybe it's still being written.</p>
      <Link to="/" className={styles.back}>← Back to all posts</Link>
    </div>
  )
}
