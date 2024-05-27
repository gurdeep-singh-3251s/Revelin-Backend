require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/jq1YPC_HgcZVgEkw12Yjym6LoBRWskay',
      accounts: ['896aa8758966639e5c574c8f6900c1341f134cd584952fe3cc295256ad96e720']
    }
  }
};
