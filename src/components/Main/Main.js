import "./Main.css";
import React, { useEffect, useState } from 'react';
import Countries from "../Countries/Countries";
import Visit from "../Visit/Visit";

const Main = () => {

    const [countries, setCountries] = useState([]);

    const [visit, setVisit] = useState([]);

    const [random, setRandom] = useState(-1);

    console.log(random);

    // console.log(visit);

    //Function to Add the visitng Countries

    const addToVisit = (props) => {
        let newVisit = []

        let exist = visit.find(country => country.country === props.country);

        if(visit.length >= 4){
            alert("You can only choose 4 countries to visit");
            newVisit = [...visit];

        } else if (!exist) {
            newVisit = [...visit, props];
        } else {
            alert("You have already chosen this country");
            visit.filter(country => country.country !== props.country);
            newVisit = [...visit];
        }

        
        setVisit(newVisit);
    }

    // Function to choose random countries from the visiting countries array

    const chooseRandom = () => {
        let random = Math.floor(Math.random() * visit.length);
        setRandom(random);
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

    //Function to clear the list of visiting countries

    const clearList = () => {
        setVisit([]);
        setRandom(-1);
    }


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
                    chooseRandom={chooseRandom}
                    random={random}
                    clearList={clearList}
                ></Visit>
            </div>
        </div>
    );
};

export default Main;