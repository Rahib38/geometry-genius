function calculateRectangleArea(){
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    const weightInput = document.getElementById('rectangle-weight');
    const weightText = weightInput.value;
    const weight = parseFloat(weightText);
    console.log(weight);

    const area = weight * length;
    console.log('area of the rectangle: ',area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    
}
