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
- 🚧 Zoho Mail inbox for citelines.org (account created, blocked on DNS setup in Namecheap)
- [ ] Migrate service accounts from citelines@gmail.com to @citelines.org once inbox is live

## Phase 4 — youtube-annotator UX
- [x] Registration success screen (replaces staying on form)
- [x] Logged-in button shows user initials in teal circle
- [x] Auth state persists across page reloads
- [x] All account UI (login, register, account info, sign out) in slide-in sidebar
- [x] Keyboard events don't leak to YouTube shortcuts when typing in sidebar
- [x] Progress bar marker colors reflect login/logout state instantly
- [x] Escape key and click-outside close the auth modal
- [ ] Forgot Password flow (Resend transactional email)
  - [ ] Backend: `POST /api/auth/forgot-password` — generate token, send reset link via Resend
  - [ ] Backend: `POST /api/auth/reset-password` — validate token, update password
  - [ ] Reset password landing page on citelines.org (`/reset-password?token=...`)
  - [ ] "Forgot password?" link in login form (extension sidebar + citelines.org)
- [ ] Account settings (change display name, email, password)
- [ ] User account self-delete flow (from account settings)

## Phase 5 — Core Features
- 🚧 Support information hierarchy (creator vs viewer citations)
- [ ] Editability of "mine" citations pre-submission for review
- [ ] Creator Mode (better citation entry for creators who know what they want to cite)
- [ ] "Save citation" / "save video" flow for viewers
- [ ] Show videos and citations list in extension sidebar (currently just counts)
- [ ] Website dashboard: "my citations" vs "saved citations"
- [ ] Validate annotations to a timeblock (minimum granularity)
- [ ] Zotero / Wikipedia citation integration (explore feasibility)

## Phase 6 — Moderation, Policy & Trust
- 🚧 Defenses against bad actors: logged-out (IP / fingerprint banning)
- [ ] Draft Privacy Policy
- [ ] Chrome Web Store submission

## Phase 7 — Operations
- [x] Measurement: extension activity metrics on admin dashboard
- [ ] Pay for server hosting (Railway trial expiration)

---

## Open Questions / Future Work

These have dedicated notes in `dev-docs/` (gitignored):

- **Extension auto-update strategy** (`dev-docs/auto-update.md`) — how to push updates to test users now (unpacked), and how CWS auto-update works once published. Includes a lightweight polling approach for test users.
- **Testing strategy** (`dev-docs/testing.md`) — when to add tests, what to test first (citation parsing, auth rules, save/retrieve cycle, E2E), and recommended stack (Vitest + Playwright).
- **content.js refactor** (`dev-docs/content-js-refactor.md`) — content.js is 1,600 lines and handles everything. Doc covers how to split it into ~7 modules, the shared state problem, and whether to add a bundler (esbuild). Also notes two quick wins: fix an undeclared `viewOnlyAnnotations` variable and clean up scattered `[DEBUG]` console logs.

---

## Backlog / Ideas
- Consider open-sourcing youtube-annotator after legal review

---

## Completed
- Initial commit and project scaffolding
- Moved repos to `citelines` GitHub organization
- Added proprietary license to youtube-annotator
- Configured Railway to deploy from citelines org
