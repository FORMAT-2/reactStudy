import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import fetchSearch from './fetchSearch';
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
import useBreedList from './useBreedList';

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location:"",
        animal:"",
        breed:""
    })
    // const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    // const [pets, setPets] = useState([]);
    const [Breeds] = useBreedList(animal);

    const results = useQuery({queryKey:["search", requestParams], queryFn:fetchSearch})
    const pets = results?.data?.pets ?? [];
    // useEffect(() => {
    //     requestPets();
    // }, []);

    // async function requestPets() {
    //     const res = await fetch(
    //         `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    //     );
    //     const json = await res.json();
    //     setPets(json.pets);
    // }

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal:formData.get("animal") ?? "",
                    breed:formData.get("breed") ?? "",
                    location:formData.get("location") ?? "",
                }
                setRequestParams(obj);
            }}>
                <label htmlFor="location">
                    Location
                    <input
                    name='location'
                    id='location'
                    placeholder='Location'
                    />
                </label>

                <label htmlFor="Animal">
                    Animal
                    <select id="animal"
                        value={animal} onChange={(e) => {
                            setAnimal(e.target.value);
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
                    <select id='breed'name='breed'
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