import { useParams, useNavigate} from "react-router-dom";
import { useState, useContext} from 'react';
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from './ErrorBoundary';
import AdoptPetContext from "./AdoptPetcontext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";

const Details = () => {
    const [showModal, setShowmodal] = useState(false);
    const navigate = useNavigate();
    const [_, setAdoptedPet] = useContext(AdoptPetContext);
    const { id } = useParams();

    const results = useQuery({ queryKey: ["details", id], queryFn: fetchPet });
    console.log(results);
    // console.log({data:pet});

    if (results.isLoading) {
        return (
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
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
                    <button onClick={() => setShowmodal(true)}>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {pet.name} ?</h1>
                                    <div className="buttons">
                                        <button onClick={()=>{
                                            setAdoptedPet(pet);
                                            navigate("/");
                                        }
                                        }>Yes</button>
                                        <button onClick={() => setShowmodal(false)}>NO</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </h2>
            </div>
        </div>
    )
}

function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}
export default DetailsErrorBoundary;