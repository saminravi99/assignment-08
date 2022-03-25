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
                    {random === -1 ? visitingCountries : 
                    <div className="row mt-4 w-100 align-items-center">
                        <div className="col-4 d-flex justify-content-end ">
                            <img className="img-fluid visit-img " src={getRandomCountry.picture} alt="" />
                        </div>
                        <div className="col-4 text-center">
                            <h6 >{getRandomCountry.country}</h6>
                        </div>
                        <div className="col-4 ">
                            <i class="fa-solid fa-plane-departure"></i>
                        </div>
                    </div>
                    }
                </div>
                <div className="d-flex flex-column align-items-center btn-div ms-5">
                    <button onClick={chooseRandom} className="btn btn-primary px-5 py-2 mb-4">Vsit A Country <i class="fa-solid fa-earth-americas ms-2 "></i> </button>
                    <button onClick={clearList}className="btn btn-danger py-2 px-5">Choose Again <i class="fa-solid fa-clipboard-list ms-2"></i></button>
                </div>

            </div>
            
        </div>
    );
};

export default Visit;