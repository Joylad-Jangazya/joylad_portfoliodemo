# Joylade Jangazya Portfolio

## Quick Start

1. **Local Development**
   ```bash
   # Install dependencies (optional, for deployment)
   npm install

   # Start local server
   npm start
   # or use any static server
   python -m http.server 8000
   ```

2. **View the Site**
   - Open `index.html` in your browser
   - Or visit `http://localhost:8000` if using a local server

## Deployment Options

### GitHub Pages (Recommended)
```bash
# Install gh-pages
npm install -g gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `echo 'No build required'`
3. Set publish directory: `/`
4. Deploy automatically on git push

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect it as a static site
3. Deploy with zero configuration

### Manual FTP Upload
- Upload all files to your web hosting provider
- Ensure the root directory contains `index.html`

## File Structure

- `index.html` - Main portfolio page
- `academy.html` - Educational content
- `lab.html` - Experimental projects
- `css/` - Stylesheets
- `js/` - JavaScript functionality
- `assets/` - Images and icons

## Customization

1. **Personal Information**: Edit the hero section in `index.html`
2. **Projects**: Update project cards with your work
3. **Styling**: Modify colors in `css/themes.css`
4. **Content**: Replace placeholder text and images

## Browser Testing

Test across these browsers:
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Performance Tips

- Optimize images before adding to `assets/images/`
- Minify CSS/JS for production
- Use a CDN for assets if needed
- Enable gzip compression on your server