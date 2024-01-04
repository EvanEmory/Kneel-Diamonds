import { setMetalChoice } from "./TransientState.js"

const handleMetalOptions = (changeEvent) => {
    if (changeEvent.target.name === "metal") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setMetalChoice(convertedToInteger)
    }
}

// export const metalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()


//  document.addEventListener("change", handleMetalOptions)

//     let metalOptionsHTML= ""
//     for (const metal of metals) {
//             metalOptionsHTML += `<input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}`
    
//     }
// return metalOptionsHTML

// }

export const metalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()
    document.addEventListener("change", handleMetalOptions)
    let optionsHTML = "<h2>Metals</h2>"

    // Use map() to generate new array of strings
    const divStringArray = metals.map(
        (metal) => {
          return `<div>
              <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
          </div>`
        }
    )

    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("")

    return optionsHTML
}
