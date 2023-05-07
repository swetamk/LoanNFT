<template>
  <div class=“loan-nft-app”>
    <form @submit.prevent="onIssueLoan" class=“loan-form”>
      <div class=“field-group”>
        <label for=“borrower”>Borrower Address:</label>
        <input type=“text” id=“borrower” v-model="loanForm.borrower" required />
      </div>
      <br>
      <div class=“field-group”>
        <label for=“principal”>Principal:</label>
        <input type=“number” id=“principal” v-model="loanForm.principal" required />
      </div>
      <br>
      <div class=“field-group”>
        <label for=“interestRate”>Interest Rate:</label>
        <input type=“number” id=“interestRate” v-model="loanForm.interestRate" required />
      </div>
      <br>
      <div class=“field-group”>
        <label for=“term”>Term:</label>
        <input type=“number” id=“term” v-model="loanForm.term" required />
      </div>
      <br>
      <div class=“field-group”>
        <label for=“maturityDate”>Maturity Date:</label>
        <input type=“number” id=“maturityDate” v-model="loanForm.maturityDate" required />
      </div>
      <br>
      <button type=“submit”>Issue Loan</button>
    </form>
    <br>
    <h2>Buy Loan NFT</h2>
    <form @submit.prevent="onBuyNFT" class=“loan-form”>
      <div class=“field-group”>
        <label for=“buy_loan_id”>Loan ID:</label>
        <input type=“number” id=“buy_loan_id” v-model="buyNFTForm.loanId" required />
      </div>
      <button type=“submit”>Buy Loan NFT</button>
    </form>
    <br>
    <h2>Destroy Loan NFT</h2>
    <form @submit.prevent="onDestroyNFT" class=“loan-form”>
      <div class=“field-group”>
        <label for=“destroy_loan_id”>Loan ID:</label>
        <input type=“number” id=“destroy_loan_id” v-model="destroyNFTForm.loanId" required />
      </div>
      <button type=“submit”>Destroy Loan NFT</button>
    </form>
    <br>
    <p>{{issueLoanStatus}}</p>
  </div>
</template>

<script>
import BN from "bn.js";
import Web3 from "web3";
//import LoanNFTJson from “@//LoanNFT.json”;
import LoanNFT from '@/LoanNFT.js';
import CryptoJS from 'crypto-js';
import { ethers } from 'ethers';

export default {
  data() {
    return {
      web3: null,
      contract: null,
      account: null,
      loanForm: {
        borrower: "",
        principal: 0,
        interestRate: 0,
        term: 0,
        maturityDate: 0,
      },
      buyNFTForm: {
        loanId: 0,
      },
      destroyNFTForm: {
        loanId: 0,
      },
      issueLoanStatus: ""
    };
  },
  async mounted() {
    // Connect to Metamask
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      this.web3 = window.web3;
      await window.ethereum.enable();
    } else {
      alert("Please install Metamask to use this app");
      return;
    }

    // Get user account
    this.account = await window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => accounts[0]);

    // Load and create an instance of the smart contract
    const networkId = await this.web3.eth.net.getId();
    const networkData = LoanNFT.networks[networkId];

    if (!networkData) {
      alert("Smart contract is not deployed to the detected network");
      return;
    }

    const contractAddress = networkData.address;
    this.contract = new this.web3.eth.Contract(LoanNFT.abi, contractAddress);
  },
  methods: {
    async onIssueLoan() {
      try {
        this.issueLoanStatus = "Submitting transaction…";

        await this.contract.methods
          .issueLoan(
            this.loanForm.borrower,
            this.loanForm.principal,
            this.loanForm.interestRate,
            this.loanForm.term,
            this.loanForm.maturityDate,
          )
          .send({ from: this.account });
        this.issueLoanStatus = "Loan issued successfully";
      } catch (error) {
        console.error(error);
        this.issueLoanStatus = "Transaction failed!";
      }
    },
    async onBuyNFT() {
      try {
        const couponAmount = await this.contract.methods.calculateCouponAmount(this.buyNFTForm.loanId).call();
        await this.contract.methods.buyNFT(this.buyNFTForm.loanId).send({ from: this.account, value: couponAmount });
        alert('Loan NFT bought successfully');
      } catch (error) {
        console.error(error);
        alert('Cannot buy your own loan NFT');
      }
    },
    async onDestroyNFT() {
      try {
        await this.contract.methods.destroyNFT(this.destroyNFTForm.loanId).send({ from: this.account });
        alert('Loan NFT destroyed successfully');
      } catch (error) {
        console.error(error);
        alert('Destroying Loan NFT failed');
      }
    },
  },
};
</script>

<style scoped>
/* LoanNFTApp styles */
.loan-nft-app {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f7f7f7;
  border-radius: 10px;
}

h1 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.loan-form {
  display: grid;
  gap: 1.5rem;
}

.field-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  padding-right: 15px;
}

input {
  height: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #2ecc71;
}
</style>