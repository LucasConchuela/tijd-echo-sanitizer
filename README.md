# Tijd & Lecho Article Redirector

A Tampermonkey userscript that automatically redirects article pages on **tijd.be** and **lecho.be** by appending `1` to `.html` URLs.

## One-Click Install

> **Prerequisites:** [Tampermonkey](https://www.tampermonkey.net/) must be installed in your browser.

**[Click here to install the userscript](https://raw.githubusercontent.com/LucasConchuela/tijd-echo-sanitizer/main/tijd-lecho-redirector.user.js)**

Tampermonkey will automatically detect the `.user.js` file and prompt you to install it.

## Manual Install

1. Open Tampermonkey in your browser and go to the **Dashboard**.
2. Click the **+** tab to create a new script.
3. Delete the template code and paste the contents of [`tijd-lecho-redirector.user.js`](tijd-lecho-redirector.user.js).
4. Press **Ctrl+S** (or Cmd+S) to save.

## How It Works

When you visit an article page on `www.tijd.be` or `www.lecho.be` whose URL ends in `.html`, the script instantly redirects to the same URL with `1` appended (e.g., `.html` becomes `.html1`).

- Runs at `document-start` for the fastest possible redirect.
- URLs already ending in `.html1` are ignored, preventing infinite loops.

## Automatic Updates

The script includes `@updateURL` and `@downloadURL` metadata pointing to this repository. Tampermonkey will periodically check for updates and notify you when a new version is available.

## Supported Sites

| Site | URL Pattern |
|------|-------------|
| De Tijd | `www.tijd.be/*` |
| L'Echo | `www.lecho.be/*` |

## License

[MIT](LICENSE)
