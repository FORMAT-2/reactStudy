import { useQuery } from "@tanstack/react-query"
import fetchBreedList from "./fetchBreedList"

export default function useBreedList(animal) {
    // const [breedList, setBreedList] = useState([]);
    // const [status, setStatus] = useState("unloaded");

    // useEffect(() => {
    //     if (!animal) {
    //         setBreedList([])
    //     }
    //     else if (localcache[animal]) {
    //         setBreedList(localcache[animal]);
    //     }
    //     else {
    //         requestBreedList();
    //     }

    //     async function requestBreedList() {
    //         setBreedList([]);
    //         setStatus("loading");

    //         const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    //         const json = await res.json();
    //         localcache[animal] = json.breeds || [];
    //         setBreedList(localcache[animal]);
    //         setStatus("loaded");    
    //     }
    // }, [animal])
    // console.log(breedList);
    // return [breedList, status]

    const results = useQuery({queryKey:["breeds",animal], queryFn:fetchBreedList});
    return [results?.data?.breeds??[], results.status];

    
}