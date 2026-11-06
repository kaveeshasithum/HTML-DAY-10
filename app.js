// console.log("Hello, World!");
// {
//     var customername ="saman";
//     let address = "kandy";
//     console.log(address);
// }
// console.log(customername);
// consle.log(address);
// const address = "colombo";
// address = "galle";
// const number=[10,20,30];
// console.log(number);
// numbers="he";
// console.log(numbers);

const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(number[6]);
number[number.length-1]=110;
console.log(number);
number.push(120);
console.log(number);
number.pop();
console.log(number);
console.log(number.toReversed());

console.log(number.toSorted());
console.log(number);
number.unshift(5);
console.log(number);
number.shift();

console.log(number);
function clickButton() {
    const element = document.getElementById("elementId").value;
    const index = document.getElementById("indexId").value;
    number[index] = element;
    console.log(number);
}