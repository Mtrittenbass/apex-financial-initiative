# Apex Financial Initiative

Website for Apex Financial Initiative, a student-led nonprofit in Bellevue, WA that runs free financial literacy workshops for teens.

## Structure

Plain HTML, CSS, and JavaScript. No build step, frameworks, or external dependencies.

- `index.html`, `about.html`, `workshops.html`, `curriculum.html`, `get-involved.html`, `outreach.html`, `contact.html`: one file per page
- `styles.css`: shared styles (brand colors are CSS variables at the top)
- `script.js`: mobile menu and form thank-you messages
- `images/`: photos and logo
- `favicon.svg`: browser tab icon

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy

Pushing to `main` deploys automatically on Vercel.

## Notes

The contact, workshop request, and meeting request forms show a thank-you message but don't send anywhere yet. They need a form backend before they can deliver submissions.
