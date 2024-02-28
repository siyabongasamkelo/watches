import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { CheckOutContext } from "../../context/CheckOutContext";
import { baseUrl, postRequest } from "../../utils/Services";
import { toast } from "react-toastify";

const serverUrl = "http://localhost:5000";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};

const PaypalPayment = ({ cart, total, saveOrder }) => {
  const { userData, billingAddress, shippingAddress } =
    useContext(CheckOutContext);

  const saveOrderData = async (data) => {
    try {
      const orderData = {
        orderId: data.orderID,
        buyerDetails: userData,
        billingAddress,
        shippingAddress,
        items: cart,
        total,
        status: "pending",
      };

      const saveOrder = await postRequest(`${baseUrl}/order/create`, orderData);
      successToastMessage(saveOrder?.data?.data);
    } catch (err) {
      console.log(err);
      showToastErrorMessage("Something went wrong please try again later");
    }
  };

  let orderId;
  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    return fetch(`${serverUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart,
        total,
      }),
    })
      .then((response) => response.json())
      .then((order) => (orderId = order.id));
  };

  const onApprove = async (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${serverUrl}/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        saveOrderData(data);
      });

    //my fuction for saving the order on the database
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalPayment;
