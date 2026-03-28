import { posts } from '../../data/posts'
import PostCard from '../ui/PostCard'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── Hero header ── */}
      <section className={`${styles.hero} animate-up`}>
        <p className={styles.heroEyebrow}>Writing by</p>
        <h1 className={styles.heroTitle}>Muhammad<br />Ashhad Khan</h1>
        <p className={styles.heroSub}>
          Essays on learning, building, and thinking clearly about code.
          CS student. Karachi.
        </p>
        <div className={styles.heroDivider} />
        <p className={styles.heroCount}>{posts.length} essays</p>
      </section>

      {/* ── Post grid ── */}
      <section className={styles.grid}>
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </section>

    </div>
  )
}
