# Beyond Ability X — Deployed Build

This branch contains the compiled static output of the website (the result of `next build` with `output: "export"`), and nothing else. Hostinger's Git integration deploys directly from here — that's the only reason it exists.

**This is not source code.** Do not edit files on this branch; any change will be overwritten by the next deploy.

Source lives on [`site-rebuild`](../../tree/site-rebuild), which has the actual Next.js project, its README, and instructions for building and deploying.
