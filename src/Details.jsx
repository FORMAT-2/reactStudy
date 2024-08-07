import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from './ErrorBoundary';
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
    const { id } = useParams();
    
    const results = useQuery({queryKey:["details",id], queryFn:fetchPet});
    console.log(results);
    // console.log({data:pet});
    
    if(results.isLoading){
        return(
            <div className="loading-pane">
                <h2 className="loader">
                    loading..........
                </h2>
            </div>
        )
    }

    const pet = results.data.pets[0];
    return (
        <div className="details">
            <Carousel images= {pet.images}/>
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    )
}

function DetailsErrorBoundary(props){
    return(
        <ErrorBoundary>
            <Details {...props}/>
            </ErrorBoundary>
    )
}
export default DetailsErrorBoundary;