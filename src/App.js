import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center menu_item_title_var2" style={{ fontSize: '100px' }}>
        Recipe Title
      </Row>
      <Row>
        Content Row 
      </Row>
    </Container>
  );
}

export default App;