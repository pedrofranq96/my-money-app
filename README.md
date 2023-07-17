# Documentação do Projeto "My Money - App"

O "My Money - App" é um projeto de controle de gastos pessoais, onde os usuários podem criar uma conta, fazer login e gerenciar suas despesas. Este documento fornecerá um guia passo a passo para configurar e executar o projeto em sua máquina pessoal.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js (versão 12 ou superior)
- MongoDB
- Git (opcional, mas recomendado)

## Configuração do Backend

1. Clone o repositório do projeto do GitHub:

```
git clone <URL_DO_REPOSITÓRIO>
```

2. Navegue até o diretório do backend:

```
cd my-money-app/backend
```

3. Instale as dependências do projeto:

```
npm install
```

4. Crie um arquivo de configuração `.env` na raiz do diretório `backend` e defina as seguintes variáveis de ambiente:

```
PORT=3003
MONGODB_URL=<URL_DO_MONGODB>
JWT_SECRET=<SEGREDO_PARA_GERAR_TOKEN_JWT>
```

Certifique-se de substituir `<URL_DO_MONGODB>` pela URL de conexão do seu banco de dados MongoDB e `<SEGREDO_PARA_GERAR_TOKEN_JWT>` por um segredo de sua escolha para gerar os tokens JWT.

5. Inicie o servidor backend:

```
npm start
```

O servidor estará sendo executado em `http://localhost:3003`.

## Configuração do Frontend

1. Navegue até o diretório do frontend:

```
cd my-money-app/frontend
```

2. Instale as dependências do projeto:

```
npm install
```

3. Abra o arquivo `src/config.js` e defina a URL da API do backend:

```javascript
export const API_BASE_URL = 'http://localhost:3003/oapi';
```

Certifique-se de que a URL corresponda à porta em que o servidor backend está sendo executado.

4. Inicie o servidor de desenvolvimento do frontend:

```
npm start
```

O aplicativo estará sendo executado em `http://localhost:8080`.

## Utilizando o "My Money - App"

Agora que o projeto está configurado e em execução, você pode acessar o aplicativo no navegador usando o endereço `http://localhost:8080`. Aqui está um guia rápido sobre como usá-lo:

1. **Cadastro**: Crie uma nova conta preenchendo o formulário de cadastro com seu nome, email, senha e confirmação de senha.

2. **Login**: Faça login com suas credenciais recém-criadas para acessar o aplicativo.

3. **Tela Principal**: Na tela principal, você poderá ver o valor do seu crédito (lucro e recebimentos), o valor do seu débito (despesas) e o valor consolidado (crédito - débito).

4. **Ciclo de Pagamento**: Navegue até a aba "Ciclo de Pagamento" para consultar, alterar, excluir e listar seus gastos. Ao entrar nessa aba, a lista de meses e anos será exibida automaticamente.

## Tecnologias Utilizadas

### Backend

- bcrypt: 5.1.0
- body-parser: 1.18.3
- express: 4.16.3
- express-query-int: 3.0.0
- jsonwebtoken: 8.3.0
- lodash: 4.17.10
- mongoose: 5.2.12
- mongoose-paginate: 5.0.3
- node-restful: 0.2.6
- pm2: 3.0.4
- nodemon: 1.18.4

### Frontend

- admin-lte: 2.3.11
- axios: 0.18.0
- font-awesome: 4.7.0
- ionicons: 4.4.3
- jquery: 2.2.3
- react: 16.4.2
- react-dom: 16.4.2
- react-redux: 5.0.7
- react-redux-toastr: 7.4.0
- react-router: 4.3.1
- react-router-dom: 4.3.1
- react-scripts: 1.1.5
- redux: 4.0.0
- redux-form: 7.4.2
- redux-multi: 0.1.12
- redux-promise: 0.6.0
- redux-thunk: 2.3.0

## Conclusão

Agora você possui um ambiente local configurado para executar o projeto "My Money - App" em sua máquina pessoal. Sinta-se à vontade para explorar e utilizar todas as funcionalidades disponíveis para controlar seus gastos de forma eficiente.
