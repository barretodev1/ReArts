import { useState } from 'react';
import './App.css';
import '../Produtos/media-queries.css'
import { Link } from "react-router-dom";
import  MarcenariaLogo  from '../../../public/assets/MARCENARIA-removebg-preview.png'

function Produtos() {

  function GoingInfoProdutoTábua() {
    navigate('/produtos/tábuas')
  }

  const [cardsVisiveis, setCardsVisiveis] = useState(3);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const vejaMaisCards = () => {
    setCardsVisiveis(prevcardsVisiveis => prevcardsVisiveis + 3); // Exibe mais 6 cards a cada clique
  };

  const toggleCategory = (category) => {
    setSelectedCategories(prevSelectedCategories => 
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(c => c !== category)
        : [...prevSelectedCategories, category]
    );
  };
  
  const cards = [
    { id: 1, titulo: "Marcenaria Criativa", preço: "R$3.000,00 no pix", observações: "ou 12X R$245,99", category: "Marcenaria Criativa"},
    { id: 2, titulo: "Varejo", preço: "R$100,00 no pix", observações: "ou 12X R$245,99", category: "Varejo"},
    { id: 3, titulo: "Móveis", preço: "R$312,00 no pix", observações: "ou 12X R$245,99", category: "Móveis"},
    { id: 4, titulo: "Personalização", preço: "R$331,00 no pix", observações: "ou 12X R$245,99", category: "Personalização"},
    { id: 5, titulo: "Tábuas", preço: "R$421,00 no pix", observações: "ou 12X R$245,99", category: "Tábuas"},
    { id: 6, titulo: "Marcenaria Criativa", preço: "R$124,00 no pix", observações: "ou 12X R$245,99", category: "Marcenaria Criativa"},
    { id: 7, titulo: "Marcenaria Criativa", preço: "R$145,00 no pix", observações: "ou 12X R$245,99", category: "Marcenaria Criativa"},
    { id: 8, titulo: "Varejo", preço: "R$135,00 no pix", observações: "ou 12X R$245,99", category: "Varejo"},
  ];

  const filteredCards = selectedCategories.length > 0
  ? cards.filter(card => selectedCategories.includes(card.category))
  : cards;

  return (
    <>
      {/* MEU SECTION HEADER */}
      <section className="menu">
        <header className="meu-header">
          <div className='img-header'>
            <a href="https://rearts.netlify.app/">
            <img src={MarcenariaLogo} alt="" />
            </a>
          </div>

          <div className="opcoes">
            <ul>
              <li>
                <a href="http://localhost:5173">Home</a>
              </li>
              <li>
                <a href="http://localhost:5173">Sobre</a>
              </li>
              <li>
                <a href="http://localhost:5173">Benefícios</a>
              </li>
              <li>
                <a href="http://localhost:5173">Marcenaria</a>
              </li>
              <li>
                <a href="http://localhost:5173">Varejo</a>
              </li>
            </ul>
          </div>
        </header>
      </section>

      <section className='produtos-2'>
        <div className='nossos-produtos-text'>
          <h1>NOSSA MARCENARIA</h1>
        </div>

        {/* Quadrado de filtragem */}
        <div className='filtros'>
          <div className='config'>
            <h2>Filtrar por Categoria:</h2>
            <label><input type="checkbox" value="Móveis" onChange={() => toggleCategory("Móveis")}/>Móveis</label>
            <label><input type="checkbox" value="Marcenaria Criativa" onChange={() => toggleCategory("Marcenaria Criativa")}/>Marcenaria Criativa</label>
            <label><input type="checkbox" value="Tábuas" onChange={() => toggleCategory("Tábuas")}/>Tábuas</label>
            <label><input type="checkbox" value="Personalização" onChange={() => toggleCategory("Personalização")}/>Personalização</label>
            <label><input type="checkbox" value="Varejo" onChange={() => toggleCategory("Varejo")}/> Varejo</label>
          </div>
        </div>

        
        {/* Exibir apenas os cards visíveis */}
        {filteredCards.slice(0, cardsVisiveis).map((card, index) => (
          <article className='card-produto2' key={card.id}>
            <div className='produto-card2'>
              <Link to="/produtos"><div className='imagem-produto'></div></Link>
              <div className='h1-card'><h1>{card.titulo}</h1></div>
              <div className='h2-card'><h2>{card.preço}</h2></div>
              <div className='h3-card'><h3>{card.observações}</h3></div>
              <Link className='botao-card' to="/produtos"><button type="button">COMPRAR</button></Link>
            </div>

            <div className='produto-card2'>
              <Link to="/produtos"><div className='imagem-produto'></div></Link>
              <div className='h1-card'><h1>{card.titulo}</h1></div>
              <div className='h2-card'><h2>{card.preço}</h2></div>
              <div className='h3-card'><h3>{card.observações}</h3></div>
              <Link className='botao-card' to="/produtos"><button type="button">COMPRAR</button></Link>
            </div>
          </article>
        ))}

        {/* Botão "Veja mais" */}
        <div className='button-veja-mais'>
          {cardsVisiveis < cards.length && (
            <button className="botao-carregar-mais" onClick={vejaMaisCards}>Veja mais</button>
          )}
        </div>
      </section>
    </>
  );
}

export default Produtos;
