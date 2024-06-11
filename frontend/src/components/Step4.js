// Step4.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Step4 = () => {
  return (
    <div>
      <Header />
      <main className="container my-4">
        <section>
          <h2>Passo 4. Boas Práticas em Regulação</h2>
          <p>
            Antes de iniciar o ato médico de regulação em si, vamos conhecer um pouco do fluxo seguido desde a solicitação de um
            agendamento de consulta ou de um exame, até a execução desse serviço. Você vai notar que um complexo aparato de
            diferentes estabelecimentos de saúde atua em conjunto para que esse serviço aconteça.
          </p>
          <p>
            Nesse momento, vá até o ANEXO 1 e leia o “Infográfico – Informativo de apoio à solicitação de consultas e exames”.
          </p>
          <p>
            Agora que você leu o Infográfico, ficou clara a sua função enquanto médico regulador. Você será responsável por acolher
            a solicitação de consulta ou de exame, que tem origem, muitas vezes, mas não exclusivamente, nas UAPS (antigos Postos
            de Saúde). Após ler as informações clínicas disponíveis no Sistema de Regulação, você utilizará seu julgamento clínico
            para classificar a priorização de cada solicitação em quatro níveis. Sua autonomia e julgamento médico serão importantes
            para essa decisão. Algumas filas de regulação contam com o apoio de um material consultivo interno da CECIR:
            “Informações Médicas de Apoio à Regulação”. Converse com o Coordenador Médico do Setor Ambulatorial e tenha acesso a
            esse material de apoio à regulação.
          </p>
          <p>
            <a href={`${process.env.PUBLIC_URL}/PDF/Anexo1.pdf`} target="_blank" rel="noopener noreferrer">Clique aqui para abrir o Infográfico</a>
          </p>
        </section>
        <div className="mt-4 text-center">
          <Link to="/Step5" className="btn btn-primary">Próximo Passo</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Step4;
