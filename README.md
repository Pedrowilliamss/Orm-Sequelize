<h1>📚 Projeto ORM-Sequelize  📚</h1>
Esse é o projeto desenvolvido durante a formação de Express da Alura, com ênfase no uso do Sequelize para o desenvolvimento de APIs.

<h2>📝 Descrição do projeto</h2>
Esse projeto é uma API que foi idealizada para uma escola de inglês, com o objetivo de fornecer serviços de CRUD (Create, Read, Update e Delete) para gerenciamento de alunos, professores e cursos. Utilizando o Sequelize como ORM (Object-Relational Mapping), o projeto oferece vantagens como abstração de banco de dados, facilidade de consulta e manipulação de dados, e segurança contra vulnerabilidades de segurança como SQL Injection.

<h2>🚀 Funcionalidades</h2>
As principais funcionalidades da API incluem:

* Cadastro, atualização, consulta e exclusão de alunos, professores e cursos.
* Consulta de alunos, professores e cursos por ID.
* Consulta de todos os alunos, professores e cursos cadastrados.
* Consulta de alunos por nome e por email.
* Consulta de cursos por id.
* Adição e remoção de alunos em cursos.
* Adição e remoção de professores em cursos.
* Consulta dos cursos de um aluno e dos alunos de um curso.
* Atualizar aluno.
* Desativar Matricula de aluno.
* 
<h2>🛠️ Tecnologias utilizadas </h2>
As principais tecnologias utilizadas nesse projeto são:

Node.js
Express
Sequelize
MySQL

<h2>Como executar o projeto </h2>
Para executar o projeto, siga os seguintes passos:

1. Clone o repositório em sua máquina local.
2. Instale as dependências do projeto usando o comando npm install.
3. Certifique-se de que o MySQL esteja instalado em sua máquina.
4. Crie um banco de dados MySQL com o nome especificado no arquivo config/config.json.
5. Execute as migrações do Sequelize usando o comando `npx sequelize-cli db:migrate`.
6. Popule o banco atraves do comando `npx sequelize-cli db:seed:all`
6. Inicie o servidor com o comando npm start.
