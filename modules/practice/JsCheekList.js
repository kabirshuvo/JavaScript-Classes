//বেসিক জাভাস্ক্রিপ্ট চেকলিস্ট 

// ১. আমি যদি বলি তিনটা ভেরিয়েবল ডিক্লেয়ার করতে হবে। সেটা তোমাকে পারতে হবে। 
const firstName = 'Kabir';
const lastName = 'Shuvo';
const fullName = firstName + " " + lastName;
//console.log(fullName)

// ২. একটা লুপ লিখতে হবে যেটা ১ থেকে ১০০ পর্যন্ত যত সংখ্যা আছে সেটা দেখাবে 
for(i = 1; i <= 100; i++){
    //console.log(i)
}

// ৩. ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে। 
for (i = 50; i <= 80; i++){
    if(i % 2 !==0){
        //console.log(i)
    }
}

// ৪. তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
function add(a, b, c){
    console.log(a + b + c);
}

//add(100, 200, 300);


// ফাংশন আর অবজেক্ট একটু রিভিশন দিয়ে দাও  

// ১. ফাংশন কি জিনিস। এইটা কি কাজে লাগে এবং কিভাবে ফাংশন ডিক্লেয়ার করতে হয় 
function reuseableFunction(){
    console.log("This is a reuseable Function");
}
//reuseableFunction();

// ২. ফাংশনে কেন প্যারামিটার ব্যবহার করা হয় 
function parameterInFunction(){
    console.log("A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.")
}
//parameterInFunction();

// ৩. কেন ফাংশন থেকে রিটার্ন করা হয় 
//The return statement is used to return a particular value from the function to the function caller. The function will stop executing when the return statement is called.

// ৪. রিটার্ন এর পর কিছু না লিখলে কি হয় 
//If no return statement appears in a function definition, control automatically returns to the calling function after the last statement of the called function is executed.

// ৫. রিটার্ন এর পর কি কি জিনিস লেখা যায় 
// it not work, The return statement should be the last statement in a function because the code after the return statement will be unreachable. We can return primitive values (such as Boolean, number, string, etc.) and Object types (such as functions, objects, arrays, etc.) by using the return statement.

// ৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি 
//The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.

// ৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: regular function vs arrow function
//Regular functions created through function declarations / expressions are both constructible and callable. ... Arrow functions (and methods) are only callable i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি 
//Just as a loop is an embodiment of a piece of code we wish to have repeated, a function is an embodiment of a piece of code that we can run anytime just by calling it into action. A given loop construct, for instance could only be run once in its present location in the source code.

// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি  
//Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.

// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে? 
//You can access the properties of an object in JavaScript in 3 ways:
/**
 * Dot property accessor: object. property.
 * Square brackets property accessor: object['property']
 * Object destructuring: const { property } = object.
 */
// ১১. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 

//1. Dot property accessor:
const hero = {
    name: 'Sakib Khan',
    age: 39,
    sex: NaN
}
console.log(hero.name, hero.age, hero.sex);

//2. Square brackets property accessor: object['property']
console.log(hero["name"], hero["age"] );

//Object destructuring: 
const { name, age, sex } = hero;
//const { age } = hero;
//const { sex } = hero;
console.log(name, age, sex);

//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 

//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 