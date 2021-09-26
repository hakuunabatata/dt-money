import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: Date;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then(({ data }) => setTransactions(data.transactions));
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
            {transactions.length ? (
              transactions.map(
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
              )
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </Container>
    </>
  );
};
