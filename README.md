# Akiba - Gaming Metaverse Website

A stunning, modern gaming metaverse website built with React, GSAP, and Tailwind CSS. Features immersive animations, interactive 3D effects, and smooth scroll-based transitions that showcase the world of Akiba - where gaming meets the metaverse.

![Akiba Gaming Metaverse](public/img/about.webp)

## 🎮 Features

- **Interactive Hero Section** - Multiple video backgrounds with seamless transitions and mini video preview
- **Scroll-Triggered Animations** - Powered by GSAP ScrollTrigger for smooth, performant animations
- **3D Tilt Effects** - Interactive mouse-based 3D transformations on images and cards
- **Parallax Gallery** - Dynamic image gallery with multi-depth parallax scrolling effects
- **Bento Grid Layout** - Modern card-based feature showcase with tilt interactions
- **Audio Integration** - Background music with animated audio visualizer
- **Smooth Navigation** - Smart navbar with hide/show on scroll and smooth scroll to sections
- **Responsive Design** - Fully responsive across all device sizes
- **Clip-Path Animations** - Creative shape morphing animations using CSS clip-path

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite** - Lightning-fast build tool and dev server
- **GSAP 3.14** - Professional-grade animation library
- **@gsap/react** - React integration for GSAP
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **React Icons** - Icon library for social links
- **React Use** - Collection of essential React hooks

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd GSAP_Website_3d-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
GSAP_Website_3d-1/
├── public/
│   ├── img/              # Images (logo, gallery, backgrounds)
│   ├── videos/           # Video assets (hero, features)
│   ├── audio/            # Background music
│   └── fonts/            # Custom fonts
├── src/
│   ├── components/
│   │   ├── About.jsx           # About section with clip-path animation
│   │   ├── AnimationTitle.jsx  # Animated title component
│   │   ├── BentoCard.jsx       # Card component for features
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Features.jsx        # Features with bento grid
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── Gallery.jsx         # Parallax image gallery
│   │   ├── Hero.jsx            # Hero section with video transitions
│   │   ├── Navbar.jsx          # Smart navigation bar
│   │   ├── RoundedCorners.jsx  # SVG filter component
│   │   └── Story.jsx           # Story section with 3D tilt
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Key Sections

### 🎬 Hero

- Dynamic video background switching
- Mini video preview with click-to-expand
- Clip-path morphing animation on scroll
- Loading state with animated dots

### 📖 About

- Scroll-triggered clip-path expansion
- Centered title animation
- Full-screen image reveal

### ⚡ Features

- Bento grid layout with 5+ feature cards
- Mouse-based tilt effects
- Video backgrounds on cards
- Responsive grid system

### 🖼️ Gallery

- 5 curated gaming images
- Multi-depth parallax scrolling
- Hover zoom and overlay effects
- Featured video showcase
- Stone texture background

### 📜 Story

- Interactive 3D image tilt on mouse move
- Clipped corner design
- Rounded corners SVG filter
- Call-to-action button

### 📞 Contact

- Dual image layout with clip-paths
- Character illustration
- Social proof messaging
- Contact CTA

## 🎯 Animation Techniques

- **GSAP Timeline** - Sequenced animations
- **ScrollTrigger** - Scroll-based animations
- **3D Transforms** - rotateX, rotateY, perspective
- **Clip-Path Morphing** - Dynamic shape changes
- **Parallax Scrolling** - Multi-layer depth effects
- **Hover Interactions** - Scale, rotation, opacity
- **Stagger Animations** - Sequenced element reveals

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  blue: { ... },
  violet: { ... },
  yellow: { ... }
}
```

### Fonts

Custom fonts are loaded from `public/fonts/`. Update CSS font-face rules in `index.css`.

### Content

- Update text content in component files
- Replace images in `public/img/`
- Replace videos in `public/videos/`
- Update audio in `public/audio/`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Optimizations

- Lazy-loaded videos with `onLoadedData`
- GSAP performance optimizations
- Optimized image formats (WebP)
- Code splitting with Vite
- CSS purging with Tailwind

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- GSAP for incredible animation capabilities
- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Vite for blazing-fast development experience

---

**Built with ❤️ for the gaming metaverse**
