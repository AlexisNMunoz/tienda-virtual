import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import IndexPage from './views/IndexPage'
import Favoritos from './components/Favoritos'
import Carrito from './components/Carrito'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={<IndexPage />}
          />
          <Route
            path='/favoritos'
            element={<Favoritos />}
          />
          <Route
            path='/carrito'
            element={<Carrito />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
