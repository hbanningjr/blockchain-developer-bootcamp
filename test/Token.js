const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Token", () => {
    let token

    beforeEach(async () => {
        //Fetch token from Blockchain
        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy()
    })

    it("has correct name", async () => {
        //Read token name
        const name = await token.name()
        //check that name is correct
        expect(name).to.equal("Dapp University")
    })

    it("has correct symbol", async () => {
        //read token symbol
        const symbol = await token.symbol()
        //check that symbol is correct
        expect(symbol).to.equal("DAPP")
    })
})