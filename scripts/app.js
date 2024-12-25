
function getInput(id){
    const input = parseFloat(document.getElementById(id).value);
    return input;
}

function setArea(area, calculatedArea){
    const areaSpan = document.getElementById(area);
    areaSpan.innerText = calculatedArea;
}

function calculateTriangle(){
    const base = getInput('triangle-base');
    const height = getInput('triangle-height');

    const triangleArea = .5 * base * height;

    setArea("triangle-area-span", triangleArea);
}

function calculateRectangle(){
    const width = getInput('rectangle-width');
    const lenght = getInput('rectangle-length');

    const rectangleArea = width * lenght;

    setArea('rectangle-area-span', rectangleArea);
}

function calculateParallelogram(){
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-height');

    const parallelogramArea = base * height;

    setArea('parallelogram-area-span', parallelogramArea);
}

function calculateRhombus(){
    const d1 = getInput('rhombus-d1');
    const d2 = getInput('rhombus-d2');
    
    const rhombusArea = .5 * d1 * d2;

    setArea('rhombus-area-span', rhombusArea);
}

function calculatePentagon(){
    const perimeter = getInput('pentagon-perimeter');
    const apothem = getInput('pentagon-apothem');
    
    const pentagonArea = .5 * perimeter * apothem;

    setArea('pentagon-area-span', pentagonArea);
}

function calculateEllipse(){
    const a = getInput('ellipse-a');
    const b = getInput('ellipse-b');
    
    const ellipseArea = (Math.PI * a * b).toFixed(2);

    setArea('ellipse-area-span', ellipseArea);
}