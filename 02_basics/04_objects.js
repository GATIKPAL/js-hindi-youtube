// const tinderUser = new Object() // give empty object only // diff yeh h ki yeh ek songleton object h
const tinderUser = {} // and yeh non singleton object h

tinderUser.id = "123abc "
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)// {} is optional but its good to add

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 1,
        email: "h@gmail.com"

    },
    {
        id: 1,
        email: "h@gmail.com"

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor:insrtructor} = course

console.log(insrtructor);

const navbar = ({company}) => {

}
navbar(company = "hitesh")


//{
//    "name": "hitesh",
//    "coursename": "js in hindi",
//    "price": "free"
//}

{
    
}
