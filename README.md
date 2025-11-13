# 🎭 Meme Search App  
A clean, modern, and premium UI built using **React + TailwindCSS (CDN)** that allows users to browse and search through a huge collection of memes fetched from the official **ImgFlip Meme API**.

The interface is inspired by the "Emoji Search" UI — smooth, elegant, simple, and fully responsive.

---

## ✨ Features

- 🔍 **Instant Meme Search** (filter by meme name)
- 🎨 **Premium Glassmorphism UI**
- 📱 **Fully Responsive Grid Layout**
- ⚡ **Fast Fetching Using Public ImgFlip API**
- 🎞️ **Animated Hover Effects on Cards**
- 🎇 **Soft Gradient Background**
- 🧩 **Clean Component-Based Structure**

---

## 🌍 API Used

We use the official **ImgFlip Meme API**:

https://api.imgflip.com/get_memes

arduino
Copy code

Example API response:

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
bash
Copy code
project/
├─ index.html               # Tailwind CDN included
├─ package.json
├─ src/
│  ├─ App.jsx               # App root
│  ├─ main.jsx              # React entry
│  ├─ components/
│  │   ├─ Navbar.jsx        # Search bar
│  │   ├─ MemeCard.jsx      # Single meme card
│  │   └─ MemeGrid.jsx      # Grid of meme cards
│  └─ pages/
│      └─ MemeSearch.jsx    # Page that fetches & filters memes
└─ README.md
🧩 Components Overview
🔹 Navbar.jsx
Centered search bar with glassmorphism effect

Filters results in real-time

Props:

query

setQuery

🔹 MemeCard.jsx
Displays:

Meme image

Meme name

Image dimensions

Hover zoom effect

Premium rounded glass UI

Props:

meme

🔹 MemeGrid.jsx
Responsive grid layout (2–5 columns)

Renders all filtered meme cards
Props:

memes

🔹 MemeSearch.jsx
Fetches memes from API

Stores raw and filtered data

Applies search filter

Renders title, search bar, grid

🚀 Setup Instructions
1️⃣ Create a new Vite React project
bash
Copy code
npm create vite@latest meme-search --template react
cd meme-search
npm install
2️⃣ Add Tailwind CDN to index.html
html
Copy code
<script src="https://cdn.tailwindcss.com"></script>
3️⃣ Copy all provided components into src/components and src/pages
4️⃣ Run the project
bash
Copy code
npm run dev
5️⃣ Open in browser:
arduino
Copy code
http://localhost:5173
🎨 UI Description (Enhanced Design)
🌈 Smooth soft gradient background

🧊 Glassmorphic search bar & cards

🖼️ Clean meme thumbnails with hover zoom

🔥 Floating, bouncy card animations

🎯 Big bold title just like the Emoji Search UI

"# web_exam" 
