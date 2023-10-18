import { store } from "@/store/store.ts";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App.tsx";
import "./styles/index.scss";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
