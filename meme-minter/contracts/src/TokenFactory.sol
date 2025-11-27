// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "./MemeToken.sol";

/**
 * @title TokenFactory
 * @author MemeMinter AI
 * @notice Factory contract that deploys MemeTokens using the EIP-1167 Minimal Proxy pattern.
 * @dev Why EIP-1167 (Clones)?
 *      - Traditional deployment: Each token deploys ~2000+ bytes of bytecode = HIGH GAS.
 *      - Clone deployment: Each token is only 45 bytes pointing to master = ~90% GAS SAVINGS.
 *      
 *      How it works:
 *      1. Deploy ONE "master" MemeToken implementation (stores all the logic).
 *      2. Each new token is a "clone" - a tiny proxy that delegates all calls to master.
 *      3. Each clone has its OWN storage (name, symbol, balances) but SHARES code with master.
 *      
 *      Gas comparison (approximate):
 *      - Full ERC-20 deploy: ~1,500,000 gas
 *      - Clone deploy: ~150,000 gas (10x cheaper!)
 */
contract TokenFactory {
    using Clones for address;

    // ============ Storage ============
    
    /// @notice Address of the master MemeToken implementation that all clones delegate to
    address public immutable masterImplementation;
    
    /// @notice Array of all deployed token addresses (for frontend indexing)
    address[] public deployedTokens;
    
    /// @notice Mapping of creator address to their deployed tokens
    mapping(address => address[]) public tokensByCreator;

    // ============ Events ============
    
    /**
     * @notice Emitted when a new MemeToken clone is deployed
     * @param tokenAddress The address of the newly deployed token clone
     * @param creator The address that deployed and owns the initial supply
     * @param name The token name
     * @param symbol The token symbol
     * @param totalSupply The total supply minted to creator
     */
    event TokenDeployed(
        address indexed tokenAddress,
        address indexed creator,
        string name,
        string symbol,
        uint256 totalSupply
    );

    // ============ Constructor ============
    
    /**
     * @notice Deploys the factory with a new master MemeToken implementation
     * @dev The master implementation is deployed once and never used directly.
     *      All tokens are clones that delegate calls to this master.
     */
    constructor() {
        // Deploy the master implementation that all clones will point to
        masterImplementation = address(new MemeToken());
    }

    // ============ Main Function ============
    
    /**
     * @notice Deploys a new MemeToken as an EIP-1167 clone
     * @dev Flow:
     *      1. Clone the master implementation (creates minimal proxy)
     *      2. Initialize the clone with token data
     *      3. Emit event for frontend/indexer tracking
     * @param name The token name (e.g., "Pepe Supreme")
     * @param symbol The token symbol (e.g., "PEPES")
     * @param totalSupply The total supply in wei (e.g., 1000000 * 10^18 for 1M tokens)
     * @return tokenAddress The address of the newly deployed token
     */
    function deployMemeToken(
        string calldata name,
        string calldata symbol,
        uint256 totalSupply
    ) external returns (address tokenAddress) {
        // Step 1: Create a minimal proxy clone pointing to master implementation
        // This is where the gas savings happen - only 45 bytes deployed!
        tokenAddress = masterImplementation.clone();
        
        // Step 2: Initialize the clone with unique data
        // The clone has its own storage, so initialize() sets up THIS token's state
        MemeToken(tokenAddress).initialize(
            name,
            symbol,
            totalSupply,
            msg.sender  // Creator receives the entire supply
        );
        
        // Step 3: Track deployment for frontend queries
        deployedTokens.push(tokenAddress);
        tokensByCreator[msg.sender].push(tokenAddress);
        
        // Step 4: Emit event for indexers and frontend
        emit TokenDeployed(
            tokenAddress,
            msg.sender,
            name,
            symbol,
            totalSupply
        );
        
        return tokenAddress;
    }

    // ============ View Functions ============
    
    /**
     * @notice Returns the total number of tokens deployed through this factory
     */
    function getDeployedTokensCount() external view returns (uint256) {
        return deployedTokens.length;
    }
    
    /**
     * @notice Returns all tokens deployed by a specific creator
     * @param creator The address to query
     */
    function getTokensByCreator(address creator) external view returns (address[] memory) {
        return tokensByCreator[creator];
    }
    
    /**
     * @notice Returns a paginated list of deployed tokens
     * @param offset Starting index
     * @param limit Maximum number of tokens to return
     */
    function getDeployedTokens(uint256 offset, uint256 limit) external view returns (address[] memory) {
        uint256 total = deployedTokens.length;
        if (offset >= total) {
            return new address[](0);
        }
        
        uint256 end = offset + limit;
        if (end > total) {
            end = total;
        }
        
        address[] memory tokens = new address[](end - offset);
        for (uint256 i = offset; i < end; i++) {
            tokens[i - offset] = deployedTokens[i];
        }
        
        return tokens;
    }
}
