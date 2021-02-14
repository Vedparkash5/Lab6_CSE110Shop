// Script.js
myStorage = window.localStorage;
window.addEventListener('DOMContentLoaded', bob);  
 
async function bob() {
  if (myStorage === null) {
    const response = await fetch (' https://fakestoreapi.com/products');
    const jsonw = await response.json();
    bot = JSON.stringify(jsonw);
    myStorage.setItem('array', bot);
  }
}; 

arr =  myStorage.getItem('array') ;
bob = JSON.parse(arr);
for (const a in bob) {
  var u = document.createElement('product-item');
  u.shadowRoot.querySelector('img').src =this.image;
  
}
