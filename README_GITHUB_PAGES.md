# VirtualState static landing for GitHub Pages

This folder is a dependency-free static version of the Base44/Vite landing page.
It does **not** require npm, Vite, React, Base44, a local proxy or a build step.

## Files

```text
index.html
assets/styles.css
assets/main.js
assets/config.js
assets/logo.png
assets/favicon-*.png
.nojekyll
```

## Configure before publishing

Edit `assets/config.js`:

```js
window.VIRTUALSTATE_CONFIG = {
  technicalDocUrl: "https://YOUR_PUBLIC_MIRROR/VirtualState_Documento_Tecnico_Overview.pdf",
  contactEmail: "contact@your-domain.example"
};
```

The technical document download buttons and footer link are filled from `technicalDocUrl`.
The contact buttons and static form use `contactEmail` through `mailto:`.
No data is sent to any server.

## Test locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://127.0.0.1:8080
```

You can also open `index.html` directly in a browser, but using a tiny local server is closer to GitHub Pages.

## Publish on GitHub Pages

Option A: publish from repository root.

1. Copy all files in this folder to the root of your public GitHub repository.
2. Commit and push.
3. In GitHub, go to `Settings → Pages`.
4. Choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.

Option B: publish from `/docs`.

1. Create a `docs` folder in the repository.
2. Copy all files in this folder into `docs/`.
3. Commit and push.
4. In GitHub, go to `Settings → Pages`.
5. Choose `Deploy from a branch`.
6. Select branch `main` and folder `/docs`.

## Notes

- The marketplace is intentionally marked as a mockup.
- The contact form is static: it opens the user's email client with a prepared message.
- The page uses relative asset paths, so it works both at `username.github.io` and at `username.github.io/repo-name/`.
- `.nojekyll` is included to make GitHub Pages serve static assets without Jekyll processing.
