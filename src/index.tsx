import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
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
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transaction"));

    this.post("/transactions", (schema, { requestBody }) => {
      const data = JSON.parse(requestBody);

      return schema.create(data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
