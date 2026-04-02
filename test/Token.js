const { ethers } = require("hardhat");
const { expect } = require("chai");

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether")
}

describe("Token", () => {
    let token, deployer, totalSupply

    beforeEach(async () => {
        const accounts = await ethers.getSigners()
        deployer = accounts[0]

        totalSupply = tokens("1000000")

        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy("Dapp University", "DAPP", "1000000")
    })

    it("has correct name", async () => {
        expect(await token.name()).to.equal("Dapp University")
    })

    it("has correct symbol", async () => {
        expect(await token.symbol()).to.equal("DAPP")
    })

    it("has correct decimals", async () => {
        expect(await token.decimals()).to.equal("18")
    })

    it("has correct total supply", async () => {
        expect(await token.totalSupply()).to.equal(totalSupply)
    })

    it("assigns total supply to deployer", async () => {
        expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
    })
})