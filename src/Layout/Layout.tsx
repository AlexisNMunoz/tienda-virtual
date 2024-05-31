import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import Header from '../components/Header'

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)
  useEffect(() => {
    loadFromStorage()
  }, [])
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
