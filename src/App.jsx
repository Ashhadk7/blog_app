import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import HomePage from './components/pages/HomePage'
import PostPage from './components/pages/PostPage'
import NotFoundPage from './components/pages/NotFoundPage'
import styles from './App.module.css'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className={styles.shell}>
      <ScrollToTop />
      <Navbar />
      <main className={styles.main}>
        <Routes>
          <Route path="/"         element={<HomePage />}     />
          <Route path="/post/:id" element={<PostPage />}     />
          <Route path="*"         element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
