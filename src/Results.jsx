import Pet from './Pet';

const Results= ({pets})=>{
    console.log(pets);
    
    return (
        <div classname = "search">
            {!pets.length?( <h1>No Pets Found</h1>):(
                    pets.map(pet=>(
                        <Pet
                        animal = {pet.animal}
                        breed = {pet.breed}
                        images = {pet.images}
                        name = {pet.name}
                        location = {`${pet.city}, ${pet.state}`}
                        key = {pet.id}

                        />
                    ))
                )
            }
        </div>
    )
}

export default Results;