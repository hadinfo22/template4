///// hidding of Sign In and Sign Up - activate of Sign Out 
let userinfo = document.getElementById("user-info");
let user = document.getElementById("user");
let linkloginregister = document.getElementById("linkloginregister");
let divinfo = document.querySelector(".div-info");

if (localStorage.getItem("username")){
    linkloginregister.remove()
    divinfo.style.visibility ="visible"
    user.innerHTML = localStorage.getItem("username")
}


/// Processing Sign Out
signout=document.getElementById("sign-out")

signout.addEventListener("click",function()
{
    localStorage.clear();
    setTimeout(() => {
    window.location = "login.html";
},1500)
})
/////////////////////////
let allproducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        product:"Conicals",
        category:"Bloom",
        price:50000,
        imageurl:"images/bloom1.jpg"
    },
    {
        id: 2,
        product:"Leaves",
        category:"Leaf",
        price:45000,
        imageurl:"images/leaf1.jpg"
    },
    {
        id: 3,
        product:"Formations",
        category:"Crystalline",
        price:60000,
        imageurl:"images/crystalline1.jpg"
    },
    {
        id: 4,
        product:"Gentelles",
        category:"Flux",
        price:60000,
        imageurl:"images/flux1.jpg"
    },
    {
        id: 5,
        product:"Ripples",
        category:"Sand & Sea",
        price:50000,
        imageurl:"images/sand-sea1.jpg"
    },
    {
        id: 6,
        product:"Strawberry Leaves",
        category:"Sculpture",
        price:45000,
        imageurl:"images/sculpture1.jpg"
    }
    ]

     function drawItems (){
        let y = products.map((item) => {
            return(`
            <div class="product-item before-after card position-relative col-3 p-0 shadow-lg p-4 mb-4 m-auto bg-white">
          <img src="${item.imageurl}" class="card-img-top px-2 py-2 rounded-circle" style="width: 300px;height:300px;border-radius:50%;" alt="${item.category}">
          <div class="card-body d-flex-column justify-content-center align-items-center">
            <div class="product-item-description">
              <p class="card-text small n-style text-dark">Product:${item.product}</p>
              <p class="card-text small n-style text-dark">Category:${item.category}</p>
              <p class="card-text small n-style text-dark">Price:${item.price} DZD/with mounting</p>
            </div>
            <div class="product-item-action pt-3">
              <button type="submit" class="add-to-cart btn n-style text-dark gradient-bg-color" onClick="addToCart(${item.id})" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add it" href="#">Add to cart</button>
              <button type="submit" class="btn btn-outline-none position-relative m-3" style="width:30px;height:30px;" onClick="favoritelight(${item.id})"><i class="fa-solid fa-heart position-absolute z-1 translate-middle" ></i><i class="fav fa-solid fa-heart position-absolute translate-middle" style="color:rgb(133, 88, 29)"></i></button>
                    </div>
                </div>
            </div>`
    )
        })
        allproducts.innerHTML = y;
    }
    drawItems ()
//////////////////////////////////////////////
    let cartproductdiv = document.querySelector(".carts-products div")
    let badge = document.querySelector(".badge")
    let totalprice=document.querySelector("#carts-total")
    let totalp=0
    
    let addeditem = localStorage.getItem("productsincart") ? JSON.parse(localStorage.getItem("productsincart")) : [];
   if(addeditem) {
    addeditem.map(item => {
        cartproductdiv.innerHTML += `<p><img src="${item.imageurl}" class="card-img-top px-2 py-2 rounded-circle" style="width:50px;height:50px;border-radius:50%;" alt="${item.product}"><span>${item.product}</span></p>`;
        totalp+=+(`${item.price}`)
        totalprice.innerHTML=totalp
   })   
   if(totalp>0){
    badge.style.display="block";
    badge.innerHTML = addeditem.length;
   }   
     }

            function addToCart(id){
                if(localStorage.getItem("username")){
                let choosenitem = products.find((item) => item.id === id );
                cartproductdiv.innerHTML += `<p><img src="${choosenitem.imageurl}" class="card-img-top px-2 py-2 rounded-circle" style="width:50px;height:50px;border-radius:50%;" alt="${choosenitem.product}"><span>${choosenitem.product}</span></p>`;
                totalp+=+(`${choosenitem.price}`)
                totalprice.innerHTML=totalp
                addeditem = [...addeditem , choosenitem]
                localStorage.setItem("productsincart" , JSON.stringify(addeditem) )
                let cartproductslength=document.querySelectorAll(".carts-products div p")
                badge.style.display="block"
                badge.innerHTML=(cartproductslength.length)
            }
            else {
           alert("To Purchase, Log In To Your Account First.")     
           window.location ="login.html"
        }
        }

   ///////////////////////////////////////////////////////////////// 
   
   let addedfavor = localStorage.getItem("filefavor") ? JSON.parse(localStorage.getItem("filefavor")): [];
   let favor = document.querySelectorAll(".fa-heart")
   

   if (addedfavor){       
    addedfavor.forEach(element => {
        if(element.id==1){
            favor[0].style.display="none"
            favor[1].style.display="block"
        }else if(element.id==2){
            favor[2].style.display="none"
            favor[3].style.display="block"

        }else if(element.id==3){
            favor[4].style.display="none"
            favor[5].style.display="block"

        }else if(element.id==4){
            favor[6].style.display="none"
            favor[7].style.display="block"
        
        }else if(element.id==5){
            favor[8].style.display="none"
            favor[9].style.display="block"
        
        }else if(element.id==6){
            favor[10].style.display="none"
            favor[11].style.display="block"
        }
        
    })
        
    }
  
function favoritelight(id){    
     if(localStorage.getItem("username")){   
            let favitem=products.find((item) => item.id===id)       
    if(favor.length/id==12){
        if(favor[0].style.display!="none"){
            favor[0].style.display="none"
            favor[1].style.display="block"            
    
            addedfavor = [...addedfavor,favitem]
            
        }else{
            favor[0].style.display="block"
            favor[1].style.display="none"            
            let index = addedfavor.findIndex((item) => item.id===favitem.id)            
            addedfavor.splice(index,1)           
        }

    }else if(favor.length/id==6){
        if(favor[2].style.display!="none"){
            favor[2].style.display="none"
            favor[3].style.display="block"
                
            addedfavor = [...addedfavor,favitem]
            

        }else{
            favor[2].style.display="block"
            favor[3].style.display="none"
            let index = addedfavor.findIndex((item) => item.id===favitem.id)            
            addedfavor.splice(index,1) 
        }
        }else if(favor.length/id==4){
            if(favor[4].style.display!="none"){
                favor[4].style.display="none"
                favor[5].style.display="block"
        
                addedfavor = [...addedfavor,favitem]
                              
            }else{
                favor[4].style.display="block"
                favor[5].style.display="none"
                let index = addedfavor.findIndex((item) => item.id===favitem.id)            
                addedfavor.splice(index,1) 
            }
    }else if(favor.length/id==3){
        if(favor[6].style.display!="none"){
            favor[6].style.display="none"
            favor[7].style.display="block"
    
            addedfavor = [...addedfavor,favitem]                
        }else{
            favor[6].style.display="block"
            favor[7].style.display="none"
            let index = addedfavor.findIndex((item) => item.id===favitem.id)            
            addedfavor.splice(index,1) 
        }
}else if(favor.length/id==2.4){
    if(favor[8].style.display!="none"){
        favor[8].style.display="none"
        favor[9].style.display="block"

        addedfavor = [...addedfavor,favitem]                
    }else{
        favor[8].style.display="block"
        favor[9].style.display="none"
        let index = addedfavor.findIndex((item) => item.id===favitem.id)            
        addedfavor.splice(index,1) 
    }
}else if(favor.length/id==2){
    if(favor[10].style.display!="none"){
        favor[10].style.display="none"
        favor[11].style.display="block"

        addedfavor = [...addedfavor,favitem]                
    }else{
        favor[10].style.display="block"
        favor[11].style.display="none"
        let index = addedfavor.findIndex((item) => item.id===favitem.id)            
        addedfavor.splice(index,1) 
    }
}    
}else {
    alert("To Purchase, Log In To Your Account First.")     
    window.location ="login.html"
 }
 localStorage.setItem("filefavor",JSON.stringify(addedfavor)) 
}
   
    ////////////////////////////////////////
    let shoppingcarticon = document.querySelector(".shopping-cart")
    let cartsproducts = document.querySelector(".carts-products")
    
    shoppingcarticon.addEventListener("click", opencart)

    function opencart(){
     if(cartproductdiv.innerHTML !=""){
         if(cartsproducts.style.display=="block"){
            cartsproducts.style.display="none"
         }else {
            cartsproducts.style.display="block"
         }
     } 
}
///////////////////////////////////////////////////////

let searchtype = document.getElementById("searchtype")
let namecategory = document.getElementById("namecategory")
let searchbtn = document.getElementById("searchbtn")



 searchbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let searchitem = []
    if (searchtype.value === "" || namecategory.value === ""){
        alert("Please Fill Data.")
    }else {
        if (searchtype.value === "category") {
            products.map((item) => {
                if (item.category === namecategory.value) {
                    searchitem=[...searchitem,item]
                }                  
            })
        } else if (searchtype.value === "name") {
            products.map((item) => {
                if (item.product === namecategory.value) {
                    searchitem=[...searchitem,item]
                }
            })
        } 
        if(searchitem.length===0){
            searchitem=[]
        } else{
            drawSearch(searchitem)
        }
        
    }        
}
)

let allsearch = document.getElementById("allsearch")

function drawSearch(searchitem){
    let x = searchitem.map((element) => {
        return(`
            <div class="product-item before-after card position-relative col-3 p-0 shadow-lg p-4 mb-4 m-auto w-100 bg-white">
          <img src="${element.imageurl}" class="card-img-top px-2 py-2 rounded-circle" style="width: 300px;height:300px;border-radius:50%;" alt="${element.category}">
          <div class="card-body d-flex-column justify-content-center align-items-center">
            <div class="product-item-description">
              <p class="card-text small n-style text-dark">Product:${element.product}</p>
              <p class="card-text small n-style text-dark">Category:${element.category}</p>
              <p class="card-text small n-style text-dark">Price:${element.price} DZD/with mounting</p>
            </div>
            <div class="product-item-action pt-3">
              <button type="submit" class="add-to-cart btn n-style text-dark gradient-bg-color" onClick="addToCart(${element.id})" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add it" href="#">Add to cart</button>
              <button type="submit" class="btn btn-outline-none position-relative m-3" style="width:30px;height:30px;" onClick="favoritelight(${element.id})"><i class="fa-solid fa-heart position-absolute z-1 translate-middle" ></i><i class="fa-solid fa-heart position-absolute translate-middle" style="color:rgb(133, 88, 29)"></i></button>
                    </div>
                </div>
            </div>`
    )
        }).join("")
    allsearch.innerHTML = x    
}
