# Seneca East Public Aura Leaderboard

This version adds a real public leaderboard backed by Cloudflare D1.

## What changed
- Every staff member is always shown.
- Vote totals are shared publicly.
- One vote per visitor/IP every 6 hours.
- The 6-hour timer is also shown in the browser.
- The server enforces the 6-hour rule, so clearing browser storage does not bypass it.
- Staff names/roles come from the public Seneca East staff directory.

## Deploy
1. Create a Cloudflare account.
2. Install Wrangler: `npm install -g wrangler`
3. Create a D1 database named `seneca-east-aura`.
4. Put its database ID in `wrangler.toml`.
5. Run `wrangler d1 execute seneca-east-aura --remote --file=schema.sql`
6. Run `wrangler deploy`.

For a production deployment, use a custom domain if desired. The Cloudflare Worker serves the website and `/api/*` handles votes.
