<template>
  <div id=“app”>
    <header>
      <h1>Loan NFT Platform</h1>
    </header>
    <main>
      <LoanNFTApp />
    </main>
  </div>
</template>

<script setup>
import LoanNFTApp from './components/LoanNFTApp.vue';
</script>

<style scoped>
body,
input {
  font-family: ‘Segoe UI’, Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin-bottom: 1rem;
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

/* App component specific styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #34495e;
  color: white;
  padding: 1rem;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 1rem;
}
</style>