import React from 'react';
import Card from 'react-bootstrap/Card';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>My Favorite Books</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">This is a collection of my favorite books</Card.Subtitle>
            {this.state.books.length ? (
              <Card.Text>Book Carousel coming soon</Card.Text>
            ) : (
              <Card.Text>No Books Found :(</Card.Text>
            )}
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default BestBooks;



