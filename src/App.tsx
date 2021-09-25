import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  return (
    <>
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
    </>
  );
}
