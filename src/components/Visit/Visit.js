import React from 'react';
import './Visit.css';

const Visit = (props) => {
    const {visit} = props;
    const visitingCountries = visit.map(country => {
        return(
            <div className="row mt-4 w-100 align-items-center">
                <div className="col-4 d-flex justify-content-end ">
                    <img className="img-fluid visit-img " src={country.picture} alt="" />
                </div>
                <div className="col-4 text-center">
                    <h6 >{country.country}</h6>
                </div>
                <div className="col-4 ">
                    <i class="fa-solid fa-trash font-awesome "></i>
                </div>
            </div>
        )
    })
    return (
        <div className="visit-container">
            <div className="mt-4 visit-card">

                <h2 className="text-center pt-4">Select Countries</h2>
                <div className="d-flex flex-column align-items-center">
                    {visitingCountries}
                </div>
                <div className="d-flex flex-column align-items-center btn-div mx-5">
                    <button className="btn btn-primary px-5 mb-4">Choose 1 Country To Visit</button>
                    <button className="btn btn-danger px-5">Choose Again</button>
                </div>

            </div>
            
        </div>
    );
};

export default Visit;