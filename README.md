# Onward

Onward is a small offline app for tracking a long voyage — a personal progress
tracker themed around historical sailing passages. You close out each day's run,
weather the occasional storm, and make landfall at a series of ports across a
sequence of voyages, with a barometer for how each day felt and a captain's diary
for the days worth remembering.

It's a Progressive Web App (PWA): a single self-contained HTML file that runs
entirely in the browser, works fully offline, and stores everything locally on the
device. Nothing leaves the vessel.

## Running locally

Serve the folder with any static file server, for example:

```
python3 -m http.server 8000
```

then open <http://localhost:8000/onward.html>.

The service worker skips registration on `localhost`, so a plain refresh always
shows your latest edit (no cache to fight during development).

## Deploying

Hosted via GitHub Pages. To publish a change:

```
./deploy.sh "describe the change"
```

That stages, commits and pushes; GitHub Pages auto-publishes the result to the
live site a minute or so later.

## Versioning

Semantic versioning — `vMAJOR.MINOR.PATCH` — shown in the app footer. The
service-worker cache name in `sw.js` is bumped in lockstep with the footer on every
release, which is what tells installed devices a new version is available.

- **patch** (`v0.1.1`) — a small fix or tweak
- **minor** (`v0.2.0`) — a new feature
- **major** (`v1.0.0`) — a significant rework

## Structure

- `onward.html` — the entire app (markup, styles, logic in one file)
- `sw.js` — service worker (offline caching)
- `manifest.webmanifest`, `icon-*.png`, `launch-*.png` — PWA install assets
- `deploy.sh` — one-command deploy helper
