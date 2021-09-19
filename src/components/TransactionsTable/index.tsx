import { Container } from "./styles";

export const TransactionsTable = () => (
  <>
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website Development</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/21</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1.500</td>
            <td>Moradia</td>
            <td>20/09/21</td>
          </tr>
        </tbody>
      </table>
    </Container>
  </>
);
