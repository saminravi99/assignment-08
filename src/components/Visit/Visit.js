import React from 'react';
import './Visit.css';

const Visit = () => {
    return (
        <div >
            <div className="mt-4 visit-card">

                <h2 className="text-center pt-4">Select Countries</h2>

                <div className="d-flex flex-column align-items-center btn-div mx-5">
                    <button className="btn btn-primary px-5 mb-4">Choose 1 Country To Visit</button>
                    <button className="btn btn-danger px-5">Choose Again</button>
                </div>

            </div>
            
        </div>
    );
};

export default Visit;