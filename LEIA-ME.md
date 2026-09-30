# Seca 15: como colocar no ar

O app tem login com e-mail e senha, recuperação de senha, cadastro masculino ou feminino, progresso salvo na nuvem e uma aba "Alunos" só para você.

São dois serviços gratuitos:
- **Supabase**: guarda os logins e o progresso de cada aluno.
- **GitHub Pages**: deixa o app no ar com um link.

Tempo total: uns 15 minutos.

---

## Parte 1: Supabase (banco de dados e login)

1. Crie uma conta em **supabase.com** e clique em **New project**. Escolha um nome (ex: seca15), crie uma senha para o banco (guarde) e a região **South America (São Paulo)**.
2. Espere o projeto terminar de criar (1 a 2 minutos).
3. No menu da esquerda, abra **SQL Editor**, clique em **New query**, cole todo o conteúdo do arquivo `supabase.sql` e clique em **Run**. Deve aparecer "Success".
4. Vá em **Project Settings > API** (ou **Data API**) e copie dois valores:
   - **Project URL** (algo como `https://abcd.supabase.co`)
   - a chave **anon public**
5. Abra o arquivo `config.js` e cole os dois valores no lugar de `COLE_AQUI...`.
   Nunca use a chave `service_role` aqui.

## Parte 2: GitHub Pages (colocar o app no ar)

1. Crie uma conta em **github.com** (se ainda não tiver).
2. Clique em **New repository**. Nome: `seca15`. Marque **Public** (o GitHub Pages grátis exige repositório público). Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file**, arraste **todos os arquivos desta pasta** (incluindo o `config.js` já preenchido) e clique em **Commit changes**.
4. Vá em **Settings > Pages**. Em "Branch", escolha **main** e a pasta **/ (root)**. Clique em **Save**.
5. Em 1 a 2 minutos aparece o link do app, no formato `https://SEU-USUARIO.github.io/seca15/`.

## Parte 3: ligar o link ao login

1. No Supabase, vá em **Authentication > URL Configuration**.
2. Em **Site URL**, cole o link do app (ex: `https://SEU-USUARIO.github.io/seca15/`).
3. Em **Redirect URLs**, adicione o mesmo link. Salve.

Isso faz os e-mails de confirmação e de "esqueci minha senha" voltarem para o app.

## Parte 4: virar admin (ver a aba Alunos)

1. Abra o app, crie sua conta e confirme o e-mail.
2. No Supabase, em **SQL Editor**, rode esta linha trocando pelo seu e-mail:
   `insert into public.admins (user_id) select id from auth.users where email = 'seu@email.com';`
3. Saia e entre de novo no app. A aba **Alunos** aparece só para você.

---

## Pontos importantes

- **Limite de e-mails do plano grátis.** O Supabase grátis envia pouquíssimos e-mails por hora (confirmação e recuperação de senha). Para poucos alunos funciona. Para lançar para muita gente, você tem duas saídas:
  - Em **Authentication > Sign In / Providers > Email**, desligar **Confirm email** (a pessoa entra direto após criar a conta).
  - Ou configurar um envio próprio de e-mails (ex: Resend, grátis até 3.000 por mês) em **Authentication > Emails > SMTP Settings**.
- **E-mails em português.** Os modelos de e-mail vêm em inglês. Dá para traduzir em **Authentication > Emails > Templates**.
- **Projeto pausado.** No plano grátis, se ninguém usar o app por 7 dias seguidos, o Supabase pausa o projeto. É só entrar no painel e clicar em "Restore".
- **Instalar no celular.** O aluno abre o link e usa "Adicionar à tela de início" (iPhone: botão compartilhar no Safari; Android: menu do Chrome). O app ganha ícone e abre em tela cheia.
- **Atualizar o app.** Para mudar algo, é só substituir o arquivo no GitHub. Em 1 a 2 minutos a nova versão está no ar.
