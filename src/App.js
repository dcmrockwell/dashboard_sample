import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
  ledgerWallet,
  coinbaseWallet,
  rainbowWallet,
  braveWallet,
  omniWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import Test from "./components/Test.js";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.jsx";

const { chains, provider } = configureChains([bsc], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      trustWallet({ chains }),
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      coinbaseWallet({ chains }),
      rainbowWallet({ chains }),
      ledgerWallet({ chains }),
      braveWallet({ chains }),
      omniWallet({ chains }),
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          showRecentTransactions={true}
          modalSize="compact"
          chains={chains}
        >
          {/* <Header />
          <Test /> */}
          <Navbar />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
