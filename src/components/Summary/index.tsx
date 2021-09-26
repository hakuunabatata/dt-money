import { useContext, useEffect, useState } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

export const Summary = () => {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);

  const { transactions } = useContext(TransactionsContext);

  useEffect(() => {
    let incomeTotal = 0;
    let outcomeTotal = 0;
    let totalTotal = 0;

    transactions.forEach(({ type, amount }) => {
      if (type === "deposit") {
        incomeTotal += amount;
        totalTotal += amount;
      }
      if (type === "withdraw") {
        outcomeTotal += amount;
        totalTotal += amount;
      }
    });

    setIncome(incomeTotal);
    setOutcome(outcomeTotal);
    setTotal(totalTotal);
  }, [transactions]);

  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(income)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src={outcomeImg} alt="Saidas" />
          </header>
          <strong>
            -
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(outcome)}
          </strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            {total <= 0 ?? "-"}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </strong>
        </div>
      </Container>
    </>
  );
};
