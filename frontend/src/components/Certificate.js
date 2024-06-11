import React, { useEffect, useState } from 'react';
import { getUserById } from '../services/api';
import Header from './Header';
import Footer from './Footer';
import '../styles/certificate.css';


const Certificate = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await getUserById(userId);
        setUser(response);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Header />
      <main className="container my-4">
        <div className="certificate">
          <h2>Certificado de Completude de Visita Guiada</h2>
          <p>Certificamos que <strong>{user.fullName}</strong> concluiu a Visita Guiada em Regulação Médica com sucesso,</p>
          <p>obtendo nota mínima necessária. Encontra-se apto a iniciar regulação médica.</p>
          <p>Coordenação da Visita Guiada, {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
          <footer>
            <p>Esse certificado dá conta que o usuário realizou visita guiada, obtendo pelo menos nota mínima necessária para iniciar o uso do sistema de regulação médica.</p>
            <p>Não avalia os requisitos técnicos médicos, sendo apenas um treinamento inicial para uso do Sistema de Regulação.</p>
            <p><strong>Fotografe esse certificado e apresente ao Coordenador Médico do Setor Ambulatorial. </strong></p>
          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Certificate;
