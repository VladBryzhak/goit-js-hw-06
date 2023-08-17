const elements = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector('#name-output')
}

elements.input.addEventListener('input', handlerInput)

function handlerInput(evt) {
    elements.userName.textContent = evt.currentTarget.value.trim()

    if(evt.currentTarget.value === "") {
        elements.userName.textContent = 'Anonymous'
    };
};