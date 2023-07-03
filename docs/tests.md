# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Realizar cadastro do usuário**
 :--------------: | ------------
**Procedimento**  | 1) No cadastro o usuário informa nome completo, cpf, sexo, email e senha.<br>2) A aplicação verifica se os campos de nome, cpf, sexo e senhas então preenchidos e se o email é válido e informa ao usuário caso não seja.
**Requisitos associados** | RF-010
**Resultado esperado** | Prosseguir para a aplicação já logado.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Realizar login do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa e senha cadastrados previamente e clica em logar.<br>2) A aplicação verifica se os dados informados correspondem a algum cadastro realizado previamente e informa ao usuário caso contrário.
**Requisitos associados** | RF-010
**Resultado esperado** | Prosseguir para a aplicação já logado.
**Dados de entrada** | Email e senha cadastrados previamente.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Realizar cadastro de dependentes**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa os dados de cpf, nome completo, sexo e grau de parentesco do(a) dependente.<br>2) A aplicação verifica se todos os campos estão preenchidos e retorna uma mensagem de erro caso não estejam.
**Requisitos associados** | RF-009
**Resultado esperado** | Exibe a lista de dependentes com o novo dpendente cadastrado.
**Dados de entrada** | Cpf, nome completo, sexo e grau de parentesco do(a) dependente.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Solicitar vacina**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa para quem será a solicitação de vacina, podendo ser para ele mesmo ou algum dependente cadastrado previamente.<br>2) A aplicação verifica se todos os campos estão preenchidos e retorna uma mensagem de erro caso não estejam.
**Requisitos associados** | RF-003
**Resultado esperado** | Exibe a lista de familiares e solicitações de vacina atualizada com a nova vacina solicitada.
**Dados de entrada** | Pessoa a ser vacinada, vacina desejada, local, data.
**Resultado obtido** | Sucesso.


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Realizar cadastro do usuário*                                         |
|---|---|
|Requisito Associado | RF-010 - O sistema deve permitir que os usuários façam login no sistema com suas credenciais.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AgYEC5xOUaZIhEJSzcDHwXSuR8pY?e=hJLghf | 

|*Caso de Teste*                                 |*Ct-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-010 - O sistema deve permitir que os usuários façam login no sistema com suas credenciais.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AgYEC5xOUaZIhERs50p3XiREuEB3?e=mGYVpx | 

|*Caso de Teste*                                 |*Ct-03 - Realizar cadastro de dependentes*                                         |
|---|---|
|Requisito Associado | RF-009 - O sistema deve permitir que os usuários criem e gerenciem perfis para si mesmos e membros da família, incluindo informações pessoais, condições de saúde e histórico de vacinação.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AgYEC5xOUaZIhEO-edjSkzL5RKt8?e=jD7uOc | 

|*Caso de Teste*                                 |*Ct-04 - Realizar solicitação de vacina*                                         |
|---|---|
|Requisito Associado | RF-003 - O sistema deve permitir que os usuários agendem vacinação domiciliar para si mesmos ou para membros da família.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AgYEC5xOUaZIhEW5uj0_R5sjCcqA?e=dALkki | 



## Avaliação dos Testes de Software

Identificamos em nossos testes que poderíamos aprimorar a forma de entrada dos dados, colocando máscaras em dados de formato padrão e calendários para as datas.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 28.02 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



