export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About", href: "/about" },
] as const;

export const HERO = {
  badge: "Built on Stellar Soroban",
  headline: "Verifiable Credentials for the Automotive Service Industry",
  subheadline:
    "Soulbound Tokens that prove who you are, not what you own. Permanent, non-transferable credentials for professional drivers, valet attendants, and fleet operators — verified on-chain in seconds.",
  ctaPrimary: "Mint Your Credential",
  ctaSecondary: "Read Documentation",
};

export const PROBLEM = {
  title: "The Problem",
  points: [
    {
      title: "No Portable Trust",
      description:
        "Drivers carry paper licenses and word-of-mouth references. When they switch employers, their reputation doesn't follow.",
    },
    {
      title: "Zero Verification Speed",
      description:
        "Hotels and venues spend days verifying driver credentials through phone calls and faxed documents. Background checks are repeated from scratch every time.",
    },
    {
      title: "Fraud Risk",
      description:
        "Fake licenses, expired certifications, and fabricated references are common. There's no tamper-proof record of a driver's professional history.",
    },
  ],
};

export const SOLUTION = {
  title: "The Solution",
  points: [
    {
      title: "On-Chain Soulbound Tokens",
      description:
        "Non-transferable credentials issued directly to a driver's wallet. Once minted, the SBT is permanently linked to the holder — no copying, no faking, no losing it.",
    },
    {
      title: "Instant On-Chain Verification",
      description:
        "Venues query the Stellar ledger directly. License status, trip history, endorsements, and revocation records are all verifiable in seconds, not days.",
    },
    {
      title: "Immutable Professional History",
      description:
        "Every credential issuance, trip record, and endorsement is permanently stored on-chain. Regulators and employers get a complete, tamper-proof audit trail.",
    },
  ],
};

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Verify Your Identity",
    description:
      "Submit your professional license, background check, and employer verification. Our attestation partners validate your credentials off-chain.",
  },
  {
    step: 2,
    title: "Mint Your SBT",
    description:
      "A non-transferable Soulbound Token is issued to your Stellar wallet. It contains a hash of your verified credentials — your identity stays private, your proof stays on-chain.",
  },
  {
    step: 3,
    title: "Get Verified Anywhere",
    description:
      "Hotels, fleet operators, and venues query your SBT on-chain. They see your credential status, endorsements, and history — no phone calls, no paperwork, no waiting.",
  },
] as const;

export const FEATURES = [
  {
    title: "Soulbound Credentials",
    description:
      "Non-transferable tokens permanently linked to your wallet. Can't be sold, copied, or forged. Only revocable by authorized issuers.",
    icon: "lock",
  },
  {
    title: "Instant Verification",
    description:
      "Venues verify driver credentials by querying the Stellar ledger. Results in under 3 seconds. No phone calls, no fax machines.",
    icon: "zap",
  },
  {
    title: "Fleet Management",
    description:
      "Fleet operators can batch-register drivers, track credentials, and manage compliance across their entire workforce from a single dashboard.",
    icon: "users",
  },
  {
    title: "Regulatory Compliance",
    description:
      "License expiry tracking, automatic revocation on regulatory action, and complete audit trails for compliance officers and inspectors.",
    icon: "shield",
  },
  {
    title: "Cross-Venue Portability",
    description:
      "Your credential works at every venue in the network. Switch employers, move cities — your professional reputation follows you on-chain.",
    icon: "globe",
  },
  {
    title: "Privacy-First Design",
    description:
      "Only credential hashes go on-chain. Personal data stays off-chain, encrypted, and under the driver's control. Zero-knowledge verification coming soon.",
    icon: "eye-off",
  },
] as const;

export const USE_CASES = [
  {
    persona: "Professional Chauffeurs",
    description:
      "Build a permanent, verifiable record of your professional driving career. Luxury hotels, corporate clients, and event companies can verify your credentials instantly.",
    benefit: "Higher trust, faster hiring, premium rates",
    icon: "car",
  },
  {
    persona: "Valet Attendants",
    description:
      "Handle vehicles worth $50K-$200K+ daily. Your SBT proves your background check, insurance status, and incident-free history to every employer.",
    benefit: "Portable reputation, zero repeated checks",
    icon: "parking",
  },
  {
    persona: "Fleet Managers",
    description:
      "Onboard drivers in minutes, not weeks. Batch-verify credentials, track expirations, and maintain compliance across your entire operation.",
    benefit: "90% faster onboarding, automated compliance",
    icon: "building",
  },
] as const;

export const STATS = [
  { value: "4", label: "Credential Types" },
  { value: "<3s", label: "Verification Time" },
  { value: "100%", label: "On-Chain Proof" },
  { value: "0", label: "Data Breaches" },
] as const;

export const FAQ = [
  {
    question: "What is a Soulbound Token (SBT)?",
    answer:
      "A Soulbound Token is a non-transferable digital credential permanently linked to a wallet. Unlike regular NFTs, SBTs can't be sold, traded, or transferred. They represent verifiable credentials — like a driver's license that lives on-chain and can't be forged.",
  },
  {
    question: "Is my personal data on the blockchain?",
    answer:
      "No. Only a cryptographic hash of your credentials goes on-chain. Your actual personal data — name, license number, background check results — stays off-chain, encrypted, and under your control. Venues verify the proof without seeing the raw data.",
  },
  {
    question: "Who can issue credentials?",
    answer:
      "Only authorized attestation partners can issue SBTs. These include licensed background check providers, state DMVs, insurance companies, and verified fleet operators. Each issuer is vetted and registered on-chain.",
  },
  {
    question: "Can my credential be revoked?",
    answer:
      "Yes. Credentials can be revoked by authorized issuers — for example, if a license is suspended or a background check reveals new disqualifying information. The revocation reason is recorded on-chain for transparency.",
  },
  {
    question: "Why Stellar Soroban?",
    answer:
      "Stellar offers sub-second finality, near-zero transaction fees, and a mature smart contract platform. It's optimized for real-world financial applications, making it ideal for credential verification that needs to be fast, cheap, and reliable.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Minting a credential costs fractions of a cent on Stellar. Verification queries are free for venues. Fleet management has a monthly subscription based on the number of active drivers.",
  },
] as const;

export const PROTOCOL_LAYERS = [
  {
    layer: "Application Layer",
    description: "Fleet dashboards, venue verification portals, driver mobile apps",
    items: ["Fleet Manager Dashboard", "Venue Verification Portal", "Driver Credential Wallet"],
  },
  {
    layer: "Protocol Layer",
    description: "Smart contracts handling credential lifecycle on Soroban",
    items: ["Credential Issuance", "Verification Queries", "Revocation Management", "Trip Recording"],
  },
  {
    layer: "Storage Layer",
    description: "On-chain hashes with off-chain encrypted data",
    items: ["Stellar Ledger (hashes)", "Encrypted Off-Chain Store", "IPFS (attestation docs)"],
  },
] as const;

export const FOOTER = {
  tagline: "Verifiable credentials for the automotive service industry.",
  columns: [
    {
      title: "Protocol",
      links: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Use Cases", href: "#use-cases" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Developers",
      links: [
        { label: "GitHub", href: "https://github.com/Chauffeur-Labs" },
        { label: "API Reference", href: "#" },
        { label: "Smart Contracts", href: "#" },
        { label: "SDKs", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ],
} as const;
