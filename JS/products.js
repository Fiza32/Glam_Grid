
// Dropdown JS
function dropDown1() {
    let content = document.querySelector(".drop-elem1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dd-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dd-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dd-menu1");
        menu.style.display = "none";
    });
}
dropDown1();

let API = ("/json/myntraproducts.json");
let products = JSON.parse(localStorage.getItem("products")) || []
let allData = []

async function fetchData(){
    try
    {
        let res = await fetch(API);
        res = await res.json();
        console.log(res)
        appendData(res)
    } 
    catch(err) {
        console.log(err);
    }
}


function appendData (data){
    document.getElementById("product-container").innerHTML = null;
    data.forEach((el, index) => {
        let child = document.createElement("div");
        child.setAttribute("id", "pros");

        let img = document.createElement("img");
        img.src = el.image;

        let brand = document.createElement("h4")
        brand.innerText = el.brand;

        let rating = document.createElement("p")
        rating.innerText = el.rating;

        let price = document.createElement("p");
        price.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        
        btn.addEventListener("click", ()=> {
            products.push(el);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Product Added to Cart");
        })

        child.append(img, brand, rating, price, btn);
        document.getElementById("product-container").append(child);
    })
}
fetchData();

