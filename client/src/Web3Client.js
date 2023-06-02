import Web3 from "web3";
import RenterABI from '.CarRentalPlatform.json';


let selectedAccount;
let renterContract;
let isInitialized = false;
let renterContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const init = async () => {
    let provider = window.ethereum;

    if (!provider) {
        console.error("Ethereum provider is not available");
        return;
    }

    try {
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        selectedAccount = accounts[0];

        provider.on("accountsChanged", function (accounts) {
            selectedAccount = accounts[0];
        });

        const web3 = new Web3(provider);

        console.log("ABI: ", RenterABI.abi); // Checking if ABI is correctly loaded
        renterContract = new web3.eth.Contract(RenterABI.abi, renterContractAddress);

        isInitialized = true;
        console.log("Initialization is successful");
    } catch (error) {
        console.error("Initialization failed", error);
    }
}
