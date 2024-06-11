// Step1.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Step1 = () => (
  <div>
    <Header />
    <main className="container my-4">
      <section>
        <h2>Passo 1. Solicitando seu acesso aos computadores da CECIR antes de seu plantão.</h2>
        <p>O acesso ao sistema operacional de cada computador ocorre por login e senha.</p>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura1.png`} alt="Tela inicial de acesso ao Sistema Operacional do computador de regulação" />
          <figcaption>Legenda: Preencha com login e senha para ter acesso ao computador de sua bancada de regulação.</figcaption>
        </figure>
        <p>Antes de seu primeiro plantão, você deve solicitar à coordenação de sua cooperativa o envio de suas informações de cadastro, para que o setor responsável da CECIR providencie sua senha de acesso ao Sistema Operacional do computador de sua bancada de regulação.</p>
        <p>Após logado no sistema operacional de sua máquina, você deverá abrir um navegador (sugestão: Chrome ou Firefox) e digitar <a href="https://saude.fastmedic.com.br/fortaleza">https://saude.fastmedic.com.br/fortaleza</a>.</p>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura2.png`} alt="Tela de acesso ao sistema de informática de regulação médica" />
          <figcaption>Legenda: A regulação ambulatorial é representada em “CENTRAL DE PROCEDIMENTOS”.</figcaption>
        </figure>
        <p>Você deverá clicar sob a opção Central de Procedimentos. Após esse passo, você será conduzido à tela de login do sistema de regulação médica, Fastmedic®.</p>
        <figure>
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura3.png`} alt="Tela de login do sistema de regulação médica Fastmedic" />
          <figcaption>Legenda: Preencha com seu usuário e senha, fornecidos com antecedência ao plantão por sua cooperativa.</figcaption>
        </figure>
        <p>A coordenação de sua cooperativa deve ter-lhe fornecido login e senha de acesso ao sistema de regulação Fastmedic®. Essa solicitação deve ocorrer com antecedência ao seu primeiro plantão, através do e-mail: <a href="mailto:institucional@cecir.com.br">institucional@cecir.com.br</a>.</p>
      </section>
      <div className="mt-4">
        <Link to="/Step2" className="btn btn-primary">Próximo Passo</Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Step1;
