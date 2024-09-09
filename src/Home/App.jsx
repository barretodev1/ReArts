import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../Pages/Scroll.js';
import Produtos from '../Pages/Produtos';
import HomePage from '../Pages/Inicial';
// PRODUTOS
import TábuaChurrasco from '../Pages/InfoProductsAll/Tábuas/tábua-churrasco/index.jsx';
import TábuaPizza from '../Pages/InfoProductsAll/Tábuas/tábua-pizza/index.jsx';
import SuporteCell from '../Pages/InfoProductsAll/Outros/suporte-celular/index.jsx';

// TELA DE PAGAMENTO DOS PRODUTOS
import PaymentChurrasco from '../Pages/PagePayment/PaymentTábuas/PaymentTabuaChurrasco/index.jsx';
import PaymentPizza from '../Pages/PagePayment/PaymentTábuas/PaymentTabuaPizza/index.jsx';
import PaymentCell from '../Pages/PagePayment/PaymentOutros/PaymentCell/index.jsx';

function App() {

  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>      
        <Route path="/ReArts" element={<HomePage />} />
        <Route path="/ReArts/produtos" element={<Produtos />}/>

        {/* PRODUTOS */}
        <Route path="/ReArts/produtos/tábuas" element={<TábuaChurrasco />}/>
        <Route path="/ReArts/produtos/tábuas-pizza" element={<TábuaPizza />}/>
        <Route path="/ReArts/produtos/suporte-cell" element={<SuporteCell />}/>

        {/* TELA DE PAGAMENTO DE CADA PRODUTO */}
        <Route path="/produtos/tábuas/payment" element={<PaymentChurrasco />}/>
        <Route path="/produtos/tábuas-pizza/payment" element={<PaymentPizza />}/>
        <Route path="/produtos/suporte-cell/payment" element={<PaymentCell />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
