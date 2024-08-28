import './App.css'

function App() {
  return (
  <>


    {/* MEU HEADEER */}
    <section>
      <header className='meu-header'>

        <div>
          <img src="./src/assets/MARCENARIA-removebg-preview.png" alt="" />
        </div>

        <div className='opcoes'>
          <p>Home</p>
          <p>Sobre</p>
          <p>Serviços</p>
          <p>Contato</p>
        </div>

      </header>
    </section>

    
    {/* MEU MAIN (PRINCIPAL) */}
    <section>
      <div  className='principal'>
        <div className='meu-texto'>
          <h1>
          A ReArts é uma marcenaria criativa que combina<br></br> o talento artesanal com a inovação no design<br></br> transformando madeira em peças únicas e funcionais.<br></br>
          Cada criação da ReArts é fruto de um processo que<br></br> valoriza a sustentabilidade, o reaproveitamento<br></br> de materiais e a personalização, permitindo que<br></br> os clientes tragam um toque exclusivo.
          </h1>
          <button className='botao-orcamento'>
            <a href="https://api.whatsapp.com/send?phone=5511942387383">Faça seu orçamento</a>
          </button>
        </div>
      </div>
    </section>

    

    </>    
  )
}

export default App
