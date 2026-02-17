# 📧 EmailJS Setup - Gmail ინსტრუქცია

Contact ფორმიდან შევსებული ინფორმაცია რომ თქვენს Gmail-ზე მოვიდეს.

⏱️ **დრო:** 5-10 წუთი

---

## 🚀 ნაბიჯ 1: EmailJS აკაუნთის შექმნა (2 წუთი)

1. გადადით → [https://www.emailjs.com/](https://www.emailjs.com/)
2. დააჭირეთ → **"Sign Up"**
3. შედით Google-ით ან Email-ით
4. დაადასტურეთ email (თუ საჭიროა)

✅ EmailJS Account მზადაა!

---

## 📮 ნაბიჯ 2: Gmail-ის დაკავშირება (1 წუთი)

1. EmailJS Dashboard → **"Email Services"**
2. დააჭირეთ → **"Add New Service"**
3. აირჩიეთ → **"Gmail"** (წითელი ლოგო)
4. დააჭირეთ → **"Connect Account"**
5. Google-ის popup გაიხსნება:
   - აირჩიეთ თქვენი Gmail account
   - დააჭირეთ **"Allow"** / **"დაშვება"**
6. Service-ს მიეცით სახელი: **"Roof Service Gmail"**
7. დააჭირეთ → **"Create Service"**

✅ **Service ID** გამოჩნდება (მაგ: `service_abc123`)

📋 **დააკოპირეთ Service ID** - დაგჭირდებათ!

---

## 📄 ნაბიჯ 3: Email Template-ის შექმნა (3 წუთი)

1. Dashboard → **"Email Templates"**
2. დააჭირეთ → **"Create New Template"** (ზედა მარცხენა კუთხეში, ლურჯი ღილაკი)
   
   ⚠️ **არა "Select Template"!** - ეს არის არსებული templates-ების სია
   ⚠️ უნდა დააჭირო **"Create New Template"** რომ ახალი შექმნა!

3. ახალ გვერდზე:
   - Template Name: **"Contact Form"**
   - დაიწყე Template-ის შევსება

**📍 სად არის "Create New Template" ღილაკი:**

```
EmailJS Dashboard
├── Email Templates (მარცხენა მენიუში)
    └── Email Templates გვერდზე:
        
        ┌─────────────────────────────────────┐
        │  Email Templates                    │
        │  [+ Create New Template] ← ლურჯი!  │ <-- აქ დააჭირე!
        ├─────────────────────────────────────┤
        │  Existing Templates:                │
        │  - Contact Us                       │
        │  - Auto-Reply                       │
        │  - Welcome                          │
        └─────────────────────────────────────┘
```

თუ ამის ნაცვლად popup გაიხსნა "Select Template"-ით:
- დახურე ეს popup (X-ზე დააჭირე)
- იპოვე "Create New Template" ღილაკი მთავარ გვერდზე

### Subject (თემა):
```
🏠 New Contact Request from {{from_name}}
```

### Content (შინაარსი):

დააკოპირეთ ეს HTML კოდი და ჩასვით Template-ის Content ველში:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9fafb; padding: 20px; margin: 20px 0; }
        .field { margin: 15px 0; }
        .label { font-weight: bold; color: #1e3a8a; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #3b82f6; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🏠 Roof Service - ახალი შეტყობინება</h2>
        </div>
        
        <div class="content">
            <p>თქვენს website-დან მოვიდა ახალი შეტყობინება:</p>
            
            <div class="field">
                <div class="label">👤 სახელი:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <div class="label">📱 ტელეფონი:</div>
                <div class="value">{{phone}}</div>
            </div>
            
            <div class="field">
                <div class="label">🔧 სერვისი:</div>
                <div class="value">{{service}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 შეტყობინება:</div>
                <div class="value">{{message}}</div>
            </div>
        </div>
        
        <p style="text-align: center; color: #666; font-size: 12px;">
            ეს email გამოგზავნილია Roof Service contact form-დან
        </p>
    </div>
</body>
</html>
```

4. **To Email** ველში ჩაწერეთ **თქვენი Gmail მისამართი** (სადაც გინდათ რომ მოდიოდეს შეტყობინებები)
5. დააჭირეთ → **"Save"**

✅ **Template ID** გამოჩნდება (მაგ: `template_xyz789`)

📋 **დააკოპირეთ Template ID** - დაგჭირდებათ!

---

## 🔑 ნაბიჯ 4: Public Key-ის აღება (30 წამი)

1. Dashboard → **"Account"** → **"General"**
2. იპოვეთ **"Public Key"** სექცია
3. დააკოპირეთ Public Key

✅ **Public Key** (მაგ: `Abc123XyzPublicKey456`)

📋 **დააკოპირეთ** - დაგჭირდებათ!

---

## ⚙️ ნაბიჯ 5: .env ფაილის კონფიგურაცია (1 წუთი)

გახსენით `.env` ფაილი (`front_end/.env`) და ჩასვით თქვენი IDs:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=Abc123XyzPublicKey456
```

⚠️ **შეცვალეთ** ზემოთ მოცემული მაგალითები თქვენი რეალური ID-ებით!

შეინახეთ `.env` ფაილი.

---

## 📝 ნაბიჯ 6: Email მისამართის დაყენება (30 წამი)

გახსენით `src/components/Contact.tsx` და იპოვეთ ეს ხაზი (~73):

```typescript
to_email: 'your-email@example.com', // ← შეცვალე
```

შეცვალეთ თქვენი რეალური Gmail მისამართით:

```typescript
to_email: 'yourname@gmail.com', // ← თქვენი email
```

შეინახეთ `Contact.tsx`.

---

## 🚀 ნაბიჯ 7: Dev სერვერის რესტარტი (30 წამი)

Terminal-ში:

```bash
# CTRL+C (stop server)
npm run dev
```

✅ სერვერი ხელახლა გაეშვა!

---

## 🎯 ნაბიჯ 8: ტესტირება! (1 წუთი)

1. Browser → `http://localhost:3000`
2. გადადით → **Contact** გვერდზე
3. შეავსეთ ფორმა:
   ```
   Name: Test User
   Email: test@test.com
   Phone: 555-1234
   Service: Roof Repair
   Message: This is a test message
   ```
4. დააჭირეთ → **"Submit Request"**
5. უნდა დაინახოთ → **"Success!"** შეტყობინება

6. **შეამოწმეთ თქვენი Gmail inbox!** 📧

---

## ✅ მიიღეთ Email-ს?

თქვენი Email ასე გამოიყურება:

```
Subject: 🏠 New Contact Request from Test User

👤 სახელი: Test User
📧 Email: test@test.com
📱 ტელეფონი: 555-1234
🔧 სერვისი: Roof Repair
💬 შეტყობინება: This is a test message
```

🎉 **გილოცავთ! EmailJS მუშაობს!**

---

## 🔍 თუ რაიმე არ მუშაობს

### Error: "412 Gmail_API: Request had insufficient authentication scopes"

ეს ნიშნავს რომ Gmail Service-ის დაკავშირებისას არასაკმარისი permissions მიეცა.

**✅ გადაწყვეტა:**

**1️⃣ წაშალეთ არსებული Gmail Service:**
```
EmailJS Dashboard → Email Services
→ იპოვეთ თქვენი Gmail Service
→ Delete/Remove Service
```

**2️⃣ Revoke Gmail Access (გააუქმეთ წვდომა):**
```
1. გადადით → https://myaccount.google.com/permissions
2. იპოვეთ → "EmailJS"
3. დააჭირეთ → "Remove Access" / "წვდომის გაუქმება"
```

**3️⃣ ხელახლა დაამატეთ Gmail Service:**
```
EmailJS → Email Services → Add New Service → Gmail
→ "Connect Account"
→ აირჩიეთ თქვენი Gmail
→ ⚠️ ᲛᲜᲘᲨᲕᲜᲔᲚᲝᲕᲐᲜᲘ: როდესაც Google-ის permissions გვერდი გაიხსნება:
   ჩეკმარქები უნდა იყოს ყველა ველზე, განსაკუთრებით:
   ✅ "Send emails on your behalf" / "ელფოსტის გაგზავნა"
   ✅ "View your email messages" / "ელფოსტის ნახვა"
→ დააჭირეთ "Allow" / "დაშვება"
→ Service Name: "Gmail Roof Service"
→ Create Service
```

**4️⃣ Test:**
```
EmailJS Dashboard → თქვენი Gmail Service → "Test Connection"
✅ უნდა მუშაობდეს!
```

**5️⃣ გადააკოპირეთ ახალი Service ID:**
```
თუ ახალი Service შექმენით, ახალი Service ID გექნებათ
→ .env ფაილში განაახლეთ VITE_EMAILJS_SERVICE_ID
→ Restart dev server
```

**📋 Permissions Checklist (Google Authorization გვერდზე):**

როდესაც Google-ის popup გაიხსნება, დარწმუნდით რომ აძლევთ ამ permissions-ებს:

```
╔════════════════════════════════════════════╗
║  EmailJS wants to access your Google       ║
║  Account                                   ║
╠════════════════════════════════════════════╣
║  ✅ See, edit, create, and delete all     ║
║     of your email                          ║
║                                            ║
║  ✅ Send email on your behalf             ║
║                                            ║
║  ✅ Manage drafts and send emails         ║
╚════════════════════════════════════════════╝

[ Cancel ]  [ Allow ] ← დააჭირეთ Allow
```

თუ ყველა permission-ს არ აძლევთ → "insufficient scopes" error მოვა!

**🔄 რატომ ხდება ეს error:**
- თქვენ დააჭირეთ "Allow limited access" ნაცვლად "Allow"-ისა
- ან Cancel დააჭირეთ და მერე კიდევ სცადეთ
- ან Browser-მა დაბლოკა popup
- ან ძველი cached permissions-ი გამოიყენა

**💡 Pro Tip:**
```
Google Authorization popup-ში:
→ იხილეთ "Advanced" ან "Show details"
→ დარწმუნდით რომ ყველა permission ✅ მონიშნულია
→ შემდეგ "Allow"
```

---

### Error: "EmailJS not configured"

```bash
# შეამოწმეთ .env ფაილი:
1. არის თუ არა front_end/.env ფაილი
2. სწორია თუ არა VITE_ პრეფიქსები
3. დააკოპირეთ თუ არა სწორი IDs

# Restart dev server
CTRL+C
npm run dev
```

### Error: "Failed to send email"

```bash
# შეამოწმეთ:
1. Service ID სწორია? (EmailJS Dashboard → Email Services)
2. Template ID სწორია? (EmailJS Dashboard → Email Templates)
3. Public Key სწორია? (EmailJS Dashboard → Account → General)
```

### Error: "403 Forbidden" ან "The user has not granted permission"

ეს იგივეა რაც "insufficient scopes" - Google permissions პრობლემა.

```
1. Revoke access: https://myaccount.google.com/permissions
2. წაშალეთ EmailJS Service
3. ხელახლა დაამატეთ და სრულად მიეცით permissions
```

### Email არ მოდის

```bash
1. შეამოწმეთ Gmail Spam folder
2. EmailJS Dashboard → Usage - ნახეთ თუ გაიგზავნა
3. Template-ში "To Email" ველში სწორი email გაქვს?
4. თუ Usage-ში ნახეთ "sent" მაგრამ email არ მოდის:
   → შეამოწმეთ Gmail Filters/Rules
   → დარწმუნდით რომ EmailJS არ არის blocked
```

### Browser Console Errors (F12)

```bash
# გახსენით Browser Console (F12) და ნახეთ:
- თუ "undefined" იბეჭდება → .env არ იკითხება
- თუ "403" error → Public Key არასწორია
- თუ "404" error → Service ID ან Template ID არასწორია
```

---

## 🎁 Gmail უპირატესობები

✅ **უმარტივესი setup** - მხოლოდ "Allow" დააჭირეთ
✅ **პაროლი არ სჭირდება** - OAuth2 authorization
✅ **არ იბლოკება** - Google-ის სანდო API
✅ **უფასოა** - EmailJS-ის 200 email/თვე ლიმიტი
✅ **სწრაფია** - emails მყისიერად მოდის

---

## 📊 რას მიიღებთ

ყოველი Contact Form submission-ზე:

```
Website → კლიენტი ავსებს ფორმას
   ↓
EmailJS → იგზავნება email თქვენს Gmail-ზე
   ↓
Gmail Inbox → მიიღეთ შეტყობინება
   ↓
პასუხი კლიენტს → უკან დაუკავშირდით!
```

---

## 🆘 დამატებითი დახმარება

**EmailJS Documentation:**
- Gmail Setup: https://www.emailjs.com/docs/user_guide/adding-email-service/gmail/
- Getting Started: https://www.emailjs.com/docs/

**თუ კვლავ პრობლემა გაქვთ:**
1. შეამოწმეთ Browser Console (F12) → Console tab
2. EmailJS Dashboard → Usage (ნახეთ logs)
3. დაუბრუნდით ამ ინსტრუქციას და გადაამოწმეთ ყველა ნაბიჯი

---

## ✨ შედეგი

✅ Contact form მუშაობს
✅ Emails მოდის თქვენს Gmail-ზე
✅ Backend არ სჭირდება
✅ 100% უფასოა (200 emails/თვე)

**ყოველი კლიენტის შეტყობინება ახლა თქვენს inbox-ში მოვა!** 📧🎉
