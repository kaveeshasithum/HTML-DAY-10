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

// const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(number[6]);
// number[number.length-1]=110;
// console.log(number);
// number.push(120);
// console.log(number);
// number.pop();
// console.log(number);
// console.log(number.toReversed());

// console.log(number.toSorted());
// console.log(number);
// number.unshift(5);
// console.log(number);
// number.shift();

console.log(number);
function clickButton() {
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
}

// //step 1: method
// function getsum(num1,num2){
//     return num1+num2;

// }
// //step 2: method call
// let getsum=function(num1,num2){
//     return num1+num2;
// }
// //step 3: method call
// let getsum=(num1,num2)=>{
//     return num1+num2;
// }
// //step 4: method call
// let getsum=num1=>{
//     return num1;
// }
// //step 5: method call
// let getsum=num1=>num1;

// console.log(getsum(10,20));

//---------------------------------------------------------------------------
// const nameList =["saman","nimal","kamal","amal"];
// nameList.forEach(cName=>console.log(cName));

//-----------------------------------------------
// const empSalary=[75000,30000,25000,40000,60000];
// const empSalary2=[];
// empSalary.forEach((salary)=>empSalary2.push(salary*2));
// console.log(empSalary2);

// const nameList =["saman","nimal","kamal","amal"];
// const nameList2=nameList.map(name=>`WELCOME ${name}`);
// console.log(nameList2);
const productList=[
    {id:1,
        name:"bun",
        price:100
    },
    {id:2,
        name:"milk",
        price:200
    },
    {id:3,
        name:"bread",
        price:300
    },
    {id:4,
        name:"eggbun",
        price:400
    },
    {id:5,
        name:"Rice",
        price:1000
    },
    {id:6,
        name:"Kottu",
        price:1200
    },
    {id:7,
        name:"Icecream",
        price:700
    },
      {id:8,
        name:"eggbun",
        price:400
    }
    
]

const productList2=productList.map(product=>product.price=product.price+product.price*20/100);
console.log(productList2);

