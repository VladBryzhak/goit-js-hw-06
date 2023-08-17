const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSubmit)

function handlerSubmit(evt) {
    evt.preventDefault()
    const {email, password} = evt.currentTarget.elements
    
    if(email.value === "" || password.value === ""){
        const message = "Всі поля повинні бути заповнені!"
        alert(message);
        return;
    } 
    getObj(email, password);

    console.log(getObj(email, password))

    form.reset()
};

function getObj(email, password) {
    return {
        email: email.value,
        password: password.value
    };
};