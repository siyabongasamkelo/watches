import { PayPalButtons } from "@paypal/react-paypal-js";
const serverUrl = "http://localhost:5000";

const PaypalPayment = ({ cart, total }) => {
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
    }).then((response) => response.json());
  };

  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
};

export default PaypalPayment;
