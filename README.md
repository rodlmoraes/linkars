# LinKars

O LinKars é um app simples, onde você pode fazer operações básicas com carros, como criar, deletar, atualizar e vê-los listados

Para conseguir usar o projeto, é só clonar o repositório, abrir um terminal na pasta frontend, um na pasta backend e usar o comando `npm install` ou `yarn install`, depois `npm start` ou `yarn start` nas duas, só lembre de criar um arquivo .env com a porta que quer q o backend inicie e suas credenciais no mongodb antes

Aqui tem um link de uma collection no Postman - `https://www.getpostman.com/collections/5c5f874cd2c355d06e27` - que você pode importar (Barra superior -> Import -> Import from link)
Onde tem todas as rotas e operações da API, que são:
  - get '/kars', que retorna todos os carros cadastrados
  - get '/kars/:id', onde você passa o id de um carro, e retorna esse carro apenas
  - post '/kars', onde você cadastra um carro
  - put '/kars/:id', onde você atualiza todos os atributos de um carro (caso não passe algum, ele muda para nulo)
  - patch '/kars/:id', onde você atualiza alguns atributos de um carro
  - delete '/kars/:id', onde você deleta um carro
  - get '/search', que recebe um parâmetro `q` e retorna todos os carros que contenham no nome ou marca, o que foi escrito em `q`
  - post '/register', cria um usuário com e-mail e senha no corpo da requisição
  - post '/login', recebe e-mail e senha no corpo da requisição e retorna a existência do usuário
  - get '/populateFipe', que faz uma requisição para a API do FIPE e popula o banco de dados com os carros que recebe dessa API, a requisição demora um pouco, mas se parar ela depois de um tempinho que ficou rodando, já é bem provável que tenha por volta de 1000 carros no seu banco
  
  A estrutura de um Kar é essa, que é o que vai ser retornado nas requisições acima
  `
  {
  vehicle: String,
  brand: String,
  year: Number,
  description: String,
}, { timestamps: true }
`

Para o frontend, logo que você entrar, cai em uma página de login, com o botão de ir para a página de registro, depois de fazer um dos dois, você vai para a página de listagem de carros, podendo deletar, atualizar, ver os detalhes deles ou criar um novo!

:D
