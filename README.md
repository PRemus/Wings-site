# Wings — Landing Page + Waitlist

Premium fitness coaching platform. Next.js 16 + Tailwind CSS v4 + Supabase.

---

## Quick Start (Local)

```bash
cd wings-app
npm install
npm run dev
# → http://localhost:3000
```

---

## Replace the Logo

The project ships with an SVG approximation of the Wings logo.
To use your actual logo PNG:

1. Save your logo as `public/wings-logo.png`
2. Update the `src` in these files from `/wings-logo.svg` to `/wings-logo.png`:
   - `components/Navbar.tsx`
   - `components/Hero.tsx`
   - `components/FinalCTA.tsx`
   - `components/Footer.tsx`

---

## Connect Supabase (Waitlist Database)

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) → New project.

### 2. Create the waitlist table

In the Supabase SQL editor, run:

```sql
create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

create policy "Allow public inserts"
  on public.waitlist
  for insert
  to anon
  with check (true);
```

### 3. Add environment variables

```bash
cp .env.local.example .env.local
```

Fill in your values from Supabase → Settings → API:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Restart `npm run dev`. Without these vars, signups are logged to the server console (useful for testing).

---

## Add Analytics

In `app/layout.tsx`, uncomment the relevant block and add your IDs:

- **Meta Pixel** — replace `YOUR_PIXEL_ID`
- **Google Analytics** — replace `G-XXXXXXXXXX`

---

## Trainer Billing

The `/pricing` page offers Stripe-hosted subscription Checkout for authenticated
trainer accounts:

- Wings Starter: EUR 10/month, up to 5 active clients
- Wings Pro: EUR 20/month, up to 30 active clients
- 14-day free trial
- Promotion codes enabled in Checkout

The browser never receives the Stripe secret key or handles card data. It sends
the trainer's Supabase access token to the Next.js billing routes, which verify
the user and call the authenticated Supabase Edge Functions.

### Vercel environment variables

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-publishable-key
```

### Supabase Edge Function secrets

```env
STRIPE_SECRET_KEY=sk_live_or_test_key
STRIPE_PUBLISHABLE_KEY=pk_live_or_test_key
STARTER_PRICE_ID=price_starter_monthly
PRO_PRICE_ID=price_pro_monthly
SITE_URL=https://wingsapp.fit
```

`STARTER_PRICE_ID` and `PRO_PRICE_ID` must be Stripe Price IDs beginning with
`price_`; Product IDs beginning with `prod_` are not accepted.

Deploy the functions:

```bash
supabase functions deploy create-checkout-session
supabase functions deploy create-customer-portal-session
```

The Edge Function code enables `allow_promotion_codes`, so the existing
`INES20` promotion code can be entered in Stripe Checkout. Configure and enable
the Stripe Customer Portal in the Stripe Dashboard before using the
"Manage subscription" action.

---

## Deploy to wingsapp.fit

### Option A — Vercel (Recommended, free)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add env vars in Vercel → Settings → Environment Variables
4. Deploy — you get a `vercel.app` URL instantly
5. In Vercel → Domains → add `wingsapp.fit`
6. In your domain registrar DNS, set:
   - `A` record → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`

### Option B — Self-hosted (VPS)

```bash
npm run build
npm start   # port 3000
```

Nginx reverse proxy + Certbot for SSL:

```nginx
server {
  server_name wingsapp.fit www.wingsapp.fit;
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

```bash
certbot --nginx -d wingsapp.fit -d www.wingsapp.fit
```

---

## Project Structure

```
wings-app/
├── app/
│   ├── layout.tsx          ← SEO metadata, fonts, analytics placeholders
│   ├── page.tsx            ← Assembles all sections
│   ├── globals.css         ← Tailwind + custom CSS animations
│   ├── icon.svg            ← Favicon (auto-detected by Next.js)
│   └── api/waitlist/
│       └── route.ts        ← POST /api/waitlist (validates + saves)
├── components/
│   ├── Navbar.tsx          ← Sticky nav with glass-on-scroll effect
│   ├── Hero.tsx            ← Full-screen hero + CSS phone mockup
│   ├── Features.tsx        ← 6-card feature grid
│   ├── HowItWorks.tsx      ← 3-step onboarding process
│   ├── TrainerSection.tsx  ← Before/After comparison + stats
│   ├── SocialProof.tsx     ← Testimonials + waitlist counter
│   ├── FinalCTA.tsx        ← Second waitlist CTA section
│   ├── WaitlistForm.tsx    ← Reusable form (validation, loading, success)
│   └── Footer.tsx          ← Links, legal, socials
├── hooks/
│   └── useScrollReveal.ts  ← Scroll-triggered entrance animations
├── lib/
│   └── supabase.ts         ← Supabase client (no-config fallback)
└── public/
    └── wings-logo.svg      ← Replace with your actual PNG logo
```

---

## Brand Colors

| Role       | Value     |
|------------|-----------|
| Blue       | `#3B82F6` |
| Cyan       | `#06B6D4` |
| Green      | `#10B981` |
| Lime       | `#84CC16` |
| Gold       | `#EAB308` |
| Background | `#060B18` |
| Card bg    | `#0F172A` |
