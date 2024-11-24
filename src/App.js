import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
function App() {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        Header Row
      </Row>
      <Row>
        Content Row 
      </Row>
    </Container>
  );
}

export default App;
{/* <Card className='d-flex justify-content-center'>
        <Card.Title className='menu_item_title_var2' style={{ fontSize: '100px' }}>
          Yummy Juice
        </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card> */}