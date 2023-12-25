import React from 'react';
import './Card.css';

//printa na tela as inf pegas pelo CardList
const Card = ({name, email, id })  => {
    return(
        //              cor          width borda padding margem animação  
        <div id='Card' className=' dib br3   pa3     ma2    grow     bw2 shadow-5 '>
            <img alt='robots' src={`https://robohash.org/a${id}?100x100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;