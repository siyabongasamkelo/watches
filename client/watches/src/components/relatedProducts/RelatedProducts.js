import {
  RelatedProductCover,
  RelatedProductHeader,
  RelatedProductStyled,
} from "./RelatedProducts.styled";
import ProductCard from "../ProductCard";
import { useQuery } from "react-query";
import { baseUrl, getRequest } from "../../utils/Services";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";

const showToastErrorMessage = (message) => {
  toast.error(message);
};

const RelatedProducts = () => {
  const fetchItems = async () => {
    try {
      const items = await getRequest(`${baseUrl}/item/get?&limit=4`);

      return items?.data;
    } catch (err) {
      console.log(err);
      showToastErrorMessage("there was a problem while fetching items");
    }
  };

  const { data, status } = useQuery("items", fetchItems);

  if (status === "error")
    showToastErrorMessage("there was a problem while fetching items");

  return (
    <RelatedProductStyled>
      <RelatedProductHeader>Related Products</RelatedProductHeader>
      {status === "loading" ? (
        <div
          style={{ height: "30vh" }}
          className=" d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" />{" "}
        </div>
      ) : (
        <RelatedProductCover>
          {data?.items?.map((item) => (
            <ProductCard key={item?._id} isSpaceSmall={true} item={item} />
          ))}
        </RelatedProductCover>
      )}
    </RelatedProductStyled>
  );
};

export default RelatedProducts;
