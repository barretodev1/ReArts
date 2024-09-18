import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import '../PaymentTabuaChurrasco/media-andoid.css'
import '../PaymentTabuaChurrasco/media-queries.css'
import CartaoLogo from '../../../../../public/assets/icons8-parte-traseira-de-cartão-de-banco-40.png'
import BoletoLogo from '../../../../../public/assets/icons8-bilhete-40 (1).png'
import PixLogo from '../../../../../public/assets/icons8-foto-40.png'
import  MarcenariaLogo  from '../../../../../public/assets/MARCENARIA-removebg-preview.png'

function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    cep: "",
    endereço: "",
    nameDestinatário: "",
    confirmar: "",
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    if (name === 'confirmar') {
    const regex = /^Tábua de Churrasco$/;
    if (!regex.test(value)) {
      setErrorMessage('O texto deve ser "Tábua de Churrasco".');
      setIsFormValid(false);
    } else {
      setErrorMessage('');
      setIsFormValid(validateForm());
    }
  }

  const validateForm = () => {
    const { name, email, cpf, cep, endereço, nameDestinatário, confirmar } = formData;
    // Check if all required fields are filled
    return name && email && cpf && cep && endereço && nameDestinatário && confirmar === 'Tábua de Churrasco';
  };

  useEffect(() => {
    // Validate form whenever formData changes
    setIsFormValid(validateForm());
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();


    if (!isFormValid) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Formulário enviado com sucesso:", formData);
  };

  return (
    <>
      <section className="menu-payment">
        <header className="meu-header-payment">
          <div>
            <a href="https://rearts.netlify.app/">
              <img src={MarcenariaLogo} alt="Logo Marcenaria" />
            </a>
          </div>
        </header>
      </section>

      <section className="screen">
        <div className="payment-screen">
          <h1>CONFIRME SEU PAGAMENTO</h1>
        </div>

        <form className="div-compra" onSubmit={handleSubmit}>
          <div className="border-input">
            <h1 className="h1-tabua-churrasco">TÁBUA DE CHURRASCO</h1>
            <div className="input-1-payment">
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nome:"
                type="text"
              />
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="E-mail:"
                type="email"
              />
            </div>

            <div className="input-1-payment">
              <input
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
                placeholder="CPF:"
                type="text"
                maxLength="11"
              />
              <input
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
                placeholder="CEP:"
                type="text"
                maxLength="8"
              />
            </div>

            <div className="input-1-payment-rua">
              <input
                id="endereço"
                name="endereço"
                value={formData.endereço}
                onChange={handleChange}
                required
                placeholder="Endereço: Sua Rua, 000"
                type="text"
              />
              <h1>Não se esqueça de colocar o número do seu local de recebimento</h1>
            </div>

            <div className="input-1-payment">
              <input placeholder="Complemento:" type="text" />
              <input
                id="nameDestinatário"
                name="nameDestinatário"
                value={formData.nameDestinatário}
                onChange={handleChange}
                required
                placeholder="Nome igual ao do pagador?"
                type="text"
              />
            </div>

            <div className="input-1-payment">
              <h1>Caso não seja, coloque o nome do pagador</h1>
            </div>


            <div className="input-2-payment-h1">
              <h1>Copie e cole a palavra "Tábua de Churrasco" abaixo para confirmar seu produto"</h1>
            </div>

            <div className="input-10-payment">
            <input
                id="confirmar"
                name="confirmar"
                value={formData.confirmar}
                onChange={handleChange}
                required
                placeholder="Confirmar o produto:"
                type="text"
              />           
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="seg-container-paymenttt">
              <hr />
            </div>

            <div className="paymant-opcoes">
              <div className="seg-container-payment2">
                <img src={PixLogo} alt="Logo Pix" />
                <h1>PIX</h1>
                <a 
                  className="button" 
                  href="https://mpago.la/1oRjTTa" 
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  style={{ pointerEvents: isFormValid ? 'auto' : 'none', opacity: isFormValid ? 1 : 0.5 }}
                >
                  COMPRAR
                </a>
              </div>

              <div className="seg-container-payment2">
                <img src={BoletoLogo} alt="Logo Boleto" />
                <h1>BOLETO</h1>
                <a 
                  className="button" 
                  href="https://mpago.li/2kNcDhh" 
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  style={{ pointerEvents: isFormValid ? 'auto' : 'none', opacity: isFormValid ? 1 : 0.5 }}
                >
                  COMPRAR
                </a>
              </div>

              <div className="seg-container-payment2">
                <img src={CartaoLogo} alt="Logo Cartão" />
                <h1>CARTÃO</h1>
                <a 
                  className="button" 
                  href="https://mpago.li/2kNcDhh" 
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  style={{ pointerEvents: isFormValid ? 'auto' : 'none', opacity: isFormValid ? 1 : 0.5 }}
                >
                  COMPRAR
                </a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Payment;
