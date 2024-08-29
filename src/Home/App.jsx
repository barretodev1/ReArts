import { Route, Routes } from "react-router-dom"
import Produtos from '../Pages/Produtos'

function App() {
  return (
    <Routes>
      <Route path="/produtos" element={<Produtos />}/>
    </Routes>
  )
}

export default App
