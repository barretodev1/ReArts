  // importações
  import { Link, useNavigate } from "react-router-dom"
  import { useState, useEffect, useRef } from "react";
  import 'aos/dist/aos.css';
  import conexao from '../../../Services/api.js'
  import AOS from 'aos'
  import "./App.css";
  import "../Inicial/media-iphoneX.css"
  import "../Inicial/media-android.css"
  import  MarcenariaLogo  from '../../../public/assets/MARCENARIA-removebg-preview.png'
  import SobreImg from '../../../public/assets/sobre.png'
  import CaminhaoLogo from '../../../public/assets/icons8-caminhão-100.png'
  import DinheiroLogo from '../../../public/assets/icons8-dinheiro-100.png'
  import GarantiaLogo from '../../../public/assets/icons8-garantia-100.png'
  import QualidadeLogo from '../../../public/assets/icons8-qualidade-100.png'
  import ReguaLogo from '../../../public/assets/icons8-régua-100.png'
  import CreditoLogo from '../../../public/assets/icons8-cartão-100.png'
  import LogoInsta from '../../../public/assets/icons8-instagram-20 (1).png'
  import LogoTikTok from '../../../public/assets/icons8-tiktok-20 (3).png'
  import LogoWpp from '../../../public/assets/icons8-whatsapp-20 (1).png'
  import LogoFacebook from '../../../public/assets/icons8-facebook-20.png'

  function App() {
    const nomeRef = useRef(); 
    const emailRef = useRef(); 
    const telefoneRef = useRef(); 
    const servicoRef = useRef(); 
    const mensagemRef = useRef() 

    async function handleSubmit(event) {
      event.preventDefault()
      
      try {
          await conexao.post('/', {
              nome: nomeRef.current.value,
              email: emailRef.current.value,
              telefone: telefoneRef.current.value,
              servico: servicoRef.current.value,
              mensagem: mensagemRef.current.value
          })
          alert('ORÇAMENTO SOLICITADO COM SUCESSO')
      } catch (error) {
          alert('ERRO AO SOLICITAR ORÇAMENTO.')
      }
  }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          AOS.init({ disable: true });
        } else {
          AOS.init();
        }
      };
    
      handleResize(); // Call once initially
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const navigate = useNavigate();
    const [servico, setServico] = useState("");

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    function GoingProdutos() {
      navigate('/produtos')
    }

    function GoingInfoProdutoTábua() {
      navigate('/produtos/tábuas')
    }

    function GoingInfoProdutoTábuaPizza() {
      navigate('/produtos/tábuas-pizza')
    }
    
    function GoingInfoProdutoSuporteCell() {
      navigate('/produtos/suporte-cell')
    }

    return (
      <>
        {/* MEU HEADER */}
        <section className="menu">
          <header className="meu-header">
            <div className="img-header">
              <a href="https://rearts.netlify.app/">
              <img src={MarcenariaLogo} alt="" />
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
                <a href="https://api.whatsapp.com/send?phone=5511942397383&text=Ol%C3%A1!%20Tudo%20bem?">Faça seu orçamento</a>
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
            <div className="img-sobre" >
              <img src={SobreImg} alt="" />
            </div>

            <div className="secao-texto">
              <div className="meus-p-h2">
                <p>Missão</p>
                <h2>
                  Na ReArts, nossa missão é transformar o universo da <br />marcenaria
                   através da criatividade e da paixão.<br /> Dedicamo-nos a criar
                  peças únicas
                 e inovadoras que<br /> não apenas atendem às necessidades
                  funcionais de
                  <br /> nossos clientes, mas também elevam o padrão<br />  estético e
                  emocional de
                  seus espaços. Buscamos<br />  constantemente a excelência em
                  cada detalhe.
                </h2>
              </div>

              <div className="meus-p-h2">
                <p>Visão</p>
                <h2>
                  Almejamos ser reconhecidos como a principal <br />
                  referência no mercado de marcenaria criativa,<br /> destacando-nos
                 pela nossa capacidade de oferecer<br /> soluções que não apenas
                  atendem, mas superam<br /> as expectativas dos nossos clientes.
                  Nosso objetivo<br />  é estabelecer novos padrões de excelência.
                </h2>
              </div>

              <div className="meus-p-h2">
                <p>Valores</p>
                <h2>
                  Na ReArts, nossos valores são a base de tudo o que<br /> fazemos.
                  Comprometemo-nos a garantir a máxima<br /> qualidade em cada
                  projeto que realizamos, buscando<br /> sempre a perfeição em
                  cada
                  detalhe e entrega.
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
                  <img src={CaminhaoLogo} alt="" />
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
                  <img src={DinheiroLogo} alt="" />
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
                  <img src={ReguaLogo} alt="" />
                </div>
                <div className='orçamento'>
                  <a href='#varejo'>Realizar um orçamento</a>
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
                  <img src={GarantiaLogo} alt="" />
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
                  <img src={QualidadeLogo} alt="" />
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
                  <img src={CreditoLogo} alt="" />
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
            <div className='produto-card' id="tábua"> {/*CARD COMPLETO */}
              <Link to="/produtos/tábuas" onClick={GoingInfoProdutoTábua}><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
              <div className='h1-card'><h1>Tábua de Churrasco</h1></div>
              <div className='h2-card'><h2>R$130,00 no pix</h2></div>
              <div className='h3-card'><h3>ou 3X R$53,33</h3></div>
              <Link className='botao-card' to="/produtos/tábuas"><button onClick={GoingInfoProdutoTábua} type="button">COMPRAR</button></Link>
            </div>

            {/* ESPAÇOS ENTRE OS CARDS */}

            <div className='produto-card' id="tábua"> {/*CARD COMPLETO */}
            <Link to="/produtos/tábuas-pizza" onClick={GoingInfoProdutoTábuaPizza}><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
            <div className='h1-card'><h1>Tábua de Pizza</h1></div>
              <div className='h2-card'><h2>R$159,00 no pix</h2></div>
              <div className='h3-card'><h3>ou 3X R$48,00</h3></div>
              <Link className='botao-card' to="/produtos/tábuas-pizza"><button onClick={GoingInfoProdutoTábuaPizza} type="button">COMPRAR</button></Link>
            </div>
          </article>

          <article className='card-produto'>
            <div className='produto-card' id="outros"> {/*CARD COMPLETO */}
              <Link to="/produtos/suporte-cell" onClick={GoingInfoProdutoSuporteCell}><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
              <div className='h1-card'><h1>Suporte para Celular</h1></div>
              <div className='h2-card'><h2>3X R$16,00</h2></div>
              <div className='h3-card'><h3>ou R$50,00 no pix</h3></div>
              <Link className='botao-card' to="/produtos/suporte-cell" onClick={GoingInfoProdutoSuporteCell}><button type="button">COMPRAR</button></Link>
            </div>

            {/* ESPAÇOS ENTRE OS CARDS */}

            <div className='produto-card' id="moveis"> {/*CARD COMPLETO */}
            <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
            <div className='h1-card'><h1>Escrivaninha para Trabalho</h1></div>
              <div className='h2-card'><h2>3X de R$499,90</h2></div>
              <div className='h3-card'><h3>ou R$1.500,00 no pix</h3></div>
              <Link className='botao-card' to="/produtos"><button type="button">COMPRAR</button></Link>
            </div>
          </article>

          <article className='card-produto'>
            <div className='produto-card' id="moveis"> {/*CARD COMPLETO */}
              <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */}
              <div className='h1-card'><h1>Gaiola de Pássaros</h1></div>
              <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
              <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
              <Link className='botao-card' to="/produtos"><button type="button">COMPRAR</button></Link>
            </div>

            {/* ESPAÇOS ENTRE OS CARDS */}

            <div className='produto-card' id="moveis"> {/*CARD COMPLETO */}
            <Link to="/produtos"><div className='imagem-produto'></div></Link> {/*CARD IMAGEM */} {/*AJUSTAR A ROTA DO LINK*/}
            <div className='h1-card'><h1>Mesa de Jantar</h1></div>
              <div className='h2-card'><h2>R$3.000,00 no pix</h2></div>
              <div className='h3-card'><h3>ou 12X R$245,99</h3></div>
              <Link className='botao-card' to="/produtos"><button type="button">COMPRAR</button></Link>
            </div>
          </article>

          <div>
            <button className="ver-mais" onClick={GoingProdutos}>VER MAIS PRODUTOS</button>
          </div>

        </section>

        {/* PAGE ORÇAMENTO DE VAREJO */}
        <section className="varejo" id="varejo">
          <div className="textos-orçamento">
            <h1>QUER SERVIÇO DE VAREJO OU <br></br>PERSONALIZAÇÃO?</h1>
            <h2>SOLICITE O ORÇAMENTO ABAIXO</h2>
          </div>

          <form className="form" onSubmit={handleSubmit}>

          <div className="input-menor"> {/*INPUT MENOR */}
              <input placeholder="Seu nome" type="name" ref={nomeRef} required/>
              <input placeholder="Seu e-mail" type="email" ref={emailRef} required/>
          </div>

          <div className="input-menor"> {/*INPUT MENOR */}
              <input placeholder="Seu telefone" type="tel"  ref={telefoneRef} required/>

              <select id="servicos" name="servicos" ref={servicoRef} value={servico} required onChange={(e) => setServico(e.target.value)}>
                <option value="" disabled>Serviço</option>
                <option value="Moveis">Móveis</option>
                <option value="Varejo">Varejo</option>
                <option value="Personalizacao">Personalização</option>
              </select>
          </div>

          <div className="input-menor">
            <input className="mensagem" placeholder="Mensagem" type="text" ref={mensagemRef} required/>
          </div>

          <div className="botao-varejoo">
            <button className="botao-varejo" type="submit">SOLICITAR ORÇAMENTO</button>
          </div>

          </form>

        </section>

        {/* PAGE DE RODAPÉ */}
        <section className="rodapé">
          <footer className="footer">
            <div className="contato-footer">
              <h1>Contato</h1>
              <Link href="https://wa.me/5511933255476?text=Ol%C3%A1%2C%20Tudo%20bem%3F%20">(11) 94239-7383-</Link>
              <Link href="mailto:renatod.santos@telefonica.com?subject=Marcenaria%20Criativa%20&body=Ol%C3%A1!%20Tudo%20bem%3F%20(Escreva%20a%20sua%20mensagem%20abaixo)">contato@email.com</Link>
              <Link href="">CEP: 08081-170</Link>
            </div>
            
            {/* DIV   */}

            <div className="social-footer">
              <h1>Redes Sociais</h1>
                <Link href=""><img src={LogoInsta} alt="" />Instagram </Link>
              <Link href=""><img src={LogoTikTok} alt="" />TikTok </Link>
              <Link href=""><img src={LogoWpp} alt="" />WhatsApp </Link>
              <Link href=""><img src={LogoFacebook} alt="" />Facebook </Link>
            </div>

            {/* DIV   */}

            <div className="envio-footer">
              <h1>Formas de Envio</h1>
              <p href="">Sedex</p>
              <p href="">PAC</p>
              <p href="">Loggi</p>
              <p href="">Kangu</p>
            </div>

            {/* DIV   */}

            <div className="pagamento-footer">
              <h1>Meios de Pagamento</h1>
              <p href="">PIX</p>
              <p href="">Crédito</p>
              <p href="">Débito</p>
              <p href="">Boleto Bancário</p>
            </div>
          </footer>
        </section>

      </>
    );
  }

  export default App;
