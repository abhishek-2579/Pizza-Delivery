import React from 'react';
import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

// Import your pizza image (update the path accordingly)
import pizzaBackground from '../images/pizza-stock.jpg';

function Home() {
  const username = useSelector((state) => state.user.username);

  const backgroundImageStyle = {
    backgroundImage: `url(${pizzaBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '300%',
    height: '100vh', // Ensures that the background covers the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Set text color to white for better visibility
  };

  return (
    <div style={backgroundImageStyle}>
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-black-500">Straight out of the oven, straight to you.</span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
