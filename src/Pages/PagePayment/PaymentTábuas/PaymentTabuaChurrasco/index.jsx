import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import '../PaymentTabuaChurrasco/media-queries.css'

function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    cep: "",
    endereço: "",
    nameDestinatário: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = formData;

    if (!name || !email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário, se necessário
    console.log("Formulário enviado com sucesso:", formData);
  };

  return (
    <>
      {/* SECTION HEADER */}
      <section className="menu-payment">
        <header className="meu-header-payment">
          <div>
            <a href="http://localhost:5173/">
              <img src="/src/assets/MARCENARIA-removebg-preview.png" alt="" />
            </a>
          </div>
        </header>
      </section>

      {/* SECTION DE TELA (COMPRA) */}
      <section className="screen">
        {/* TITULO CONFIRMA PAGAMENTO */}
        <div className="payment-screen">
          <h1>CONFIRME SEU PAGAMENTO</h1>
        </div>

        {/* DIV DE COMPRA */}
        <form className="div-compra" onSubmit={handleSubmit}>
          <div className="border-input">
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
              <h1>
                Não se esqueça de colocar o número do seu local de recebimento
              </h1>
            </div>

            <div className="input-1-payment">
              <input placeholder="Complemento:" type="text" />
              <input
                id="nameDestinatário"
                name="nameDestinatário"
                value={formData.nameDestinatário}
                onChange={handleChange}
                required
                placeholder="Nome igual ao do pagador??"
                type="text"
                maxLength="8"
              />
            </div>

            <div className="input-1-payment">
              <h1>Caso não seja, coloque o nome do pagador</h1>
            </div>

            <div className="seg-container-paymenttt">
              <hr />
            </div>

            {/* PAGAMENTOS */}
            <div className="paymant-opcoes">
              {/* PIX */}
              <div className="seg-container-payment2">
                <img src="/src/assets/icons8-foto-40.png" alt="" />
                <h1>PIX</h1>
                <a className="button" href="https://mpago.la/1oRjTTa">COMPRAR</a>
              </div>

              {/* BOLETO */}
              <div className="seg-container-payment2">
                <img src="/src/assets/icons8-bilhete-40 (1).png" alt="" />
                <h1>BOLETO</h1>
                <a className="button" href="https://mpago.li/2kNcDhh">COMPRAR</a>
              </div>

              {/* CARTÃO DE CREDITO */}
              <div className="seg-container-payment2">
                <img
                  src="/src/assets/icons8-parte-traseira-de-cartão-de-banco-40.png"
                  alt=""
                />
                <h1>CARTÃO</h1>
                <a className="button" href="https://mpago.li/2kNcDhh">COMPRAR</a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Payment;
