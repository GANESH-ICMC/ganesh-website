## Projeto Ganesh

Este é um projeto feito em Nextjs, Prisma e Postgres, para ser uma versão nova do site do Ganesh.
Algumas funcionalidades:
- Autenticação
- Criação de conteúdo (artigo, dicas, atividades ou notícias)
- Alteração de dados do autor

### Tecnologias usadas

O projeto foi feito com Nextjs 15.2.1, Prisma, Postgres e Docker.
A autenticação foi feita utilizando o NextAuth V5 (Beta).

### Como rodar para desenvolvimento?

Rode todos os passos a seguir no diretório `/ganesh`. 

1. Instale as dependências do projeto com `npm install`.
2. Sincronize com os schemas do projeto com `npx prisma generate`.

###### Apenas na primeira vez
3. Rode o backend com `docker compose up -d`.
4. Realize as migrations no postgres com `npx prisma migrate dev`.
5. Adicione o primeiro dado ao bd com `npx prisma db seed`.
6. Termine o backend com `docker compose down`.

###### Para rodar
7. Rode o backend com `docker compose up -d`.
8. O projeto já está rodando, e você pode entrar nele em `http://localhost:3000`.
9. Na rota '/admin', você poderá logar com email: `admin@example.com` e senha: `password`.
10. Caso queira terminar, `docker compose down`.

##### Para produção

O projeto possui um **action-runner** que realiza o deploy automaticamente no servidor de produção. Ele é configurado para, ao realizar um push na branch principal (master), realizar o deploy no servidor de produção.

O projeto está configurado para rodar em produção com docker compose. Ele é configurado para rodar na porta 3000, e usamos o **nginx** para fazer o **proxy reverso**. Os comandos úteis na produção são:

- `docker compose -f docker-compose.prod.yaml build` para buildar o projeto (ele criará uma imagem nova do projeto). Tome cuidado pois ele não deleta a imagem antiga, então você terá que deletar manualmente.
- `docker compose -f docker-compose.prod.yaml up -d` para rodar o projeto em produção.
- `docker compose -f docker-compose.prod.yaml down` para terminar o projeto.

##### Adicionando ou deletando usuários

Caso queira criar um usuário, altere o arquivo `/prisma/seed.ts` com o email e senha, e então rode `npx prisma db seed` na raiz do projeto.

Caso queira deletar um usuário, altere o arquivo /prisma/delete.sql com o email que queres deletar, e então rode `npm run delete` na raiz do projeto.

### Alguns prints de tela

![image](https://github.com/user-attachments/assets/716faa2a-e72d-47f2-8e82-a6089babc849)
![image](https://github.com/user-attachments/assets/9ff10f76-7b14-4a6b-af40-1783f023bbc3)

### TBD

- [ ] Adicionar info sobre frentes
- [ ] Adicionar info sobre projetos
- [ ] Adicionar faq
- [ ] Implementar vídeos