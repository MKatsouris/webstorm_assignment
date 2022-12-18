/* code was adapted from in class examples*/
var hoodie = JSON.parse(sessionStorage.selected);

document.getElementById("hoodies").innerHTML += `<h4>${hoodie.name}</h4> \n <h5>${hoodie.color}</h5> \n <p>${hoodie.description}</p> \n <h5>${hoodie.price}</h5> \n  <img src="${hoodie.image}">`;
document.getElementById("addCart").innerHTML += "<input type='button' onclick='addToCart(" + countTshirts  + ")' value='Add to cart'></input>";
alert("Item is added to the cart");
 var jumper = JSON.parse(sessionStorage.selected);

 document.getElementById("jumpers").innerHTML += `<h4>${jumper.name}</h4> \n <h5>${jumper.color}</h5> \n <p>${jumper.description}</p> \n <h5>${jumper.price}</h5> \n  <img src="${jumper.image}">`;

 var Tshirt = JSON.parse(sessionStorage.selected);

 document.getElementById("Tshirts").innerHTML += `<h4>${Tshirt.name}</h4> \n <h5>${Tshirt.color}</h5> \n <p>${Tshirt.description}</p> \n <h5>${Tshirt.price}</h5> \n  <img src="${Tshirt.image}">`;
