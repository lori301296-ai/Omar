# Omar's Company — Authentic Kenya Tours & Safaris

A bilingual (English / Italian) web application for **Omar's Company**, showcasing safaris, day excursions, coastal culinary adventures, and authentic local experiences based in Watamu, Kilifi County, Kenya 🇰🇪.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- `npm`, `pnpm`, or `bun`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

---

## 📦 Building for Production

To create an optimized, minified production build:
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory, ready to be deployed to any static hosting provider.

To preview the production build locally:
```bash
npm run preview
```

---

## 🛠️ Project Configuration & Customization

All primary company data and content can be updated directly from the files in `src/data/`:

1. **WhatsApp & Contact Details**:
   - File: `src/data/siteConfig.ts`
   - Update `dialNumber`, `phoneDisplay`, and default messages.
2. **Tours & Excursions**:
   - File: `src/data/toursData.ts`
   - Update itineraries, highlights, pricing, and destination details.
3. **Photo Gallery**:
   - File: `src/data/galleryData.ts`
   - Replace placeholder images with Omar's actual high-resolution photography.
4. **Translations (English & Italian)**:
   - File: `src/data/translations.ts`
   - Update or extend copy in English (`en`) and Italian (`it`).

---

## 🌐 Deploying to Common Hosting Platforms

Because this is a standard Vite + React Single Page Application (SPA), it can be deployed anywhere in seconds:

### Deploy to Vercel
1. Push your repository to GitHub or GitLab.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Deploy to Cloudflare Pages
1. Go to Cloudflare Pages > Create a project > Connect to Git.
2. Select framework preset: **Vite**.
3. Build command: `npm run build`, Output directory: `dist`.

---

## 📁 Project Structure

```
├── index.html            # Main HTML document with SEO meta tags & web fonts
├── metadata.json         # Google AI Studio application metadata
├── package.json          # Project dependencies and npm scripts
├── tsconfig.json         # TypeScript compiler configuration
├── vite.config.ts        # Vite configuration with Tailwind CSS plugin
├── public/               # Static assets
└── src/
    ├── App.tsx           # Main application shell with bilingual state
    ├── main.tsx          # React DOM entry point
    ├── types.ts          # TypeScript type definitions
    ├── data/
    │   ├── siteConfig.ts # Contact info, WhatsApp configuration
    │   ├── translations.ts # Full EN & IT translation dictionaries
    │   ├── toursData.ts  # Safari, Blue Safari, Hell's Kitchen tours
    │   └── galleryData.ts# Editorial photo gallery items & categories
    └── components/       # Modular UI components (Navbar, Hero, Tours, QuoteModal, etc.)
```
