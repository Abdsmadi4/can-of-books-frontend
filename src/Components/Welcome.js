import Card from 'react-bootstrap/Card';
import LoginButton from './Login';
function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Card.Text>
          Click Below To Log In
        </Card.Text>
        <LoginButton />
      </Card.Body>
    </Card>
  );
}

export default BasicExample;