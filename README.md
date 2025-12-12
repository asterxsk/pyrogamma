# Pyrogamma Group Website

A premium editorial website with dark theme, anime.js animations, and optimized for GitHub Pages hosting.

## 🌐 Live Site

[View Live Site](asterxsk.github.io/pyrogamma/)

## 📋 Features

- **6 Fully Functional Pages**: Home, Press, Stories, Newsletter, About, Contact
- **Dark Editorial Design**: Black background with Ember Orange (#FF6B1A) accents
- **Anime.js Animations**: Loading screen, logo glow, button effects, scroll reveals
- **Responsive Design**: Mobile-first approach, works on all devices
- **Form Integration**: Formspree-ready contact and newsletter forms
- **Story Filtering**: JavaScript-powered content filtering on Stories page
- **SEO Optimized**: Proper meta tags, semantic HTML, accessible design

## 🎨 Design System

### Color Palette
- **Black**: `#000000` - Background
- **Ember Orange**: `#FF6B1A` - Primary accent
- **Warm White**: `#F5F5F5` - Text
- **Ash Gray**: `#A0A0A0` - Secondary text

### Typography
- **Headlines**: Playfair Display (serif, bold)
- **Body**: Inter (sans-serif, clean)

## 🚀 Local Development

### Option 1: Using Python (Recommended)

```bash
# Navigate to project directory
cd pyrogamma-group

# Start a local server (Python 3)
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000
```

### Option 2: Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Navigate to project directory
cd pyrogamma-group

# Start server
http-server -p 8000

# Open browser to http://localhost:8000
```

### Option 3: Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📦 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Pyrogamma Group website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pyrogamma-group.git

# Push to GitHub
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/pyrogamma-group/`

### Step 3: Custom Domain (Optional)

1. In Settings → Pages, add your custom domain
2. Update DNS records with your domain provider:
   - Add `A` records pointing to GitHub's IPs
   - Or add a `CNAME` record pointing to `YOUR_USERNAME.github.io`
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 📧 Form Setup (Formspree)

The contact and newsletter forms are ready for Formspree integration.

### Setup Steps:

1. **Create Formspree Account**:
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for a free account

2. **Create Forms**:
   - Create a form for "Newsletter Subscription"
   - Create a form for "Contact Inquiries"
   - Copy the form endpoints (they look like: `https://formspree.io/f/XXXXXXXX`)

3. **Update HTML Files**:
   
   In `newsletter.html`, find and replace:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   With your actual Formspree endpoint:
   ```html
   <form action="https://formspree.io/f/abc123xyz" method="POST">
   ```
   
   Do the same for `contact.html` (both forms on that page)

4. **Test Forms**:
   - Submit a test entry
   - Confirm receipt in your Formspree dashboard
   - Set up email notifications

### Alternative Form Services:

- **Netlify Forms**: If deploying to Netlify
- **Google Forms**: Embed as iframe
- **Basin**: Another static form service
- **Getform**: Free tier available

## 🎯 Content Updates

### Adding New Stories

1. Open `stories.html`
2. Find the `<div class="card-grid">` section
3. Duplicate a story card:

```html
<div class="card story-card" data-category="technology">
  <img src="YOUR_IMAGE_URL" alt="Description" class="card-image" loading="lazy">
  <p class="card-meta">Category • X min read • Date</p>
  <h3 class="card-title">Your Title</h3>
  <p class="card-description">Your description...</p>
  <a href="#" class="btn">Read More</a>
</div>
```

4. Update `data-category` to: `founders`, `technology`, or `newsletter`

### Adding Newsletter Issues

1. Open `newsletter.html`
2. Find the archive grid section
3. Duplicate an issue card and update content

### Updating Team Members

1. Open `about.html`
2. Find the `<div class="team-grid">` section
3. Add/edit team member cards

### Replacing Placeholder Images

Current images use Unsplash URLs. To use your own:

1. Add images to `images/` folder
2. Replace image URLs in HTML:
   ```html
   <img src="images/your-image.jpg" alt="Description" class="card-image">
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The site uses a mobile-first approach with CSS media queries in `css/style.css`.

## 🎭 Animations

All animations are powered by [Anime.js](https://animejs.com/). Main animation features:

- **Loading Screen**: Phoenix fade-in with glow (homepage only)
- **Logo Glow**: Continuous subtle pulsing
- **Button Hovers**: Scale and glow effects
- **Scroll Reveals**: Fade-in on scroll for cards and sections
- **Philosophy Section**: Flame/pulse text animation

To disable animations, comment out the script tag:
```html
<!-- <script src="js/animations.js"></script> -->
```

## 🛠️ Customization

### Changing Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --color-black: #000000;
  --color-ember: #FF6B1A;  /* Change primary color here */
  --color-white: #F5F5F5;
  --color-ash: #A0A0A0;
}
```

### Changing Fonts

Edit the Google Fonts import in each HTML file's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

Then update CSS variables:
```css
:root {
  --font-headline: 'YourFont', serif;
  --font-body: 'YourFont', sans-serif;
}
```

## 📊 Analytics Setup

Add Google Analytics (or alternative):

1. Get your tracking ID from Google Analytics
2. Add this before closing `</head>` tag in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔍 SEO Checklist

- ✅ Unique title tags for each page
- ✅ Meta descriptions (155 characters)
- ✅ Semantic HTML5 structure
- ✅ Alt text on all images
- ✅ Responsive design
- ✅ Fast loading times
- ✅ HTTPS (via GitHub Pages)
- ⬜ Submit sitemap to Google Search Console
- ⬜ Add structured data (schema.org)
- ⬜ Create robots.txt

## 🐛 Troubleshooting

### Forms Not Working
- Check Formspree endpoint is correct
- Ensure form method is POST
- Verify email address in Formspree dashboard

### Animations Not Playing
- Check browser console for errors
- Verify anime.js CDN is loading
- Clear browser cache

### Images Not Loading
- Check image paths are correct
- Ensure images exist in `images/` folder
- Verify GitHub Pages has deployed latest changes

### Mobile Menu Not Opening
- Check JavaScript console for errors
- Verify `main.js` is loading correctly

## 📄 File Structure

```
pyrogamma-group/
├── index.html              # Home page
├── press.html              # Pyrogamma Press page
├── stories.html            # Stories with filtering
├── newsletter.html         # Newsletter archive
├── about.html              # About page
├── contact.html            # Contact forms
├── css/
│   └── style.css          # Global styles
├── js/
│   ├── main.js            # Core functionality
│   └── animations.js      # Anime.js animations
├── images/
│   └── phoenix-logo.svg   # Phoenix logo
└── README.md              # This file
```

## 📝 License

© 2024 Pyrogamma Group. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: hello@pyrogamma.com
- GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/pyrogamma-group/issues)

---

**Built with** ❤️ **and** 🔥 **by Pyrogamma Group**
