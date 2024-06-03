import { useEffect, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppStore } from '../store/useAppStore'
import Header from '../components/Header'

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)
  const cart = useAppStore((state) => state.cart)

  const hasCart = useMemo(() => cart.length, [cart])

  useEffect(() => {
    loadFromStorage()
    hasCart
  }, [hasCart, loadFromStorage])
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
