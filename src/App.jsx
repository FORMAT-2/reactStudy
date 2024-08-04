import React from "react";
import {createRoot} from "react-dom/client";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Peeper" animal="Bird" breed="cocktaiel" />
            <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
            <SearchParams />
        </div>
    )
}

const container = document.getElementById('root');
const root =createRoot(container);
root.render(React.createElement(App));

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
