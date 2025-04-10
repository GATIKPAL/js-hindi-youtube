// Immediately Invoked Function Expression(IIFE)
// global scope se pollution hoti h kai baar toh uss global scope ke jo bhi variables h yah waha ke pollution ko hatane ke liye
// IFE ka use kara h

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
//()() first one is for function defination and second one is for is execution

( (name)=> {
    console.log(`DB CONNECTED two ${name}`);
})('gatik');
