  // while 
   
let index = 0
while(index<=10){
    //console.log(`value of index is ${index}`);
    index = index + 2
}


// do while
let score =11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);


//for of

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//maps

const map =new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","India")
console.log(map);

for (const [key, value]  of map) {
    console.log(key, ':-',value);
    
}

const myObject ={
    'game1':'NFS',
    'game':'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key, ':-',value);//myObject itterable nhi h
}
