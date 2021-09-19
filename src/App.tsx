import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
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
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={() =>
          setNewTransactionModalOpen(!isNewTransactionModalOpen)
        }
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
    </>
  );
}
