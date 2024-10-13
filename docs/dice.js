let sides;

document.getElementById('numberOfDices').addEventListener('change', (event) => {
    let element = document.getElementById('dices');
    element.innerHTML = '';
    var numberOfDices = event.target.value;
    console.log('Creating ' + numberOfDices + ' dices...')
    for (let i = 0; i < numberOfDices; i++) {
        let section = document.createElement('section');
        section.setAttribute('id', 'dice' + i);
        element.appendChild(section);
        console.log(section)
    }
});

document.getElementById('dicetype').addEventListener('change', (event) => {
    updateDicetype(event.target.value);
    //document.getElementById('chosentype').innerHTML = event.target.value;
    //console.log('Chosen dice type is: ' + this.sides)
    //this.sides = event.target.value
});

function roll() {
    let element = document.getElementById('numberOfDices');
    var numberOfDices = element.value;
    console.log('Rolling ' + numberOfDices + ' dices of type D' + this.sides)
    for (let i = 0; i < numberOfDices; i++) {
        result = Math.floor(Math.random() * this.sides) + 1;
        console.log('Dice ' + i + ' rolled ' + result)
        document.getElementById('dice' + i).innerHTML = result;
    }
}

function updateDicetype(type) {
    this.sides = type;
    console.log('Chosen dice type is: ' + this.sides)
}

window.addEventListener('load', function() {
    updateDicetype(this.document.getElementById('dicetype').value);
    document.getElementById('numberOfDices').value = 0;
});