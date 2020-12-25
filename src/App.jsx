//                  COMPILING ALL COMPONENTS IN THIS COMPONENT                  \\
/*
            Material UI :
                Material Design is a design language that Google developed in 2014.
                 Material Design uses more grid-based layouts, responsive animations
                  and transitions, padding, and depth effects such as lighting and shadows.
            
            Installing Material UI :
                We can add material UI in our Project with the Help of NPM (Node Package Manager).
                 Just Type 'npm install @material-ui/core' , with the help of this Installation ,
                  we can use the Material UI Icons , Fonts , Templets ETC.
            *** In order to use Pre built SVG Icons of Material UI use the Following method :
                    Type 'npm install @material-ui/icons' , after install you can use all the Material UI SVG Icons
                     as a Element. AS :
                                        Find any ICON From "https://material-ui.com/components/material-icons/" ,
                                         After finding the requried Icon , Import it in the Component and use as a Element.
                                          For Example :- Importing Search icon As 'import SearchIcon from '@material-ui/icons/Search';'
                                                            Use it as '<SearchIcon/>'
*/


    // Importing Requried Modules :
import React from 'react';
    // Importing Hooks's Hodule (UseState) :
import { useState } from 'react';

    // Importing Components ;
import Todo from './Todoapp';
import Copy from './Copyright';

    // Imorting CSS :
import './index.css'



// Creating the App Component :
const App = () => {
        
    // Rendring :
    return (
        <>
            <div id="MainDiv">
            <Todo/>
            </div>
            <Copy/>
        </>
    )
};


        // Exporting App Component :
export default App;