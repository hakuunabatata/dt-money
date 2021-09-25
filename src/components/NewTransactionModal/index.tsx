import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => (
  <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <input placeholder="Categoris" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  </>
);
