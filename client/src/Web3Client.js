import Web3 from "web3";
import RenterABI from "./ABI/RentalPlatform.json";

let selectedAccount;
let renterContract;
let isInitialized =false;
let renterContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const init = async()=>{
    // congure contract
    let provider = window.ethereum;

    if(typeof provider !== "undefined"){
        provider
        .request({method:"eth_requestAccounts"})
        .then((accounts)=>{
            selectedAccount = accounts[0];
        }).catch((err)=>{
            //console.log(err);
            return;
        })
    }

    window.ethereum.on("accountChanged", function(accounts){
        selectedAccount=accounts[0];
    })
}

