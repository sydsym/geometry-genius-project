let value1, value2, area;
function getInput(input1, input2){
    value1 = parseFloat(document.getElementById(input1).value);
    value2 = parseFloat(document.getElementById(input2).value);
}

function setArea(areaHolder){
    const areaContainer = document.getElementById(areaHolder);
    areaContainer.innerText = area;
}

function calculateArea(){
    // const triangleBase = parseFloat(document.getElementById("triangle-base").value);
    // const triangleHeight = parseFloat(document.getElementById("triangle-height").value);
    getInput("triangle-base", "triangle-height");

    area = .5 * value1 * value2;

    // const triangleArea = document.getElementById("area-holder");
    // triangleArea.innerText = area;

    setArea("area-holder");
}