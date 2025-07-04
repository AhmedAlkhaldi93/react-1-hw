"use client";

import { useState } from 'react';

import styles from '@/components/destination/destination.module.css';
import { PlanetWishlistItem } from '@/components/destination/PlanetWishlistItem';
import {Planet} from '@/components/planetCard/PlanetCard';


export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);

  let isPlanetSelected = false;
  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name, index) => {
    const isAlreadySelected = selectedPlanets.includes(name);
    if(isAlreadySelected){
      const updated = selectedPlanets.filter(planet => planet !== name);
      onAddPlanet(updated);
    }else {
    onAddPlanet([...selectedPlanets, name]);
    }
    console.log(`You selected the following planet: ${name}, with the index of ${index}`);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets === 0 ? (<p>No planets in wishlist :</p>) : (<p>You have {numberOfPlanets} planet(s) in your wishlist.</p>)}
          <p>You have {numberOfPlanets} in your wishlist</p>
          <b>List coming soon after lesson 3!</b>
          
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          <Planet
          name="Europa"
          description="Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers."
          thumbnail="image-europa.png"
          isSelected={selectedPlanets.includes("Europa")}
          onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
          
          <Planet
          name="Moon"
          description="Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers."
          thumbnail="image-moon.png"
          isSelected={selectedPlanets.includes("Moon")}
          onAddOrRemovePlanet={onAddOrRemovePlanet}
          />

          <Planet
          name="Mars"
          description="Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth."
          thumbnail="image-mars.png"
          isSelected={selectedPlanets.includes("Mars")}
          onAddOrRemovePlanet={onAddOrRemovePlanet}
          />

          <Planet
          name="Titan"
          description="Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets."
          thumbnail="image-titan.png"
          isSelected={selectedPlanets.includes("Titan")}
          onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        </section>
      </main>
    </div>
  );
}

export default Destinations;
