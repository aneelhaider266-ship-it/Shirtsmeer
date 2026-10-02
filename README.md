# ShirtsMeer

Next.js 15 (App Router) + Tailwind CSS site with 5 pillar posts about matching shirts with grey, brown,
navy blue, khaki and olive green pants.

## Project structure

- `app/` pages (home, blog index, blog post route, about, contact, privacy policy, 404, sitemap, robots)
- `components/` reusable UI (QuickAnswerBox, OutfitTable, FAQAccordion with FAQPage schema, etc.)
- `content/posts/*.json` **post content lives here** (edit text, tables, FAQs without touching code)
- `lib/posts.ts` post metadata (titles, meta descriptions, dates)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Upload to GitHub from Termux

```bash
pkg update && pkg install git nodejs unzip -y
unzip shirtsmeer.zip && cd shirtsmeer
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/shirtsmeer.git
git push -u origin main
```

GitHub asks for a username and a **Personal Access Token** as the password (Settings, Developer settings,
Personal access tokens). Create the empty repository on github.com first.

## Notes

- If `npm run build` fails in Termux with an SWC / native binary error, the build is not broken: Termux
  (Android) is not a supported target for Next's native compiler. Push to GitHub and deploy on Vercel or
  Netlify, which build it on a normal Linux server.
- Add your real domain in `lib/posts.ts` (`SITE_URL`) and `app/layout.tsx` (`metadataBase`) if it is not
  `shirtsmeer.com`.
- Add a logo or OG image later in `public/images/` if you want one in the Organization schema.
- Update `updatedDate` in `lib/posts.ts` whenever you meaningfully edit a post.
