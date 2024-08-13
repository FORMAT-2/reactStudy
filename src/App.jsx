import React from "react";
import { Link } from "react-router-dom";
import {useState} from 'react';
import {createRoot} from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Pet from "./Pet";
import AdoptPetContext from "./AdoptPetcontext";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import react from "react";

const queryClient =  new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:Infinity,
            cacheTime:Infinity
        }
    }
})

const App = () => {
    const adoptPet = useState(null);
    return (
        <BrowserRouter>
        <QueryClientProvider client = {queryClient}>
            <AdoptPetContext.Provider value={adoptPet}>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/" element={<SearchParams/>}/>
            </Routes>
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Peeper" animal="Bird" breed="cocktaiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
            </AdoptPetContext.Provider>
            </QueryClientProvider>

        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root =createRoot(container);
root.render(<App/>);

// const App = () => {
//     return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet,{
//         name:"Luna",
//         animal:"Dog",
//         breed:"Havanese"
//     }),
//     React.createElement(Pet,{
//         name:"Peeper",
//         animal:"Bird",
//         breed:"cocktaiel"
//     }),
//     React.createElement(Pet,{
//         name:"Doink",
//         animal:"Cat",
//         breed:"Mixed"
//     })
//     ]);

// }
