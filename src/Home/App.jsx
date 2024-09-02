import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Produtos from '../Pages/Produtos'
import HomePage from '../Pages/Inicial';


function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} /> {/* Rota para a página inicial */}
      <Route path="/produtos" element={<Produtos />}/>
          
      </Routes>
    </BrowserRouter>
  )
}

export default App
