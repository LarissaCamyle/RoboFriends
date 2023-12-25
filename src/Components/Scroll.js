import React from "react";

const Scroll = (props) => {
    return(
        //retornar um estilo de CSS
        <div style={{overflowY: 'scroll', border: '2px solid rgba(255, 255, 255, 0.10)',height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;