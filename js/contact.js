const form = document.getElementById('myform');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let name = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let number = document.getElementsByName('number')[0].value;
    let message = document.getElementsByName('message')[0].value;
    let data = {
        name: name,
        email: email,
        number: number,
        message: message
    }
    fetch('https://tourism-backend-dewb.onrender.com/contact',{
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        prompt(data.message);
    })
})
