# Chauffeur Labs

On-chain driver and valet credential protocol powered by Soulbound Tokens on Stellar Soroban.

## The Problem

Professional drivers and valet attendants carry paper licenses and word-of-mouth references. When they switch employers, their reputation doesn't follow. Hotels and venues spend days verifying credentials through phone calls and faxed documents. Fake licenses, expired certifications, and fabricated references are common.

## The Solution

Chauffeur Labs issues non-transferable Soulbound Tokens (SBTs) directly to a driver's Stellar wallet. These on-chain credentials contain hashed professional data — license status, trip history, endorsements, and revocation records — verifiable by any venue in seconds.

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Blockchain:** Stellar Soroban (smart contracts)
- **Tokens:** Soulbound Tokens (non-transferable, revocable)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Brand theme (gold/dark luxury palette)
│   ├── layout.tsx       # Root layout with Navbar + Footer
│   └── page.tsx         # Landing page (composes all sections)
├── components/
│   ├── Navbar.tsx       # Responsive nav with mobile hamburger
│   ├── Hero.tsx         # Hero with radial gradient and CTAs
│   ├── ProblemSolution.tsx  # Two-column problem/solution
│   ├── HowItWorks.tsx   # 3-step credential flow
│   ├── Features.tsx     # 6 feature cards with icons
│   ├── UseCases.tsx     # 3 persona cards
│   ├── Stats.tsx        # Key metrics bar
│   ├── CTA.tsx          # Call to action section
│   └── Footer.tsx       # Footer with link columns
└── lib/
    └── constants.ts     # All site content and data
```

## Build

```bash
npm run build
```

## License

MIT
