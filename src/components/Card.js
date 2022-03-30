import React from 'react';

function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.card.thumbnail} alt={props.card.country} className="card--thumb"/>
            <div className="card--stats">
                <div className="card--position">
                    <img src="../images/path-icon.png" alt="path icon" className="card--path" />
                    <p className="position-text" >{props.card.country}  <span className="google-text">View on Google Map</span></p>
                </div>
                <h1 className="card--name">{props.card.attraction}</h1>
                <small className="card--date">{props.card.startingDate} - {props.card.endDate}</small>
                <p className="card--text">{props.card.description}</p>
            </div>
        </div>
        <hr className="line" />
        </>
    )

}

export default Card