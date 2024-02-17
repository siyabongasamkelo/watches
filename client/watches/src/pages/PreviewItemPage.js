import Footer from "../components/footer/Footer";
import PreviewItem from "../components/previewItem/PreviewItem";
import { Container } from "react-bootstrap";

const PreviewItemPage = () => {
  return (
    <Container>
      <PreviewItem />
      <Footer />
    </Container>
  );
};

export default PreviewItemPage;
