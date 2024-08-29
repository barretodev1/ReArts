import { Link } from "react-router-dom"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* MEU HEADER */}
      <section className="menu">
        <header className="meu-header">
          <div>
            <img src="src/assets/MARCENARIA-removebg-preview.png" alt="" />
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

      {/* MEU MAIN (PRINCIPAL) */}
      <section id="home">
        <div className="principal">
          <div className="meu-texto">
            <p className="meu-p">ReArts - Marcenaria Criativa</p>
            <h1>
              A ReArts é uma marcenaria criativa que combina
              <br /> o talento artesanal com a inovação no design
              <br /> transformando madeira em peças únicas e funcionais.
              <br />
              Cada criação da ReArts é fruto de um processo que
              <br />
              valoriza a sustentabilidade, o reaproveitamento
              <br /> de materiais e a personalização, permitindo que
              <br /> os clientes tragam um toque exclusivo.
            </h1>
            <button className="botao-orcamento">
              <a href="https://api.whatsapp.com/send?phone=5511942387383">
                Faça seu orçamento
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* MEU PAGE (SOBRE NÓS) */}
      <section id="sobre" className="page-sobre">
        <div className="sobre-nos">
          <h1>MAIS SOBRE NÓS</h1>
        </div>

        <div className="main-sobre">
          <div className="img-sobre" data-aos="fade-right">
            <img src="src/assets/sobre.png" alt="" />
          </div>

          <div className="secao-texto">
            <div className="meus-p-h2">
              <p>Missão</p>
              <h2>
                Na ReArts, nossa missão é transformar o universo da marcenaria
                <br /> através da criatividade e da paixão. Dedicamo-nos a criar
                peças únicas
                <br /> e inovadoras que não apenas atendem às necessidades
                funcionais de
                <br /> nossos clientes, mas também elevam o padrão estético e
                emocional de
                <br /> seus espaços. Buscamos constantemente a excelência em
                cada detalhe.
              </h2>
            </div>

            <div className="meus-p-h2">
              <p>Visão</p>
              <h2>
                Almejamos ser reconhecidos como a principal <br />
                referência no mercado de marcenaria criativa, destacando-nos
                <br /> pela nossa capacidade de oferecer soluções que não apenas
                <br />
                atendem, mas superam as expectativas dos nossos clientes.
                <br /> Nosso objetivo é estabelecer novos padrões de excelência.
              </h2>
            </div>

            <div className="meus-p-h2">
              <p>Valores</p>
              <h2>
                Na ReArts, nossos valores são a base de tudo o que fazemos.
                <br /> Comprometemo-nos a garantir a máxima qualidade em cada
                <br /> projeto que realizamos, buscando sempre a perfeição em
                cada
                <br /> detalhe e entrega.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* MEU PAGE BENEFÍCIOS */}
      <section className="beneficio" id="beneficios">
        <div className="beneficios">
          <h1>NOSSOS BENEFÍCIOS</h1>
        </div>

        <article className="card-bloco-geral">
          {" "}
          {/* BLOCO GERAL, ENGLOBA AS 2 LISTAS */}
          <div className="card-fileira-1">
            {" "}
            {/*BLOCO DE (PRIMEIRA FILEIRA) */}
            <div data-aos="fade-right" className="bloco">
              {" "}
              {/*BLOCO 1*/}
              <div>
                <h1>LOGÍSTICA PLUS</h1>
                <p>Entrega em até 7 dias úteis</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-caminhão-100.png" alt="" />
              </div>{" "}
              {/*IMAGEM*/}
            </div>
            <div data-aos="fade-down" className="bloco">
              {" "}
              {/*BLOCO 2*/}
              <div>
                <h1>DESCONTO ÚNICO</h1>
                <p>Descontos na 2º compra</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-dinheiro-100.png" alt="" />
              </div>{" "}
              {/*IMAGEM*/}
            </div>
            <div data-aos="fade-left" className="bloco">
              {" "}
              {/*BLOCO 3*/}
              <div>
                <h1>PERSONALIZAÇÃO</h1>
                <p>Marcenaria Sob Medida</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-régua-100.png" alt="" />
              </div>
              <div className='orçamento'>
                <a href='#orçamento'>Realizar um orçamento</a>
              </div>
              {/*IMAGEM*/}
            </div>
          </div>
          {/* ESPAÇO ENTRE BLOCO 1 E BLOCO 2 */}
          <div className="card-fileira-2">
            {" "}
            {/*BLOCO DE (PRIMEIRA FILEIRA) */}
            <div data-aos="fade-right" className="bloco">
              {" "}
              {/*BLOCO 1*/}
              <div>
                <h1>GARANTIA PLENA</h1>
                <p>Garantia de 30 dias</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-garantia-100.png" alt="" />
              </div>{" "}
              {/*IMAGEM*/}
            </div>
            <div data-aos="fade-up" className="bloco">
              {" "}
              {/*BLOCO 2*/}
              <div>
                <h1>ALTA QUALIDADE</h1>
                <p>Qualidade Diferencial</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-qualidade-100.png" alt="" />
              </div>{" "}
              {/*IMAGEM*/}
            </div>
            <div data-aos="fade-left" className="bloco">
              {" "}
              {/*BLOCO 3*/}
              <div>
                <h1>CRÉDITO EM 12X</h1>
                <p>Aceitamos até 12x</p>
              </div>{" "}
              {/*TEXTO*/}
              <div>
                <img src="src/assets/icons8-cartão-100.png" alt="" />
              </div>{" "}
              {/*IMAGEM*/}
            </div>
          </div>
        </article>
      </section>

      {/* MEU PAGE CARDS DE VENDA */}
      <section  id="produtos" className="produtos">
        <div className='nossa-marcenaria'>
          <h1>NOSSA MARCENARIA</h1>
        </div>

        {/* DAQUI PRA BAIXO - NOSSOS PRODUTOS/MARCENARIA */}
        <article className='card-produto'>
          <div className='produto-card'> {/*CARD COMPLETO */}
            <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
            <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>

          {/* ESPAÇOS ENTRE OS CARDS */}

          <div className='produto-card'> {/*CARD COMPLETO */}
          <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
          <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>
        </article>

        <article className='card-produto'>
          <div className='produto-card'> {/*CARD COMPLETO */}
            <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
            <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>

          {/* ESPAÇOS ENTRE OS CARDS */}

          <div className='produto-card'> {/*CARD COMPLETO */}
          <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
          <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>
        </article>

        <article className='card-produto'>
          <div className='produto-card'> {/*CARD COMPLETO */}
            <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
            <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>

          {/* ESPAÇOS ENTRE OS CARDS */}

          <div className='produto-card'> {/*CARD COMPLETO */}
          <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
          <div className='h1-card'><h1>Lorem ipsum dolor sit amet, consectetur</h1></div>
            <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
            <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
            <Link className='botao-card' to="/produtos"><button>COMPRAR</button></Link>
          </div>
        </article>

        <div>
          <Link className="ver-mais" to="/produtos" ><button>VER MAIS PRODUTOS</button></Link>
        </div>

      </section>
    </>
  );
}

export default App;
