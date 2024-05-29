import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import IndexPage from './views/IndexPage'
import Favoritos from './components/Favoritos'
import Carrito from './components/Carrito'
import Productos from './components/Productos'

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
