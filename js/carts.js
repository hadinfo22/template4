let productsincart = localStorage.getItem("productsincart")
let allproducts = document.querySelector(".products")
if(productsincart){
    let item = JSON.parse(productsincart) ;
    drawCartProducts(item);
}

function drawCartProducts(products){
    let y = products.map((item) => {
        return `
            <div class="product-item before-after card position-relative col-3 p-0 shadow-lg p-4 mb-4 m-auto bg-white">
          <img src="${item.imageurl}" class="card-img-top px-2 py-2 rounded-circle" style="width: 300px;height:300px;border-radius:50%;" alt="bloom">
          <div class="card-body d-flex-column justify-content-center align-items-center">
            <div class="product-item-description">
              <p class="card-text small n-style text-dark">Product:${item.product}</p>
              <p class="card-text small n-style text-dark">Category:${item.category}</p>
              <p class="card-text small n-style text-dark">Price${item.price} DZD/with mounting</p>
            </div>
            <div class="product-item-action pt-3">
              <a class="add-to-cart btn n-style text-dark gradient-bg-color" onClick="removeFromCart(${item.id})" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove it" href="#">Remove From cart</a>
            </div>
          </div>
          </div> 
            `
    })
    allproducts.innerHTML = y;
}
//////////////////////////////////////////////////////////
function removeFromCart(id){
  let cartsinproducts = localStorage.getItem("productsincart");
  if (cartsinproducts) {
          let  items = JSON.parse(cartsinproducts);
          let index = items.findIndex(i=> i.id === id)
          if (index !== -1) {
              items.splice(index,1)
              localStorage.setItem('productsincart',JSON.stringify(items))
              drawCartProducts(items)
          } 
      }
  }

//////////////////////////////////