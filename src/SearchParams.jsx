import React, { useState, useEffect } from 'react';
import Results from './Results';
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
import useBreedList from './useBreedList';

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [Breeds] = useBreedList(animal);


    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Location" />
                </label>

                <label htmlFor="Animal">
                    Animal
                    <select id="animal"
                        value={animal} onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        >
                        <option /> {/* this is used for default empty option */}
                        {Animals.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="Breed">
                    Breed
                    <select id='breed' value={breed} onChange={(e) => { setBreed(e.target.value) }}
                        disabled={Breeds.length === 0}>
                        <option />
                        {Breeds.map((breed) =>
                            <option key={breed}>{breed}</option>
                        )}
                    </select>
                </label>
                <button>
                    Submit
                </button>
            </form>
            <Results
                pets={pets}
            />
        </div>
    )
}

export default SearchParams;