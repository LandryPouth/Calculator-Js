const calculator = document.querySelector('.container');
const keys = document.querySelector('.buttons');
const displayCalcul = document.querySelector('.calculated span');
const displayResult = document.querySelector('.result span');

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedContentCalcul = displayCalcul.textContent;
    const displayedContentResult = displayResult.textContent;
    
    // if (e.target.matches('button')) {
    //     // console.log('hello');
    // }

    if (!action) {
        if (displayedContentCalcul === "") {
            displayCalcul.textContent = keyContent;
        } else {
            displayCalcul.textContent = displayedContentCalcul + keyContent;
        }
    }

    switch (action) {
        case 'clear':
            displayCalcul.textContent = '';
            displayResult.textContent = '0';
            break;
        case 'exponentiel':
        case 'expo__n':
        case 'racine__square':
            displayCalcul.textContent = Math.sqrt(displayCalcul.textContent, 2);
            break;
        case 'square':
            displayCalcul.textContent = Math.pow(displayCalcul.textContent, 2);
            console.log(sq);
            break;
        case 'multiply':
            displayCalcul.textContent = displayedContentCalcul + '*';
            break;
        case 'divided':
        case 'minus':
        case 'modulo':
        case 'addition':
        case 'open__bracket':
        case 'close__bracket':
            displayCalcul.textContent = displayedContentCalcul + keyContent;
            break;
        case 'decimal':
            if (displayedContentCalcul === '') {
                displayCalcul.textContent = '0' + keyContent
            } else if (!displayedContentCalcul.includes('.')) {
                displayCalcul.textContent = displayedContentCalcul + '.';
            } else {
                displayCalcul.textContent = displayedContentCalcul + keyContent;
            }
            break;
        case 'calculate':
            const definitivResult = eval(displayCalcul.textContent);

            if (displayCalcul.textContent == '') {
                displayResult.textContent = '0';
            } else {
                displayResult.textContent = definitivResult;
            }
            break;
    }





})