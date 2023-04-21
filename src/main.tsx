import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Main from "./pages/main";
import RestaurantDetail from "./pages/restaurantDetail";
import Search from "./pages/search";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/search/:value",
        element: <Search />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
