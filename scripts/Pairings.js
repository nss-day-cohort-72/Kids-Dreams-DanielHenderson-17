import { getChildren, getCelebrities } from "./database.js";


//calling the getChildren function to retrieve the array of kid objects and stores them in a variable named kids
const kids = getChildren();
//calling hte getCelebrities function to retrieve the array of celebrity objects and stores them in a variable named celebrities
const celebrities = getCelebrities();


const findCelebrityMatch = (kidObject, celebrityArray) => {

    let celebrity = null;

    //Iterates through the array of celebrities to find the one with a matching ID
    for (const star of celebrityArray) {
        //Checks if the kids' celebrityID in the database matched the current celebrity ID and if so stores the celebrity in a variable named celebrity
        if (kidObject.celebrityId === star.id) {
            celebrity = star;
        }
    }
    //return the matched celebrity from above
    return celebrity;
};

export const Pairings = () => {
    let html = "";
    html = "<ul>";

    //Iterates through the kid object to create a list item with their star
    for (const kid of kids) {
        //finds the celebrity with the current kid in the list
        const kidsStar = findCelebrityMatch(kid, celebrities);
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `;
    }

    html += "</ul>";

    return html;
};
