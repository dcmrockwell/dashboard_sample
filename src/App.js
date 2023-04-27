import {
  Chain,
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import "@rainbow-me/rainbowkit/styles.css";

function App() {
  const coreChain = {
    id: 1116,
    name: "Core BlockChain",
    network: "Core Blockchain Mainnet",
    iconUrl: "ipfs://QmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2",
    iconBackground: "#fff",
    nativeCurrency: {
      decimals: 18,
      name: "Core Blockchain Native Token",
      symbol: "CORE",
    },
    rpcUrls: {
      default: {
        http: ["https://rpc.coredao.org/"],
        http: ["https://rpc-core.icecreamswap.com"],
      },
    },
    blockExplorers: {
      default: { name: "Core Scan", url: "https://scan.coredao.org" },
      etherscan: { name: "Core Scan", url: "https://scan.coredao.org" },
    },
    testnet: false,
  };

  const { provider, chains } = configureChains(
    [coreChain],
    [
      publicProvider(),
      jsonRpcProvider({
        rpc: (chains) => ({ http: "https://rpc.coredao.org/" }),
      }),
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Recommended",
      wallets: [
        metaMaskWallet({ chains }),
        trustWallet({ chains }),
        walletConnectWallet({ chains }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          showRecentTransactions={false}
          modalSize="compact"
          chains={chains}
        >
          <Navbar />
          <Dashboard />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
