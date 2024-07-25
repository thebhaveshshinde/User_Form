document.getElementById('form_container').addEventListener('click', function (event) { event.preventDefault() })

function Run() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var gender = document.getElementById('gender').value



    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || gender.trim() === '') {
        alert("You have left the input filled empty! Please Fill value in it")
    }

    else {
        document.getElementById('Div_Container').innerText = "Username:" + name + "\n" + "Email:" + email + "\n" + "Phone no.:" + phone + "\n" + "Gender:" + gender

    }
}


