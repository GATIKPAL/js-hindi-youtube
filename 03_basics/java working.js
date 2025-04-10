// java execution context
/* 

{}= Global EC => this ke andar rakh diya jata h
javascript is single threaded , everything is a process in it

Global execution context
functional execution context
eval execution context

{}- runs in two phase 
1) memory creation phase/creation phase => jo bhi declare kara h unke liye jagah allocate hoti h 
2) execution phase => yaha excute hota h
*/



let val1= 10
let val2= 5
function addnum(num1,num2){
    let total = num1 + num2
    return total
}
let result1= addnum(val1,val2)
let result2 = addnum(10,2)

/*  
1) global execution => this


2) memory execution phase
val1 = undefined
val2 = undefined
addnum = defination
result1= undefined
result2 = undefined


3) execution phase
val1 <= 10
val2 <= 5
addnum => -------------------
          |  new environment  |
          |    variable       |
          |       +           |
          |   execution       |
          |    thread         |
          |                   |
          --------------------
so again these two phase happen memory phase and execution phase
jitni baar bhi fucntion ayega utni baar sandbox banega and yeh dono phase execute honge gloabl toh ek baar ho chuka woh duabra nhi hoga



*/



