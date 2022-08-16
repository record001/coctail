let off = "./images/cart/toggle.svg"
let on = "./images/cart/toggle_on.svg"
let logic = false

let toggle =document.querySelector("#toggle")

toggle.addEventListener("click", e=> {
        logic = !logic


        e.target.src= logic ?  off : on
})