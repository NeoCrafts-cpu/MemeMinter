// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

/**
 * @title MemeToken
 * @author MemeMinter AI
 * @notice An Initializable ERC-20 token designed to be deployed via EIP-1167 Minimal Proxy (Clone) pattern.
 * @dev Why Initializable instead of Constructor?
 *      - EIP-1167 clones share the same bytecode as the implementation contract.
 *      - Constructors run at deploy time and set storage on the implementation, NOT the clone.
 *      - Using `initialize()` allows each clone to have its own unique state (name, symbol, supply).
 *      - This pattern saves ~90% gas on deployment compared to deploying full contracts.
 */
contract MemeToken is Initializable {
    // ============ Storage ============
    string private _name;
    string private _symbol;
    uint8 private constant _decimals = 18;
    uint256 private _totalSupply;
    
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    // ============ Events ============
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    // ============ Initialization ============
    
    /**
     * @notice Initializes the token with name, symbol, and mints total supply to creator.
     * @dev This function replaces the constructor for clone proxies.
     *      The `initializer` modifier ensures this can only be called once per clone.
     * @param name_ The token name (e.g., "DogeCoin Supreme")
     * @param symbol_ The token symbol (e.g., "DOGES")
     * @param totalSupply_ The total supply to mint (in wei, 18 decimals)
     * @param creator_ The address that receives the initial supply
     */
    function initialize(
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_,
        address creator_
    ) external initializer {
        require(creator_ != address(0), "MemeToken: creator is zero address");
        require(totalSupply_ > 0, "MemeToken: supply must be greater than 0");
        
        _name = name_;
        _symbol = symbol_;
        _totalSupply = totalSupply_;
        _balances[creator_] = totalSupply_;
        
        emit Transfer(address(0), creator_, totalSupply_);
    }

    // ============ ERC-20 View Functions ============
    
    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public pure returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return _allowances[owner][spender];
    }

    // ============ ERC-20 State-Changing Functions ============

    function transfer(address to, uint256 amount) public returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) public returns (bool) {
        _spendAllowance(from, msg.sender, amount);
        _transfer(from, to, amount);
        return true;
    }

    // ============ Internal Functions ============

    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0), "MemeToken: transfer from zero address");
        require(to != address(0), "MemeToken: transfer to zero address");
        
        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "MemeToken: transfer amount exceeds balance");
        
        unchecked {
            _balances[from] = fromBalance - amount;
            _balances[to] += amount;
        }
        
        emit Transfer(from, to, amount);
    }

    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "MemeToken: approve from zero address");
        require(spender != address(0), "MemeToken: approve to zero address");
        
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _spendAllowance(address owner, address spender, uint256 amount) internal {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "MemeToken: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }
}
