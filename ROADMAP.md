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
- [ ] Design system / color palette
- [ ] Fill in About page content
- [ ] Fill in Features page content
- [ ] Fill in Contact page (form or email link)
- [ ] SEO meta tags and Open Graph
- [ ] Favicon finalized
- [ ] Accessibility audit
- [ ] Cross-browser/device testing

## Phase 3 — Infrastructure & Email
- [x] Resend account setup (transactional email)
- [x] Add Resend DNS records to Namecheap (SPF, DKIM, DMARC)
- [x] Verify domain in Resend
- [x] Implement email verification flow in youtube-annotator
- [x] Email verification landing page on www.citelines.org
- [ ] Personal inbox for citelines.org (Zoho or Google Workspace)

## Phase 4 — youtube-annotator UX
- [x] Registration success screen (replaces staying on form)
- [x] Logged-in button shows user initials in teal circle
- [x] Auth state persists across page reloads
- [x] All account UI (login, register, account info, sign out) in slide-in sidebar
- [x] Keyboard events don't leak to YouTube shortcuts when typing in sidebar
- [x] Progress bar marker colors reflect login/logout state instantly
- [x] Escape key and click-outside close the auth modal
- [ ] Password reset flow (UI + landing page on citelines.org)
- [ ] Account settings (change display name, email, password)

## Phase 5 — Core Features
- [ ] (Add features here)

---

## Backlog / Ideas
- Personal inbox: Zoho Mail (free) or Google Workspace ($6/mo)
- Consider open-sourcing youtube-annotator after legal review

---

## Completed
- Initial commit and project scaffolding
- Moved repos to `citelines` GitHub organization
- Added proprietary license to youtube-annotator
- Configured Railway to deploy from citelines org
