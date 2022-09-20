require("dotenv/config");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    ropsten: {
      url: "",
      chainId: 3,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 5000000000,
      gas: 50000000,
    },
    rinkeby: {
      url: "",
      chainId: 4,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 5000000000,
      gas: 50000000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    compilers: [
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runss: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
