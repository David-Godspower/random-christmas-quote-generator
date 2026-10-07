# 🎄 Random Christmas Quote Generator

A festive, browser-based Christmas quote generator built with HTML, CSS, and vanilla JavaScript. Click a button to display a new seasonal quote, then copy, share, or post it to X/Twitter.

## ✨ Features

- **Random quote generation:** Selects a new quote from a built-in collection on every request.
- **Automatic first quote:** Displays a quote as soon as the page loads.
- **Smooth transitions:** Fades the current quote out before displaying the next one.
- **Copy to clipboard:** Copies the current quote using the browser Clipboard API.
- **Social sharing:** Opens an X/Twitter compose window with the quote and a `#ChristmasQuotes` hashtag.
- **Native sharing:** Uses the Web Share API on supported browsers.
- **Fallback messaging:** Informs users when native sharing is unavailable.
- **Festive styling:** Uses Christmas-inspired green, red, gold, and snow-colored visual styles.
- **Responsive layout:** Works across modern desktop and mobile browsers.

## 🛠️ Built with

- **HTML5** for the page structure and controls
- **CSS3** for the festive theme, layout, hover states, and fade animation
- **JavaScript (ES6+)** for quote selection, event handling, clipboard support, and sharing
- **Font Awesome** for footer social icons

## 🚀 Getting started

### Prerequisites

You only need a modern web browser. No build tools, package manager, or backend server is required.

### Run locally

1. **Clone the repository**

   ```bash
   git clone <https://github.com/david-godspower/random-christmas-quote-generator>
   ```

2. **Open the project directory**

   ```bash
   cd random-christmas-quote-generator
   ```

3. **Launch the app**

   Open `index.html` directly in your browser, or use the **Live Server** extension in VS Code.

   A local server is recommended for reliable clipboard and Web Share API behavior.

## 🎮 How to use

1. Open the application.
2. Read the quote displayed on the page.
3. Click **Generate Quote** to show another festive message.
4. Click the copy button to copy the current quote.
5. Click the X/Twitter button to share the quote in a new post.
6. Click the share button to use your device's native sharing options when supported.

## 📁 Project structure

```text
random-christmas-quote-generator/
├── index.html    # Application markup and action buttons
├── styles.css    # Festive layout, colors, and transitions
├── script.js     # Quote collection and interaction logic
├── LICENSE       # MIT license
└── README.md     # Project documentation
```

## 🔗 Browser features

The copy and native share actions depend on browser APIs:

- **Clipboard API:** Requires a supported browser and may require a secure context such as HTTPS or localhost.
- **Web Share API:** Available primarily on supported mobile browsers and selected desktop browsers.
- **X/Twitter intent URL:** Requires access to X/Twitter in a new browser tab or window.

The quote generator itself works without an internet connection after the page assets have loaded. Font Awesome icons require an internet connection because they are loaded from cdnjs.

## 👤 Author

**David Godspower Ajala**

- [Portfolio](https://www.davidgodspowerajala.com)
- [LinkedIn](https://www.linkedin.com/in/david-godspower-ajala/)
- [Facebook](https://facebook.com/DavidGodspowerAjalaDGA/)
- [Twitter/X](https://x.com/DavidGAjala)
- [Email](mailto:ajaladavid11@gmail.com)

## 📄 License

This project is available under the [MIT License](LICENSE).
