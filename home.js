import React from 'react';
import Card from './card';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our website!</h1>
      <Card
        title="Featured Item"
        image="https://via.placeholder.com/150"
        description="This is the featured item we want to showcase."
      />
    </div>
  );
}

export default Home;
