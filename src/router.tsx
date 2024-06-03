import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import IndexPage from './views/IndexPage'
import Productos from './components/Productos'
import FavoritePage from './views/FavoritePage'
import CartPage from './views/CartPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<IndexPage />}
            index
          />
          <Route
            path='/productos'
            element={<Productos />}
            index
          />
          <Route
            path='/favoritos'
            element={<FavoritePage />}
          />
          <Route
            path='/carrito'
            element={<CartPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
