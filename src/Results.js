/* eslint-disable react/prop-types */
import { Pet } from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-44 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}.${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
