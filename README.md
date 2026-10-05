# Pooree Limskun — Portfolio

Personal portfolio website of **Pooree Limskun**, Software Developer with 7+ years of experience — 5 years specializing in backend with Node.js and NestJS, and 2 years building full-stack with Angular — shipping to Google Cloud Platform.

The site is available in **English and Thai** — switch with the `EN / TH` toggle in the sidebar.

## Features

- Bilingual content (EN / TH) with the chosen language remembered between visits
- Typewriter hero styled like a code editor, numbered "How I work" steps, and a chat-style case study
- Horizontally scrolling project cards, work-experience timeline, skills and education
- Slide-in contact panel (opens the visitor's email app with the message pre-filled)
- Downloadable resume PDF that matches the selected language
- Responsive layout for desktop and mobile; respects `prefers-reduced-motion`
- Plain HTML, CSS and JavaScript — no framework, no build step

Design inspired by [briceclain.com](https://briceclain.com/en/).

## Project structure

```
.
├── index.html                  # Page content (English text lives here)
├── style.css                   # Theme, layout and responsive styles
├── script.js                   # Language switch, typewriter, scroll reveal, contact panel
├── i18n.js                     # Thai translations
├── profile.png                 # Profile photo
├── Resume-Pooree-English.pdf   # Resume (English)
└── Resume-Pooree-Thai.pdf      # Resume (Thai)
```

## Run locally

Open `index.html` in a browser — nothing to install.

## Deploy to GitHub Pages (free)

1. Push the files to a **public** repository. Naming it `<username>.github.io` serves the site at `https://<username>.github.io`.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then **Save**.
3. Wait a minute or two for the site to go live. Every later push to `main` updates it automatically.

---

## วิธีแก้ไขเนื้อหา (ภาษาไทย)

| ต้องการแก้ | แก้ที่ไฟล์ |
|---|---|
| ข้อความภาษาอังกฤษ | `index.html` |
| ข้อความภาษาไทย | `i18n.js` — หา key ให้ตรงกับ `data-i18n="..."` ใน `index.html` |
| สี ฟอนต์ ขนาด | ตัวแปรใน `:root` ด้านบนของ `style.css` |
| รูปโปรไฟล์ | แทนที่ไฟล์ `profile.png` (ใช้ชื่อเดิม) |
| ไฟล์ resume | แทนที่ PDF ทั้งสองไฟล์ (ใช้ชื่อเดิม) |

**เพิ่มข้อความใหม่ที่แปลได้ 2 ภาษา**

1. เขียนข้อความภาษาอังกฤษใน `index.html` แล้วใส่ attribute `data-i18n="ชื่อ-key"` ที่ element นั้น
2. เพิ่มคำแปลใน `i18n.js` ด้วย key เดียวกัน เช่น `'ชื่อ-key': 'ข้อความภาษาไทย',`

ถ้า key ไหนไม่มีคำแปลใน `i18n.js` หน้าเว็บจะแสดงข้อความภาษาอังกฤษแทน

**อัปเดตเว็บที่ขึ้นไปแล้ว:** อัปโหลดไฟล์ที่แก้ทับใน repository เดิม (หรือ `git push`) แล้วรอประมาณ 1–2 นาที

## Contact

- Email: [pooree.limskun@gmail.com](mailto:pooree.limskun@gmail.com)
- Phone: 095-759-4433
