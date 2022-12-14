import Header from "./component/Header";
import Main from "./component/Main";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="text-center mt-4 p-4">
      <Header />
      <Main />
    </Container>
  );
}

export default App;
