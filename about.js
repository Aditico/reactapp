import React from 'react';
import Card from './card';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about our application or company.</p>
      <Card
        title="Team Member 1"
        image="https://via.placeholder.com/150"
        description="Information about team member 1."
      />
      <Card
        title="Team Member 2"
        image="https://via.placeholder.com/150"
        description="Information about team member 2."
      />
    </div>
  );
}

export default About;
