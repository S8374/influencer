const items = document.getElementsByClassName('li-items');

// console.log(items.length);

// const myArray = Array.from(items);
// console.log(myArray);


for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.style.color = 'green';
    element.innerText = 'change my innertext ';
    console.log(element);
}