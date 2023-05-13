import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ContextProvider from "utils/ContextProvider";
import Home from "pages/Home";

import "index.css";
import "utils/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </QueryClientProvider>
);
