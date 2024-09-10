import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../suporte-celular/App.css";
import "../suporte-celular/media-queries.css"
import { Link } from "react-router-dom";

function SuporteCell() {
  const navigate = useNavigate();
  const [quantidade, setQuantidade] = useState("");

  const [imagemPrincipal, setImagemPrincipal] = useState(
    "../public/assets/pexels-ivan-samkov-449184666666666666.jpg"
  );
  const [imagemVisivel, setImagemVisivel] = useState(true); // Estado para controlar a visibilidade da imagem

  const imagens = [
    "../public/assets/pexels-ivan-samkov-4491866.jpg",
    "../public/assets/pexels-ivan-samkov-449184666666666666.jpg",
    "../public/assets/pexels-ivan-samkov-4491866.jpg",
  ];

  function GoingInfoProdutoTábua() {
    navigate("/produtos/tábuas");
  }

  function Payment() {
    navigate("/produtos/tábuas/payment")
  }

  const alterarImagemPrincipal = (novaImagem) => {
    setImagemVisivel(false); // Torna a imagem invisível para iniciar a transição
    setTimeout(() => {
      setImagemPrincipal(novaImagem);
      setImagemVisivel(true); // Torna a imagem visível novamente após a troca
    }, 500);
  };

  return (
    <>
      {/* Section HEADER */}
      <section className="menu">
        <header className="meu-header">
          <div className="img-header">
            <a href="http://localhost:5173/">
              <img src="../public/assets/MARCENARIA-removebg-preview.png" alt="" />
            </a>
          </div>

          <div className="opcoes">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#beneficios">Benefícios</a>
              </li>
              <li>
                <a href="#produtos">Marcenaria</a>
              </li>
              <li>
                <a href="#varejo">Varejo</a>
              </li>
            </ul>
          </div>
        </header>
      </section>

      {/* SECTION TELA DE VENDAS   */}
      <section className="tela-vendas">
        <div className="cards-venda">
          {/* CARDS DE OPÇÕES DE IMAGENS */}
          <div className="imagens-opcoes">
            {imagens.map((imagem, index) => (
              <div
                key={index}
                className={`img${index + 1}`}
                style={{ backgroundImage: `url(${imagem})` }}
                onClick={() => alterarImagemPrincipal(imagem)}
              ></div>
            ))}
          </div>

          {/* CARD DE IMAGEM PRINCIPAL */}
          <div className="imagem-obeserv">
            <div
              className={`imagem-principal ${imagemVisivel ? "" : "fade"}`}style={{ backgroundImage: `url(${imagemPrincipal})` }}></div>
            <div className="observcoes-produto">
              <h1>
                A Suporte para CelularPremium é fabricada em madeira nobre de
                alta qualidade,<br></br> selecionada cuidadosamente para
                garantir durabilidade e resistência. Com um<br></br> acabamento
                refinado, a superfície é tratada com óleos e ceras atóxicas,
                realçando<br></br> a beleza natural da madeira. É entregue
                pronta para uso e acompanha um manual<br></br> de cuidados para
                garantir a longevidade do produto. Peso aproximado da Tábua
                <br></br> de Churrasco Premium: 2,5kg. Dimensão da tábua: 40cm x
                30cm x 3cm (LxPxA).<br></br>
                Importante: Como nossos produtos são feitos artesanalmente,
                podem apresentar<br></br> variações de até 3mm nas medidas, para
                mais ou para menos.
              </h1>
              <p>Garantia de fabricação: 12 meses.</p>
            </div>
          </div>

          {/* CARD DE INFORMAÇÕES GERAIS: PREÇO, TAMANHO E ETC */}
          <div className="info-gerais">
            {/* DIV PREÇO E TITULO */}
            <div className="nome-preço">
              <h1>SUPORTE PARA CELULAR</h1>
              <h2>R$160,00</h2>

              <div className="preço-cartao">
                <div className="meu-h1-card">
                  <h1>
                    3X de R$53,33 s/ juros
                  </h1>
                </div>

                <div className="meu-h1-card-responsive">
                  <h1>
                    3X de R$53,33 s/ juros
                  </h1>
                </div>

                <div className="bandeiras-cartao">
                  <div className="nossa-band"></div>
                  <div className="nossa-band1"></div>
                  <div className="nossa-band2"></div>
                  <div className="nossa-band3"></div>
                </div>

                <div className="meu-p-desconto">
                  <p>
                    <span>5% de desconto</span> pagando com pix
                  </p>
                </div>

                <div className="meios-pag">
                  <p>VER MEIOS DE PAGAMENTO</p>
                </div>

                <hr className="separa" />

                <div className="quantidade">
                  <select
                    id="quantidades"
                    name="quantidades"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                  >
                    <option value="" disabled>
                      Quantidade
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                </div>

                <div className="frete-gratis">
                  <img src="../public/assets/icons8-em-trânsito-20.png" alt="" />
                  <h1>Frete Grátis</h1>
                </div>

                <div className="comprar">
                  <Link to="/produtos/tábuas/payment">
                  <button onClick={Payment}>Comprar</button>
                  </Link>
                </div>

                <div className="observcoes-produto">
                  <div className="seg-container">
                    <img src="../public/assets/icons8-cadeado-40.png" alt="" />
                    <h1>Dados seguros em toda a compra</h1>
                  </div>

                  <div className="seg-container2">
                    <hr />
                  </div>

                  <div className="seg-container">
                    <img src="../public/assets/icons8-reverter-40.png" alt="" />
                    <h1>Devolução ou troca disponíveis</h1>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* SECTION SUGESTAO DE PRODUTOS */}
      <section className="tela-sugestao">
        <div className="text-sugestao">
          <h1>SUGESTÃO DE PRODUTOS</h1>
        </div>

        <div className="card-produto2">
          <div className="produto-card2" id="tábua de churrasco">
            {" "}
            {/*CARD COMPLETO */}
            <Link to="/produtos/tábuas" onClick={GoingInfoProdutoTábua}>
              <div className="imagem-produto2"></div>
            </Link>{" "}
            {/*CARD IMAGEM */}
            <div className="h1-card">
              <h1>Tábuas de Churrasco</h1>
            </div>
            <div className="h2-card">
              <h2>R$3.000,00 no pix</h2>
            </div>
            <div className="h3-card">
              <h3>ou 12X R$245,99</h3>
            </div>
            <Link className="botao-card" to="/produtos/tábuas">
              <button onClick={GoingInfoProdutoTábua} type="button">
                COMPRAR
              </button>
            </Link>
          </div>

          <div className="produto-card2" id="Suporte para Celulargourmet">
            {" "}
            {/*CARD COMPLETO */}
            <Link to="/produtos">
              <div className="imagem-produto2"></div>
            </Link>{" "}
            {/*CARD IMAGEM */}
            <div className="h1-card">
              <h1>Suporte para Celular</h1>
            </div>
            <div className="h2-card">
              <h2>R$3.000,00 no pix</h2>
            </div>
            <div className="h3-card">
              <h3>ou 12X R$245,99</h3>
            </div>
            <Link className="botao-card" to="/produtos">
              <button type="button">COMPRAR</button>
            </Link>
          </div>

          <div className="produto-card2" id="Marcenaria Criativa">
            {" "}
            {/*CARD COMPLETO */}
            <Link to="/produtos">
              <div className="imagem-produto2"></div>
            </Link>{" "}
            {/*CARD IMAGEM */}
            <div className="h1-card">
              <h1>Suporte para Celular</h1>
            </div>
            <div className="h2-card">
              <h2>R$3.000,00 no pix</h2>
            </div>
            <div className="h3-card">
              <h3>ou 12X R$245,99</h3>
            </div>
            <Link className="botao-card" to="/produtos">
              <button type="button">COMPRAR</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SuporteCell
