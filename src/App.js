import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LeftSideContainer } from './containers/LeftSideContainer';
import { RightSideContainer } from './containers/RightSideContainer';
function App() {
  return (
    <Container fluid className="recipe_text_color recipe_background_color">
      <Row className="justify-content-center menu_item_title_var2" style={{ fontSize: '100px' }}>
        Yummy Juice
      </Row>
      <Row className="p-4">
        <Col lg={4}>
          {/* Left side Container */}
          <LeftSideContainer />
        </Col>
        <Col>
          {/* Right Side Container */}
          <RightSideContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;