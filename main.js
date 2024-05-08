//Define the API object
const customizationOption = {
    // method to set the background color
    setBackgroundColor:(color)=>{
        document.body.style.background = color;
    },
    
    // method to set the font family
    setFontFamily:(font)=>{
        document.body.style.fontFamily = font;
    },
    // method to set the font size
    setFontSize:(size)=>{
        document.body.style.fontSize = size + 'px';
    },
}

// events listeners for user interaction
document.getElementById('colorpicker').addEventListener('input', (event)=>{
    customizationOption.setBackgroundColor(event.target.value)
})
document.getElementById('fontFamily').addEventListener('change', (event)=>{
    customizationOption.setFontFamily(event.target.value)
    document.getElementById('value').innerHTML = event.target.value
})
document.getElementById('fontSize').addEventListener('input', (event)=>{
        customizationOption.setFontSize(event.target.value)
        })
        const displaycontainer = document.getElementsByTagName('body');
        displaycontainer.textContent = customizationOption

