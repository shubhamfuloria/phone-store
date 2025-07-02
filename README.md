# 📱 Phone Store
A simple and clean website to explore newly launched smartphones and compare their features. Inspired by Flipkart's UI.

# 🔗 Live Demo
👉 https://phone-store-kappa.vercel.app/

# ⚙️ Getting Started
To run the project locally:
bashgit clone <your-repo-url>
cd phone-store
npm install
npm run dev
Now visit: http://localhost:5173

# ✨ Features

- 📱 Phone Listing – Devices are loaded from data.json
- 🔍 Search – Instantly filter phones by name
- 📊 Compare Products – Select 2 or more phones to compare side by side
- ✅ Highlight Best Features – In comparison screen, best specs like RAM, camera, etc. are highlighted in green. 
- 🌙 Dark/Light Mode – Toggle themes easily
- 📱 Responsive Design – Works well on mobile, tablet, and desktop
- 🧠 The application remembers the comparison list, by utilizing the local storage 

If only 1 phone is left in the compare screen, it'll take you back to home automatically.
```
🗂 Folder Structure
src/
├── assets/         # Images, icons etc.
├── components/     # Reusable components
├── pages/          # Home, Compare, etc.
├── data/           # data.json (product list)
├── styles/         # CSS files
├── utils/          # Helper functions/types
├── App.tsx
└── main.tsx
```
# 🛠 Tech Stack

React + Vite
TypeScript
CSS (no frameworks)
Hosted on Vercel


# 📦 Dependencies
```
json{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "typescript": "^5.x.x",
  "vite": "^4.x.x"
}
```

# 💡 Extra Stuff
Products are stored locally (no backend)
Highlighting works even if multiple products have the same best spec


🧪 Deployment
Deployed on Vercel
To deploy your own version:

Fork this repo
Import into Vercel
Done ✅


🙌 Thanks

UI inspired by Flipkart
Icons from Lucide
Built with ❤️ by Shubham


📄 License
MIT License