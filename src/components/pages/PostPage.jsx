import { useParams, Link, Navigate } from 'react-router-dom'
import { usePost } from '../../hooks/usePost'
import { posts } from '../../data/posts'
import Tag from '../ui/Tag'
import { ArrowLeftIcon, ClockIcon, CalendarIcon } from '../icons'
import styles from './PostPage.module.css'

/** Very simple renderer: bold (**text**), code (`code`), paragraphs, blank lines */
function renderContent(raw) {
  return raw.split('\n\n').map((block, bi) => {
    // Heading lines (bold-only short lines treated as h3)
    const isHeading = block.startsWith('**') && block.endsWith('**') && !block.includes('\n')
    if (isHeading) {
      return (
        <h3 key={bi} className={styles.contentH3}>
          {block.replace(/\*\*/g, '')}
        </h3>
      )
    }

    // Inline formatting within paragraphs
    const parts = block.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
    const formatted = parts.map((part, pi) => {
      if (part.startsWith('**') && part.endsWith('**'))
        return <strong key={pi} className={styles.bold}>{part.slice(2, -2)}</strong>
      if (part.startsWith('`') && part.endsWith('`'))
        return <code key={pi} className={styles.inlineCode}>{part.slice(1, -1)}</code>
      return part
    })

    return <p key={bi} className={styles.contentP}>{formatted}</p>
  })
}

export default function PostPage() {
  const { id } = useParams()
  const { post } = usePost(id)

  if (!post) return <Navigate to="/" replace />

  // Related posts (same tag, excluding current)
  const related = posts.filter((p) => p.tag === post.tag && p.id !== post.id).slice(0, 2)

  return (
    <div className={styles.page}>

      {/* ── Back link ── */}
      <Link to="/" className={styles.back}>
        <ArrowLeftIcon />
        <span>All posts</span>
      </Link>

      {/* ── Article ── */}
      <article className={`${styles.article} animate-up`}>

        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <Tag label={post.tag} color={post.tagColor} />
            <span className={styles.metaItem}><CalendarIcon /> {post.date}</span>
            <span className={styles.metaItem}><ClockIcon /> {post.readTime}</span>
          </div>

          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>{post.subtitle}</p>

          <div className={styles.byline}>
            <div className={styles.avatar}>MAK</div>
            <div>
              <p className={styles.authorName}>Muhammad Ashhad Khan</p>
              <p className={styles.authorRole}>CS Student, Karachi</p>
            </div>
          </div>

          <div className={styles.rule} />
        </header>

        {/* Body */}
        <div className={styles.body}>
          {renderContent(post.content)}
        </div>

        {/* Footer rule */}
        <div className={styles.footerRule}>
          <span className={styles.footerRuleText}>✦</span>
        </div>

      </article>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className={styles.related}>
          <p className={styles.relatedLabel}>More in <span style={{ color: post.tagColor }}>{post.tag}</span></p>
          <div className={styles.relatedGrid}>
            {related.map((r) => (
              <Link key={r.id} to={`/post/${r.id}`} className={styles.relatedCard}>
                <Tag label={r.tag} color={r.tagColor} />
                <p className={styles.relatedTitle}>{r.title}</p>
                <p className={styles.relatedDate}>{r.date}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
