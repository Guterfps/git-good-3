localStorage.age = 10
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

localStorage.userStorage = JSON.stringify(userStorage)
const cart = JSON.parse(localStorage.userStorage)
console.log(userStorage.cart[1].count)

const wisdom = []

if (localStorage.wisdom) {
    wisdom.push(JSON.parse(localStorage.wisdom).flat())
}else{localStorage.setItem("wisdom", JSON.stringify(wisdom))}

$("#click").click(function () {
    wisdom[0].push({ text: $("input").val() })
    for (let i of wisdom) {
        $("ul").append("<li class='i' id=" + i + ">" + $("input").val() + "</li>")
    }

    if (wisdom[0].length % 2 === 0) {

        localStorage.setItem("wisdom", JSON.stringify(wisdom.flat()))

    }
})
let x = JSON.parse(localStorage.wisdom).flat()
for (let i in x) {
    $("ul").append("<li class='i' id=" + i + ">" + x[i].text + "</li>")
}
$(".i").append("<button class='delete'>x</button>")
$("#delete").click(function () {
    localStorage.clear()
})

$(".delete").click(function () {
    let y
    for( let i in wisdom[0]){
     y = wisdom[0][this.closest("#").id]
    }
    localStorage.removeItem(y)

})