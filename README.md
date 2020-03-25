# Projeto de seleção Future4: preparad@ para o Futuro?

Obrigado por participar do processo seletivo da Future4. Nesse repositório você encontra as instruções e arquivos necessários para você participar desse processo. Para dar início, pedimos que você leia esse texto (arquivo README.md) por completo, e siga de forma rigorosa as nossas instruções. Qualquer dúvida ou problema no processo, não exite em entrar em contato com a equipe Future4 pelo nosso Slack. Boa sorte!

## 1. Processo Seletivo - Detalhes prévios
Nosso processo seletivo consiste em três etapas: avaliação do perfil do participante, realização de um projeto e entrevistas com a equipe Future4. Se você recebeu acesso à esse documento, você já passou da etapa de avaliação de perfil, superando uma montanha de outras inscrições - ou seja, estamos apostando em você! Parabéns! Você está atualmente na etapa de Projeto, e esse documento contém as informações necessárias para completar a etapa.
### 1.1 Objetivos
Os objetivos da etapa de projetos são:

**Avaliar o engajamento dos alunos nos cursos:** Nossos cursos são muito intensos e visam um crescimento técnico e profissional acelerado dos nossos alunos. Isso exige um nível muito alto de dedicação e motivação de todos os participantes. Para evitar que o curso não seja uma má experiência para nossos alunos, nós selecionaremos apenas os alunos realmente engajados. A nossa aposta em avaliar por projeto é baseada em ser inclusivo - não queremos avaliar quem teve a melhor formação ou qualquer coisa do tipo, queremos ver quem se dedica frente a desafios, quem corre atrás e quem sabe comunicar dúvidas ao buscar soluções.  

**Simular o dia a dia do trabalho em tecnologia:** Durante nossos cursos os alunos vão criar vários projetos, individualmente e em grupo. Esses projetos são desafios semelhantes aos encontrados no dia a dia de um desenvolvedor em empresa de tecnologia. Essa etapa do processo seletivo visa simular a rotina do trabalho. Nesse momento vamos testar se essa rotina é compatível com aluno, e esperamos que o aluno faça o mesmo.  

**Avaliar o perfil dos alunos:** Uma parte importante do trabalho da Future4 é garantir a empregabilidade dos nossos alunos. Para tal, precisamos garantir que o aluno está de acordo com o perfil desejado pelas empresas de tecnologia. Como principais características avaliadas podemos destacar: ética, perfil colaborativo, facilidade de aprendizado e resiliência (muita resiliência). Quando programando, a gente se depara com muitos desafios que parecem impossíveis de serem resolvidos - e não desistir nesse momento é um traço fundamental (se prepare, você vai se deparar muitas vezes com essas situações, faz parte do processo). Com paciência e coragem para encarar tarefas que parecem impossíveis, a gente vai quebrando a cabeça, tirando dúvidas no google (o site "Stackoverflow" é presença diária na vida de quem programa), consultando pessoas mais experientes e encontrando soluções. Vale ressaltar que nosso processo seletivo não visa avaliar o conhecimento técnico do aluno. Acreditamos que nosso curso funciona para pessoas que não possuem nenhum conhecimento técnico inicial, desde que as demais características buscadas sejam satisfeitas.  

### 1.2 Regras
- O participante deve seguir as regras e instruções determinadas nesse documento.
- Todas as atividades do projeto devem ser realizadas **pelo próprio aluno**. Esse é um critério eliminatório do processo seletivo. Durante a etapa de entrevista, vamos avaliar se o participante dominou os conceitos aplicados no projeto.  
- Os participantes devem consultar documentações, sites e vídeos para auxiliar no desenvolvimento do projeto. Não recomendamos copiar e colar código dessas fontes, uma vez que verificaremos o entendimento do participante.    
- Os participantes são incentivados a utilizar o Slack da Future4 para tirar dúvidas sobre o seu projeto e atualizar nossa equipe sobre o seu andamento. Nossa equipe utilizará esse canal para ajudar os participantes, e essa interação será avaliada positivamente. Os alunos podem interagir entre si nos canais do Slack. Fique atento no canal do slack pois nossa equipe pode fazer perguntas e comentários sobre o seu projeto.  
- Fique atento ao dia e horário de entrega do projeto, qualquer alteração feita após essa data será desconsiderada.
- Para avaliar o projeto, nossa equipe vai abrir o link enviado pelo formulário de entrega. Nenhuma etapa adicional deve ser necessária para abrir o site desenvolvido por você.
- Não é permitido o uso de bibliotecas e código de terceiros. Todo o código deve ser escrito por você e isso será verificado na etapa de entrevista.  

### 1.3 Desafio
O projeto consiste na criação de um site utilizando HTML, CSS e Javascript. O site deve ter apenas uma página, o arquivo index.html (outros arquivos css e js podem ser criados). O participante deve seguir, da melhor forma que conseguir, o layout que está no arquivo wireframe.pdf. As cores não estão especificadas e o participante deve escolher a melhor forma de descobrí-las. Esse repositório contém a imagem necessária para construir essa página.
Existe um campo de input de texto no final da página e um botão com o texto "Enviar". Ao clicar nesse botão, um alerta deve ser apresentado na página com o texto "O email usuario@future4.com.br foi enviado", sendo que o email deve conter o texto digitado pelo usuário da página. Esse alerta deve ser apresentado utilizando a função alert do javascript (é só um detalhezinho de Javascript - você vai encontrar um tutorial para isso no final deste documento). Sabemos que esses termos podem não fazer parte do seu dia-a-dia, mas fique tranquil@, daremos mais detalhes abaixo. :)

#### 1.3.1 Desafios extras
Você pode complementar seu projeto com alguns desafios extras. Esses desafios **não são obrigatórios**, não é necessário cumpri-los para ser selecionado. Recomendamos fortemente que o participante complete a totalidade do desafio inicial antes de seguir para os desafios extras.
- Preparar o site para ser apresentado em telas mobile. Fica a critério do participante a melhor forma de ajustar o conteúdo do site para plataformas mobile. Para avaliar esse desafio extra, nossa equipe vai abrir o mesmo arquivo index.html em um iphoneX.  
- Realizar a verificação de email válido no texto digitado pelo usuário no campo "email". Essa verificação deve ser realizada utilizando javascript. Se o email for inválido a mensagem "Email inválido" deve ser apresentada no site utilizando a função alert() do javascript.  
- Incluir um texto de boas vindas quando o usuário enviar seu email. Quando o usuário clicar no botão enviar, a página deve ser atualizada para incluir um texto no formato "Bem vindo usuario@future4.com.br!".  

## 2. Instruções - é hora de programar!
Siga as instruções abaixo para iniciar o seu projeto. Se é a primeira vez que você está utilizando ferramentas como essa, pode ser que tudo isso seja muita coisa. Tudo bem! Estamos aqui para te ajudar nesse aprendizado, basta entrar em contato no nosso Slack que ajudaremos. Como já falamos, parte do dia-a-dia de desenvolvedores de software é enfrentar esses desafios - e avaliaremos como cada participante encara isso no nosso processo seletivo. Aqui, o seu esforço importa muito mais que o resultado final, fique tranquil@ :)

### 2.1 Iniciando o projeto
Para iniciar o projeto, o primeiro passo é clicar no botão "Fork" acima. Isso criará uma cópia sua de todos os esses arquivos. É importante que você crie uma conta para conseguir salvar o seu progresso na ferramenta de forma automática.

### 2.2 Editando e testando o seu projeto
Para testar o seu projeto, basta clicar no arquivo index.html e, seguida, no botão "Run". Toda vez que você quiser testar o seu projeto, basta clicar novamente e dar uma olhada em como o seu site está ficando. Para fazer uma alteração no seu site, basta alterar o código no editor de texto e ele será salvo automaticamente. Esse procedimento vai ser realizado várias vezes, até que você fique satisfeito com o seu site. Programar é isso: iterar dezenas de vezes, quebrar a cara, superar bloqueios que parecem impossíveis, mas depois ficar feliz por ter construído algo com a sua personalidade :)

Lembrando: se você teve alguma dificuldade aqui, não hesite em nos procurar! Sabemos que essas primeiras vezes são cheias de entraves por questão de detalhes, e estamos do seu lado para ajudar nesse primeiro mergulho :)

### 2.3 Entregando seu projeto 
O projeto terá uma entrega com a data combinada no canal #anuncios-t0X, sendo X o número da turma a qual você fará parte. Para isso, responda o formulário https://future4.typeform.com/to/TTn3fS preenchendo as informações corretas e enviando o link do repl.it, indicando qual entrega você está fazendo.

Assim que terminar o seu projeto você já pode entregá-lo, não precisa esperar a data da entrega!

## 3. Documentação e referências
### 3.1 W3School
Toda a documentação necessária para completar o projeto pode ser encontrada no site da w3school. Os seguintes links são recomendados:  
- https://www.w3schools.com/html/default.asp 
- https://www.w3schools.com/css/default.asp
- https://www.w3schools.com/js/default.asp
- https://internetingishard.com/html-and-css/
Os participantes podem acessar outras referências encontradas na internet.
### 3.2 Wireframe e Referências
O arquivo wireframe.pdf deve ser utilizado como referência para a criação do projeto. O site https://future4.com.br pode ser considerado uma página interessante para utilizar como referência.  
## 4. E agora? O que fazer?
Sabemos que aprender a programar pode ser muito desafiador. Aqui seguem algumas dicas de como seguir no desafio de criar um site:  
- Vá seguindo os tutoriais da w3schools.com .  
Para esse projeto sugerimos que você siga o tutorial de html (https://www.w3schools.com/html/default.asp) até o item HTML Javascript (https://www.w3schools.com/html/html_scripts.asp), e a seção HTML Forms (https://www.w3schools.com/html/html_forms.asp).  
Sugerimos que você siga o tutorial de css (https://www.w3schools.com/css/default.asp) até o item CSS align (https://www.w3schools.com/css/css_align.asp).  
Sugerimos que você siga o tutorial de JavaScript (https://www.w3schools.com/js/default.asp) até o item JS String Methods (https://www.w3schools.com/js/js_string_methods.asp).  
- Use o Slack para interagir com os nossos instrutores e com os demais alunos (future4alunos.slack.com). Estamos aqui para ajudar você nessa jornada, e avaliaremos positivamente a interação dos alunos por Slack. Lembre que a nossa equipe precisa de um tempo de resposta para atender todos os alunos e as demais tarefas da nossa empresa, aproveite esse tempo para tentar superar seus desafios individualmente.  
- Se você não sabe qual o próximo passo no seu projeto, pense em uma pequena parte do site que esteja faltando ou que precise ser melhorada. Coloque como desafio resolver apenas essa parte do site e foque nesse desafio até resolvê-lo. Por exemplo, um texto do meu site está azul, mas ele deveria ser vermelho. Meu próximo desafio é fazer que esse texto azul se torne vermelho, e eu vou focar nesse desafio até que o texto esteja correto.  
- Reforçamos: estamos avaliando muito mais o seu esforço do que seu resultado final. Vocês terão aulas conosco de HTML e CSS durante o programa, caso aprovados, portanto não estamos exigindo nenhum domínio especial ou excelência no assunto. Queremos mais é verificar sua capacidade de correr atrás por conta própria e lidar com desafios :)   
