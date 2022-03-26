import React from 'react';
import './Visit.css';

const Visit = (props) => {
    
    const {visit, chooseRandom, random, clearList, removeCountry} = props;
    
    const visitingCountries = visit.map((country, index) => {
        return(
            <div key={index} className="row mt-4 w-100 align-items-center">
                <div className="col-4 d-flex justify-content-end ">
                    <img className="img-fluid visit-img " src={country.picture} alt="" />
                </div>
                <div className="col-4 text-center">
                    <h6 >{country.country}</h6>
                </div>
                <div className="col-4 ">
                    <i onClick={() => removeCountry(props.visit, index)} className="fa-solid fa-trash font-awesome "></i>
                </div>
            </div>
        )
    })

    const getRandomCountry = visit[random];

    return (
        <div className="visit-container">
            <div className="mt-4 visit-card">

                <h2 className="text-center pt-4">Select Countries</h2>
                <div className="d-flex flex-column align-items-center">
                    {visitingCountries}

                    <div className="modal fade" id="exampleModal" tabIndex="-1"                             aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center" id="exampleModalLabel">{getRandomCountry ? "Congratulations! Have A Safe Journey!" : 
                                "Sorry! But You Have Not Chosen Any Countries"}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                 { getRandomCountry ?
                                        <div className="row mt-4 w-100 align-items-center gx-0">
                                            <div className="col-4 d-flex justify-content-end ">
                                                <img className="img-fluid modal-img " src={getRandomCountry?.picture} alt="" />
                                            </div>
                                            <div className="col-4 text-center">
                                                <h2 >{getRandomCountry?.country}</h2>
                                            </div>
                                            <div className="col-4 ">
                                                <i className="fa-solid fa-plane-departure modal-icon"></i>
                                            </div>
                                        </div> 

                                        : null
                                } 
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>

                   
                    
                </div>
                <div className="d-flex flex-column align-items-center btn-div ms-5">
                    <button 
                    onClick={() => chooseRandom (random, getRandomCountry)} 
                    className="btn btn-primary px-5 py-2 mb-4" 
                    type="button" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal"
                    data-bs-backdrop="false"
                    >
                        Visit A Country <i className="fa-solid fa-earth-americas ms-2 "></i> 
                    </button>

                    <button onClick={clearList} className="btn btn-danger py-2 px-5" >Choose Again <i className="fa-solid fa-clipboard-list ms-2"></i></button>
                </div>

            </div>
            
        </div>
    );
};

export default Visit;