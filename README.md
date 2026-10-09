# lejun.site

Personal site of Lejun Min, built with [Astro](https://astro.build).

```sh
bun install
bun run dev      # local preview at http://localhost:4321
bun run build    # static site in dist/
```

Content lives in `src/content/<collection>/*.md`. Each entry needs `title`, `date` and a `lane`
(research, sound, stage, screen, image, code or words), which places it on the home page roll.
CV and news data are in `src/data/`. Pushing to `master` deploys through GitHub Actions.
