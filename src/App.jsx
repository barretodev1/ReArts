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
            <img src="./src/assets/MARCENARIA-removebg-preview.png" alt="" />
          </div>

          <div className="opcoes">
            <p><a href="#home">Home</a></p>
            <p><a href="#sobre">Sobre</a></p>
            <p><a href="#beneficios">Benefícios</a></p>
            <p><a href="#marcenaria">Marcenaria</a></p>
            <p><a href="#varejo">Varejo</a></p>
          </div>
        </header>
      </section>

      {/* MEU MAIN (PRINCIPAL) */}
      <section id="home">
        <div className="principal">
          <div className="meu-texto">
            <p className="meu-p">ReArts - Marcenaria Criativa</p>
            <h1>
              A ReArts é uma marcenaria criativa que combina<br></br> o talento
              artesanal com a inovação no design<br></br> transformando madeira
              em peças únicas e funcionais.<br></br>
              Cada criação da ReArts é fruto de um processo que<br></br>{" "}
              valoriza a sustentabilidade, o reaproveitamento<br></br> de
              materiais e a personalização, permitindo que<br></br> os clientes
              tragam um toque exclusivo.
            </h1>
            <button className="botao-orcamento">
              <a href="https://api.whatsapp.com/send?phone=5511942387383">
                Faça seu orçamento
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* MEU PAGE (SOBRE) */}
      <section id="sobre" className="page-sobre">
        <div className="sobre-nos">
          <h1>SOBRE NÓS</h1>
        </div>

        <div className="main-sobre">
          <div className="img-sobre" data-aos="fade-right">
            <img src="./src/assets/sobre.png" alt="" />
          </div>

          <div className="secao-texto">
            <div className="meus-p-h2">
              <p>Missão</p>
              <h2>
                Na ReArts, nossa missão é transformar o universo da marcenaria
                <br></br> através da criatividade e da paixão. Dedicamo-nos a
                criar peças únicas<br></br> e inovadoras que não apenas atendem
                às necessidades funcionais de<br></br> nossos clientes, mas
                também elevam o padrão estético e emocional de<br></br> seus
                espaços. Buscamos constantemente a excelência em cada detalhe.
              </h2>
            </div>

            <div className="meus-p-h2">
              <p>Visão</p>
              <h2>
                Almejamos ser reconhecidos como a principal <br></br>referência
                no mercado de marcenaria criativa, destacando-nos<br></br> pela
                nossa capacidade de oferecer soluções que não apenas<br></br>{" "}
                atendem, mas superam as expectativas dos nossos clientes.
                <br></br> Nosso objetivo é estabelecer novos padrões de
                excelência.
              </h2>
            </div>

            <div className="meus-p-h2">
              <p>Valores</p>
              <h2>
                Na ReArts, nossos valores são a base de tudo o que fazemos.
                <br></br> Comprometemo-nos a garantir a máxima qualidade em cada
                <br></br> projeto que realizamos, buscando sempre a perfeição em
                cada<br></br> detalhe e entrega.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* MEU PAGE SERVIÇOS */}
      <section className="beneficio" id="beneficios">

        <div className="beneficios">
          <h1>BENEFÍCIOS</h1>
        </div>

        <div className="card-geral">

              <div className="cards-1">
                  <div className="card" data-aos="fade-right">
                    <div className="meus-tit">
                      <p>Desconto em Compras Futuras</p>
                      <h3>Ofereça um desconto exclusivo<br></br> para a próxima compra, incentivando<br></br> a fidelização e novas aquisições.</h3>
                    </div>
                  </div>

                  <div className="card" data-aos="fade-down">
                    <div className="meus-tit">
                      <p>Manutenção Gratuita</p>
                      <h3>Garanta uma manutenção ou<br></br>ajuste gratuito em um período<br></br>específico após a compra, demonstrando<br></br>cuidado com o cliente e o produto.</h3>
                      </div>
                  </div>

                  <div className="card" data-aos="fade-left">
                    <div className="meus-tit" >
                     <p>Certificado de Autenticidade</p>
                     <h3>Forneça um certificado de autenticidade,<br></br>destaque que a peça é única<br></br>e foi feita artesanalmente, valorizando<br></br>ainda mais a compra.</h3>
                    </div>
                  </div>

              </div>
            

              <div className="cards-2">

                  <div className="card" data-aos="fade-right">
                    <div className="meus-tit">
                     <p>Entrega Rápida e Segura</p>
                     <h3>Ofereça uma entrega expressa gratuita<br></br>ou com desconto para o cliente,<br></br>garantindo que a peça chegue com segurança<br></br>e rapidez.</h3>
                     </div>
                  </div>
                  
                  <div className="card" data-aos="fade-up">
                    <div className="meus-tit">
                    <p>Acesso a Conteúdos Exclusivos</p>
                    <h3>Ofereça acesso a vídeos ou tutoriais<br></br>exclusivos que ensinam a cuidar<br></br>ou personalizar os itens adquiridos.</h3>
                    </div>
                  </div>
                  
                  <div className="card" data-aos="fade-left">
                      <div className="meus-tit">
                      <p>Programa de Indicação</p>
                      <h3>Crie um programa de indicação<br></br>onde o cliente ganha benefícios,<br></br>como descontos ou brindes, ao indicar<br></br>a loja para amigos e familiares.</h3>
                      </div>
                  </div>
                </div>
              </div>


      </section>

    </>
  );
}

export default App;
