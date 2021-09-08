import React from "react";
import { useState, useEffect, useContext } from "react";
import { useBreedList } from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

require("babel-core/register");
require("babel-polyfill");

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  function requestPets() {
    fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
      .then((res) => res.json())
      .then((res) => setPets(res.pets));
  }

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label className="search-label" htmlFor="location">
          location
          <input
            className="search-control"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label className="search-label" htmlFor="animal">
          ANIMAL
          <select
            className="search-control"
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
        <label className="search-label" htmlFor="breed">
          BREED
          <select
            className="search-control disabled:opacity-50"
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {
              // typically you should not use index as key
              breeds.map((breed, key) => (
                <option key={key}>{breed}</option>
              ))
            }
          </select>
        </label>
        <label className="search-label" htmlFor="theme">
          Theme
          <select
            className="search-control"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Mediumorchid</option>
          </select>
        </label>
        <button className="rounded px-6 py-2 text-white hover:opacity-50 border-none" style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
