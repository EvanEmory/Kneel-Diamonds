import { setSizeChoice } from "./TransientState.js"

const handleSizeOptions = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSizeChoice(convertedToInteger)
    }
}

export const sizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()


 document.addEventListener("change", handleSizeOptions)

    let sizeOptionsHTML= ""
    for (const size of sizes) {
            sizeOptionsHTML += `<input type='radio' name='size' value='${size.id}' /> ${size.carets}`
    
    }
return sizeOptionsHTML
}