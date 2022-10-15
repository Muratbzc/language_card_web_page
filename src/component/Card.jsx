import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";

const Card = ({ name, img, options }) => {
  const [showImg, setShowImg] = useState(true);
  const change = () => {
    setShowImg(!showImg);
  };
  console.log(name, img, options);
  console.log(showImg);
  return (
    <Container
      onClick={change}
      className="bg-light rounded-2 p-4 h-100 lang-card"
    >
      {showImg ? (
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
          <Image className="lang-logo mb-2" src={img} width={100}></Image>
          <h3>{name}</h3>
        </Container>
      ) : (
        <ul className="h-100 d-flex flex-column justify-content-center ">
          {options.map((item) => {
            return <li className=" h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Card;
