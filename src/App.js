import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center menu_item_title_var2" style={{ fontSize: '100px' }}>
        Recipe Title
      </Row>
      <Row className="p-4">
        <Col lg={4}>Left Side Container</Col>
        <Col>Right Side Container</Col>
      </Row>
    </Container>
  );
}

export default App;