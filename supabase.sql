-- Seca 15: estrutura do banco
-- Cole tudo isto no Supabase em SQL Editor > New query e clique em Run.

-- 1) Progresso e cadastro de cada aluno (uma linha por conta)
create table if not exists public.user_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text,
  name       text,
  sex        text check (sex in ('m','f')),
  state      jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Quem pode ver a aba "Alunos"
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.user_state enable row level security;
alter table public.admins     enable row level security;

-- Função auxiliar: a pessoa logada é admin?
create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- Cada aluno lê e grava só a própria linha. O admin lê todas.
drop policy if exists "ler proprio ou admin" on public.user_state;
create policy "ler proprio ou admin" on public.user_state
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists "criar proprio" on public.user_state;
create policy "criar proprio" on public.user_state
  for insert with check (auth.uid() = user_id);

drop policy if exists "atualizar proprio" on public.user_state;
create policy "atualizar proprio" on public.user_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Cada pessoa só consegue ver se ela mesma é admin.
drop policy if exists "ver a si mesmo" on public.admins;
create policy "ver a si mesmo" on public.admins
  for select using (auth.uid() = user_id);

-- 3) Tornar você admin (rode DEPOIS de criar sua conta no app).
-- Troque o e-mail abaixo pelo seu e rode só esta linha:
-- insert into public.admins (user_id) select id from auth.users where email = 'SEU_EMAIL_AQUI';
