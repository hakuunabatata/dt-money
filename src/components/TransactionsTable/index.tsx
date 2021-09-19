import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get("transactions").then(({ data }) => setTransactions(data));
  }, []);

  return (
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
            {transactions.map(
              ({ id, title, amount, type, category, createdAt }) => (
                <tr key={id}>
                  <td>{title}</td>
                  <td className={type}>
                    R$
                    {" " +
                      [
                        String(amount).split(".")[0],
                        String(amount).split(".")[1] || "00",
                      ].join(",")}
                  </td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
};
