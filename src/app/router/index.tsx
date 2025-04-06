import App from "app/App";
import AboutPage from "pages/about";
import MainPage from "pages/main";
import ProductPage from "pages/product";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);
