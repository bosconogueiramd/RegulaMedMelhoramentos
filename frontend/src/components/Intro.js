import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/api';
import Header from './Header';
import Footer from './Footer';

const Intro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.user._id);
      if (response.user.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/step1');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <div>
      <Header />
      <main className="container my-4">
        <section id="hero" className="d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/callToAction.png`} alt="Demonstração da Ferramenta" className="hero-image img-fluid" />
          <div className="hero-content">
            <h2>Aprendendo antes de usar...</h2>
            <p>A visita guiada é uma ferramenta intuitiva e educativa de treinamento em regulação médica ambulatorial.</p>
            <section id="login">
              <h2>Login</h2>
              <form id="loginForm" onSubmit={handleLogin}>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  required
                  className="form-control mb-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  required
                  className="form-control mb-2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Entrar</button>
              </form>
              <Link to="/register" className="register-link">Registrar-se</Link>
            </section>
          </div>
        </section>
        <section id="beneficios">
          <h2>Por que utilizar a visita guiada?</h2>
          <ul>
            <li>Ambiente seguro de treinamento</li>
            <li>Acelera a curva de aprendizado</li>
            <li>Sua primeira validação antes de iniciar oficialmente seu trabalho de regulação médica.</li>
          </ul>
        </section>
        <section id="prova-social">
          <h2>Fala regulador!</h2>
          <blockquote>
            "A Visita Guiada foi desenvolvida a partir de uma visão do médico regulador. Ao notar que é necessário padronizar para melhor regular, a Visita Guiada foi idealizada e desenvolvida de médico para médico."
            <cite>- Dr. João Bosco</cite>
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Intro;
