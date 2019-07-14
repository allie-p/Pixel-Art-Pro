// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizeForm = document.getElementById('sizePicker'); // height, width



// When size is submitted by the user, call makeGrid()
function makeGrid() {

    // get the table element
    const canvas = document.getElementById('pixelCanvas');
    // reset grid
    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }


    var width = sizeForm.width.value;
    var height = sizeForm.height.value;
    console.debug(width);
    console.debug(height);
    
    // create grid with height and width inputs
    for(y = 0; y < height; y++) {
        row = canvas.appendChild(document.createElement('TR'));
        for(x = 0; x < width; x++) {
            cell = row.appendChild(document.createElement('TD'));
        }
    }

    canvas.addEventListener('click', changeColor);

}

function changeColor(event) {
    // make sure border is not being clicked
    if(event.target.matches('td')) {
        event.target.style.backgroundColor = colorPicker.value;
    } else {
        console.debug('border click');
    } 
}
