import React from 'react';

function Card(props){
    return(
        <div className="card">
            <img src={props.card.thumbnail} alt={props.card.country} className="card--thumb"/>
            <div className="card--stats">
                <div className="card--position">
                    <img src="../images/path-icon.png" alt="path icon" className="card--path" />
                    <span className="position-text" >{props.card.country} </span>
                </div>
                <h1>{props.card.attraction}</h1>
                <small>{props.card.startingDate} - {props.card.endDate}</small>
                <p className="card--text">{props.card.description}</p> 
            </div>

        </div>
    )

}

export default Card