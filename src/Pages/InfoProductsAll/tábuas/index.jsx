import { useState } from 'react';
import '../tábuas/App.css'
import { Link } from "react-router-dom";

function Tábuas() {
const [quantidade, setQuantidade] = useState("");

  return (
    <>
    {/* Section HEADER */}
    <section className="menu">
        <header className="meu-header">
          <div>
            <Link href="http://localhost:5173/">
            <img src="../src/assets/MARCENARIA-removebg-preview.png" alt="" />
            </Link>
          </div>

          <div className="opcoes">
            <ul>
              <li>
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#sobre">Sobre</Link>
              </li>
              <li>
                <Link href="#beneficios">Benefícios</Link>
              </li>
              <li>
                <Link href="#produtos">Marcenaria</Link>
              </li>
              <li>
                <Link href="#varejo">Varejo</Link>
              </li>
            </ul>
          </div>
        </header>
    </section>
    
    {/*SECTION DE FRASE MOTIVAÇÃO*/}
    <section className='infos'>
        <div>
          <h1>"Você está a um clique de transformar sua casa com a nossa marcenaria criativa. Não perca essa oportunidade única"</h1>
        </div>
    </section>

    {/* SECTION TELA DE VENDAS   */}
    <section className='tela-vendas'>
      <div className='cards-venda'>

        {/* CARDS DE OPÇÕES DE IMAGENS */}
        <div className='imagens-opcoes'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
        </div>

        {/* CARD DE IMAGEM PRINCIPAL */}
        <div className='imagem-principal'></div>






        {/* CARD DE INFORMAÇÕES GERAIS: PREÇO, TAMANHO E ETC */}
        <div className='info-gerais'>

          {/* DIV PREÇO E TITULO */}
          <div className='nome-preço'>
            <h1>TÁBUA DE CHURRASCO</h1>
            <h2>R$3.000,00</h2>

            <div className='preço-cartao'>
              <div className='meu-h1-card'>
                <h1>10X de<span>R$3.000,00</span></h1>
              </div>

              <div className='bandeiras-cartao'>
                <div className='nossa-band'></div>
                <div className='nossa-band1'></div>
                <div className='nossa-band2'></div>
                <div className='nossa-band3'></div>
              </div>

              <div className='meu-p-desconto'>
                <p><span>5% de desconto</span> pagando com pix</p>
              </div>
              
              <div className='meios-pag'>
                <p>VER MEIOS DE PAGAMENTO</p>
              </div>

              <hr className='separa' />

            <div className='quantidade'>
              <select id="quantidades" name="quantidades" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}>
                <option value="" disabled>Quantidade</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
            </div>
              
            </div>


          </div>

          {/* DIV VALOR NO CARTÃO */}
          
              

            {/* <div className='meus-cards-band'>
              <a href=""><img src="../src/img/amex.png" alt="" /></a>
              <a href=""><img src="../src/img/aura.png" alt="" /></a>
              <a href=""><img src="../src/img/diners.png" alt="" /></a>
              <a href=""><img src="../src/img/elo.png" alt="" /></a>
              <a href=""><img src="../src/img/hiper.png" alt="" /></a>
              <a href=""><img src="../src/img/hipercard.png" alt="" /></a>
              <a href=""><img src="../src/img/mastercard.png" alt="" /></a>
              <a href=""><img src="../src/img/visa.png" alt="" /></a>
            </div> */}


          </div>
      </div>
    </section>

    </>
  );
}

export default Tábuas;
