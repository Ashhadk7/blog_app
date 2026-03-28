import { Link } from 'react-router-dom'
import Tag from './Tag'
import { ClockIcon, CalendarIcon } from '../icons'
import styles from './PostCard.module.css'

export default function PostCard({ post, index }) {
  return (
    <Link
      to={`/post/${post.id}`}
      className={styles.card}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top row: tag + read time */}
      <div className={styles.meta}>
        <Tag label={post.tag} color={post.tagColor} />
        <span className={styles.metaItem}>
          <ClockIcon />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h2 className={styles.title}>{post.title}</h2>

      {/* Subtitle */}
      <p className={styles.subtitle}>{post.subtitle}</p>

      {/* Excerpt */}
      <p className={styles.excerpt}>{post.excerpt}</p>

      {/* Footer: date + CTA */}
      <div className={styles.footer}>
        <span className={styles.metaItem}>
          <CalendarIcon />
          {post.date}
        </span>
        <span className={styles.readMore}>
          Read essay <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  )
}
