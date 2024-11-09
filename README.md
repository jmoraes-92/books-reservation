# Sistema de Reservas de Livros 📚

Um sistema CRUD desenvolvido em **Angular 14** para gerenciar o cadastro, edição, exclusão e reserva de livros para locação. Este projeto segue o padrão **MVC** (Model-View-Controller) e utiliza serviços simulados para manipulação dos dados.

---

## 📋 Funcionalidades

- **Listagem de Livros**: Visualize todos os livros cadastrados.
- **Cadastro de Livros**: Adicione novos livros ao sistema.
- **Edição de Livros**: Atualize as informações de um livro já cadastrado.
- **Exclusão de Livros**: Remova livros do sistema.
- **Reserva de Livros**: Alterne entre os status de "disponível" e "não disponível".

---

## 🛠️ Tecnologias Utilizadas

- **Angular 14**: Framework principal do projeto.
- **TypeScript**: Linguagem para desenvolvimento da lógica do sistema.
- **HTML5 e CSS3**: Para estruturação e estilização dos componentes.
- **Bootstrap (opcional)**: Para uma interface mais amigável (adicione, se necessário).

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
1. **Node.js**: Certifique-se de ter o Node.js instalado.
2. **Angular CLI**: Instale o CLI globalmente, se ainda não o tiver:
   ```bash
   npm install -g @angular/cli@14

Configuração e Execução
Clone o repositório:

git clone https://github.com/jmoraes-92/sistema-reservas-livros.git
cd sistema-reservas-livros
Instale as dependências do projeto:
npm install
ng serve
http://localhost:4200


Houve um erro ao tentar salvar o arquivo. Vou colar o conteúdo completo do README.md aqui para que você possa copiá-lo diretamente ou criá-lo manualmente no seu editor de texto:

markdown
Copiar código
# Sistema de Reservas de Livros 📚

Um sistema CRUD desenvolvido em **Angular 14** para gerenciar o cadastro, edição, exclusão e reserva de livros para locação. Este projeto segue o padrão **MVC** (Model-View-Controller) e utiliza serviços simulados para manipulação dos dados.

---

## 📋 Funcionalidades

- **Listagem de Livros**: Visualize todos os livros cadastrados.
- **Cadastro de Livros**: Adicione novos livros ao sistema.
- **Edição de Livros**: Atualize as informações de um livro já cadastrado.
- **Exclusão de Livros**: Remova livros do sistema.
- **Reserva de Livros**: Alterne entre os status de "disponível" e "não disponível".

---

## 🛠️ Tecnologias Utilizadas

- **Angular 14**: Framework principal do projeto.
- **TypeScript**: Linguagem para desenvolvimento da lógica do sistema.
- **HTML5 e CSS3**: Para estruturação e estilização dos componentes.
- **Bootstrap (opcional)**: Para uma interface mais amigável (adicione, se necessário).

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
1. **Node.js**: Certifique-se de ter o Node.js instalado.
2. **Angular CLI**: Instale o CLI globalmente, se ainda não o tiver:
   ```bash
   npm install -g @angular/cli@14


Configuração e Execução
Clone o repositório:
git clone https://github.com/jmoraes-92/sistema-reservas-livros.git
cd sistema-reservas-livros

Instale as dependências do projeto:
npm install

Inicie o servidor de desenvolvimento:
ng serve

Abra no navegador:
http://localhost:4200

📂 Estrutura do Projeto
A estrutura do projeto é organizada para seguir o padrão MVC:
src/app/
├── models/          # Definições do modelo de dados (Livro)
├── services/        # Lógica de manipulação de dados (LivroService)
├── components/      # Componentes visuais (Listagem e Formulário)
│   ├── book-list/   # Componente de listagem de livros
│   ├── book-form/   # Componente de cadastro e edição de livros
├── app.module.ts    # Módulo principal do Angular
└── app-routing.module.ts # Configuração das rotas

🌟 Funcionalidades Detalhadas
📄 Listagem de Livros
Acesse a página inicial (/) para visualizar todos os livros cadastrados.
Opções disponíveis:
Reservar ou cancelar a reserva.
Excluir um livro.
Editar um livro existente.
➕ Cadastro de Livros
Acesse /livro/new para adicionar um novo livro.
Preencha os campos necessários e clique em "Salvar".
✏️ Edição de Livros
Clique no botão de edição ao lado de um livro na lista.
Você será redirecionado para /livro/edit/:id.
Altere os dados e clique em "Salvar".


🛡️ Boas Práticas Implementadas
Separação de Responsabilidades: Código organizado em modelos, serviços e componentes.
Binding Bidirecional: Uso de [(ngModel)] para interação entre a interface e a lógica.
Rotas Modulares: Navegação configurada com RouterModule.
Código Reutilizável: Um único componente (BookFormComponent) gerencia cadastro e edição.

🤝 Contribuições
Sinta-se à vontade para abrir issues ou criar um pull request caso tenha melhorias ou sugestões.

🧑‍💻 Autor
Juliano P de Moraes
GitHub: https://github.com/jmoraes-92 
LinkedIn: https://www.linkedin.com/in/juliano-moraes-927209a7/