import React, { useState } from 'react';
import { HaceLista } from './HaceLista';

export const CreaEntrada = props => {

    const ListaHacer = [];


    const [text, setText] = useState(ListaHacer);
    const [putText, setPutText] = useState();

    const handleOnChange = (e) => {
        setPutText(e.target.value);
    }

    const handleClick = () => {
        setText([...text, putText]);
        // setPutText("");

    }



    const borraLista = (identi) => {
        // filtre todo lo que sea diferente que identi
        const newList = text.filter((item, index) => index != identi);
        setText(newList);
        
        // console.log(text.filter((item,index)=> index != identi));

    }

    return (

        <div className="container mt-4">
            <ul style={{listStyle: 'none'}}>
                <HaceLista listaDib={text} borrarLista={borraLista} />
            </ul>


            <>
                <div className="input-group mb-1">
                    <span className="input-group-text" id="basic-addon1">Task To Do</span>
                    <input onChange={handleOnChange} type="text" className="form-control" placeholder="Enter a new task"/>
                </div>

                <div>
                    <button onClick={handleClick} type="button" className="btn btn-primary">Add Task</button>
                </div>
            </>

        </div>
    )

};
