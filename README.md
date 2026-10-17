# CA Firm Website (MERN)

A multi-page website for an Indian Chartered Accountant (CA) firm, built with React, Express and MongoDB.
All firm details (name, email, phone, address, team, photos) are **placeholders** that you replace before publishing.

> **Status:** built and tested locally in pieces. It has **not been deployed**. Follow the deployment section to publish it.

---

## 1. What is implemented

**Frontend (`client/`)**
- Pages: Home, About Us, Services, Industries, Insights (list), Insight details (`/insights/:slug`), Contact, 404
- Sticky header, accessible mobile menu, active link states, skip link, footer
- Reusable components: Header, Footer, Button, SectionHeading, ServiceCard, InsightCard, CTA
- Insights: loaded from the API, category filters, search, loading / error / empty states
- Contact form: React Hook Form, client validation, server error mapping, loading state, success shown only after the server saves the inquiry
- SEO: per-page title and description (React Helmet Async), semantic HTML, alt text, lazy-loaded images and routes, `robots.txt`

**Backend (`server/`)**
- `GET /api/health`, `POST /api/contact`, `GET /api/insights`, `GET /api/insights/:slug`
- Mongoose models: `Contact`, `Insight`
- Helmet, CORS (origin from env), JSON body limit, global rate limit, stricter contact rate limit
- Server-side validation and sanitization (express-validator), centralized error handling, consistent JSON responses
- Clear startup error when required environment variables are missing
- Seed script for sample insights (marked as placeholder content)

**Not implemented (optional future enhancements)**
- Email notification when someone submits the form (the API only saves to MongoDB and never claims an email was sent)
- Admin dashboard or login to read inquiries and manage articles (view inquiries in MongoDB Atlas or Compass for now)
- CMS for articles, sitemap, analytics, spam protection such as reCAPTCHA, automated tests

---

## 2. Tech stack

| Area | Packages |
| --- | --- |
| Frontend | React 19, Vite 8, Tailwind CSS 4 (`@tailwindcss/vite`), React Router 7, Axios, Lucide React, React Hook Form, React Helmet Async |
| Backend | Node.js, Express 4, Mongoose 8, dotenv, cors, helmet, express-rate-limit, express-validator |
| Database | MongoDB (local or Atlas) |

Requirements: **Node.js 20.19+ (or 22.12+)** and npm. Vite 8 needs this Node version. The server runs on Node 18+.

---

## 3. Project structure

```
ca-firm-website/
├── client/
│   ├── public/                 favicon, robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/         Header, Footer, Layout, ScrollManager
│   │   │   ├── common/         Button, SectionHeading, CTA, Section, Seo, Photo, InsightCard, ContactForm, FormField ...
│   │   │   ├── home/           Hero, Principles, ServicesOverview, WhyChooseUs, IndustriesPreview, InsightsPreview
│   │   │   └── services/       ServiceCard
│   │   ├── config/             site.js (firm details), images.js (photos)
│   │   ├── data/               services.js, industries.js, serviceOptions.js (editable content)
│   │   ├── hooks/              useInsights, useInsight
│   │   ├── pages/              one file per route
│   │   ├── services/api.js     Axios instance
│   │   └── utils/
│   ├── vercel.json             SPA rewrite for Vercel
│   └── .env.example
└── server/
    ├── config/                 env.js (validation), db.js
    ├── controllers/  models/  routes/  middleware/  services/  utils/
    ├── app.js  server.js
    └── .env.example
```

---

## 4. Run it locally

### 4.1 Database
Use either a local MongoDB (`mongodb://127.0.0.1:27017/ca-firm`) or MongoDB Atlas (section 8.1).

### 4.2 Backend
```bash
cd server
cp .env.example .env        # then edit .env
npm install
npm run seed                # optional: adds 3 placeholder articles
npm run dev                 # http://localhost:5000
```
Check `http://localhost:5000/api/health`. It should return `"database": "connected"`.

### 4.3 Frontend
```bash
cd client
cp .env.example .env        # then edit .env
npm install
npm run dev                 # http://localhost:5173
```

### 4.4 Production build check
```bash
cd client && npm run build && npm run preview
```

---

## 5. Environment variables

**`server/.env`**

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | yes | MongoDB connection string. Never commit it. |
| `FRONTEND_URL` | yes | Allowed frontend origin for CORS, for example `http://localhost:5173`. Several origins can be comma-separated. No trailing path. |
| `PORT` | no | Defaults to `5000`. Hosts like Render set this for you. |
| `NODE_ENV` | no | `development` or `production`. In production, error details are hidden from API responses. |

If `MONGODB_URI` or `FRONTEND_URL` is missing, the server stops at startup and prints which variable is missing.

**`client/.env`** (all values are public, because they are bundled into the site; never put secrets here)

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_API_URL` | yes | Backend base URL including `/api`, for example `http://localhost:5000/api`. |
| `VITE_WHATSAPP_NUMBER` | no | Digits only with country code, for example `919876543210`. Until set, no WhatsApp link is shown. |
| `VITE_FIRM_EMAIL`, `VITE_FIRM_PHONE`, `VITE_FIRM_ADDRESS` | no | Shown in the footer and Contact page. Placeholders appear until set. |
| `VITE_MAPS_EMBED_URL` | no | The `src` of the Google Maps embed (Google Maps > Share > Embed a map). |

Restart the dev server after changing any `VITE_` variable. Real `.env` files are ignored by Git (see `.gitignore`).

---

## 6. Customize the content

- **Firm name:** `client/src/config/site.js` (`name`) and the `<title>` in `client/index.html`.
- **Services text:** `client/src/data/services.js`. If you rename a service, also update `SERVICE_OPTIONS` in `server/utils/constants.js`, because the backend only accepts those exact names.
- **Industries text:** `client/src/data/industries.js`.
- **About page, values, team:** `client/src/pages/About.jsx`. Team cards are placeholders. Do not publish qualifications or memberships that have not been verified.
- **Photos:** `client/src/config/images.js`. The current Unsplash links are placeholders and are not guaranteed to load. Put your own photos in `client/public/images/` and use paths like `/images/office.jpg`. If an image fails to load, a plain colour block is shown instead.
- **Articles:** edit the sample articles in `server/utils/seed.js` and run `npm run seed` again (existing slugs are updated). Remove samples with `npm run seed:destroy`. Article content is an array of paragraphs; a paragraph starting with `## ` becomes a sub-heading.
- **Legal accuracy:** the service descriptions, form names and sample articles are general. Have the firm's CA review all text before publishing. Sample articles are not tax advice.

---

## 7. Manual testing checklist

Run the backend and frontend, then check each item.

**Routes and navigation**
- [ ] `/`, `/about`, `/services`, `/industries`, `/insights`, `/contact` load without console errors
- [ ] `/insights/understanding-basics-of-income-tax-planning` loads (after seeding)
- [ ] An unknown URL such as `/xyz` shows the custom 404 page, and so does a refresh on `/about` after deployment
- [ ] Desktop: every header and footer link works and the current page link is highlighted
- [ ] Mobile width (about 375px): the menu opens, links work, the menu closes after navigating, Escape closes it
- [ ] Tab key moves through the header, the skip link appears first, focus is always visible
- [ ] Each service card on Home opens the matching section on `/services`
- [ ] "Book a Consultation" and "Schedule a Consultation" open `/contact`; "Discuss this service" pre-selects the service

**Contact form**
- [ ] Submitting empty shows errors under each required field and does not call the API
- [ ] Invalid email and invalid phone show errors; message under 10 characters shows an error
- [ ] Valid submit shows a loading state, then the success panel; a new document appears in the `contacts` collection
- [ ] Stop the backend and submit: an error message appears and no success panel
- [ ] Send a bad payload directly, expecting `422`:
  ```bash
  curl -i -X POST http://localhost:5000/api/contact -H "Content-Type: application/json" \
    -d '{"fullName":"A","email":"bad","service":"x","message":"hi"}'
  ```
- [ ] Submitting more than 5 times within an hour returns `429` and the form shows the message

**Insights**
- [ ] Category buttons filter the list; search matches title, excerpt and category
- [ ] A search with no results shows the empty message and "Clear search and filters" resets it
- [ ] With the backend stopped, the page shows an error with a working "Try again" button
- [ ] A made-up slug shows "Article not found"

**API and configuration**
- [ ] `GET /api/health` returns `200` when connected and `503` when the database is down
- [ ] Removing `MONGODB_URI` from `server/.env` makes the server exit with a clear message
- [ ] Removing `VITE_API_URL` makes form and insights show "VITE_API_URL is not set..."
- [ ] A request from a different origin is rejected by CORS (`FRONTEND_URL` mismatch)
- [ ] `npm run build` in `client/` completes without errors

---

## 8. Deployment

Frontend on Vercel, backend on Render (or any Node host), database on MongoDB Atlas. Deploy in this order: database, backend, frontend, then link them.

### 8.1 Create the MongoDB Atlas database
1. Create an account at mongodb.com/atlas and create a free cluster.
2. **Database Access:** add a database user with a strong password (readWrite on the database is enough).
3. **Network Access:** add the IP addresses allowed to connect. Render's free tier has no fixed IP, so you will probably need `0.0.0.0/0`. Because that opens the network layer to everyone, use a strong password and a user restricted to this database.
4. **Connect > Drivers:** copy the connection string and put your database name before the `?`, for example:
   `mongodb+srv://<user>:<password>@<cluster>.mongodb.net/ca-firm?retryWrites=true&w=majority`
   URL-encode special characters in the password.
5. Collections (`contacts`, `insights`) are created automatically on first write.

### 8.2 Deploy the backend on Render
1. Push the project to GitHub (check that no `.env` file is committed).
2. In Render, create a **Web Service** from the repository.
3. Settings: **Root Directory** `server`, **Build Command** `npm install`, **Start Command** `npm start`.
4. Environment variables: `MONGODB_URI` (Atlas string), `FRONTEND_URL` (set a temporary value now, update after step 8.3), `NODE_ENV=production`, and `NODE_VERSION=20` if the default Node version is older than 18.
5. Optional: set the health check path to `/api/health`.
6. Seed the sample articles once, either with `MONGODB_URI=<atlas string> npm run seed` from your own computer, or from the Render shell.
7. Note the service URL, for example `https://your-api.onrender.com`. Free instances can sleep after inactivity, so the first request may be slow.

### 8.3 Deploy the frontend on Vercel
1. Import the same repository in Vercel.
2. Settings: **Root Directory** `client`, framework **Vite**, build command `npm run build`, output directory `dist`.
3. Environment variables: `VITE_API_URL=https://your-api.onrender.com/api`, plus the optional firm details and WhatsApp number.
4. Deploy. `client/vercel.json` already makes page refreshes work on routes such as `/about`.
5. Note the Vercel URL, for example `https://your-site.vercel.app`.

### 8.4 Configure CORS
Go back to Render and set `FRONTEND_URL` to the exact frontend origin, with no trailing slash or path:
```
FRONTEND_URL=https://your-site.vercel.app
```
Add your custom domains too, comma-separated (include both `www` and the bare domain if you use both):
```
FRONTEND_URL=https://your-site.vercel.app,https://www.yourfirm.in,https://yourfirm.in
```
Redeploy the backend. A mismatch here shows up as a "cannot reach the server" message on the site and a CORS error in the browser console.

### 8.5 Connect a custom domain
1. Buy or use an existing domain.
2. In Vercel: **Project > Settings > Domains > Add**, enter the domain.
3. At your DNS provider, create the records Vercel shows for that domain (typically an A record for the bare domain and a CNAME for `www`). Use the values Vercel displays, as they can change.
4. Wait for DNS to propagate; Vercel issues the HTTPS certificate automatically.
5. Add the new origin to `FRONTEND_URL` on Render (step 8.4) and redeploy.
6. Optional: you can also attach a domain such as `api.yourfirm.in` to the Render service; if you do, update `VITE_API_URL` and redeploy the frontend.

### 8.6 Test the production API
```bash
API=https://your-api.onrender.com/api

curl -i $API/health                      # 200 and "database":"connected"
curl -i $API/insights                    # published articles (after seeding)

# valid submission, expecting 201
curl -i -X POST $API/contact -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com","service":"Other / Not Sure","message":"This is a production test message."}'

# CORS: allowed origin should receive the access-control-allow-origin header
curl -i $API/health -H "Origin: https://your-site.vercel.app"
# a different origin should get 403
curl -i $API/health -H "Origin: https://example.org"
```
Then open the live site, submit the contact form and confirm the document appears in Atlas (Browse Collections > `contacts`). Delete your test entries afterwards.

---

## 9. Security notes

- Secrets live only in server environment variables. The frontend only receives `VITE_` values, which are public.
- The API validates and sanitizes every contact field, limits body size to 10 KB and rate-limits requests.
- Contact data is personal information. Restrict who can open the Atlas project, and consider adding a privacy notice before launch.
- Keep dependencies updated (`npm outdated`, `npm audit`).
