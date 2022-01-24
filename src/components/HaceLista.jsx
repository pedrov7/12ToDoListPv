import React , {useState} from 'react';

export const HaceLista = ({listaDib,borrarLista}) => {
        // console.log(listaDib);

    // const [sendAction, setSendAction] = useState('none');


    const handleErase = (e) =>{
        const identi = e.target.name;
        borrarLista(identi);

    }

    const handleCheckBox = (e) =>{

        let identificador = document.getElementById(e.target.name);

        // console.log(identificador);

        e.target.checked ?
        identificador.style.textDecoration = 'line-through':
        identificador.style.textDecoration = 'none';

        // if(e.target.checked){
        //     identificador.style.textDecoration = 'line-through';
        // }
        // else{
        //     identificador.style.textDecoration = 'none';
        // }


    }    



    const drawTask = (item,key) => {       
        return (
            <li>
            <label htmlFor = {key} id = {key}>{item}</label>
            <input onClick = {handleCheckBox} className="form-check-input" type="checkbox" name={key} aria-label="..." />
            <button onClick = {handleErase} name = {key} type="button" className="btn btn-dark">Erase</button> 
            </li>
            )
    }

    return (

        <>
            {listaDib.map((item,key) => drawTask(item,key))}
        </>
    )
};
