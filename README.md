# boredbot
Using the Boredbot API

**A simple activity generator using Scrimba's Bored API, built while vibe coding through frontend fundamentals.**

## UI Design Learnings

### HTML Structure
```html
<h1>BORED BOT</h1>
<h4 id="activity-text">Find something to do</h4>
<p id="idea"></p>
<button id="idea-btn">Get Activity</button>
```

### CSS Highlights
- **Gradient backgrounds** from [cssgradient.io/gradient-backgrounds](https://cssgradient.io/gradient-backgrounds/)
- **Circular buttons**: `border-radius: 50%; width: 100px; height: 100px;`
- **Kaushan Script** Google Font for stylish body text
- **Hover effects** with `transition: all 0.3s ease`
- **Dynamic classes** like `.fun`, `.happy`, `.fetched-style` for JS-triggered styling

## ⚡ JavaScript Evolution

### v1: Inline `onclick` (Quick Prototype)
```js
<button onclick="idea()">...</button>
function idea() { fetch... }
```

### v2: `addEventListener` (Best Practice) ✅
```js
document.getElementById("idea-btn").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity-text").textContent = data.activity;
      // Dynamic styling triggers here ↓
    })
});
```

### v3: Dynamic CSS Modifications
```js
.then(data => {
  // Update content
  document.getElementById("activity-text").textContent = data.activity;
  document.getElementById("title").textContent = "HAPPY BOT";
  
  // Apply fun styles
  document.body.classList.add("fun");
  document.querySelector('h4').classList.add("happy");
})
```

## 🎯 DOM Selection Cheat Sheet (Vibe Coder Rules)
```
IDs → getElementById('myId')
Body → document.body  
Tags → querySelector('h4')
Classes → querySelector('.fun')
Find first → querySelector()
Find all → querySelectorAll()
```

## ♿ Accessibility Improvements

### Live Regions
```html
<h4 id="activity-text" aria-live="polite">Find something to do</h4>
```
**Effect**: Screen readers auto-announce new activities politely (waits for natural pause).

### Additional Recommendations
- **Semantic HTML**: Sequential headings (`h1 → h2 → h3`)
- **Button labels**: `aria-label="Get random activity idea"`  
- **Focus management**: Visual focus indicators for keyboard navigation

## 🚀 Key Learnings

1. **Vibe Coding Workflow**: HTML structure → CSS polish → JS interactivity
2. **API Integration**: Fetch → `.then()` chain → DOM updates
3. **Dynamic Styling**: `classList.add()` + CSS animations > inline styles
4. **Accessibility**: `aria-live="polite"` makes dynamic content screen-reader friendly instantly
5. **Modern JS**: `addEventListener` > inline `onclick` for separation of concerns

