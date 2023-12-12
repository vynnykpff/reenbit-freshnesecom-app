import { PersistGate } from "redux-persist/integration/react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { App } from "./App.tsx";
import { Notification, Preloader } from "@/components/UI";
import "./styles/index.scss";
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Notification />
    <PersistGate loading={<Preloader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
