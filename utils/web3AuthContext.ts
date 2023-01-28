import { Web3Auth, Web3AuthOptions } from '@web3auth/modal';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base';
import { useState, useEffect, createContext } from 'react';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
import RPC from './ethersRPC';

export const useWeb3AuthHook = () => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);

  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  const [w3aAddress, setW3aAddress] = useState(null);
  const [w3aAuthenticatedUser, setW3aAuthenticatedUser] = useState(null);
  const [w3aUserInfo, setW3aUserInfo] = useState(null);

  useEffect(() => {
    const init = async () => {
      const clientId = process.env.NEXT_PUBLIC_WEB3_AUTH_ID;
      try {
        const web3auth = new Web3Auth({
          clientId,
          web3AuthNetwork: 'testnet', // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/eth', // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        const openloginAdapter = new OpenloginAdapter({
          loginSettings: {
            mfaLevel: 'none', // Pass on the mfa level of your choice: default, optional, mandatory, none
          },
        });
        web3auth.configureAdapter(openloginAdapter);

        setWeb3auth(web3auth);

        await web3auth.initModal();
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const web3authLogin = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);

    if (provider) {
      await getAccounts();
    }
  };

  const web3AuthLogout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const authenticateUser = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const idToken = await web3auth.authenticateUser();
    console.log(idToken);
  };

  const getChainId = async () => {
    if (!provider) {
      alert('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    alert(chainId);
  };

  const getAccounts = async () => {
    if (!provider) {
      alert('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    try {
      const address = await rpc.getAccounts();
      setW3aAddress(address);
      console.log('account address', address);
    } catch (e) {
      console.log(e);
    }
  };

  const getBalance = async () => {
    if (!provider) {
      alert('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    alert(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      alert('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    alert(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      alert('provider not initialized yet');
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    alert(signedMessage);
  };

  return {
    w3aAddress,
    web3authLogin,
    web3AuthLogout,
    getAccounts,
    getBalance,
    sendTransaction,
    signMessage,
    w3aUserInfo,
    w3aAuthenticatedUser,
  };
};

export const web3AuthContext = createContext(
  useWeb3AuthHook // default value
);
