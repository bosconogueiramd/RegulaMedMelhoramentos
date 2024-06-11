import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Step5 = () => (
  <div>
    <Header />
    <main className="container my-4">
      <section>
        <h2>Passo 5. Ato de Regulação Médica</h2>
        <p>Após se logar no sistema operacional de sua máquina, em sua bancada de regulação, e no sistema de regulação médica (vide passo 1), você visualizará a tela inicial do Módulo Ambulatorial.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura4.png`} alt="Tela Inicial do Módulo Ambulatorial do Sistema de Regulação Médica" className="img-fluid" />
          <figcaption>Legenda: Clique na aba Agenda para ter acesso às filas de regulação, por especialidade.</figcaption>
        </figure>
        <p>Clique em Agendamento. Você verá as seguintes opções: “Fila de Espera”, “Cancelamento de Consulta”, “Segunda Via – Comprovante de Agendamento”, “Inclui Fila Espera – Manual”, “Agendamentos por período”. Você clicará em “Fila de Espera”.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura5.png`} alt="Opções da Aba Agendamento do Módulo Ambulatorial do Sistema de Regulação Médica" className="img-fluid" />
          <figcaption>Legenda: Clique em “Fila de Espera”.</figcaption>
        </figure>
        <p>Feito isso, você será direcionado ao menu de Parametrização de Pesquisa. É aqui que você começará a filtrar as filas relacionadas aos pedidos de consultas e de exames. Em seu plantão, você regulará as filas de espera de consultas e exames indicadas pelo coordenador médico do Setor Ambulatorial.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura6.png`} alt="Parâmetros de Pesquisa" className="img-fluid" />
          <figcaption>Legenda: Selecionando a fila de regulação e definindo parâmetros de visualização da fila.</figcaption>
        </figure>
        <p>Para facilitar o entendimento, vamos supor que você ficou responsável por regular as filas de espera para consultas nas especialidades de Ortopedia. Nesse caso, clique no primeiro campo: “Procedimento”. Ao digitar nesse campo a palavra chave “ortopedia”, você notará que o sistema de regulação filtrará todas as filas de regulação que incluem a palavra “ortopedia”.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura7.png`} alt="Selecionando a fila de regulação a ser regulada" className="img-fluid" />
          <figcaption>Legenda: Selecione, inicialmente, a fila de regulação em que vai trabalhar durante seu plantão.</figcaption>
        </figure>
        <p>Para esse exemplo, vamos iniciar com a Fila de “CONSULTA EM ORTOPEDIA PEDIÁTRICA – 0301010072”. Nesse primeiro momento, você não precisará alterar os campos: “Estabelecimento”, “Usuário”, “Município do Usuário” e “Quantidade máxima de registros”.</p>
        <p>Agora, você deve clicar em “Tipo de Consulta”, escolhendo a opção “Apenas em Regulação”. Na opção “Tipo de Priorização”, mantenha a opção selecionada padrão: “TODOS”. Clique em “Ordenar por” e selecione a opção: “Posição”. Em seguida, clique em “Ordenar Como” e escolha a opção “Crescente”. A Figura 8 evidencia a tela de parametrização, após as escolhas sugeridas.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura8.png`} alt="Seleção dos parâmetros adequados para iniciar uma determinada fila de regulação" className="img-fluid" />
          <figcaption>Legenda: Parâmetros de filtragem das filas de regulação.</figcaption>
        </figure>
        <p>As opções sugeridas filtraram o seguinte caminho: todos os pedidos de consulta para a fila de espera em consultas em “ORTOPEDIA PEDIÁTRICA”, advindos de todos os estabelecimentos de saúde que são regulados com a SMS-CECIR, que ainda não foram avaliados e priorizados pelo médico regulador, listados em ordem crescente (do pedido mais antigo para o pedido mais recente).</p>
        <p>Ao clicar em “Aplicar”, você visualizará a fila de espera selecionada, com os parâmetros que filtrou (Vide Figura 9).</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura9.png`} alt="Fila de espera de consultas para uma determinada especialidade filtrada" className="img-fluid" />
          <figcaption>Legenda: Visualização da fila de regulação e suas informações.</figcaption>
        </figure>
        <p>Na coluna “Regulação”, você deverá clicar na caixa que contém um lápis, conforme explicita a Figura 10.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura10.png`} alt="Acesso ao prontuário eletrônico de cada paciente que consta na lista de espera em regulação, para uma fila específica de regulação médica" className="img-fluid" />
          <figcaption>Legenda: Na coluna “Regulação”, clique no ícone representado por um lápis.</figcaption>
        </figure>
        <h3>AUTORIZANDO UM PEDIDO DE CONSULTA OU EXAME</h3>
        <p>Na próxima tela, você visualizará o campo adequado de regulação (Vide Figura 11).</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura11.png`} alt="Campo Adequado de Regulação" className="img-fluid" />
          <figcaption>Legenda: As informações necessárias para definir a prioridade de regulação estão expostas na figura por “Motivo do Encaminhamento”. Neste campo, você deverá visualizar as informações mínimas para definir a prioridade de regulação.</figcaption>
        </figure>
        <p>
          <a href={`${process.env.PUBLIC_URL}/PDF/Anexo2.pdf`} target="_blank">Anexo 2: Nota Técnica “Encaminhamento e Regulação de Consultas e Exames via Prontuário Eletrônico”</a>
        </p>
        <p>Nesse momento, veja o Anexo 2 - Nota Técnica “Encaminhamento e Regulação de Consultas e Exames via Prontuário Eletrônico”. Agora que você leu a NT supracitada, precisamos fazer algumas considerações. Após analisar no sistema de regulação as informações mínimas necessárias para a regulação, você deverá priorizar (seta vermelha) a solicitação entre um de quatro níveis (PRIORIDADE EMERGENCIAL, ALTA PRIORIDADE, MÉDIA PRIORIDADE E BAIXA PRIORIDADE). Estando a solicitação adequada para priorização e após priorizar, você deverá clicar em autorizar (seta verde). Caso as informações sejam insuficientes para definir a prioridade de regulação, você deverá utilizar o campo de escrita do médico regulador para solicitar as informações mínimas necessárias para priorização e regulação (ex.: “Por favor, detalhar história clínica e exame físico. Anexar exames, caso existam. Informar se há sinais de alerta.”). Em seguida, o médico regulador deverá clicar em “Devolver ao Estab. Solic.”, devolvendo então a solicitação para que o estabelecimento solicitante possa retificar ou justificar a solicitação de consulta ou exame.</p>
        <p>Quando as informações presentes em “Motivo do Encaminhamento” forem suficientes, você deverá selecionar em “Mudar Priorização” a prioridade adequada e autorizar a consulta, clicando em “Autorizar”, representada pela seta verde, na Figura 11.</p>
        <h3>NEGANDO UMA SOLICITAÇÃO</h3>
        <p>Eventualmente, o médico regulador poderá negar uma solicitação de consulta ou de exame. Em alguns casos, o próprio estabelecimento solicitante explica nos campos adequados de regulação que aquela solicitação foi inserida por erro. Nestes, o médico regulador poderá copiar (CTR C) e colar (CRL V) essa informação e inseri-la no campo de justificativa da negação. Antes de clicar em negar, selecionar o motivo da negativa, entre as opções: “Em seguimento na UBS”, “Desistência do paciente”, “Outros”, “Central de Leitos”. Após selecionado o motivo da negativa, e justificado o motivo (campo “Texto”), o médico finalmente clicará em Negar (X). A Figura 12 ilustra essa situação em que há uma negativa de um pedido de consulta.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura12.png`} alt="Negando uma solicitação de consulta ou de exame" className="img-fluid" />
          <figcaption>Legenda: Após descrever o motivo da negativa de consulta e preencher o campo “Texto”, o médico regulador deverá clicar em “Negar” (seta roxa).</figcaption>
        </figure>
        <p>Outra situação em que o médico regulador deve negar um pedido de solicitação de consulta ou de exame ocorre quando a solicitação não é realizada por um profissional de saúde (médico, odontologista, ou enfermeiro). Nesses casos, a Direção da CECIR orienta que o pedido seja negado, atendendo ao que informa a CI Nº 002/2024 (Vide ANEXO III).</p>
        <p>
          <a href={`${process.env.PUBLIC_URL}/PDF/Anexo3.pdf`} target="_blank">Anexo 3: Negando uma solicitação de consulta ou exame</a>
        </p>
        <h3>ALTERAÇÃO DE FILA</h3>
        <p>Em alguns casos, o médico regulador notará que a solicitação de consulta ou de exame foi inserida em uma fila inadequada de regulação. Um exemplo que ilustra essa situação são solicitações de consulta para CONSULTA EM OTORRINOLARINGOLOGIA PEDIÁTRICA. Algumas vezes, por engano, o solicitante solicita CONSULTA EM ORTOPEDIA PEDIÁTRICA. Esse lapso pode ocorrer, por exemplo, por proximidade do campo de clique do mouse, entre as filas. Ao notar um erro de seleção de fila, o médico regulador poderá alterar a solicitação para a fila adequada. Recomenda-se priorização e autorização dessa solicitação. As figuras 13 e 14 ilustram o passo a passo de alteração de fila.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura13.png`} alt="Localizando a fila adequada de regulação" className="img-fluid" />
          <figcaption>Legenda: Alterando a fila de regulação para fila adequada (primeiro passo). Clique na aba “Informações”. Em seguida, clique no ícone representado por uma lupa em “Troca de Procedimento”.</figcaption>
        </figure>
        <p>Em seguida, digite o nome da fila correta (por exemplo: OTORRINO...). Ao digitar os primeiros caracteres da fila destino, o sistema trará à tela uma lista das filas relacionadas. Selecione a fila adequada (neste caso: CONSULTA EM OTORRINOLARINGOLOGIA PEDIÁTRICA – 0301010072) e, em seguida, clique em salvar (seta roxa). Após isso, o paciente terá sido transferido de fila. Não se esqueça de priorizar e autorizar esse pedido. Caso julgue que não tem capacidade de priorizar o pedido para a fila transferida, repasse o caso ao responsável pela fila destino, consultando o coordenador do setor ambulatorial sobre quem é o responsável pela fila para qual transferiu o paciente.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura14.png`} alt="Troca de fila – Selecionando e salvando" className="img-fluid" />
          <figcaption>Legenda: Clique em “Nome do procedimento a ser pesquisado” e inicie a digitação com o nome da fila adequada para qual vai retificar o pedido de consulta ou de exame. Após selecionar a fila correta, clique em “Salvar”.</figcaption>
        </figure>
        <h3>DEVOLVIDOS AO MÉDICO REGULADOR E DEVOLVIDOS AO ESTABELECIMENTO SOLICITANTE</h3>
        <p>Quando há necessidade de esclarecimento do quadro clínico, o médico regulador poderá retornar a solicitação de consulta ou exame ao estabelecimento solicitante. Nesses casos, deverá descrever o motivo pelo qual devolve a solicitação de consulta ou exame, no campo “Texto”. Em seguida, deverá clicar em “Devolver ao Estab. Solic.”.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura15.png`} alt="Devolvendo ao Estabelecimento solicitante" className="img-fluid" />
          <figcaption>Legenda: A seta vermelha ilustra o botão a ser clicado para devolver ao estabelecimento solicitante. Antes, o médico regulador deverá preencher o motivo pelo qual devolve a solicitação.</figcaption>
        </figure>
        <p>As respostas dos profissionais solicitantes referentes aos questionamentos feitos em situações semelhantes às descritas no parágrafo supracitado são visualizadas pelo médico regulador em “Apenas devolvidos para Regulador”. Recomenda-se a checagem de solicitações com esse status no início e no fim de cada plantão. Para isso, após ter-se logado no sistema CENTRAL DE PROCEDIMENTOS – Agendamento – Fila de Espera (você já sabe como fazer isso...), você deverá selecionar em “Tipo de Consulta”: “Apenas Devolvidos para Regulador”.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura16.png`} alt="Solicitações devolvidas para médico regulador" className="img-fluid" />
          <figcaption>Legenda: Selecionando os pedidos de consultas e exames com status “Apenas Devolvidos para Regulador”.</figcaption>
        </figure>
        <p>Note que você deve selecionar os campos como os sublinhados em azul, na Figura 16. Ao clicar na barra verde “Aplicar”, você visualizará todas as solicitações que se encontram no status “Apenas Devolvidos para Regulador”.</p>
        <p>Note que o valor padrão (default) para a “quantidade máxima de Registros” é 500. Acrescente um zero, selecionando 5000, ou não visualizará todas as solicitações devolvidas ao regulador, correndo o risco de não visualizar a comunicação com o estabelecimento solicitante direcionada a você.</p>
        <figure className="text-center">
          <img src={`${process.env.PUBLIC_URL}/imagens/Figura17.png`} alt="Selecionando, dentre todas as solicitações com status “Apenas Devolvidos para regulador”, as que estão em filas sob a sua responsabilidade, como médico regulador" className="img-fluid" />
          <figcaption>Legenda: Clique no ícone representado por um filtro e localize as filas sob sua responsabilidade.</figcaption>
        </figure>
      </section>
      <div className="text-center mt-4">
        <a href="/evaluation" className="btn btn-primary">Clique para avaliação e obtenção de certificado</a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Step5;
