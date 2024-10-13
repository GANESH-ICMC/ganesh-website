## Projeto Ganesh

Este é um projeto feito em Nextjs, Prisma e Postgres, para ser uma versão nova do site do Ganesh.
Algumas funcionalidades:
- Autenticação
- Criação de conteúdo (artigo, dicas, atividades ou notícias)
- Alteração de dados do autor

### Como rodar?

Rode todos os passos a seguir no diretório `/ganesh`

1. Instale as dependências do projeto com `npm install`.
2. Sincronize com os schemas do projeto com `npx prisma generate`.

###### Apenas na primeira vez
3. Rode o postgres com `docker compose run backend`.
4. Realize as migrations no postgres com `npx prisma migrate dev` em um outro terminal.
5. Adicione o primeiro dado ao bd com `npx prisma db push`.
6. Volte no terminal que está rodando o backend, e o interrompa.

###### Para rodar todas as vezes
7.  Rode backend com `docker compose up -d`.
8.  Execute o projeto next com `npm run dev`.
9.  Na página inicial, você poderá logar com email: `admin@example.com` e senha: `password`.

### Próximos passos

- Alterar um pouco das rotas (o atual começará com a rota `admin`)
- Trazer parte dos códigos do site antigo para o novo.

### Alguns prints de tela
![image](https://github.com/user-attachments/assets/716faa2a-e72d-47f2-8e82-a6089babc849)
![image](https://github.com/user-attachments/assets/9ff10f76-7b14-4a6b-af40-1783f023bbc3)
