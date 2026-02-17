# 🚀 Deployment Guide - Roof Service

## ✅ საიტი გამოქვეყნებულია!

**Live URL:** https://givikooo.github.io/Roof-Service

---

## 📋 Deployment Checklist

### 1. GitHub Pages Setup
- [x] Repository → Settings → Pages
- [x] Source: gh-pages branch
- [x] URL: https://givikooo.github.io/Roof-Service

### 2. GitHub Secrets (EmailJS)
- [x] VITE_EMAILJS_SERVICE_ID
- [x] VITE_EMAILJS_TEMPLATE_ID  
- [x] VITE_EMAILJS_PUBLIC_KEY

### 3. GitHub Actions Workflow
- [x] `.github/workflows/deploy.yml` შექმნილია
- [x] Automatic deployment on push to master

---

## 🔄 როგორ გავაახლო საიტი

როდესაც კოდში ცვლილებას შეიტან:

```bash
# 1. შეინახე ცვლილებები
git add .
git commit -m "შენი ცვლილების აღწერა"
git push origin master

# 2. GitHub Actions ავტომატურად deploy-ს გააკეთებს!
#    შეამოწმე progress: https://github.com/givikooo/Roof-Service/actions
#    2-3 წუთში საიტი განახლდება
```

**არაფერი მეტი საჭირო არ არის!** ყველაფერი ავტომატურია ✨

---

## 📧 EmailJS Status

**Local Development (localhost:3000):**
- ✅ მუშაობს `.env` ფაილიდან

**Production (givikooo.github.io):**
- ✅ მუშაობს GitHub Secrets-დან
- ✅ Contact form ფუნქციონირებს
- ✅ Email-ები მოდის Gmail-ზე

---

## 🧪 როგორ შევამოწმო საიტი

### 1. მთავარი საიტი:
```
https://givikooo.github.io/Roof-Service
```

### 2. გვერდები:
```
https://givikooo.github.io/Roof-Service/home
https://givikooo.github.io/Roof-Service/services
https://givikooo.github.io/Roof-Service/about
https://givikooo.github.io/Roof-Service/testimonials
https://givikooo.github.io/Roof-Service/contact
```

### 3. Contact Form ტესტი:
```
1. გადადი Contact page-ზე
2. შეავსე ფორმა
3. Submit
4. შეამოწმე Gmail inbox
5. უნდა მოვიდეს email 📧
```

---

## 🔍 Troubleshooting

### საიტი არ იხსნება / 404 Error

**გადაწყვეტა:**
```
1. GitHub → Settings → Pages
2. დარწმუნდი რომ "gh-pages" branch-ია არჩეული
3. დაელოდე 2-3 წუთს
4. Hard refresh browser (Ctrl+Shift+R)
```

### Contact Form არ აგზავნის Email-ს

**შეამოწმე:**
```
1. GitHub Secrets სწორად დამატებულია?
   → https://github.com/givikooo/Roof-Service/settings/secrets/actions

2. GitHub Actions workflow წარმატებულია?
   → https://github.com/givikooo/Roof-Service/actions
   → უნდა იყოს ✅ მწვანე checkmark

3. Browser Console (F12) → Console tab
   → არის თუ არა errors?

4. EmailJS Dashboard → Usage
   → ჩანს თუ არა sent emails?
```

### GitHub Actions Workflow Failed ❌

**გადაწყვეტა:**
```
1. გადადი → https://github.com/givikooo/Roof-Service/actions
2. დააჭირე failed workflow-ს
3. ნახე error message
4. ყველაზე ხშირი მიზეზები:
   - npm install failed → package.json-ში შეცდომა
   - build failed → TypeScript errors
   - secrets არ არის დამატებული
```

---

## 📊 GitHub Actions Status

**შეამოწმე deployment status:**
```
https://github.com/givikooo/Roof-Service/actions
```

**Workflow ნაბიჯები:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Build (with EmailJS secrets)
5. Deploy to gh-pages branch

---

## 🎯 Production URLs

**Main Site:**
- https://givikooo.github.io/Roof-Service

**Repository:**
- https://github.com/givikooo/Roof-Service

**Actions (Deployment Logs):**
- https://github.com/givikooo/Roof-Service/actions

**Settings:**
- https://github.com/givikooo/Roof-Service/settings

---

## 💡 Pro Tips

### 1. Preview ცვლილებები Deploy-მდე
```bash
npm run build
npm run preview
# ნახავ საიტს production mode-ში localhost:4173-ზე
```

### 2. Branch Protection
```
თუ გინდა რომ მხოლოდ tested code deploy-დეს:
1. GitHub → Settings → Branches
2. Add rule for "master"
3. Require pull request reviews
```

### 3. Custom Domain
```
თუ გაქვს საკუთარი დომეინი:
1. Settings → Pages → Custom domain
2. ჩაწერე domain (მაგ: roofservice.com)
3. DNS Provider-ში CNAME: givikooo.github.io
```

### 4. Performance Monitoring
```
გამოიყენე:
- Google Analytics
- Vercel Analytics (თუ migrate გინდა Vercel-ზე)
- Hotjar (user behavior tracking)
```

---

## 📈 Next Steps (სურვილისამებრ)

### SEO Optimization
```
1. დაამატე meta tags (title, description)
2. sitemap.xml შექმნა
3. robots.txt
4. Open Graph tags (Facebook/Twitter sharing)
```

### Performance
```
1. Image optimization (WebP format)
2. Lazy loading
3. Code splitting
4. CDN (Cloudflare)
```

### Features
```
1. Blog section
2. Gallery
3. Customer Reviews
4. Live Chat
5. Booking System
```

---

## 📞 დახმარება

თუ რაიმე პრობლემა გაქვს:

1. **GitHub Actions Logs:** https://github.com/givikooo/Roof-Service/actions
2. **Browser Console:** F12 → Console
3. **EmailJS Dashboard:** https://dashboard.emailjs.com/
4. **GitHub Pages Status:** https://github.com/givikooo/Roof-Service/settings/pages

---

**🎉 გილოცავ! საიტი ცოცხალია და სრულად ფუნქციონირებს!**

**გაუზიარე ლინკი ყველას:** https://givikooo.github.io/Roof-Service
