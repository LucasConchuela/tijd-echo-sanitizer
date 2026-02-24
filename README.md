# Tijd & Lecho Article Redirector

A Tampermonkey userscript that automatically redirects article pages on **tijd.be** and **lecho.be** by appending `1` to numeric article URLs (e.g. `10649716.html` becomes `10649716.html1`).

## Install

> **Prerequisites:** [Tampermonkey](https://www.tampermonkey.net/) must be installed in your browser.

**[Click here to install](https://raw.githubusercontent.com/LucasConchuela/tijd-echo-sanitizer/main/tijd-lecho-redirector.user.js)** -- Tampermonkey will detect the `.user.js` file and show you the full source code before asking you to confirm the install.

### Manual Install

1. Open Tampermonkey in your browser and go to the **Dashboard**.
2. Click the **+** tab to create a new script.
3. Delete the template code and paste the contents of [`tijd-lecho-redirector.user.js`](tijd-lecho-redirector.user.js).
4. Press **Ctrl+S** (or Cmd+S) to save.

## How It Works

The script is ~10 lines of code. It checks if the current URL ends with a **numeric ID** followed by `.html` (the pattern used by article pages) and redirects to the same URL with `1` appended.

- Only article pages (e.g. `/10649716.html`) are redirected.
- Section pages like `/monargent.html` or `/investir.html` are left untouched.
- Runs at `document-start` for the fastest possible redirect.
- No data is collected, no external requests are made.

## Privacy & Transparency

- The entire script is **open source** and visible above -- what you see is what gets installed.
- **No auto-updates.** The script will never change without you knowing. To update, reinstall manually from this page.
- **No network calls.** The script only reads `window.location.href` and redirects locally.
- **No permissions.** The script uses `@grant none` -- it has no access to Tampermonkey APIs, cookies, or storage.

## Supported Sites

| Site | URL Pattern |
|------|-------------|
| De Tijd | `www.tijd.be/*` |
| L'Echo | `www.lecho.be/*` |

## License

[MIT](LICENSE)
