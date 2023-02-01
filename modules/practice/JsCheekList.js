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

// ৬. এইটা আমরা বলিনি--তারপরেও গুগলে সার্চ দিয়ে দেখো: function declaration vs function expression এই দুইটা মধ্যে ডিফারেন্স কি 

// ৭. Arrow function নিয়ে আমরা ফিউচারে শিখবো। এই কোর্স এ ই শিখবো। তারপরেও গুগলে সার্চ দাও: regular function vs arrow function

// ৮. ফাংশন এবং লুপ এর মধ্যে পার্থক্য কি 

// ৯. অবজেক্ট এবং array এর মধ্যে ডিফারেন্স কি  

// ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান পাওয়া যেতে পারে? 

// ১১. ১০. কতভাবে অবজেক্ট থেকে কোন একটা প্রপার্টি এর মান বের করা যেতে পারে? 

// ১২. (এডভান্সড) একটু কোড লিখে অবজেক্ট এর সব প্রপার্টি এর নাম এবং মান আউটপুট হিসেবে দেখাও। 