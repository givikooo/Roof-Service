# 🏠 Roof Service - სახურავის სერვისი

React-ბაზირებული თანამედროვე website სახურავის სერვისებისთვის.

## 🌐 Live Demo

**https://givikooo.github.io/Roof-Service**

---

## ✨ Features

- ⚛️ **React + TypeScript** - Modern tech stack
- 🎨 **Tailwind CSS** - Beautiful, responsive design
- 📱 **Fully Responsive** - Mobile, tablet, desktop
- 🍔 **Burger Menu** - Smooth mobile navigation
- 📧 **EmailJS Integration** - Contact form with real email sending
- 🚀 **GitHub Actions** - Automatic deployment
- ⚡ **Vite** - Lightning fast build tool

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, Radix UI
- **Build:** Vite
- **Routing:** React Router
- **Forms:** React Hook Form
- **Email:** EmailJS
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone repository
git clone https://github.com/givikooo/Roof-Service.git
cd Roof-Service

# Navigate to frontend
cd front_end

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your EmailJS credentials to .env
```

### Environment Variables

შექმენი `.env` ფაილი `front_end/` დირექტორიაში:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**როგორ მიიღო credentials:** იხილე [front_end/EMAILJS_SETUP.md](front_end/EMAILJS_SETUP.md)

### Development

```bash
# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Deployment

საიტი ავტომატურად deploy-ს უკეთებს GitHub Pages-ზე GitHub Actions-ის მეშვეობით.

### Manual Deployment

```bash
cd front_end
npm run deploy
```

### Automatic Deployment

ყოველი `git push` master branch-ზე ავტომატურად deploy-ს უკეთებს საიტს.

იხილე სრული deployment guide: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

## 📁 Project Structure

```
Roof-Service/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── front_end/
│   ├── public/
│   │   ├── images/             # Service images
│   │   └── ...
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── ...
│   │   ├── pages/              # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   └── ...
│   │   ├── App.tsx             # Main app component
│   │   └── ...
│   ├── .env                    # Environment variables (local)
│   ├── package.json
│   └── vite.config.ts
├── DEPLOYMENT_GUIDE.md         # Deployment instructions
└── README.md                   # This file
```

---

## 🔧 Configuration

### EmailJS Setup

Contact form იყენებს EmailJS-ს email-ების გასაგზავნად. Setup ინსტრუქციები:

📖 **სრული გზამკვლევი:** [front_end/EMAILJS_SETUP.md](front_end/EMAILJS_SETUP.md)

**სწრაფი ნაბიჯები:**

1. შექმენი EmailJS account
2. დაამატე Gmail service
3. შექმენი email template
4. დააკოპირე credentials
5. ჩასვი `.env` ფაილში (local) და GitHub Secrets-ში (production)

### GitHub Secrets

Production deployment-ისთვის დაამატე secrets:

```
Repository Settings → Secrets and variables → Actions → New repository secret

VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

---

## 📄 Pages

- **Home** (`/home`) - მთავარი გვერდი hero section-ით
- **Services** (`/services`) - სერვისების სია
- **Service Detail** (`/services/:serviceId`) - ინდივიდუალური სერვისის დეტალები
- **About** (`/about`) - კომპანიის შესახებ
- **Testimonials** (`/testimonials`) - კლიენტების მიმოხილვები
- **Contact** (`/contact`) - საკონტაქტო ფორმა

---

## 🎨 Components

### Header
- Responsive navigation menu
- Burger menu mobile-სთვის
- Scroll effects (transparent → solid background)
- Active page highlighting

### Contact Form
- EmailJS integration
- Form validation
- Success/Error states
- Loading states

### Services
- Service cards with images
- Dynamic routing to service details
- Responsive grid layout

---

## 🤝 Contributing

Contributions are welcome! თუ გინდა დახმარება:

1. Fork the repository
2. შექმენი feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📞 Contact

**GitHub:** [@givikooo](https://github.com/givikooo)

**Live Site:** [https://givikooo.github.io/Roof-Service](https://givikooo.github.io/Roof-Service)

---

## 🙏 Acknowledgments

- React Team
- Tailwind CSS Team  
- Radix UI
- EmailJS
- Vite Team
- All contributors

---

**შექმნილია ❤️-ით React და TypeScript-ით**
