import React from "react";
import ReactDOM from "react-dom";
import { Server } from "miragejs";
import { App } from "./App";

new Server({
  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 12000,
          type: 'deposit',
          category: "Venda",
          createdAt: new Date("2021-04-13"),
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
