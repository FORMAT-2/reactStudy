import React from "react";
import {createRoot} from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

const App = () => {
    return (
        <BrowserRouter>
            <h1>Adopt Me!</h1>
            <Routes>
                <Route path="/details/:id" element={<Details/>}/>
                <Route path="/" element={<SearchParams/>}/>
            </Routes>
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Peeper" animal="Bird" breed="cocktaiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
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
