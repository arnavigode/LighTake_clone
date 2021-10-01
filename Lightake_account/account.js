// const form = document.getElementById('reg-form')
// form.addEventListener('submit', registerUser);

// async function registerUser(event){
//     event.preventDefault();
//     const username = document.getElementById('inputEmail3').value;
//     const password = document.getElementById('inputPassword3').value;

//     const result = await fetch('/api/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username,
//             password
//         })
//     }).then((res) => res.json())

//     if (result.status === 'ok') {
//         // everythign went fine
//         alert('Success')
//     } else {
//         alert(result.error)
//     }
// }


var logInData = [["arnavi.gode96@gmail.com", "123456","Arnavi Gode"]]
localStorage.setItem("logData", JSON.stringify(logInData))




function redirect() {

    var email = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var data = JSON.parse(localStorage.getItem("logData"))
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] == email && data[i][1] == password) {
            // console.log(1)
            localStorage.setItem("currentuser", JSON.stringify(data[i]))
            return true
        }
    }
    return false
}
function validateMyForm()
{   console.log(1)
    if (redirect()) {
        // console.log(1)
        window.location.href = "sample.html"
    }
    else {
        alert("Email or password incorrect");
    }
}
document.getElementById("reg-form1").addEventListener("submit", function(event){
  event.preventDefault()
});
    function signupInfo() {

            let form = document.getElementById('reg-form')

            let username = form.name.value
            let password = form.password.value


            let detail = {
                username,
                password
            };
            // console.log(detail)
            let arr;

            arr = localStorage.getItem('signup') 
            if (arr == null) {
                arr = [];
            }
            else {
                arr = JSON.parse(localStorage.getItem('signup'));
            }
            arr.push(detail)

            localStorage.setItem('signup', JSON.stringify(arr))
        }
        function signup() {
            alert("Registration sucessful")
            window.location.href = "account.html"
        }
        function navbar(){
            window.location.href = "../Lightake_page/page.html"
        }