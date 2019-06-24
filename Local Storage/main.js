localStorage.age=10
console.log(localStorage.age)

let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

localStorage.userStorage=JSON.stringify(userStorage)
const cart=JSON.parse(localStorage.userStorage)
console.log(userStorage.cart[1].count)

const wisdom=[]

$("button").click(function(){
    $("ul").append("<li>"+$("input").val()+"</li>")
    wisdom.push({text:$("input").val()})
    if(wisdom.length%2===0){
        
        localStorage.wisdom=JSON.stringify(wisdom || "[]")
        
    }
})
let x=JSON.parse(localStorage.wisdom || "[]")
for(let i in x){
$("ul").append("<li>"+x[i].text+"</li>")
}