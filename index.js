const currValue = document.querySelector('#counter');
function decrement(){
    let value = parseInt(currValue.innerText);
    value = value - 1;
    currValue.innerText = value;
};

function increment(){
    let value = parseInt(currValue.innerText);
    value = value + 1;
    currValue.innerText = value;
};
console.log(currValue);