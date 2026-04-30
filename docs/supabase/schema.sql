-- BeeFintech Phase 2 Supabase Schema
-- Run in Supabase SQL Editor

create extension if not exists pgcrypto;

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  contact text default '',
  email text default '',
  role text not null,
  interested_service text not null,
  message text default '',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.dividend_rates (
  id uuid primary key default gen_random_uuid(),
  insurance_company text not null,
  product_name text not null,
  currency text not null,
  year integer not null,
  achievement_rate numeric(6,4) not null,
  source text not null,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists idx_dividend_rates_company on public.dividend_rates (insurance_company);
create index if not exists idx_dividend_rates_product on public.dividend_rates (product_name);
create index if not exists idx_dividend_rates_currency on public.dividend_rates (currency);
create index if not exists idx_dividend_rates_year on public.dividend_rates (year);

comment on table public.demo_requests is '预约演示记录';
comment on table public.dividend_rates is '分红达成率查询数据';
