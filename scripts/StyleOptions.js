import { setStyleChoice } from "./TransientState.js"

const handleStyleOptions = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setStyleChoice(convertedToInteger)
    }
}

export const styleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()


 document.addEventListener("change", handleStyleOptions)

    let styleOptionsHTML= ""
    for (const style of styles) {
            styleOptionsHTML += `<input type='radio' name='style' value='${style.id}' /> ${style.style}`
    
    }
return styleOptionsHTML
}