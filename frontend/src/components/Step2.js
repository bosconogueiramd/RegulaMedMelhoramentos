// Step2.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Step2 = () => (
  <div>
    <Header />
    <main className="container my-4">
      <section>
        <h2>Passo 2. Localizando e conhecendo o ambiente físico da Central de Regulação CECIR</h2>
        <p>O prédio da Secretaria Municipal de Saúde de Fortaleza está localizado no endereço: R. Barão do Rio Branco, 910 – Centro, Fortaleza – CE, 60025-060.</p>
        <p>
          Localize sua rota até a SMS-Fortaleza: <a href="https://www.google.com/maps/dir//R.+Bar%C3%A3o+do+Rio+Branco,+910+-+Centro,+Fortaleza+-+CE,+60025-060/@-3.7263448,-38.6107185,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7493740f7e5e7:0xfca9631f2f5fa1cc!2m2!1d-38.5282998!2d-3.726354?entry=ttu">
            https://www.google.com/maps/dir//R.+Bar%C3%A3o+do+Rio+Branco,+910+-+Centro,+Fortaleza+-+CE,+60025-060</a>
        </p>
        <p>Ponto de referência: Ao lado das Lojas Americanas, próximo à Praça do Ferreira, um ponto central, no coração do Centro de Fortaleza.</p>
        <p>
          Ao adentrar no prédio, você deve identificar-se à segurança, apresentando sua carteira de CRM e comprovação de informação de seu plantão (por exemplo: uma escala de sua cooperativa, que contém seu nome; um e-mail convocando-o ao plantão).
        </p>
        <p>
          A Central de Regulação CECIR está localizada no andar sobreloja (SL). Você poderá acessar a sobreloja através do elevador, ao lado da recepção do térreo, pressionando SL, no painel de controle do elevador. De outra forma, você também poderá acessar a sobreloja através das escadas, localizadas a seguir dos elevadores.
        </p>
        <p>
          Já no andar de sobreloja (SL), procurará pelo departamento CORAC. A CECIR funciona dentro do departamento CORAC e é facilmente localizada, em frente às escadas que dão acesso à sobreloja.
        </p>
      </section>
      <div className="mt-4">
        <Link to="/step3" className="btn btn-primary">Próximo Passo</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Step2;
