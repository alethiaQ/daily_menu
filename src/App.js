// import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  return (
    <Container fluid>
      <Row>
        <Card bg={'primary'} style={{ width: '18rem'}} >
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default App;
{/* <Card bg={'danger'} border="dark" style={{ width: '18rem' }}>
<Card.Body>
 <Card.Title>Card Title</Card.Title>
 <Card.Text>
   Some quick example text to build on the card title and make up the
   bulk of the card's content.
 </Card.Text>
</Card.Body>
</Card> */}