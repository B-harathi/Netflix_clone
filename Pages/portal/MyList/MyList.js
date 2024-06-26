import React from 'react';
import { useSelector } from 'react-redux';
import './MyList.css';
import Card from '../../../components/Card/Card';

const MyList = () => {
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div className="my-list-container">
      <h1>My List</h1>
      {wishlist.length === 0 ? (
        <p>Your list is empty. Add some movies to get started!</p>
      ) : (
        <div className="my-list-grid">
          {wishlist.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;