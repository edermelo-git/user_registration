
<h1> English - US </h1>

<h2>🧾 Project Description</h2>

This is a React component named Home, responsible for a simple user registration system. It allows users to:

Register new users (with name, age, and email);

List all registered users;

Delete users from the list.

The interface is built using HTML/CSS and React, and it communicates with a backend via HTTP requests using an axios instance (api imported from ../../services/api).

🚀 Features
▶️ List Users

When the component loads (useEffect), it sends a GET request to /users to fetch all users from the backend. The response is saved in the local users state and displayed as cards on the screen.

<h2>➕ Register a User</h2>

The form allows the user to enter a name, age, and email. When clicking the "Register" button, it sends a POST request to /users, with the entered values.

Note: The form fields use useRef, not useState, so they are uncontrolled inputs.

<h2>❌ Delete a User</h2>

Each listed user has a delete button with a trash icon. When clicked, it sends a DELETE request to /users/{id} to remove the selected user from the backend.

<h2>📁 Related Files Structure</h2>

style.css: Styling for the component.

../../assets/garbage.svg: Trash icon used in the delete button.

../../services/api: Axios instance configuration used for making backend requests.

<h2>🛠️ Technologies Used</h2>

React

Axios

HTML/CSS

/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

<h1> Português - Brasil </h1>

<h2>🧾 Descrição do Projeto </h2>

Este é um componente React chamado Home, responsável por um sistema simples de cadastro de usuários. O sistema permite:

Cadastrar novos usuários (com nome, idade e e-mail);

Listar todos os usuários cadastrados;

Deletar um usuário da lista.

A interface é construída com HTML/CSS e React, e a comunicação com o backend é feita através de chamadas HTTP usando uma instância de axios (api importado de ../../services/api).

🚀 Funcionalidades
▶️ Listar usuários

Ao carregar o componente (useEffect), é feita uma requisição GET para a rota /users, buscando todos os usuários armazenados no backend. Esses usuários são armazenados no estado local users e exibidos na tela em forma de cartões.

<h2>➕ Cadastrar usuário </h2>

O formulário permite que o usuário digite um nome, idade e e-mail. Ao clicar no botão "Register", é feita uma requisição POST para /users, enviando os dados preenchidos.

Obs.: Os campos são acessados via useRef, ou seja, não são controlados por estado (useState).

<h2>❌ Deletar usuário </h2>

Cada usuário listado tem um botão com o ícone de uma lixeira. Ao clicar nele, é feita uma requisição DELETE para /users/{id} para remover aquele usuário do backend.

<h2>📁 Estrutura de Arquivos Relacionados </h2>

style.css: Estilos visuais do componente.

../../assets/garbage.svg: Ícone de lixeira usado no botão de deletar.

../../services/api: Configuração da instância do Axios, usada para fazer requisições ao backend.

<h2>🛠️ Tecnologias Utilizadas</h2>

React

Axios

HTML/CSS
