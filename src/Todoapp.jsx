//                  CREATING TO-DO APP                  \\



// Importing Required Modules :
import React from 'react';
import { useState } from 'react';

import List from './ItemList'

// Importing Material UI Icons :
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const Todo = () => {
    const [note, updateNote] = useState("")

    const addingNote = (data) => {
        updateNote(data.target.value)
    }

    const [savedNote, savingNote] = useState([])
    const saveNote = () => {
        savingNote((previousValue) => {
            return (
                [...previousValue, note]
            )
        })
        updateNote("")
    }


    const deleteit = (id) => {
        console.log("deleted")

        savingNote((previousValue) => {
            return previousValue.filter((arrayElement, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div id="AppDiv">
                <h1>TO DO LIST</h1>
                <input
                    type="text"
                    placeholder="Add Item"
                    value={note}
                    onChange={addingNote}

                />
                <Button id="btn" variant="contained" onClick={saveNote}> <AddIcon /> </Button>
                <div>
                    <ol>
                        {savedNote.map((value, index) => {
                            return (
                                <List item={value} key={index} idNo={index} onSelect={deleteit} />
                            )
                        })}

                    </ol>
                </div>
            </div>
        </>
    )
}


// Exporting Form Component :
export default Todo;