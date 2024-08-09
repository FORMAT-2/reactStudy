const fetchPet = async({queryKey})=>{
    const id = queryKey[1];
    if(!id){
        throw new Error('id not found')
    }
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    
    if(!apiRes.ok){
        throw new Error(`details/${id} not ok`);
    }

    return await apiRes.json();
}

export default fetchPet;