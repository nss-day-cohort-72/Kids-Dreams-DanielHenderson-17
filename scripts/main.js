import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"


//Assigning the id #container to the variable named mainContainer
const mainContainer = document.querySelector("#container")


//Building the HTML by defining a variable named applicationHTML and setting it to the innerHTML of the id #container
const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML

