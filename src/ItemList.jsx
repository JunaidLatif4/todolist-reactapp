import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const List = (props) => {
    const [linee, updateLine] = useState({})
    const cutit = () => {
        updateLine({ textDecoration: "line-through", textDecorationColor: "red" })

    }
    return (
        <>
            <div id="ListDiv">
                <span
                onClick={() => { props.onSelect(props.idNo) }}
                // onClick={cutit} 
                >
                    <DeleteIcon id="Delbtn" />
                </span>
                <list id="list" style={linee}> {props.item} </list>
            </div>
        </>
    )
}

export default List;