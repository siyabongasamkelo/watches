import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";
import PreviewItemPage from "./pages/PreviewItemPage";
import AddItemPage from "./pages/AddItemPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./context/AuthContext";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  const theme = {
    light: {
      primary: "#ac7d88;",
      secondary: " #fdf0d1",
      tetiary: "#85586F",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(0, 0, 0, 0.8)",
    },
    size: {
      small: "13px",
      medium: "17px",
      large: "22px",
      extraLarge: "32px",
    },
  };

  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:itemId" element={<PreviewItemPage />} />
        <Route path="/add/item" element={<AddItemPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <ToastContainer />
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
