function movieslides() {
    const arr = ["https://www.lightake.com/wp-content/uploads/2021/09/MOC-68151-Medieval-Lions-Castle.jpg","https://www.lightake.com/wp-content/uploads/2021/09/Medieval-theme.jpg", "https://www.lightake.com/wp-content/uploads/2021/09/Welcome-back-to-school-1.jpg"]

    let div = document.getElementById("imgslides")
    let img = document.createElement('img')

    img.src = arr[0];
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
movieslides()