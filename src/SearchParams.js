import React from "react";
import { useState, useEffect } from "react";
import { Pet } from "./Pet";
require("babel-core/register");
require("babel-polyfill");

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);//eslint-disable-line react-hooks/exhaustive-deps

  function requestPets() {
    fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
      .then((res) => res.json())
      .then((res) => setPets(res.pets));
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          ANIMAL
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {
              // typically you should not use index as key
              ANIMALS.map((animal, key) => (
                <option key={key}>{animal}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="animal">
          BREED
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {
              // typically you should not use index as key
              BREEDS.map((breed, key) => (
                <option key={key}>{breed}</option>
              ))
            }
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        pets.map((pet) => (
            <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            />
        ))
      }
    </div>
  );
};

export default SearchParams;
