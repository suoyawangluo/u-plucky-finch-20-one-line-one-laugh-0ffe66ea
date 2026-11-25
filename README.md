# One Line, One Laugh

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/suoyawangluo/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/suoyawangluo/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A make.fun bounty entry for **One Line, One Laugh** — one funny line, at most 200 characters, judged head-to-head by an AI comedy editor.

## The entry

> I told my AI to keep it short. It sent back a 40-page apology for being too long.

Ask an AI to be brief, and it answers with a 40-page apology for being too long — the punchline lands in the second sentence and needs no setup.

## How it works

`main.ts` builds the line from two named parts (`SETUP` / `TURN`), validates it against the gate (1–200 characters, single line, non-blank), writes it to `/output/entry.txt`, and verifies the written file by sha256.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Referral

[Join make.fun with my invite](https://make.fun/r/xxbm6cca)
