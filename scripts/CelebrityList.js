import { getCelebrities } from "./database.js";

//Here when i call the getCelebrities function to get the array of celebrity objects I set it as the definition of the variable celebrities
const celebrities = getCelebrities(); 


                                    //this executes when the click occurs
document.addEventListener("click", (clickEvent) => {

    //Sets the element that was clicked to a variable named celebrityTarget
    const celebrityTarget = clickEvent.target;

    //This checks if the element typed has a data-type named data-type="celebrity"
    if (celebrityTarget.dataset.type === "celebrity") {
        //Here I set the data-sport to a variable named celebritySport
        const celebritySport = celebrityTarget.dataset.sport;
        //Taking the value of data-id and setting it to an integer and assigning it to a variable named celebrityID
        const celebrityId = parseInt(celebrityTarget.dataset.id);
        //Here I iterate through the list of celebrities to find the one with the matching ID
        for (const celebrity of celebrities) {
            //if the celebrity.id in the database matches the variable we created above do the following...
            if (celebrity.id === celebrityId) {
                //get that celebrities name from database an assign it to a variable named celebrityName
                const celebrityName = celebrity.name;
                //creating a window alert with the returned data
                window.alert(`${celebrityName} is a ${celebritySport} star`);
                return;
            }
        }
    }
});


export const Celebrities = () => {
    let html = "<ol>";

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`;
    }

    html += "</ol>";
    return html;
};
