# 🚀 Deploy to GitHub Pages - Quick Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in top right → **New repository**
3. Name it anything you want (e.g., `pyrogamma-group` or `pyrogamma-website`)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README
6. Click **Create repository**

## Step 2: Push Your Code to GitHub

Open terminal in your project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Pyrogamma Group website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe` and repository is `pyrogamma-group`:
```bash
git remote add origin https://github.com/johndoe/pyrogamma-group.git
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

## Step 4: Wait & Access Your Site

- GitHub will build your site (takes 1-2 minutes)
- Your site will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- Look for the green success message with your URL

**Example URL:** `https://johndoe.github.io/pyrogamma-group/`

---

## 🔧 Important Notes

### Update Formspree Forms

Once deployed, you'll need to set up form handling:

1. Go to [formspree.io](https://formspree.io) and create free account
2. Create 3 forms:
   - Newsletter subscription
   - General contact
   - Story pitches
3. Update these files with your Formspree endpoints:
   - `newsletter.html` (line ~51)
   - `contact.html` (line ~47 and ~115)

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Update Content

Replace placeholder content:
- Story images (currently using Unsplash URLs)
- Team photos in About page
- Social media links in footer
- Newsletter content

---

## 🎯 Quick Commands

### Updating Your Site

After making changes to your site:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically redeploy (takes 1-2 minutes).

### Check Build Status

Go to your repository → **Actions** tab to see build status.

---

## 💡 Custom Domain (Optional)

If you want to use your own domain (e.g., `pyrogamma.com`):

1. In GitHub Pages settings, add your custom domain
2. Update your domain's DNS settings:
   - Add `CNAME` record pointing to `YOUR_USERNAME.github.io`
   - Or add `A` records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Enable **Enforce HTTPS** in GitHub Pages settings

---

## ✅ Success Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] All 6 pages load correctly
- [ ] Navigation works
- [ ] Animations play
- [ ] Forms ready for Formspree
- [ ] Responsive on mobile

---

## 🆘 Troubleshooting

**404 Error?**
- Check that repository is public
- Ensure GitHub Pages is enabled with correct branch (main)
- Wait 2-3 minutes for initial build

**Styles not loading?**
- All CSS/JS paths use relative paths (already set up ✓)
- Check browser console for errors

**Images not showing?**
- Verify images are in `images/` folder
- Check image paths are correct

---

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://help.formspree.io/)

Your site is ready to deploy! 🎉
