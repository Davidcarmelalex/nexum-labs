# Nexum Labs

> Where the builders of tomorrow learn today.

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Part of](https://img.shields.io/badge/FCRI-Education-gold)](https://fcri.science)

**Nexum Labs** is an AI-powered gamified learning studio — where young creators master the technologies of tomorrow through project-based missions, bypassing traditional curricula for real-world agency.

Learn by building. Level up by shipping.

---

## Learning Model

```
Mission → Build → Test → Deploy → Level Up
   │          │        │        │         │
Topic    Hands-on   AI review  Real      XP +
brief    project   & feedback  output    Badges
```

---

## Subject Tracks

| Track | Description |
|-------|-------------|
| 🤖 AI & Agents | Build your first AI agent, train models, deploy APIs |
| 🌐 Web Development | HTML to full-stack, React, Next.js, databases |
| ⛓️ Blockchain | Smart contracts, DeFi, Web3 basics |
| 🔐 Cybersecurity | Ethical hacking, CTFs, OWASP Top 10 |
| 📊 Data Science | Python, ML, visualization, real datasets |

---

## Architecture

```
nexum-labs/
├── src/app/
│   ├── page.tsx           Mission hub (personalized feed)
│   ├── mission/[id]/      Mission workspace + AI tutor
│   ├── profile/           Learner profile, XP, badges
│   └── leaderboard/       Global and cohort rankings
├── lib/
│   ├── xp.ts              XP calculation engine
│   └── ai-tutor.ts        AI feedback and hint system
└── tests/
```

---

## Stack

Next.js 16 · TypeScript · Tailwind CSS 4 · OpenAI (AI tutor) · PostgreSQL

---

## Quick Start

```bash
git clone https://github.com/Davidcarmelalex/nexum-labs
cd nexum-labs && npm install && cp .env.example .env.local && npm run dev
```
