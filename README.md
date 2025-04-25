# ⏱️ time-ago-lite

A super lightweight utility to convert JavaScript `Date` objects or timestamps into readable **"time ago"** strings like `just now`, `2 minutes ago`, or `1 year ago`.

Perfect for displaying relative time in blogs, comments, social posts, and chat apps — without pulling in large dependencies.

---

## ✨ Features

- 📦 Ultra lightweight and dependency-free
- 🕐 Supports `Date` objects, timestamps, and ISO date strings
- 🧠 Smart and readable output (e.g., "just now", "2 days ago")
- 📅 Handles everything from seconds to years
- ⚡️ Fast and easy to use

---

## 📦 Installation

```bash
npm install time-ago-lite
```

---

## 🚀 Usage

```js
const timeAgo = require('time-ago-lite');

console.log(timeAgo(new Date(Date.now() - 90 * 1000))); // "1 minute ago"
console.log(timeAgo('2023-01-01'));                    // "1 year ago"
console.log(timeAgo(Date.now() - 5 * 60 * 60 * 1000)); // "5 hours ago"
```

---

## 🧾 Output Examples

- just now  
- 30 seconds ago  
- 5 minutes ago  
- 3 hours ago  
- 2 days ago  
- 6 months ago  
- 1 year ago  

---

## 📄 License

MIT
