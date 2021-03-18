// Execution context, hoisting & scope

//creation phase, global context
// sayHello()
// var nama = 'adit'as

// //creation phase, function context
// function sayHello(){    
//     console.log(`Hello ${nama}, apa kabar`)
// }
// console.log(sayHello())

// var name = "adityaqudaedah"
// var username = "@adityaqudaedah"

// function printURL(username){
//     var instagramURL = "http://instagram.com/"
//     return instagramURL + username
// }

// console.log(printURL("adityaqudaedah"))

function This() {
    console.log("This")

    function is (){
        console.log("Is");
        
        function me() {
            console.log("me")
        }
        me()
    }
    is()
}
This()