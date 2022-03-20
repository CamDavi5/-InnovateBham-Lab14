import React from 'react';

const GhibliPerson = (props) => {
    return (
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.age}, {props.gender}</p>
                    <a target="_blank" href={props.url} class="btn btn-primary">Go to JSON Source</a>
                </div>
            </div>
        </div>
    );
}

export default GhibliPerson;