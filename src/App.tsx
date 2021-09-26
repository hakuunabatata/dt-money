import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={() =>
          setNewTransactionModalOpen(!isNewTransactionModalOpen)
        }
      />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() =>
          setNewTransactionModalOpen(!isNewTransactionModalOpen)
        }
      />
    </TransactionsProvider>
  );
}
