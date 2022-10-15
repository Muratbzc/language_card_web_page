import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import image from "../assets/react.svg";

const Header = () => {
  return (
    <Container>
      <Image src={image} width={250} />
    </Container>
  );
};

export default Header;
