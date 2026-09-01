# Hidden /admin login

This version adds a hidden `/admin` page. It is not linked from the public leaderboard.

## 1. Cloudflare D1
Keep the existing `DB` D1 binding. The existing tables are enough.

## 2. Cloudflare Worker secret
Create an encrypted Worker secret named `ADMIN_CODE` and choose your own long private value.
Do **not** put the admin code in GitHub or in `app.js`.

If the dashboard only shows ordinary Key/Value variables, use the Worker/Secret option in the current Cloudflare interface, or set it with Wrangler:

`npx wrangler secret put ADMIN_CODE`

Then enter your private code when prompted.

## 3. Deploy
Deploy the Worker. The `/admin` page will be available at:

`https://YOUR-WORKER-DOMAIN/admin`

The public leaderboard continues to use the normal 6-hour cooldown. Admin votes use the same public vote totals but do not consume or reset a normal visitor's cooldown.

The admin session is an HttpOnly, Secure cookie signed by the Worker secret and expires after 12 hours.
