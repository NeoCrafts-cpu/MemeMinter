// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/TokenFactory.sol";

/**
 * @title DeployFactory
 * @notice Deployment script for TokenFactory on Polygon Amoy
 * @dev Run with: forge script script/DeployFactory.s.sol:DeployFactory --rpc-url polygon_amoy --broadcast
 */
contract DeployFactory is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        TokenFactory factory = new TokenFactory();
        
        console.log("TokenFactory deployed at:", address(factory));
        console.log("MemeToken implementation at:", factory.masterImplementation());
        
        vm.stopBroadcast();
    }
}
