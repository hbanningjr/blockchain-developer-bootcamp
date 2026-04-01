import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
        console.log("Connected:", accounts[0]);
      } catch (error) {
        console.log("Error connecting:", error);
      }
    } else {
      alert("MetaMask not detected");
    }
  };

  return (
    <div>
      <h1>Harv's Blockchain Bootcamp App</h1>
      <p>React is running successfully.</p>
      <p>Next step: connect frontend to Web3.</p>

      <button onClick={connectWallet}>Connect Wallet</button>

      {account && <p>Connected Account: {account}</p>}
    </div>
  );
}

export default App;