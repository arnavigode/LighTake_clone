function signup() {
    window.location.href = ".html"
}
function slides() {
    const arr = ["https://www.lightake.com/wp-content/uploads/2021/09/MOC-68151-Medieval-Lions-Castle.jpg","https://www.lightake.com/wp-content/uploads/2021/09/Medieval-theme.jpg", "https://www.lightake.com/wp-content/uploads/2021/09/Welcome-back-to-school-1.jpg"]

    let div = document.getElementById("imgslides")
    let img = document.createElement('img')

    img.src = arr[0];
    img.classList.add("img-fluid");
    div.append(img);

    let i = 0;

    setInterval(function () {

        if (i == arr.length) {
            i = 0;
        }
        img.src = arr[i];
        i++;

    }, 5000)

}
slides()

$('.carousel').carousel()



var data_div = document.getElementById("data");
    function storedProducts() {

        let form = document.getElementById('items')

        let name = form.name.value
        let price = form.price.value
        let image = form.img.value


        let product = {
            name,
            price,
            image
        };
        
        let arr;

        arr = localStorage.getItem('products')

        if (arr == null) {
            arr = [];
        }
        else {
            arr = JSON.parse(localStorage.getItem('products'));
        }

        arr.push(product)

        localStorage.setItem('products', JSON.stringify(arr))
        showProduct()
    }

    // function appendProduct(el) {

    //         var div = document.createElement('div')

    //         let p_name = document.createElement('p')
    //         p_name.innerHTML = el.name

        //     let p_price = document.createElement('p')
        //     p_price.innerHTML = el.price


        //     let img = document.createElement('img')
        //     img.src = el.image

        //     let btn = document.createElement('button')
        //     btn.textContent = 'Add to Cart';

        //     btn.addEventListener("click", function () {
        //         addtoCart(el)
        //     })

        //     btn.style.display = "block";

        //     div.append(p_name, p_price, img)
        //     data_div.append(div)
        // }

    // function showProduct() {

    //         let data = JSON.parse(localStorage.getItem("products"));

    //         data_div.innerHTML = null
    //         data.forEach(function (el) {
    //             appendProduct(el)
    //         })
    //     }

    // showProduct()
        
    function addtoCart(obj) {
    let arr;

    arr = localStorage.getItem('cart') 
    if (arr == null) {
        arr = []
    }
    
    else {
        arr = JSON.parse(localStorage.getItem('cart'))
    }

    arr.push(obj)

        localStorage.setItem('cart', JSON.stringify(arr))
        showAlert();
        
        }
        
function showAlert() {
    let prod = localStorage.getItem("cart");
    let arrs = JSON.parse(prod);
    // console.log(arrs[0].name)
    for (var i = 0; i < arrs.length-1; i++){
        if (arrs[i].name == arrs[i + 1].name) {
            alert("This Product is added in Cart!")
            console.log(arrs[i].name)
        }
        
    }

}
function navbar(){
    window.location.href = "../Lightake_page/page.html"
}