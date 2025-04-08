
// var c = 300

if (true) {
    let a =10
    const b = 20
    var c = 30
}
//console.log(a);
//console.log(b);
//console.log(c); // yeh print ho raha h


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); give error as website scope is not there
    
    two()

}
one()

