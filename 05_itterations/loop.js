// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
       // console.log("5 is best");
    }

   // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop value : ${i}`);
    
    for (let j = 1; j <=10; j++) {
       // console.log(`inner loop value: ${j} and outer loop value${i}`);
       // console.log(i+'*' + j + '='+ i*j);
        
        
    }
    
}
let myArray = ["flash","Batman","Superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}


// break and continue

for (let index = 0; index <=20; index++) {
    if (index==5){
        console.log(`Detected 5`);
        //break
    }
    console.log(`value of i ${index}`);
    
    
}


