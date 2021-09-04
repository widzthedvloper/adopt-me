import React from 'react';
import { useState } from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
    const [location, setLocation] = useState("Seattle, WA")
    const [animal, setAnimal] = useState("")

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input 
                      id="location" 
                      onChange={e => setLocation(e.target.value)} 
                      value={location} 
                      placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    ANIMAL
                    <select
                        id="animal"
                        value = {animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            // typically you should not use index as key
                            ANIMALS.map((animal, key) => <option key={key}>{animal}</option>)
                        }
                    </select>
                
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams
