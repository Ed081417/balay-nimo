import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBarTop() {
  return (
    <>
      <Navbar className="bg-danger p-3">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home">Balay Nimo</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

function App() {
  return (
    <>
      <NavBarTop />

      <Container className="mt-3">
        <Row>
          <Col className="border border-2" sm={4}>sm=4</Col>
          <Col className="border border-2" sm={8}>sm=8</Col>
        </Row>
      </Container>
    </>
  )
}

export default App;