import React, { useState } from 'react';

const Rating = ({ movieId }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    // TODO: Send rating to backend if needed
  };

  return (
    <div>
      <span>Rate this movie: </span>
      {[1,2,3,4,5].map(num => (
        <button
          key={num}
          style={{ color: rating >= num ? 'gold' : 'gray' }}
          onClick={() => handleRate(num)}
        >★</button>
      ))}
    </div>
  );
};

export default Rating;