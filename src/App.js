import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  trustWallet,
  coinbaseWallet,
  walletConnectWallet,
  ledgerWallet,
  rainbowWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Header from './components/Header.js'


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const otherWallets = [
  ledgerWallet({ chains }),
  rainbowWallet({ chains }),
  coinbaseWallet({ chains }),
]

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains }), metaMaskWallet({ chains }), walletConnectWallet({ chains }), trustWallet({ chains })],
  },
  {
    groupName: 'Other Wallets',
    wallets: otherWallets,
  },
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Header />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
