# Star Catcher — an AI agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Herman-234/makefun-post-x-game-23-nov-2026/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Herman-234/makefun-post-x-game-23-nov-2026/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## The one prompt

> "Build a tiny browser game: catch falling stars in a basket. 30 seconds, arrow keys to move, gold stars are worth 5 points."

## The game

**Star Catcher** — a tiny browser game in a single file, `game/index.html` (no build step, no network at runtime). Move the basket with ← → or the mouse, catch the falling stars before they hit the ground. Gold stars are worth 5 points, blue stars 1. You have 30 seconds.

Open `game/index.html` in any browser to play. Add `?demo=1` to the URL and the agent plays it by itself.

## The video

`trailer.mp4` (24 seconds, 1920×1080) shows the prompt, the agent building the game, and the finished game running — ending with make.fun's referral end card. The video is posted natively on X from a public account; `POST.json` names that post.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output`, where the gate reads it. The house then reads the post's views and interactions from X; places go by `views + 10 × (likes + reposts + quotes + replies)`.

## License

MIT — see [LICENSE](LICENSE).
