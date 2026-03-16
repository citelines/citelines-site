# Citelines Roadmap

## Status Key
- [ ] To do
- [x] Done
- 🚧 In progress

---

## Phase 1 — Foundation (citelines-site)
- [x] Set up Astro project
- [x] Configure GitHub Pages deployment (`.github/workflows/deploy.yml`)
- [x] Shared layout with nav and footer
- [x] Placeholder pages: Home, About, Features, Contact
- [x] Custom domain configured (`www.citelines.org`)
- [x] HTTPS / SSL certificate

## Phase 2 — Content & Design (citelines-site)
- [ ] Define site purpose and copy
- [ ] Brand assets: design system, color palette, icons, logos, favicon
- [ ] Fill in About page content
- [ ] Fill in Features page content
- [ ] Fill in Contact page (form or email link)
- [ ] SEO meta tags and Open Graph
- [ ] Accessibility audit
- [ ] Cross-browser/device testing

## Phase 3 — Infrastructure & Email
- [x] Resend account setup (transactional email)
- [x] Add Resend DNS records to Namecheap (SPF, DKIM, DMARC)
- [x] Verify domain in Resend
- [x] Implement email verification flow in youtube-annotator
- [x] Email verification landing page on www.citelines.org
- [x] Created shared org Gmail (citelines@gmail.com)
- [x] Transferred Railway account ownership to citelines@gmail.com
- [x] Transferred Resend account ownership to citelines@gmail.com
- 🚧 Zoho Mail inbox for citelines.org (account created, MX records added, can receive email)
  - [ ] Merge Zoho's SPF `include:` into existing SPF TXT record (only one SPF record allowed per domain)
  - [ ] Add Zoho DKIM record
  - [ ] Verify sending works without Gmail spam warning
- [ ] Migrate service accounts from citelines@gmail.com to @citelines.org once inbox is live
- [ ] Set up newsletter service (Zoho Campaigns or similar) for marketing emails
  - [ ] Email signup form on citelines.org
  - [ ] Connect to email service for periodic sends
- [ ] Migrate hosting from GitHub Pages to Cloudflare Pages (IP protection)
  - Connect citelines-site repo to Cloudflare Pages (Astro preset, `npm run build`, output `dist`)
  - Add custom domain (`www.citelines.org`) in Cloudflare Pages
  - Remove old GitHub Pages config and DNS records
  - Make citelines-site repo private

## Phase 4 — youtube-annotator UX
- [x] Registration success screen (replaces staying on form)
- [x] Logged-in button shows user initials in teal circle
- [x] Auth state persists across page reloads
- [x] All account UI (login, register, account info, sign out) in slide-in sidebar
- [x] Keyboard events don't leak to YouTube shortcuts when typing in sidebar
- [x] Progress bar marker colors reflect login/logout state instantly
- [x] Escape key and click-outside close the auth modal
- 🚧 Forgot Password flow (Resend transactional email)
  - [x] Backend: `POST /api/auth/forgot-password` — generate token, send reset link via Resend
  - [x] Backend: `POST /api/auth/reset-password` — validate token, update password
  - [ ] Reset password landing page on citelines.org (`/reset-password?token=...`)
  - [x] "Forgot password?" link in login form (extension sidebar)
  - ⚠️ Not yet live-tested end-to-end (landing page missing)
- [x] Account settings page on citelines.org (`/account-settings`)
- [x] User account self-delete flow (implemented, not yet live-tested) — see youtube-annotator ROADMAP for details

## Phase 5 — Website Content
- [ ] Documentation / Acknowledgements page — explain the moderation stack and credit providers:
  - [`obscenity`](https://github.com/jo3-l/obscenity) — display name profanity filtering (implemented)
  - [Google Safe Browsing API](https://developers.google.com/safe-browsing) — malicious URL detection (planned)
  - [Perspective API](https://perspectiveapi.com/) — citation text toxicity scoring (planned)
  - [IFTAS](https://about.iftas.org/trust-safety-services/) — supplemental spam/abuse lists (planned)

Note: Feature work, moderation, legal, and operations items are tracked in youtube-annotator/ROADMAP.md

---

## Open Questions / Future Work

Design docs live in `youtube-annotator/dev-docs/` (gitignored):

- **Extension auto-update strategy** (`auto-update.md`)
- **Testing strategy** (`testing.md`)
- **content.js refactor** (`content-js-refactor.md`)
- **Malicious URL blocklist** (`bad-url-block.md`)

---

## My Dashboard — Creator Tools
- [ ] Creator view on My Dashboard: list creator's videos with citation counts, drill into per-video citation management
- [ ] Review viewer-contributed citations: remove, edit, flag for review
- [ ] Give props/gratitude to viewer citations (visual badge/highlight)
- [ ] Same backend endpoints as the YouTube Studio extension sidebar — both surfaces share the API
- See `youtube-annotator/ROADMAP.md` Phase 4A for full creator tools spec and mockups (`youtube-annotator/mockups/option-a-sidebar.html`)

## Backlog / Ideas
- Consider open-sourcing youtube-annotator after legal review

---

## Completed
- Initial commit and project scaffolding
- Moved repos to `citelines` GitHub organization
- Added proprietary license to youtube-annotator
- Configured Railway to deploy from citelines org
