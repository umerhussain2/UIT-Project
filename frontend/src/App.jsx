import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Public Compo/Checkout";
import Error from "./components/Error";
import Header from "./Header/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Dashboard from "./components/Admin Compo/Dashboard";
import OrdersList from "./components/Admin Compo/OrdersList";
import OrdersDetail from "./components/Admin Compo/OrdersDetail";
import Cart from "./components/Public Compo/Cart";

import { AuthProvider } from "./context/Context";
import { ProtectedRoute } from "./context/auth/ProtectedRoute";

import store from "./store/Store";
import { Provider } from "react-redux";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ToastContainer />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="productdetails/:id"
                element={
                  <ProtectedRoute>
                    <ProductDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="orderslist"
                element={
                  <ProtectedRoute>
                    <OrdersList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="ordersdetail"
                element={
                  <ProtectedRoute>
                    <OrdersDetail />
                  </ProtectedRoute>
                }
              />
              <Route
                path="cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </>
  );
}

export default App;
