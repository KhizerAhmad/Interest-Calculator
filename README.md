# Simple Interest Calculator 💰

A clean, no-nonsense interest calculator built with plain HTML, CSS, and JavaScript. You punch in your principal, slide the rate, pick the years — and it tells you exactly what you'll walk away with.

---

## What it does

- Enter a **principal amount**
- Drag the **interest rate slider** (1% to 20%, steps of 0.25%)
- Pick the **number of years** (comes with quick suggestions via datalist)
- Hit **Compute** and it spits out your total amount + the exact year you'd receive it
- **Reset** button to wipe everything clean and start over

---

## Why I built this

Honestly just a straightforward project to get comfortable with DOM manipulation and event handling in vanilla JS. No libraries, no frameworks — just the basics done right.

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & input elements |
| CSS3 | Styling & layout |
| JavaScript (Vanilla) | Logic, DOM manipulation, validation |

---

## How to run it

No setup needed. Seriously.

```bash
git clone https://github.com/your-username/simple-interest-calculator.git
cd simple-interest-calculator
```

Then just open `index.html` in your browser. That's it.

---

## Project Structure

```
simple-interest-calculator/
│
├── index.html       # Main HTML file
├── style.css        # Styling
└── script.js        # Calculator logic
```

---

## Features at a glance

- **Input validation** — throws an alert if principal is empty or negative
- **Live rate display** — the percentage updates in real-time as you drag the slider
- **Year suggestions** — datalist gives you quick 1–10 year options (but you can type any number)
- **Formatted output** — result is highlighted with `<mark>` tags so it's easy to read at a glance

---

## Formula used

```
Simple Interest = (Principal × Rate × Years) / 100
Total Amount = Principal + Simple Interest
```

---

## Screenshot

> *(Add a screenshot of your app here)*

---

## Author

**Khizer Ahmad** — built this as part of learning frontend web development.

Feel free to fork it, use it, or improve it. No restrictions.
