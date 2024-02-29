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
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { CartContextProvider } from "./context/CartContext";
import { CheckOutContextProvider } from "./context/CheckOutContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalPayPage from "./pages/PayPalPayPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

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

  const initialOptions = {
    clientId: process.env.REACT_APP_PAYPAL_CLIENTID,
    currency: "USD",
    intent: "capture",
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
        <Route path="/paypalpay" element={<PayPalPayPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset/:userId/:token" element={<ResetPasswordPage />} />
        <Route path="/*" element={<HomePage />} />
      </Route>
    )
  );
  return (
    <>
      <ErrorBoundary>
        <PayPalScriptProvider options={initialOptions}>
          <CheckOutContextProvider>
            <CartContextProvider>
              <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                  <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <RouterProvider router={router} />
                  </ThemeProvider>
                </QueryClientProvider>
              </AuthContextProvider>
            </CartContextProvider>
          </CheckOutContextProvider>
        </PayPalScriptProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
