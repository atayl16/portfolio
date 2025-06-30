# 🗡️ Alisha Taylor - Software Engineer Portfolio

> **The Code Ranger** - Crafting digital adventures with 5+ years of coding expertise

A fantasy-themed personal portfolio showcasing my skills, projects, and professional journey as a Software Engineer II. Built with React, Vite, and a touch of magic.

## ✨ Features

### 🎨 Design & Theme
- **Fantasy Adventure Theme**: Software Ranger branding with mystical elements
- **Professional Yet Memorable**: Clean layout with subtle fantasy touches
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Accessibility First**: WCAG compliant with proper focus states and ARIA labels

### 🚀 Technical Features
- **Modern React 19**: Latest React features and hooks
- **Vite Build System**: Lightning-fast development and builds
- **CSS-in-JS Styling**: Scoped styles with styled-jsx
- **Testing Suite**: Jest + React Testing Library
- **ESLint + Prettier**: Code quality and formatting
- **Performance Optimized**: Lazy loading, optimized images, minimal bundle size

### 📱 Sections
- **Hero Section**: Above-the-fold key information with animated stats
- **Projects Showcase**: Four featured projects with detailed descriptions
- **Skills Matrix**: Interactive skill categories with proficiency levels
- **Contact Form**: Professional contact form with validation
- **Responsive Navigation**: Smooth scrolling with mobile hamburger menu

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Beautiful icons
- **CSS-in-JS** - Scoped styling

### Development Tools
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

### Deployment
- **Netlify** - Hosting and CI/CD
- **GitHub Pages** - Alternative hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alishataylor/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 📁 Project Structure

```
alisha-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Navigation component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Skills matrix
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Footer.jsx     # Footer component
│   │   └── __tests__/     # Component tests
│   ├── assets/            # Images and static files
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global CSS variables
│   └── main.jsx           # App entry point
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Key Projects Featured

### 1. Family Messaging App
- **Tech**: React + Rails API + WebSocket
- **Features**: Real-time chat, secure access
- **Status**: Live on Netlify

### 2. Siege Clan Website
- **Tech**: React + Supabase + TypeScript
- **Features**: OSRS game clan tracker
- **Status**: In Development

### 3. Data Wizard
- **Tech**: Ruby on Rails + PostgreSQL
- **Features**: QA automation tool
- **Status**: Internal tool (5+ years in use)

### 4. Islam4Kids Games
- **Tech**: React + JavaScript
- **Features**: Educational Islamic games
- **Status**: Live on Netlify

## 🌟 Skills Highlighted

### Frontend Mastery
- React (90%), JavaScript (95%), HTML/CSS (90%)
- TypeScript (75%), Vite (85%)

### Backend Sorcery
- Ruby on Rails (95%), Ruby (90%), REST APIs (90%)
- GraphQL (70%), Node.js (75%)

### Database Wizardry
- PostgreSQL (85%), MySQL (80%), Redis (75%)
- Supabase (70%), Database Design (85%)

### Testing Alchemy
- RSpec (90%), Jest (85%), Testing Library (80%)
- Capybara (75%), TDD/BDD (85%)

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### GitHub Pages
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://alishataylor.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 🧪 Testing

The portfolio includes comprehensive tests demonstrating best practices:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Examples
- Component rendering tests
- User interaction tests
- Accessibility tests
- External link validation
- Form submission tests

## 🎨 Customization

### Colors & Theme
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-gold: #d4af37;
  --secondary-gold: #f4d03f;
  --forest-green: #2d5016;
  /* ... more variables */
}
```

### Content Updates
- **Personal Info**: Update `src/components/Hero.jsx`
- **Projects**: Modify `src/components/Projects.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Contact**: Update `src/components/Contact.jsx`

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 200KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Development

### Adding New Components
1. Create component in `src/components/`
2. Add tests in `src/components/__tests__/`
3. Import and use in `src/App.jsx`

### Styling Guidelines
- Use CSS variables for consistency
- Follow BEM methodology for class names
- Ensure responsive design
- Maintain accessibility standards

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: alisha.taylor@example.com
- **LinkedIn**: [linkedin.com/in/alishataylor](https://linkedin.com/in/alishataylor)
- **GitHub**: [github.com/alishataylor](https://github.com/alishataylor)

---

**Ready for the next coding adventure!** 🗡️✨

*Built with React, Vite, and a touch of magic*
