const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}



export const setMetalChoice = (metalChoice) => {
transientState.metalId = metalChoice
console.log(transientState)

}
// Functions to modify each property of transient state
export const setSizeChoice = (sizeChoice) => {
transientState.sizeId = sizeChoice
console.log(transientState)
}

export const setStyleChoice = (styleChoice) => {
    transientState.styleId = styleChoice
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveOrderSubmission = async () => {
const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
}


const response = await fetch("http://localhost:8088/orders", postOptions)
}