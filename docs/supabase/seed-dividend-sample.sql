-- Optional sample data for quick validation
insert into public.dividend_rates (
  insurance_company,
  product_name,
  currency,
  year,
  achievement_rate,
  source,
  updated_at
)
values
  ('Bee Life', 'Wealth Plus', 'USD', 2023, 0.92, 'BeeFintech Research Sample', now()),
  ('Bee Life', 'Secure Growth', 'HKD', 2024, 0.88, 'BeeFintech Research Sample', now()),
  ('Harbor Assurance', 'Family Shield', 'USD', 2022, 0.95, 'BeeFintech Research Sample', now())
on conflict do nothing;
