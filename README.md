# 😊 Emoji App  
A clean, modern, beautiful **React + TailwindCSS (CDN)** application that allows users to instantly search through a large collection of emojis (fetched from the ImgFlip Meme API but displayed as emoji-style cards).

The UI is inspired by the famous "Emoji Search" design — soft gradients, glassmorphism, and a smooth responsive grid.

---

## ✨ Features

- 🔍 Instant real-time emoji search  
- 🎨 Premium glassmorphism UI  
- 🌈 Soft gradient background  
- 📱 Fully responsive design  
- 🧩 Component-based architecture  
- ⚡ Fast API fetch (ImgFlip Meme API)  
- 🖼️ Zoom-on-hover emoji cards  
- 🌟 Lightweight (Tailwind CDN only — no installation)

---

## 🌍 API Used

Although the app is named **Emoji App**, we use the meme API because it provides a large set of images with names — perfect for search functionality.

https://api.imgflip.com/get_memes

css
Copy code

Example response item:

```json
{
  "id": "181913649",
  "name": "Drake Hotline Bling",
  "url": "https://i.imgflip.com/30b1gx.jpg",
  "width": 1200,
  "height": 1200
}
```
🗂️ Project Structure
graphql
Copy code
emoji_app/
├─ index.html               # Tailwind CDN included here
├─ package.json
├─ src/
│  ├─ App.jsx               # Loads EmojiSearch page
│  ├─ main.jsx
│  ├─ components/
│  │   ├─ Navbar.jsx        # Search bar
│  │   ├─ MemeCard.jsx      # (EmojiCard) card showing image + name
│  │   └─ MemeGrid.jsx      # Grid component
│  └─ pages/
│      └─ MemeSearch.jsx    # Main Emoji Search page (fetch + filter)
└─ README.md
🧩 Components Overview
🔹 Navbar.jsx
Search bar with glassmorphism

Filters emoji list instantly

Props: query, setQuery

🔹 MemeCard.jsx
Used as the EmojiCard
Displays:

Emoji-style image

Name

Dimensions

Hover zoom

Smooth rounded glass design

Props: meme

🔹 MemeGrid.jsx
Responsive grid of emoji cards

Auto-adjust layout from 2 to 5 columns
Props: memes

🔹 MemeSearch.jsx
Main page of Emoji App:

Fetches emojis (images) from API

Saves raw + filtered list

Applies search

Renders heading + search bar + grid

🚀 Setup Instructions
1️⃣ Create a React project using Vite
bash
Copy code
npm create vite@latest emoji-app --template react
cd emoji-app
npm install
2️⃣ Add Tailwind CDN into index.html
html
Copy code
<script src="https://cdn.tailwindcss.com"></script>
3️⃣ Add your components as described above
4️⃣ Start the application
bash
Copy code
npm run dev
5️⃣ Visit the app
arduino
Copy code
http://localhost:5173
🎨 UI Design Highlights
🌈 Gradient background

🧊 Glassmorphism search bar

📦 Rounded emoji cards

🔍 Smooth hover zoom animation

🎯 Center-aligned title

✨ Perfect spacing for a clean layout

📌 Future Enhancements
🌙 Dark mode

🎭 Full-screen emoji viewer

⬇️ Download image button

🔗 Copy emoji link

♾️ Infinite scroll

🔍 Category filters (funny, reaction, classic)

❤️ Credits
API: ImgFlip Image API

UI: TailwindCSS (CDN)

Framework: React + Vite

Created as: Emoji App ✨

🎉 Final Thoughts
Emoji App is built to be:

Simple

Beautiful

Fast

Perfect for portfolios, demos, or college submissions

If you want a banner image, icons, logo, or an advanced UI version — just ask!

yaml
Copy code

---

If you want, I can also update your GitHub repo README directly (just send me the link again).
---
