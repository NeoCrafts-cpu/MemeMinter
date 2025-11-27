# 🚀 MemeMinter AI

> Text-to-Memecoin dApp powered by AI on Polygon

Generate unique memecoins with AI-powered branding and deploy them on Polygon Amoy Testnet with one click!

![MemeMinter AI](https://img.shields.io/badge/Polygon-Amoy-purple) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- **🎨 AI Branding**: DALL-E 3 generates unique logos, GPT-4o creates catchy names and symbols
- **⚡ Gas-Efficient**: EIP-1167 Clones pattern saves ~90% on deployment costs
- **🔗 One-Click Deploy**: Seamless smart contract deployment with Wagmi
- **🌙 Dark Theme**: Modern, professional UI with Tailwind CSS
- **📱 Wallet Support**: MetaMask and WalletConnect integration

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 15 (App Router), TypeScript, Tailwind CSS |
| Blockchain | Wagmi v2, Viem v2, TanStack Query |
| AI | OpenAI API (GPT-4o, DALL-E 3) |
| Smart Contracts | Solidity 0.8.20+, Foundry |
| Network | Polygon Amoy Testnet (Chain ID: 80002) |

## 📁 Project Structure

```
meme-minter/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Web3Provider
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   ├── actions/
│   │   └── generateBranding.ts # OpenAI Server Action
│   ├── components/
│   │   ├── ConnectWallet.tsx   # Wallet connection UI
│   │   ├── PromptInput.tsx     # AI prompt textarea
│   │   ├── PreviewCard.tsx     # Token preview display
│   │   ├── DeployButton.tsx    # Blockchain deployment
│   │   └── providers/
│   │       └── Web3Provider.tsx # Wagmi + TanStack Query
│   └── config/
│       ├── wagmi.ts            # Wagmi configuration
│       └── contracts.ts        # Contract ABIs and addresses
├── contracts/
│   ├── src/
│   │   ├── MemeToken.sol       # Initializable ERC-20
│   │   └── TokenFactory.sol    # EIP-1167 Clone Factory
│   ├── test/
│   │   └── TokenFactory.t.sol  # Foundry tests
│   ├── script/
│   │   └── DeployFactory.s.sol # Deployment script
│   └── foundry.toml            # Foundry config
└── .env.example                # Environment template
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- [Foundry](https://book.getfoundry.sh/getting-started/installation) (for contracts)
- [OpenAI API Key](https://platform.openai.com/api-keys)
- [WalletConnect Project ID](https://cloud.walletconnect.com/)

### 1. Install Dependencies

```bash
cd meme-minter
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_WALLET_CONNECT_ID=your_project_id
```

### 3. Deploy Smart Contracts

```bash
cd contracts

# Install Foundry dependencies
forge install OpenZeppelin/openzeppelin-contracts

# Run tests
forge test -vvv

# Deploy to Polygon Amoy (set PRIVATE_KEY in .env first)
forge script script/DeployFactory.s.sol:DeployFactory \
  --rpc-url https://rpc-amoy.polygon.technology \
  --broadcast
```

After deployment, update `TOKEN_FACTORY_ADDRESS` in `src/config/contracts.ts`.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📖 How It Works

### Smart Contract Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     TokenFactory.sol                         │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │  masterImplementation (MemeToken)                       │ │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │ │
│  │  Full ERC-20 bytecode (~2000+ bytes)                    │ │
│  └─────────────────────────────────────────────────────────┘ │
│                              │                               │
│                   clone()    │                               │
│         ┌────────────────────┼────────────────────┐          │
│         ▼                    ▼                    ▼          │
│  ┌────────────┐       ┌────────────┐       ┌────────────┐    │
│  │  Clone 1   │       │  Clone 2   │       │  Clone 3   │    │
│  │  (45 bytes)│       │  (45 bytes)│       │  (45 bytes)│    │
│  │  $PEPE     │       │  $DOGE     │       │  $MOON     │    │
│  └────────────┘       └────────────┘       └────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Why EIP-1167 Clones?**
- Deploy a new token for ~150k gas instead of ~1.5M gas
- Each clone shares logic with master but has unique storage
- Perfect for token factories with high deployment volume

### AI Branding Flow

```
User Prompt → GPT-4o (Name/Symbol) → DALL-E 3 (Logo) → Preview
                                                          │
                                                          ▼
                                                     Deploy TX
                                                          │
                                                          ▼
                                                   Token on Polygon
```

## 🧪 Testing

### Smart Contract Tests

```bash
cd contracts
forge test -vvv
```

### Frontend

```bash
npm run build  # Type checking + build
npm run lint   # ESLint
```

## 🌐 Networks

| Network | Chain ID | Explorer |
|---------|----------|----------|
| Polygon Amoy | 80002 | [amoy.polygonscan.com](https://amoy.polygonscan.com) |

### Get Test MATIC

1. Visit [Polygon Faucet](https://faucet.polygon.technology/)
2. Select "Amoy" network
3. Enter your wallet address
4. Receive test MATIC

## 🔐 Security Notes

- Never commit `.env.local` or private keys
- DALL-E image URLs are temporary (~1 hour validity)
- For production, store images on IPFS/Arweave
- Audit contracts before mainnet deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT License - build cool stuff! 🚀

---

Built with ❤️ for hackathons
