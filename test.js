import { produce } from "immer";

//Pure function

const add = (a, b) => a + b;

// console.log(add(2, 5));

//impure function

let total = 0;

const addToTotal = (amount) => (total = total + amount);

// console.log(addToTotal(4));

const updateDate = () => {
  return new Date();
};

// console.log(updateDate());

const randomNumber = () => Math.random() * 10;

// console.log(randomNumber());
// console.log(randomNumber());
// console.log(randomNumber());
// console.log(randomNumber());

const employee = {
  name: "Sojib",
  address: { country: "Bangladesh", city: "Dhaka" },
};

const employee2 = { ...employee, name: "Sojib Hossain", ...employee.address };

const employee3 = produce(employee, (draft) => {
  draft.name = "Ariful";
});

// console.log(employee);
// console.log(employee2);
// console.log(employee3);

//Currying / Function Curry
//Normal
const add1 = (a, b) => a + b;

//Curried
const add2 = (a) => (b) => a + b;

function add3(a) {
  return function (b) {
    return a + b;
  };
}

// console.log(add2(2)(3));

// const totalPrice = (amount, discount) => amount - amount * discount;

const totalPrice = (discount) => (amount) => amount - amount * discount;

const withDiscount = totalPrice(0.3);

console.log(withDiscount(300));
console.log(withDiscount(100));
console.log(withDiscount(200));
