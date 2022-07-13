// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   
    div= document.getElementById("missionTarget");
   div.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${image}">
                    `;
   
}

function validateInput(testInput) {
    if (testInput === "" ) {
        return ("Empty")
    } else if (isNaN(testInput)) {
        return ("Not a Number")
    } else {
        return ("Is a Number")
    };

}
   

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");   
    let copilotStatus= document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoLevelStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    list= document.getElementById("faultyItems");
       //list.style.visibility="visible";
    let result = validateInput(pilot)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!");
            event.preventDefault(); 
            break;
         case "Not a Number":
            pilotStatus.innerHTML=`${pilot} is ready for launch`         
    }
    result = validateInput(copilot)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Is a Number":
            window.alert("Must be a name!"); 
            event.preventDefault();  
        case "Not a Number":
                copilotStatus.innerHTML=`${copilot} is ready for launch`        
    }
    result = validateInput(fuelLevel)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");  
            event.preventDefault(); 
    }
    /*if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML="Fuel level too low for launch";
        launchStatus.style.color="red";
        launchStatus.innerHTML="Shuttle not ready for launch"
    } else {document.getElementById("launchStatus").style.color="green";
    launchStatus.innerHTML="Shuttle is ready for launch"};*/

    result = validateInput(cargoLevel)
    switch (result) {
        case "Empty":
            window.alert("All fields are required!");
            event.preventDefault();
            break;
        case "Not a Number":
            window.alert("Must be a number!");
            event.preventDefault();       
    }
    if (cargoLevel > 10000 ) {
        list.style.visibility = "visible";
        cargoLevelStatus.innerHTML="Too much mass for the shuttle to take off.";
        launchStatus.style.color="red";
        launchStatus.innerHTML="Shuttle not ready for launch"
    } else if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML="Fuel level too low for launch";
        launchStatus.style.color="red";
        launchStatus.innerHTML="Shuttle not ready for launch"
    } else {document.getElementById("launchStatus").style.color="green";
    launchStatus.innerHTML="Shuttle is ready for launch"};
        
    };
    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error ("Planet not found.");
        } else {
            return response.json();
        }

    } )
         return planetsReturned;
        };

    
function pickPlanet(planets) {
    let random = Math.floor(Math.random() *6);
return planets[random];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
