import React from 'react';
import './Countries.css';

const Countries = (props) => {
    const {picture, budget, country} = props;
    return (
            <div className="col-12 col-lg-4  country-container">
                    <div className="card">
                        <div className="img-container">
                            <img className="img-fluid" src={picture} alt="Country" />
                        </div>
                        <div className="info-container">
                            <h5 className="text-center">{country}</h5>
                            <h6 className="text-center">Budget: $ {budget}</h6>                 
                        </div>
                        <div className="d-flex justify-content-center">
                        <button className="btn btn-success px-5 visit-button">
                        Visit Now 
                        </button>  
                    </div> 
                </div>
            </div>
    );
};

export default Countries;