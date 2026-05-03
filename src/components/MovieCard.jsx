import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';

function MovieCard({ titre, description, posterURL, note }) {
  return (
    <Card className="movie-card">
      <div className="image-container">
        <Card.Img variant="top" src={posterURL} />
        <span className="rating-badge">⭐ {note}</span>
      </div>

      <Card.Body>
        <Card.Title className="movie-title">{titre}</Card.Title>
        <Card.Text className="movie-description">
          {description}
        </Card.Text>

         
      </Card.Body>
    </Card>
  )
}

export default MovieCard