import "./Main.css";
import React, { useEffect, useState } from 'react';
import Countries from "../Countries/Countries";
import Visit from "../Visit/Visit";
import { addToDb, clearCountry, getStoredCountry, removeFromDb } from "../../utilities/localStorage";

const Main = () => {

    const [countries, setCountries] = useState([]);

    const [visit, setVisit] = useState([]);


    const [random, setRandom] = useState(-1);

    //Function to Add the visiting Countries

    const addToVisit = (props) => {
        let newVisit = []

        let exist = visit.find(country => country.country === props.country);

        if(visit.length >= 4){
            alert("You can only choose 4 countries to visit");
            newVisit = [...visit];

        } else if (!exist) {
            newVisit = [...visit, props];
            addToDb (props.id);

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


    //Retrieve the visiting countries from the local storage

    useEffect(() => {
        const storedCountry = getStoredCountry();
            for (const id in storedCountry) {
                const addedCountry = countries.find(country => country.id === id);
                if(addedCountry){
                        setVisit(prevCountry => [...prevCountry, addedCountry]);
                }
            }
    }, [countries]);

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
        clearCountry();
    }


    //Function to remove a country from the list of visiting countries

    const removeCountry = (visit, index) => {
        let newVisit = [...visit];
        newVisit.splice(index, 1);
        setVisit(newVisit); 
        removeFromDb(visit[index].id);       
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
                    removeCountry={removeCountry}
                ></Visit>
            </div>
        </div>
    );
};

export default Main;