/*function calcAverage(scores){
    return scores / 3;
}
calcAverage(20 ,10, 30);
console.log (calcAverage);
*/
const calcAverage = (a, b, c) => (a + b + c) /3;
console.log(calcAverage (20, 10, 30));

// Test 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log ('avgDolphins: ' + scoreDolphins ,'avgKoalas: ' + scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins win  🏆 ${avgDolphins} vs ${avgKoalas}`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win 🏆 ${avgKoalas} vs ${avgDolphins}`);
    }else{
        console.log ('No team wins.....');
    }
}
//checkWinner(scoreDolphins, scoreKoalas);

checkWinner ( 576, 111);

// TEST 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log ('avgDolphins: ' + scoreDolphins, 'avgKoalas: ' +scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// OBJECTS chapter 42....
/*
const patsArray = [
    'Patrick',
    'George',
    2022 - 1945,
    'retiredJudge',
    ['Frederic', 'Kuppusamy', 'George']
];
console.log(patsArray);
*/

/*
const patrick = {
    firstName: 'Patrick',
    lastName: 'George',
    age: 2022 - 1945,
    job: 'retiredJudge',
    friends: ['Frederic', 'Kuppusamy', 'George']
};
console.log(patrick);

console.log(patrick.lastName);// Dot notation

console.log(patrick['job']);// Bracket notation

const nameKey = 'Name';
console.log(patrick['first' + nameKey]);
console.log(patrick['last' + nameKey]);

const interestedIn = prompt
('What do you want to know about Patrick? Choose between firstname, lastname, age, job and friends');

if (patrick[interestedIn]){
console.log(patrick [interestedIn]);
}else{
    console.log('Wrong request! Choose between firstname, lastname, age, job and friends');
}

patrick.location = "Pondicherry";
patrick['email'] = 'patric.ravi@gmail.com';

console.log(patrick);

// Challenge
// "Patrick has 3 friends, 
//and his best friend is called Frederic."

console.log(`${patrick.firstName} has ${patrick.friends.length} friends and 
his best friend is called ${patrick.friends[0]}`);
*/

// Chapter 44 jonas js
// Object Methods
/*
const patrick = {
    firstName: 'Patrick',
    lastName: 'George',
    birthyear: 1945,
    job: 'retiredJudge',
    friends: ['Frederic', 'Kuppusamy', 'George'],
    hasDriversLicense: true,

    // calcAge: function(birthyear){
        // return 2022 - birthyear;
    // }

    // calcAge: function(){
        // console.log(this);
        // return 2022 - this.birthyear;
    // }

    calcAge: function(){
        this.age = 2022 - this.birthyear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `
    }
};

console.log('Patricks age is',patrick.calcAge());
// console.log('Patricks age now is',patrick['calcAge'](1945));
console.log('Patricks age is',patrick.age);
console.log('Patricks age is',patrick.age);
console.log('Patricks age is',patrick.age);
console.log('Patricks age ',patrick.age);

// Challenge
// "Patrick is 77-year old retired
// judge,and he has a/no driver's license"
console.log(patrick.getSummary());
*/

// Coding challenge #3 chapter 45 Jonal JS
/*
const Mark ={
    fullName : 'mark miller',
    mass :70,
    height : 1.69,

    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
    
};
console.log(Mark.calcBMI());

const John ={
    fullName : 'John Smith',
    mass :100,
    height : 1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
    
};
console.log(John.calcBMI());

if (Mark.BMI > John.BMI){
    console.log (`$(Mark.fullName) BMI (${Mark.BMI}) is higher than John's BMI (${John.BMI})`)

}else{
    console.log (`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI})`)
}
*/

// FOR LOOP
/*
console.log(`Lifting weights repetition 1 🏋️‍♂️ `);
console.log(`Lifting weights repetition 2 🏋️‍♂️ `);
console.log(`Lifting weights repetition 3 🏋️‍♂️ `);
console.log(`Lifting weights repetition 4 🏋️‍♂️ `);
console.log(`Lifting weights repetition 5 🏋️‍♂️ `);
console.log(`Lifting weights repetition 6 🏋️‍♂️ `);
console.log(`Lifting weights repetition 7 🏋️‍♂️ `);
console.log(`Lifting weights repetition 8 🏋️‍♂️ `);
console.log(`Lifting weights repetition 9 🏋️‍♂️ `);
console.log(`Lifting weights repetition 10 🏋️‍♂️ `);
*/
/*
// for loop keeps running while condition is true
for (let rep = 1; rep <=10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}


const pats = [
    'Patrick',
    'George',
    2022 - 1945,
    'retiredJudge',
    ['Frederic', 'Kuppusamy', 'George']
];
const types =[];
for (let i = 0;i < pats.length; i++){

    // reading from pats array
    console.log(pats[i], typeof pats[i]);

    // filling types array
    //types[i] = typeof pats[i];
    types.push(typeof pats [i]);
}
console.log(types);

const years =[1991, 2007, 1969, 2020];
const ages =[];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

// CONTINUE AND BREAK
console.log('........ONLY STRINGS......');
for (let i = 0;i < pats.length; i++){
    if (typeof pats[i] != 'string') continue;
    console.log(pats[i], typeof pats[i]);

}

// BREAK WITH NUMBER
console.log('........ONLY STRINGS......');
for (let i = 0;i < pats.length; i++){
    if (typeof pats[i] === 'number') break;
    console.log(pats[i], typeof pats[i]);

}
*/
/*
const pats = [
    'Patrick',
    'George',
    2022 - 1945,
    'retiredJudge',
    ['Frederic', 'Kuppusamy', 'George']
];

//0, 1,.......4
// 4, 3,.......0
for(let i = pats.length -1; i>=0 ; i--){
    console.log(i, pats[i]);
}

for(let exercise =1; exercise < 4; exercise++){
    console.log(`----------Starting exercise ${exercise}`);

    for(let rep =1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}
*/
// WHILE LOOP
/*
for (let rep = 1; rep <=10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
*/
let rep =1;
while(rep <=10){
    //console.log(`WHILE :Weight Lifting exercise ${rep} 🏋️‍♂️` );
    rep++;
}

let dice = Math.trunc(Math.random() *6) +1;
//console.log(dice);
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice= Math.trunc(Math.random()*6)+1;
    if (dice === 6){
        console.log('Loop is about to end....');
    }
}

