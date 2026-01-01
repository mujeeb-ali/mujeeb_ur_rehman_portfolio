# 🚀 Mujeeb Ur Rehman - Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, projects, and experience as a Computer Science student at Sukkur IBA University. Built with the latest web technologies featuring smooth animations, dark/light theme toggle, and a fully functional contact system.

## ✨ About Me

Computer Science student at Sukkur IBA University with a strong foundation in programming and a passion for software development. I specialize in:

- **Software Development**: Java, Python, C++, C#
- **Web Development**: HTML5, CSS3, JavaScript
- **AI & Machine Learning**: NLP, Computer Vision, Face Recognition
- **Android Development**: Management Applications
- **Problem Solving**: Strong analytical and team management skills

## 🎓 Education

- **BS Computer Science** - Sukkur IBA University (2023 - Present) - CGPA: 3.04
- **Intermediate Pre-Engineering** - SNAK Govt. Superior Science College (2019-2021) - A1 Grade
- **Matriculation** - Govt. Naz Pilot Secondary High School (2017-2019) - A Grade

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Framer Motion** animations
- **Lucide React** icons

### Backend
- **Next.js API Routes**
- **MongoDB** database
- **Nodemailer** for email sending

### Deployment
- **Vercel** (optimized for deployment)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB database (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   # Database
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
   MONGODB_DB=portfolio
   
   # Email Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your.email@gmail.com
   SMTP_PASSWORD=your-app-password
   FROM_EMAIL=your.email@gmail.com
   CONTACT_EMAIL=your.email@gmail.com
   
   # App URL
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Add your resume**
   - Replace `public/resume.pdf` with your actual resume

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`components/hero.tsx`)
   - Name, title, and description
   - Social media links
   - Profile image

2. **About Section** (`components/about.tsx`)
   - Personal story and background
   - Quick facts and current focus
   - Skills and values

3. **Skills Section** (`components/skills.tsx`)
   - Technical skills and proficiency levels
   - Skill categories and tools

4. **Projects Section** (`components/projects.tsx`)
   - Your projects with descriptions
   - Technologies used
   - Live demo and GitHub links

5. **Resume Page** (`app/resume/page.tsx`)
   - Work experience
   - Education and certifications
   - Professional summary

6. **Contact Information**
   - Update contact details across components
   - Configure email settings in `.env.local`

### Styling
- **Colors**: Modify `tailwind.config.ts` and `app/globals.css`
- **Fonts**: Update fonts in `app/layout.tsx`
- **Components**: Customize shadcn/ui components in `components/ui/`

## 📁 Project Structure

```
├── app/                      # Next.js 14 App Router
│   ├── api/                  # API routes
│   │   ├── contact/          # Contact form handler
│   │   └── send-email/       # Email sender
│   ├── about/                # About page
│   ├── contact/              # Contact page
│   ├── projects/             # Projects page
│   ├── resume/               # Resume page
│   ├── skills/               # Skills page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   ├── about.tsx             # About section
│   ├── contact.tsx           # Contact form
│   ├── hero.tsx              # Hero section
│   ├── navigation.tsx        # Navigation bar
│   ├── projects.tsx          # Projects showcase
│   ├── skills.tsx            # Skills display
│   └── theme-provider.tsx    # Theme context
├── lib/                      # Utility functions
│   ├── mongodb.ts            # Database connection
│   └── utils.ts              # General utilities
├── public/                   # Static assets
│   └── resume.pdf            # Your resume file
├── .env.local.example        # Environment variables template
├── tailwind.config.ts        # Tailwind configuration
└── next.config.ts            # Next.js configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Set up MongoDB Atlas**
   - Create a free cluster at [MongoDB Atlas](https://mongodb.com/atlas)
   - Add connection string to Vercel environment variables

4. **Configure Email**
   - Set up SMTP credentials (Gmail, SendGrid, etc.)
   - Add email environment variables to Vercel

### Other Platforms
This project can also be deployed on:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📧 Contact Form Setup

The contact form integrates with MongoDB and email notifications:

1. **MongoDB**: Stores all form submissions
2. **Email**: Sends notifications using Nodemailer
3. **Validation**: Client and server-side validation
4. **Error Handling**: Graceful error handling and user feedback

### Email Providers
- **Gmail**: Use app-specific passwords
- **SendGrid**: Professional email service
- **AWS SES**: Scalable email service
- **Mailgun**: Developer-focused email API

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎯 SEO Features

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap
- **Structured Data**: JSON-LD structured data
- **Performance**: Optimized images and lazy loading

## 🌟 Performance

- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading
- **Caching**: Optimized caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

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
