import { App } from "@/App.tsx";
import { store } from "@/store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./styles/index.scss";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
