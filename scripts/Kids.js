import { getChildren } from "./database.js";

//Here I call the getChildren function to get the array of child objects and set it to the variable named "children"
const children = getChildren();

                                    //this executes when the click occurs
document.addEventListener("click", (clickEvent) => {

    //Sets the element that was clicked on to a variable named kidTarget
    const kidTarget = clickEvent.target;
    
    //This checks if the element typed has a data-type named data-type="child"
    if (kidTarget.dataset.type === "child") {
        //Here I set the data-wish to a variable named kidWish
        const kidWish = kidTarget.dataset.wish;
        //Taking the value of data-id and setting it to an integer and assigning it to a variable named kidId
        const kidId = parseInt(kidTarget.dataset.id);
        //Here I iterate through the list of children to find the one with the matching ID
        for (const child of children) {
            //if the child.id in the database matched the variable we created then do the following...
            if (child.id === kidId) {
                //take that kids name and assign it to a variable named kidName
                const kidName = child.name;
                //creating a window alert with the returned data
                window.alert(`${kidName} wishes to ${kidWish}`);
                
                return;
            }
        }
    }
});

export const Kids = () => {
    let html = "<ol>";

    for (const child of children) {
        html += `<li 
                    data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">
                    ${child.name}
                </li>`;
    }

    html += "</ol>";
    return html;
};


