import React from 'react';

const GhibliFilm = (props) => {
    return (
        <div class="col-sm-6">
            <div class="card">
                <img class="card-img-top" src={props.image} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default GhibliFilm;