import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <img src={props.flags} alt="" />
            <p>{props.region}</p>
        </div>
    );
};

export default Country;