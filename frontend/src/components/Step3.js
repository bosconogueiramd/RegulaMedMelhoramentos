// Step3.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Step3 = () => (
  <div>
    <Header />
    <main className="container my-4">
      <section>
        <h2>Passo 3. Iniciando sua jornada de plantão</h2>
        <p>Você notará que no salão da CECIR existem bancadas. Cada bancada tem um computador, de uso do médico regulador. Identifique-se aos médicos do plantão e peça informação sobre em que bancada você pode sentar-se.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/bancada.jpeg`} alt="Bancada de Regulação" className="img-fluid" />
          <figcaption>Legenda: Localize seu computador em sua bancada de regulação.</figcaption>
        </figure>
        <p>Se o seu plantão iniciar às 7:00, você perceberá que a equipe administrativa somente inicia seu expediente às 8h, razão pela qual você começará seu trabalho antes de o coordenador do setor ambulatorial chegar. Apresente-se a ele após iniciado o expediente administrativo (08:00).</p>
      </section>
      <div className="mt-4 text-center">
        <Link to="/step4" className="btn btn-primary">Próximo Passo</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Step3;
