import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Salário",
          amount: 4000,
          type: "deposit",
          category: "Salario",
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Internet",
          amount: 200,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date(),
        },
        {
          id: 3,
          title: "Agiota",
          amount: 600,
          type: "withdraw",
          category: "Divida",
          createdAt: new Date(),
        },
        {
          id: 4,
          title: "TV",
          amount: 1000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
