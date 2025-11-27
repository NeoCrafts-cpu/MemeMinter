// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import "../src/MemeToken.sol";
import "../src/TokenFactory.sol";

contract TokenFactoryTest is Test {
    TokenFactory public factory;
    address public alice = makeAddr("alice");
    address public bob = makeAddr("bob");
    
    // Define event locally to use with expectEmit
    event TokenDeployed(
        address indexed tokenAddress,
        address indexed creator,
        string name,
        string symbol,
        uint256 totalSupply
    );

    function setUp() public {
        factory = new TokenFactory();
    }

    function test_DeployMemeToken() public {
        vm.startPrank(alice);
        
        string memory name = "Doge Supreme";
        string memory symbol = "DOGES";
        uint256 supply = 1_000_000 * 10**18;
        
        address tokenAddress = factory.deployMemeToken(name, symbol, supply);
        
        MemeToken token = MemeToken(tokenAddress);
        assertEq(token.name(), name);
        assertEq(token.symbol(), symbol);
        assertEq(token.totalSupply(), supply);
        assertEq(token.balanceOf(alice), supply);
        
        vm.stopPrank();
    }

    function test_MultipleDeployments() public {
        vm.prank(alice);
        factory.deployMemeToken("Token A", "TKNA", 1000 * 10**18);
        
        vm.prank(bob);
        factory.deployMemeToken("Token B", "TKNB", 2000 * 10**18);
        
        assertEq(factory.getDeployedTokensCount(), 2);
        assertEq(factory.getTokensByCreator(alice).length, 1);
        assertEq(factory.getTokensByCreator(bob).length, 1);
    }

    function test_TokenTransfer() public {
        vm.startPrank(alice);
        
        address tokenAddress = factory.deployMemeToken("Test", "TST", 1000 * 10**18);
        MemeToken token = MemeToken(tokenAddress);
        
        token.transfer(bob, 100 * 10**18);
        
        assertEq(token.balanceOf(alice), 900 * 10**18);
        assertEq(token.balanceOf(bob), 100 * 10**18);
        
        vm.stopPrank();
    }

    function test_EmitTokenDeployedEvent() public {
        vm.startPrank(alice);
        
        vm.expectEmit(false, true, false, true);
        emit TokenDeployed(
            address(0), // We don't know the address yet
            alice,
            "Meme Token",
            "MEME",
            1000 * 10**18
        );
        
        factory.deployMemeToken("Meme Token", "MEME", 1000 * 10**18);
        
        vm.stopPrank();
    }

    function test_CannotReinitialize() public {
        vm.startPrank(alice);
        
        address tokenAddress = factory.deployMemeToken("Test", "TST", 1000 * 10**18);
        MemeToken token = MemeToken(tokenAddress);
        
        // Attempt to reinitialize should fail
        vm.expectRevert();
        token.initialize("Hacked", "HACK", 999999 * 10**18, alice);
        
        vm.stopPrank();
    }
}
