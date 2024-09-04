import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Produtos from '../Pages/Produtos'
import HomePage from '../Pages/Inicial';
import Tábuas from '../Pages/InfoProductsAll/tábuas'
import ScrollToTop from '../Pages/Scroll.js'

function App() {

  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} /> {/* Rota para a página inicial */}
      <Route path="/produtos" element={<Produtos />}/>
      <Route path="/produtos/tábuas" element={<Tábuas />}/>

          
      </Routes>
    </BrowserRouter>
  )
}

export default App
