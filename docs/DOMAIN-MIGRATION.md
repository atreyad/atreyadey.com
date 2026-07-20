# Domain migration plan: atreyadey.com → GitHub Pages

**Status: NOT yet executed. No DNS changes have been made.**

## Current configuration (documented 20 July 2026)

- **Registrar / DNS host:** Namecheap (nameservers `dns1.registrar-servers.com`,
  `dns2.registrar-servers.com`)
- **Current hosting:** Google Sites — `www.atreyadey.com` is a CNAME to
  `ghs.googlehosted.com`
- **Apex (`atreyadey.com`):** no A record found (apex does not currently
  resolve; only `www` works)
- **Email (MUST NOT be touched):** Namecheap email forwarding is active:
  - MX 10 `eforward1.registrar-servers.com`
  - MX 10 `eforward2.registrar-servers.com`
  - MX 10 `eforward3.registrar-servers.com`
  - MX 15 `eforward4.registrar-servers.com`
  - MX 20 `eforward5.registrar-servers.com`

  Do not change nameservers or delete MX/TXT records — email forwarding on
  the domain would break.

## Step 1 — Publish to GitHub Pages first (no DNS risk)

1. Create the GitHub repository and push this folder:

   ```bash
   cd atreyadey.com
   git remote add origin https://github.com/atreyad/atreyadey.com.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub
   Actions.** The included workflow deploys on every push to `main`.

3. Temporarily delete `public/CNAME` (or wait) and check the site at
   `https://atreyad.github.io/atreyadey.com/` — note that paths assume the
   custom domain, so styling may be off at the preview URL. This is expected;
   the site is built for `www.atreyadey.com`.

## Step 2 — Point DNS at GitHub Pages (Namecheap → Advanced DNS)

Make these changes in the Namecheap dashboard (Domain List → atreyadey.com →
Advanced DNS). **Change only the records listed below.**

| Action | Type | Host | Value |
|---|---|---|---|
| Edit (was `ghs.googlehosted.com`) | CNAME | `www` | `atreyad.github.io` |
| Add | A | `@` | `185.199.108.153` |
| Add | A | `@` | `185.199.109.153` |
| Add | A | `@` | `185.199.110.153` |
| Add | A | `@` | `185.199.111.153` |

Leave every MX record and any TXT/SPF record exactly as it is.

**Record the old values before editing** (screenshot the Advanced DNS page)
so the change can be reversed by restoring the `www` CNAME to
`ghs.googlehosted.com`.

## Step 3 — Connect the domain on GitHub

1. Repository → **Settings → Pages → Custom domain:** enter
   `www.atreyadey.com` → Save. GitHub will verify DNS (can take
   minutes–hours after step 2).
2. Tick **Enforce HTTPS** once the certificate is provisioned.
3. The apex `atreyadey.com` will then redirect to `www.atreyadey.com`
   automatically (because of the A records + CNAME file).

## Step 4 — Verify

- `https://www.atreyadey.com/` loads the new site over HTTPS
- `https://atreyadey.com/` redirects to the `www` version
- `http://` versions redirect to `https://`
- Old URLs redirect: `/bio` → `/#about`, `/interviews-media` → `/news`,
  `/home` → `/`
- Email forwarding to the domain still works (send a test email)
- `https://www.atreyadey.com/sitemap-index.xml` and `/robots.txt` respond

## Rollback

Restore the `www` CNAME record to `ghs.googlehosted.com` and remove the four
A records. The Google Sites page comes back as soon as DNS propagates
(minutes to a few hours). Nothing on the Google Sites side is deleted by this
migration — do not delete the Google Site until the new site has been live
and stable for a while.
