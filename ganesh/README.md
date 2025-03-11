## Projeto Ganesh

Este é um projeto feito em Nextjs, Prisma e Postgres, para ser uma versão nova do site do Ganesh.
Algumas funcionalidades:
- Autenticação
- Criação de conteúdo (artigo, dicas, atividades ou notícias)
- Alteração de dados do autor

### Como rodar?

Rode todos os passos a seguir no diretório `/ganesh`. 

1. Instale as dependências do projeto com `npm install`.
2. Sincronize com os schemas do projeto com `npx prisma generate`.

###### Apenas na primeira vez
3. Rode o backend com `docker compose up -d`.
4. Realize as migrations no postgres com `npx prisma migrate dev` em um outro terminal.
5. Adicione o primeiro dado ao bd com `npx prisma db seed`.
6. Termine o backend com `docker compose down`.

###### Para rodar
7. Rode o backend com `docker compose up -d`.
8. O projeto já está rodando, e você pode entrar nele em `http://localhost:3000`.
9. Na rota '/admin', você poderá logar com email: `admin@example.com` e senha: `password`.
10. Caso queira terminar, `docker compose down`.

##### Para produção

1. Rode `docker compose build`.
2. Rode `docker compose up -d`.


##### Caso queira deletar o usuário

Rode `npm run delete`.

### Próximos passos

- Trazer parte dos códigos do site antigo para o novo.

### Alguns prints de tela

![image](https://github.com/user-attachments/assets/716faa2a-e72d-47f2-8e82-a6089babc849)
![image](https://github.com/user-attachments/assets/9ff10f76-7b14-4a6b-af40-1783f023bbc3)

### TBD

- [ ] Adicionar info sobre frentes
- [ ] Adicionar info sobre projetos
- [ ] Adicionar faq
- [ ] Implementar vídeos