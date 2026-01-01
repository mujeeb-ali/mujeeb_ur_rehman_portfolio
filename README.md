# 🚀 Mujeeb Ur Rehman - Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as a Computer Science student at Sukkur IBA University. Built with the latest web technologies featuring smooth animations, dark/light theme toggle, and a fully functional contact system.

## ✨ About Me

Passionate Computer Science student at Sukkur IBA University with a strong foundation in programming, software development, and cybersecurity fundamentals. I specialize in:

- **Software Development**: Java, Python, C++, C#
- **Web Development**: HTML5, CSS3, JavaScript, React, Next.js
- **AI & Machine Learning**: NLP, Computer Vision, Face Recognition
- **Android Development**: Management Applications
- **Cybersecurity**: Web application security, secure coding practices
- **Problem Solving**: Strong analytical and team collaboration skills

## 🎓 Education

- **BS Computer Science** - Sukkur IBA University (2023 - Present) - CGPA: 3.04
- **Intermediate Pre-Engineering** - SNAK Govt. Superior Science College (2019-2021) - A1 Grade
- **Matriculation** - Govt. Naz Pilot Secondary High School (2017-2019) - A Grade

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router with Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v3**
- **shadcn/ui** components
- **Framer Motion** animations
- **Lucide React** icons

### Features
- Scroll progress indicator
- Toast notification system
- Achievements timeline
- Blog section structure
- Project search & filter
- Form validation
- Google Analytics & Microsoft Clarity integration
- JSON-LD structured data for SEO

### Deployment
- **GitHub Pages** compatible (static export)
- **Vercel** ready
- **FormSubmit** for contact form (no backend needed)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mujeeb-ali/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (Optional)**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your analytics IDs:
   ```env
   # Google Analytics (Optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   
   # Microsoft Clarity (Optional)
   NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Set source to "GitHub Actions"
5. GitHub will automatically deploy your site!

### Deploy to Vercel
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`components/hero.tsx`)
   - Name, title, and description
   - Social media links

2. **About Section** (`components/about.tsx`)
   - Personal story and background
   - Quick facts and current focus

3. **Skills Section** (`components/skills.tsx`)
   - Technical skills and proficiency levels

4. **Projects Section** (`components/projects.tsx`)
   - Your projects with descriptions
   - Technologies used

5. **Resume Page** (`app/resume/page.tsx`)
   - Education and experience
   - Professional summary
   - Replace `public/Mujeeb_Ur_Rehman_Resume.pdf`

6. **Contact Form** (`components/contact.tsx`)
   - Uses FormSubmit (no backend needed)
   - Updates email in the fetch URL

### Styling
- **Colors**: Modify `tailwind.config.ts` and `app/globals.css`
- **Fonts**: Update fonts in `app/layout.tsx`
- **Components**: Customize shadcn/ui components in `components/ui/`

## 📁 Project Structure

```
├── app/                      # Next.js 15 App Router
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── projects/             # Projects page
│   ├── resume/               # Resume page
│   ├── skills/               # Skills page
│   ├── globals.css           # Global styles
│   ├── icon.svg              # Favicon
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── about.tsx             # About section
│   ├── achievements.tsx      # Timeline of achievements
│   ├── analytics.tsx         # GA & Clarity integration
│   ├── blog.tsx              # Blog section
│   ├── contact.tsx           # Contact form
│   ├── footer.tsx            # Site footer
│   ├── hero.tsx              # Hero section
│   ├── navigation.tsx        # Navigation bar
│   ├── projects.tsx          # Projects showcase
│   ├── scroll-progress.tsx   # Scroll indicator
│   ├── skills.tsx            # Skills display
│   ├── theme-provider.tsx    # Theme context
│   └── theme-toggle.tsx      # Dark/light toggle
├── lib/                      # Utility functions
│   ├── structured-data.ts    # JSON-LD for SEO
│   └── utils.ts              # General utilities
├── public/                   # Static assets
│   ├── Mujeeb_Ur_Rehman_Resume.pdf  # Resume file
│   └── README_RESUME.txt     # Resume instructions
├── .env.example              # Environment variables template
├── tailwind.config.ts        # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

## 🚀 Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light theme toggle
- ✅ Smooth scroll animations
- ✅ Scroll progress indicator
- ✅ Toast notification system
- ✅ Contact form with validation (FormSubmit integration)
- ✅ Project search and filtering
- ✅ Achievements timeline
- ✅ Blog section structure
- ✅ Resume PDF download
- ✅ SEO optimized with structured data
- ✅ Analytics ready (Google Analytics & Clarity)
- ✅ Fast performance (optimized bundle)
- ✅ Static export for GitHub Pages

## 📧 Contact Form

The contact form uses **FormSubmit** - a free service that works on static sites:

- No backend server required
- Works on GitHub Pages
- Sends emails to: mujeebalishah147@gmail.com
- Client-side validation
- Toast notifications for feedback

## 🎯 SEO Features

- **Meta Tags**: Optimized titles and descriptions
- **Open Graph**: Social media sharing cards
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated by Next.js
- **Performance**: Fast loading times

## 🌟 Performance

- **First Load**: ~199 KB JavaScript
- **Static Pages**: All pages pre-rendered
- **Optimized Images**: Next.js image optimization
- **Code Splitting**: Automatic lazy loading
- **Lighthouse Score**: 95+ on all metrics

## 📱 Contact

- **Email**: mujeebalishah147@gmail.com
- **Phone**: +92 325 2170112
- **Location**: Khairpur Mir's, Pakistan
- **GitHub**: [@mujeeb-ali](https://github.com/mujeeb-ali)
- **LinkedIn**: [Mujeeb Ur Rehman](https://linkedin.com/in/mujeeb-ur-rehman-shah)
- **Twitter**: [@mujeeb-ali](https://x.com/mujeeb-ali)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Deployed on [GitHub Pages](https://pages.github.com/)

---

Made with 🤍 by Mujeeb Ur Rehman in Pakistan
## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [shadcn/ui](https://ui.shadcn.com/) - For UI components
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Vercel](https://vercel.com/) - For deployment platform

---

⭐ **Star this repository if you found it helpful!**

📧 **Questions?** Feel free to open an issue or contact me directly.

🚀 **Happy coding!**
