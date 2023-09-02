const switchSongbirdRequest = () =>
  window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x13" }],
  });

const switchGoerliRequest = () => {
  window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x5" }],
  });
};

const addSongbirdRequest = () =>
  window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x13",
        chainName: "SongBird",
        rpcUrls: ["https://sgb.ftso.com.au/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://songbird-explorer.flare.network"],
        nativeCurrency: {
          name: "SGB",
          symbol: "SGB",
          decimals: 18,
        },
      },
    ],
  });

const addGoerliRequest = () => {
  window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x5",
        chainName: "Goerli",
        rpcUrls: ["https://rpc.ankr.com/eth_goerli"],
        blockExplorerUrls: ["https://goerli.etherscan.io"],
        nativeCurrency: {
          name: "Goerli",
          symbol: "ETH",
          decimals: 18,
        },
      },
    ],
  });
};

export const switchSongbirdNetwork = async () => {
  if (window.ethereum) {
    try {
      await switchSongbirdRequest();
    } catch (error) {
      if (error.code === 4902) {
        try {
          await addSongbirdRequest();
          await switchSongbirdRequest();
        } catch (addError) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      }
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
};

export const switchGoerliNetwork = async () => {
  if (window.ethereum) {
    try {
      console.log("swithgoerlirequest");
      await switchGoerliRequest();
    } catch (error) {
      if (error.code === 4902) {
        console.log("error: ", error);
        try {
          await addGoerliRequest();
          await switchGoerliRequest();
        } catch (addError) {
          console.log(addError);
        } 
      }
      console.log(error);
    }
  }
};
