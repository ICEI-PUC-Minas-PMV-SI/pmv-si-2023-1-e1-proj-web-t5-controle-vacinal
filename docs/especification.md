# Especificações do Projeto

### Definição do Problema

A população enfrenta obstáculos para se vacinar, como falta de informação e dificuldades de acesso aos postos de saúde. Esses desafios resultam em baixas taxas de vacinação e aumento da vulnerabilidade a surtos de doenças infecciosas.

### Ideia de Solução

Desenvolver uma ferramenta de vacinação domiciliar que forneça informações precisas e um serviço de vacinação em casa, contribuindo para a promoção da saúde pública e aumentando a taxa de vacinação.

## Personas

### 1. Pessoa Idosa

**Nome**: Maria Oliveira<br/> 
**Idade**: 70 anos<br/>
**Profissão**: Aposentada<br/>
**Estado Civil**: Viúva<br/>
**Filhos**: 3 filhos adultos e independentes<br/>
**Localização**: São Paulo, Brasil<br/>

**Descrição**: Maria é uma senhora de 70 anos que vive sozinha em um apartamento no centro da cidade. Ela é viúva e seus filhos moram em outras cidades. Maria tem dificuldades de locomoção devido à idade e a problemas de saúde, como artrite e osteoporose. Ela costuma passar o tempo lendo, assistindo à televisão e conversando com os vizinhos. Maria se preocupa com sua saúde e quer manter suas vacinas em dia, mas enfrenta dificuldades para ir até os postos de saúde.

### 2. Pessoa com Mobilidade Reduzida

**Nome**: João Silva<br/>
**Idade**: 45 anos<br/>
**Profissão**: Designer Gráfico Freelancer<br/>
**Estado Civil**: Solteiro<br/>
**Filhos**: Nenhum<br/>
**Localização**: Rio de Janeiro, Brasil<br/>

**Descrição**: João tem 45 anos e trabalha como designer gráfico freelancer. Ele sofreu um acidente de carro há 10 anos e, desde então, utiliza uma cadeira de rodas para se locomover. João mora sozinho em um apartamento adaptado e tem uma vida ativa e independente. Ele gosta de sair com amigos, ir ao cinema e praticar esportes adaptados. João enfrenta desafios para se deslocar até postos de saúde devido à falta de acessibilidade e transporte público adequado.

### 3. Pessoa Imunocomprometida

**Nome**: Luana Costa <br/>
**Idade**: 30 anos <br/>
**Profissão**: Professora de Ensino Fundamental <br/>
**Estado Civil**: Casada <br/>
**Filhos**: Nenhum <br/>
**Localização**: Belo Horizonte, Brasil<br/>

**Descrição**: Luana tem 30 anos e trabalha como professora de ensino fundamental. Ela foi diagnosticada com câncer de mama há um ano e está em tratamento de quimioterapia. Devido à sua condição, Luana está atualmente afastada do trabalho e precisa tomar cuidados especiais para evitar infecções. Ela mora com seu marido e, juntos, enfrentam os desafios do tratamento e das mudanças na rotina. Luana busca manter suas vacinas em dia, mas teme se expor a riscos indo até postos de saúde.

### 4. Pais com Pouco Tempo Livre

**Nomes**: Pedro e Ana Santos <br/>
**Idades**: 35 e 32 anos, respectivamente <br/>
**Profissões**: Pedro é engenheiro civil e Ana é advogada <br/>
**Estado Civil**: Casados <br/>
**Filhos**: 2 filhos pequenos, de 4 e 2 anos <br/>
**Localização**: Curitiba, Brasil <br/>

**Descrição**: Pedro e Ana são um casal jovem com dois filhos pequenos. Eles trabalham em período integral e têm uma vida agitada, equilibrando trabalho, família e vida social. Pedro e Ana se preocupam com a saúde de seus filhos e querem garantir que eles estejam com as vacinas em dia. No entanto, o casal enfrenta dificuldades para encontrar tempo para levar as crianças aos postos de saúde, pois os horários de funcionamento dos postos coincidem com seus horários de trabalho.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`           | QUERO/PRECISO ... `FUNCIONALIDADE`                                          | PARA ... `MOTIVO/VALOR`                                                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Pessoa Idosa                   | Receber informações sobre vacinas recomendadas para idosos                  | Me proteger de doenças específicas da minha faixa etária                                                                |
| Pessoa Idosa                   | Agendar uma vacinação domiciliar                                            | Receber a vacina sem enfrentar dificuldades de locomoção                                                                |
| Pessoa Idosa                   | Acessar meu histórico de vacinação                                          | Verificar quais vacinas já tomei e quais ainda preciso tomar                                                            |
| Pessoa com Mobilidade Reduzida | Encontrar postos de vacinação com acessibilidade                            | Receber a vacina em um local adequado às minhas necessidades                                                            |
| Pessoa com Mobilidade Reduzida | Agendar uma vacinação domiciliar                                            | Receber a vacina sem enfrentar dificuldades de deslocamento                                                             |
| Pessoa com Mobilidade Reduzida | Acessar meu histórico de vacinação                                          | Verificar quais vacinas já tomei e quais ainda preciso tomar                                                            |
| Pessoa Imunocomprometida       | Obter informações sobre vacinas apropriadas para pessoas imunocomprometidas | Me proteger de doenças enquanto estiver em tratamento                                                                   |
| Pessoa Imunocomprometida       | Agendar uma vacinação domiciliar                                            | Receber a vacina sem me expor a riscos de infecção em locais públicos                                                   |
| Pessoa Imunocomprometida       | Acessar meu histórico de vacinação                                          | Compartilhar as informações com minha equipe médica e seguir as recomendações de vacinação                              |
| Pais com Pouco Tempo Livre     | Receber informações sobre o calendário de vacinação infantil                | Garantir que nossos filhos estejam protegidos contra doenças                                                            |
| Pais com Pouco Tempo Livre     | Agendar vacinação domiciliar para nossos filhos                             | Gotimizar nosso tempo e facilitar a logística                                                                           |
| Pais com Pouco Tempo Livre     | Acessar o histórico de vacinação de nossos filhos                           | Verificar se todas as vacinas estão atualizadas e saber quando é necessário levar as crianças para tomar a próxima dose |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve fornecer informações detalhadas sobre vacinas, incluindo indicações, contraindicações, efeitos colaterais e recomendações de doses e intervalos | ALTA | TBD |
|RF-002| O sistema deve permitir que os usuários filtrem as informações sobre vacinas com base em suas condições específicas (idosos, pessoas com mobilidade reduzida, imunocomprometidas, crianças). | MÉDIA | TBD |
|RF-003| O sistema deve permitir que os usuários encontrem postos de vacinação próximos à sua localização. | BAIXA | TBD |
|RF-004| O sistema deve exibir informações sobre acessibilidade e horários de funcionamento dos postos de vacinação. | MÉDIA | TBD |
|RF-005| O sistema deve permitir que os usuários agendem vacinação domiciliar para si mesmos ou para membros da família. | ALTA | TBD |
|RF-006| O sistema deve permitir que os usuários selecionem a vacina desejada e escolham uma data e horário disponíveis para a vacinação domiciliar. | ALTA | TBD |
|RF-007| O sistema deve permitir que os usuários visualizem seu histórico de vacinação ou o histórico de vacinação de membros da família. | ALTA | TBD |
|RF-008| O sistema deve exibir informações sobre as vacinas tomadas, datas de administração e datas previstas para as próximas doses. | MÉDIA | TBD |
|RF-009| O sistema deve enviar notificações e lembretes aos usuários sobre datas de vacinação agendadas e próximas doses de vacinas. | BAIXA | TBD |
|RF-010| O sistema deve permitir que os usuários criem e gerenciem perfis para si mesmos e membros da família, incluindo informações pessoais, condições de saúde e histórico de vacinação. | MÉDIA | TBD |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser capaz de lidar com um grande número de usuários simultâneos sem comprometer a qualidade do serviço. | BAIXA | 
|RNF-002| O sistema deve proteger os dados pessoais e médicos dos usuários, garantindo a privacidade e a conformidade com as leis e regulamentações aplicáveis. |  ALTA |
|RNF-003| O sistema deve ser fácil de usar e acessível para usuários com diferentes níveis de habilidade e conhecimento técnico. |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| O sistema não será hospedado na internet, sendo executando apenas localmente |
