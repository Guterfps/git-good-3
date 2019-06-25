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
if(wisdom===null){
    localStorage.setItem( "wisdom",JSON.stringify(wisdom))
}

    wisdom.push(JSON.parse(localStorage.wisdom).flat())
   

$("#click").click(function(){
    for(let i of wisdom){
    $("ul").append("<li id="+i+">"+$("input").val()+"</li>")
    $("#a"+i).append("<button class='delete'>x</button>")
    }
    wisdom.push({text:$("input").val()})
    if(wisdom.length%2===0){
      
        localStorage.setItem( "wisdom",JSON.stringify(wisdom.flat()))
        
    }
})
let x=JSON.parse(localStorage.wisdom ).flat()
for(let i in x){
$("ul").append("<li id="+i+">"+x[i].text+"</li>")
$("#a"+i).append("<button class='delete'>x</button>")
}

$("#delete").click(function(){
    localStorage.clear()
})

$(".delete").click(function(){
    for(let i of wisdom){
    localStorage.removeItem(this.id)
    }
})