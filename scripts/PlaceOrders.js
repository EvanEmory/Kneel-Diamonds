import { saveOrderSubmission } from "./TransientState.js"

const handleOrderSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOrder") {
        
        saveOrderSubmission()
    }
}

export const saveOrder = () => {

    document.addEventListener("click", handleOrderSubmissionClick)

   
    return "<button id='saveOrder'>Place Order</button>"
}