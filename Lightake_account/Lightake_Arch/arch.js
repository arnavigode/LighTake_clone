var data_div = document.getElementById("data");

function appendProduct(el) {

            var div = document.createElement('div')

            let p_name = document.createElement('p')
            p_name.innerHTML = el.name

            let p_price = document.createElement('p')
            p_price.innerHTML = el.price


            let img = document.createElement('img')
            img.src = el.image


            div.append(p_name, p_price, img)
            data_div.append(div)
        }

    function showCart() {

            let data = JSON.parse(localStorage.getItem("cart"));

            data_div.innerHTML = null
            data.forEach(function (el) {
                appendProduct(el)
            })
        showcartItem()
        showcartValue()
        }

showCart()

function showcartItem() {
        let items = document.getElementById("items")
        let prod = localStorage.getItem("cart");
        let arrs = JSON.parse(prod);
        // console.log(arrs[0].name)
        var res = "No of Items :" + " " + arrs.length;
        items.innerHTML = res;
            // console.log(arrs.length)

    }
    
    
    function showcartValue() {
        
    let total = document.getElementById("total")    
    let prod = localStorage.getItem("cart");
    let arrs = JSON.parse(prod);
    // console.log(arrs[0].name)
        var sum = 0;
        for (var i = 0; i < arrs.length; i++){
            var res = +arrs[i].price
            sum += res
        }
        var ans = "total :" + " " + sum + " " + "Rs"
        total.innerHTML = ans
        // console.log(ans)

}



    