//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Loan Contract
contract LoanNFT is ERC721 {
    struct Loan {
        uint256 id;
        uint256 principal;
        uint256 interestRate;
        uint256 term;
        uint256 maturityDate;
        address borrower;
        bool isRepaid;
    }

    mapping (uint256 => Loan) public loans;

    uint256 public loanId;
    uint256 public couponRate;

    constructor(string memory _name, string memory _symbol, uint256 _couponRate) ERC721(_name, _symbol) {
        loanId = 0;
        couponRate = _couponRate;
    }

    function issueLoan(address _borrower, uint256 _principal, uint256 _interestRate, uint256 _term, uint256 _maturityDate) public {
        loanId++;
        loans[loanId] = Loan(loanId, _principal, _interestRate, _term, _maturityDate, _borrower, false);
        _mint(msg.sender, loanId);
    }

    function repayLoan(uint256 _loanId) public {
        require(msg.sender == loans[_loanId].borrower, "Only borrower can repay the loan");
        loans[_loanId].isRepaid = true;
    }

    function buyNFT(uint256 _loanId) public payable {
        require(ownerOf(_loanId) != msg.sender, "Cannot buy your own loan NFT");
        require(msg.value >= calculateCouponAmount(_loanId), "Insufficient funds to buy the loan NFT");
        address owner = ownerOf(_loanId);
        _transfer(owner, msg.sender, _loanId);
        payable(owner).transfer(msg.value);
    }

    function calculateCouponAmount(uint256 _loanId) public view returns (uint256) {
        require(ownerOf(_loanId) != address(0), "Invalid loan NFT"); // address of the loan contract
        Loan memory loan = loans[_loanId];
        // calculate the buyback price based on the coupon rate
        uint256 couponAmount = loan.principal * loan.interestRate * couponRate / (100 * loan.term); 
        if (loan.isRepaid) {
            couponAmount = couponAmount + loan.principal;
        }
        return couponAmount;
    }

    function destroyNFT(uint256 _loanId) public { // destroy the NFT after buying back
        require(ownerOf(_loanId) == msg.sender, "Only owner can destroy the loan NFT");
        _burn(_loanId);
    }
}
