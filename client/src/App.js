import React, { useState } from 'react';
import Web3 from 'web3';
import RenterABI from './CarRentalPlatform.json';



const CarRentalPlatformFrontend = () => {
    const [web3, setWeb3] = useState(new Web3(window.ethereum));
    const [account, setAccount] = useState('');
    const [carRentalPlatform, setCarRentalPlatform] = useState(null);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [message, setMessage] = useState('');

    const CAR_RENTAL_PLATFORM_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const CAR_RENTAL_PLATFORM_ABI = RenterABI.abi;

    const loadBlockchainData = async () => {
        try {
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const carRentalPlatform = new web3.eth.Contract(CAR_RENTAL_PLATFORM_ABI, CAR_RENTAL_PLATFORM_ADDRESS);
          setCarRentalPlatform(carRentalPlatform);
        } catch (error) {
          console.error('Error loading blockchain data:', error);
        }
      };
      
    
      const register = async (e) => {
        e.preventDefault();
        try {
          await window.ethereum.enable(); // hesap erişimini iste
          await loadBlockchainData();
      
          if (!carRentalPlatform) {
            console.error('Contract is not loaded');
            return;
          }
      
          // carRentalPlatform.methods çağrılarını gerçekleştir
        } catch (error) {
          console.error('Error registering:', error);
          setMessage(`Error registering: ${error.message}`);
        }
      };
      
    
    

    return (
        <div>
            <h1>Register to Car Rental Platform!</h1>
            <form onSubmit={register}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Surname"
                    onChange={(e) => setSurname(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CarRentalPlatformFrontend;
