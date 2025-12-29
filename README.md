# Peters Adonu - Next.js Website

This is a modern Next.js website with Tailwind CSS for Dr. Peters Ikechukwu Adonu, converted from the original HTML/CSS website.

## 🚀 Features

- **Next.js 16** with App Router and Turbopack
- **Tailwind CSS v4** for styling
- **TypeScript** for type safety
- **Responsive Design** - Mobile-friendly navigation
- **Optimized Images** - Using Next.js Image component
- **Font Awesome Icons**
- **Bootstrap 5** for carousel functionality
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
nextjs-project/
├── app/
│   ├── about/page.tsx       # About page
│   ├── books/page.tsx       # Books page
│   ├── contact/page.tsx     # Contact page
│   ├── law/page.tsx         # Law practice page
│   ├── media/page.tsx       # Media/Gallery page
│   ├── ministry/page.tsx    # Ministry page
│   ├── news/page.tsx        # News page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header component
│   └── Footer.tsx           # Footer component
├── public/
│   └── assets/              # Images and static files
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation & Running

1. Navigate to the project directory:
```bash
cd nextjs-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

The application is now running at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

The project uses **Tailwind CSS v4** with custom colors:

- **Primary Color**: `#000f40` (Dark Blue) - Used for navbar and headings
- **Secondary Color**: `#cc7514` (Orange) - Used for accents and CTAs
- **Font**: Poppins (Google Fonts) - All weights (100-900)

### Custom Tailwind Classes

Use arbitrary values for custom colors:
- `bg-[#000f40]` or `text-[#000f40]` for primary color
- `bg-[#cc7514]` or `text-[#cc7514]` for secondary color

## 🔧 Configuration

### Next.js Features
- App Router (Next.js 16)
- Turbopack for faster builds
- Image optimization
- TypeScript support
- Font optimization (Poppins)

### Tailwind v4
- New `@import "tailwindcss"` syntax
- Inline theme configuration with `@theme inline`
- CSS variables for colors

## 📱 Pages

- **Home** (`/`) - Landing page with hero, about section, and expertise cards
- **About** (`/about`) - Detailed biography and background
- **Contact** (`/contact`) - Contact form and information
- **Law** (`/law`) - Legal practice information (Zion's Chamber)
- **Ministry** (`/ministry`) - Ministry and spiritual leadership
- **Books** (`/books`) - Published works on Amazon and Google Books
- **News** (`/news`) - Latest updates
- **Media** (`/media`) - Photo gallery

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com/new)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

### Core
- **next**: ^16.0.6
- **react**: ^19.0.0
- **react-dom**: ^19.0.0

### Dev Dependencies
- **tailwindcss**: ^4.0.0
- **typescript**: ^5.0.0
- **eslint**: Latest
- **eslint-config-next**: Latest

### External (CDN)
- **Font Awesome**: 6.0.0-beta3
- **Bootstrap**: 5.3.3

## 🔄 Migration Summary

This project was successfully converted from a traditional HTML/CSS/JS website to a modern Next.js application:

### ✅ Completed Tasks

1. **Project Setup**
   - Created Next.js 16 project with TypeScript and Tailwind CSS v4
   - Configured App Router and Turbopack

2. **Styling Migration**
   - Converted all CSS to Tailwind CSS utility classes
   - Maintained original color scheme (#000f40, #cc7514)
   - Integrated Poppins font family

3. **Component Architecture**
   - Created reusable Header component with responsive navigation
   - Created reusable Footer component
   - Implemented mobile hamburger menu with React state

4. **Page Conversion**
   - Converted `index.html` → `app/page.tsx`
   - Converted `about.html` → `app/about/page.tsx`
   - Created all other pages (contact, law, ministry, books, news, media)

5. **Assets & Optimization**
   - Migrated all assets to `public/assets/`
   - Converted images to use Next.js `Image` component for optimization
   - Maintained all original images and icons

6. **JavaScript → React**
   - Converted vanilla JS navigation logic to React hooks (useState)
   - Implemented responsive mobile menu toggle
   - Converted dropdown functionality to React state management

### 🎯 Key Improvements

- **Performance**: Next.js Image optimization, code splitting, and Turbopack
- **SEO**: Better meta tags, semantic HTML, and server-side rendering
- **Maintainability**: Component reusability, TypeScript type safety
- **Developer Experience**: Hot reload, better error messages, modern tooling
- **Responsive**: Maintained mobile-first responsive design with Tailwind

## 📧 Contact

For questions or support, contact:
- **Email**: Ikepeters@yahoo.com
- **Phone**: +234 803 325 0313 / +1 (817) 891-4924
- **Address**: House 1, Block 1, Pacesetter Bitek Estate Quarters, Onireke, Ibadan, Oyo State, Nigeria

## 📄 License

© 2024. All Rights Reserved.

---

**Built with ❤️ using Next.js and Tailwind CSS**
