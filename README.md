# 🎭 Meme Search App  
A clean, modern, and premium UI built using **React + TailwindCSS (CDN)** that lets users browse and search through a huge collection of memes fetched from the **ImgFlip Meme API**.

The design is inspired by the famous "Emoji Search" UI — soft gradients, glassmorphism, and a beautiful responsive grid.

---

## ✨ Features

- 🔍 Instant real-time meme search  
- 🎨 Premium glassmorphism UI  
- 🧊 Soft gradients and minimal aesthetic  
- ⚡ Fast and lightweight (Tailwind CDN only)  
- 🖼️ Zoom-on-hover meme cards  
- 📱 Fully responsive grid  
- 🔗 Uses public ImgFlip Meme API  

---

## 🌍 API Used

We use the official ImgFlip API:

https://api.imgflip.com/get_memes

arduino
Copy code

Example response:

```json
{
  "success": true,
  "data": {
    "memes": [
      {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "url": "https://i.imgflip.com/30b1gx.jpg",
        "width": 1200,
        "height": 1200
      }
    ]
  }
}
🗂️ Project Structure
graphql
Copy code
project/
├─ index.html               # Tailwind CDN added here
├─ package.json
├─ src/
│  ├─ App.jsx               # Loads MemeSearch page
│  ├─ main.jsx
│  ├─ components/
│  │   ├─ Navbar.jsx        # Search bar
│  │   ├─ MemeCard.jsx      # Card showing meme image + name
│  │   └─ MemeGrid.jsx      # Responsive meme grid
│  └─ pages/
│      └─ MemeSearch.jsx    # Fetch + filter + UI render
└─ README.md
🧩 Components Overview
🔹 Navbar.jsx
Centered search bar

Glass effect, animated focus

Props: query, setQuery

🔹 MemeCard.jsx
Displays:

Meme image

Meme name

Image dimensions

Zoom hover animation

Glassmorphism card design

Props: meme

🔹 MemeGrid.jsx
Grid layout (2→5 columns)

Displays all filtered memes
Props: memes

🔹 MemeSearch.jsx
Handles:

API fetch

Data storage

Search filtering

Rendering entire UI

🚀 Setup Instructions
1️⃣ Create project
bash
Copy code
npm create vite@latest meme-search --template react
cd meme-search
npm install
2️⃣ Add Tailwind CDN into index.html
html
Copy code
<script src="https://cdn.tailwindcss.com"></script>
3️⃣ Add components into src/components and src/pages
4️⃣ Run the project
bash
Copy code
npm run dev
5️⃣ Visit the app
arduino
Copy code
http://localhost:5173
🎨 UI Design Highlights
🌈 Gradient background

🧊 Blur-glass input & cards

✨ Smooth card hover elevation

🖼️ Clean image preview

🎯 Center-aligned title

📌 Future Enhancements
🖼️ Full-screen meme viewer modal

⬇️ Download meme button

🌙 Dark mode

🔗 Copy image link

♾️ Infinite scroll

🏷️ Category filters

♻️ Refresh button

❤️ Credits
API: ImgFlip Meme API

UI: TailwindCSS (CDN)

Framework: React + Vite

🎉 Final Thoughts
This project is designed to be:

Simple

Modern

Highly visual

Perfect for portfolios and student projects

If you'd like help adding advanced features, animations, or a more branded UI — just ask!

yaml
Copy code

---

If you want a **logo**, **badges**, or **demo screenshot** added to the README, I can generate an upg