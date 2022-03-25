//use local storage to save data


// Adding Products to Local Storage
let visitingCountry;

const addToDb = (id) => {

    if(localStorage.getItem("visiting-country")){
        visitingCountry = JSON.parse(localStorage.getItem("visiting-country"));
    }else{
        visitingCountry = {};
    }

    if(!visitingCountry[id]){
        visitingCountry[id] = 1;
    }else{
        visitingCountry[id] = visitingCountry[id] + 1;
    }

    localStorage.setItem("visiting-country", JSON.stringify(visitingCountry));
}


// Removing Products from Local Storage

const removeFromDb = (id) => {
    if(localStorage.getItem("visiting-country")){
        visitingCountry = JSON.parse(localStorage.getItem("visiting-country"));
    }else{
        visitingCountry = {};
    }

    if(visitingCountry[id] > 1 && visitingCountry[id]){
        visitingCountry[id] = visitingCountry[id] - 1;
    }
    else{
        delete visitingCountry[id];
    }

    localStorage.setItem("visiting-country", JSON.stringify(visitingCountry));
}

const clearCountry = () => {
    localStorage.removeItem("visiting-country");
}


//Loading Visiting Countries from Local storage

const getStoredCountry = () => {
    if(localStorage.getItem("visiting-country")){
        visitingCountry = JSON.parse(localStorage.getItem("visiting-country"));
    }else{
        visitingCountry = {};
    }
    return visitingCountry;
}

export {
    addToDb,
    getStoredCountry,
    clearCountry,
    removeFromDb
}

