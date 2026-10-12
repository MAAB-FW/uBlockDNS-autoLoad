# uBlockDNS - Auto Load More

♾️ Automatically click the **Load more** button on [uBlockDNS](https://ublockdns.com/) to simulate infinite scrolling.

## ✨ Features

- Automatically clicks the Load more button.
- Adds a 1-second delay before clicking.
- Detects dynamically added buttons.
- Prevents multiple click timers from stacking.
- Works automatically in the background.

## 📥 Installation

1. Install [Violentmonkey](https://violentmonkey.github.io/get-it/) or [Tampermonkey](https://www.tampermonkey.net/).
2. Click here to **[Install Script](https://github.com/MAAB-FW/uBlockDNS-autoLoad/raw/main/uBlockDNS-autoLoad.js)**.
3. Visit [uBlockDNS](https://ublockdns.com/).
4. Done! The script automatically clicks the Load more button when detected.

## ⚙️ Configuration

To change the delay, edit the `CLICK_DELAY` constant in the script.

```javascript
const CLICK_DELAY = 1000;
```

The value is in milliseconds. For example, `2000` means a 2-second delay.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
