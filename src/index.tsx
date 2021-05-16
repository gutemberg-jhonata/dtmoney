import React from "react";
import ReactDOM from "react-dom";
import { Model, Server } from "miragejs";
import { App } from "./App";

new Server({
  models: {
    transaction: Model
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
