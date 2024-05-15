cartdata= JSON.parse(localStorage.getItem("cart-data"))
console.log(cartdata)

cartdata.forEach(function(ele){
var container = document.getElementById("container");
var card = document.createElement("div");

//  var name = document.createElement("h1")
//  name.innerText = ele.name

var username = docvarument.createElement("h2")
username.innerText = ele.username

var email = document.createElement("h3"); 
email.innerText = ele.email

var btn = document.createElement("button")
btn.innerText = "Remove"

btn.addEventListener("click",function(){
// storeDatainCart(ele)
})

card.append( username ,email,btn )
container.append(card)

})