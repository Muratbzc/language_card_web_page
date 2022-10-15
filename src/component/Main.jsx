import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Card from "./Card";
import { data } from "../helper/data";

const Main = () => {
  console.log(data);
  return (
    <Container className="bg-warning p-4 rounded-4">
      <h1 className="text-white p-2">Language</h1>

      <Row className="g-5 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Card {...lang} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Main;
