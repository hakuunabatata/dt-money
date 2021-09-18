import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = () => (
  <Container>
    <Content>
      <img src={logo} alt="dt money" />
      <button>Nova transação</button>
    </Content>
  </Container>
);
