import Footer from "../footer/Footer";
import Header from "../header/Header";
import { LoginContent, LoginHeader, LoginStyled } from "../login/Login.Styled";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { baseUrl } from "../../utils/Services";
import axios from "axios";
import { useParams } from "react-router-dom";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const successToastMessage = (message) => {
  toast.success(message);
};
const UnSubscribe = () => {
  const { subscriberId } = useParams();
  useEffect(() => {
    const unSub = async () => {
      try {
        const unsubscribeUser = await axios.delete(
          `${baseUrl}/subscribers/delete/${subscriberId}`
        );

        if (unsubscribeUser.data) {
          successToastMessage(unsubscribeUser.data);
        }
        successToastMessage("Unsubscribed successfully");
      } catch (err) {
        showToastErrorMessage("Something went wrong please try again later");
        console.log(err);
      }
    };

    if (subscriberId) unSub();
  }, [subscriberId]);

  return (
    <LoginStyled>
      <Header />
      <ToastContainer />
      <LoginContent>
        <LoginHeader>Unsubscribed</LoginHeader>
      </LoginContent>
      <Footer />
    </LoginStyled>
  );
};

export default UnSubscribe;
