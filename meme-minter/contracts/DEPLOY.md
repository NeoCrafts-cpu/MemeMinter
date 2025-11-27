# 🚀 Smart Contract Deployment Guide

## Prerequisites
1. Get test MATIC from https://faucet.polygon.technology/
2. Have a wallet private key (NEVER use a mainnet wallet with real funds!)

## Deploy to Polygon Amoy

### Option 1: Using Forge Create (Recommended)
```powershell
cd contracts

# Set your private key (get test wallet from MetaMask)
$env:PRIVATE_KEY = "your_private_key_here"
$env:Path += ";$env:USERPROFILE\.foundry\bin"

# Deploy
forge create src/TokenFactory.sol:TokenFactory `
  --rpc-url https://rpc-amoy.polygon.technology `
  --private-key $env:PRIVATE_KEY
```

### Option 2: Using Forge Script
```powershell
cd contracts
$env:PRIVATE_KEY = "your_private_key_here"
$env:Path += ";$env:USERPROFILE\.foundry\bin"

forge script script/DeployFactory.s.sol:DeployFactory `
  --rpc-url https://rpc-amoy.polygon.technology `
  --broadcast
```

## After Deployment
1. Copy the deployed contract address from the output
2. Update `src/config/contracts.ts` with the new address:
   ```typescript
   export const TOKEN_FACTORY_ADDRESS = "0xYOUR_DEPLOYED_ADDRESS" as const;
   ```

## Verify Contract (Optional)
```powershell
forge verify-contract <DEPLOYED_ADDRESS> TokenFactory `
  --chain 80002 `
  --watch
```
