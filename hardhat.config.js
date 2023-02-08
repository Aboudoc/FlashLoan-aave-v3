require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.8.10" }, { version: "0.4.19" }, { version: "0.6.6" }],
    },
    networks: {
        hardhat: {
            forking: {
                url: MAINNET_RPC_URL,
            },
        },
    },
}
