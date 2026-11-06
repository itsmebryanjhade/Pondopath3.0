# Initial import setup notes

- Bootstrap is configured for Node.js 24 and npm with executable `install` and
  `dev` lifecycle scripts.
- The active application runtime requires `NEXT_PUBLIC_SUPABASE_URL` and
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; both names are configured in Make.
  Configuration does not by itself verify credential validity.
- Deploy preview is explicitly skipped. This custom Next.js application needs a
  runtime server for Server Actions, route handlers, cookies, proxy-based
  authentication, and Supabase SSR, so it cannot safely produce static output.
- Production Make deploy uses `.figma/make/deploy`: it runs the existing
  production build with `NODE_ENV=production`, emits Next.js standalone output,
  and publishes `.next` with the `nextjs` adapter so server-side routes,
  authentication, and Supabase SSR keep working.
