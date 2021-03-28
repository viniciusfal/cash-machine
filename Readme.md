## Sobre
<p>Você pode usar essa aplicação com o repósitório <a href="https://github.com/viniciusfal/go-finance">go-finances</a> que é todo em React.js</p>

-------

## Requisites

### Pré-requisites
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/), 
[Docker](https://www.docker.com/) 
[Insomnia](https://insomnia.rest/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

-------


#### 🎲 Rodando o Backend (servidor)

```bash
# Crie uma imagem do postgress com esse nome e essa porta:
$ sudo docker run --name gostack_desafio06_tests -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres

# Execute o docker
$ sudo docker start gostack_desafio06_tests

# Clone este repositório
$ git@github.com:viniciusfal/cash-machine.git

# Acesse a pasta do projeto no terminal/cmd
$ cd cash-machine

# Instale as dependências
$ yarn install

# Rode as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

