import "./Main.css";
import React, { useEffect, useState } from 'react';
import Countries from "../Countries/Countries";
import Visit from "../Visit/Visit";

const Main = () => {

    const [countries, setCountries] = useState([]);

    const [visit, setVisit] = useState([]);

    console.log(visit);

    const addToVisit = (props) => {
        if(visit.length < 4){
        setVisit([...visit, props]);
        } else{
            alert("You can only choose 4 countries to visit");
        }
    }

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const country = countries.map(country => {
        return(
            <Countries
                key={country.id}
                {...country}
                addToVisit={addToVisit}
            ></Countries>
        )
    })

    return (
        <div className="row d-flex flex-lg-row flex-column-reverse mt-4 mx-auto">
            <div className="col col-md-9 mt-lg-0 mt-5 country-list">
                <div className="row">
                    {country}
                </div>
            </div>
            <div className="col col-md-3 mx-auto mt-lg-0 mt-4 visiting-list">
                <Visit
                    visit={visit}
                ></Visit>
            </div>
        </div>
    );
};

export default Main;