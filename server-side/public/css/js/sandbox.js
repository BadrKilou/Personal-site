// const form = document.getElementById('form')
// const email = document.getElementById('email')
// const request = document.getElementById('request')
// const name = document.getElementById('name')
// const textarea = document.getElementById('text-area')

// let min = 5;
// let max = 12;

// form.addEventListener('submit', (e) => {
//     console.log('clicked');
//     e.preventDefault()
    
//     checkInputs()
// })

// function checkInputs(){
//     const emailValue = email.value.trim()
//     const requestValue = request.value.trim()
//     const textareaValue = textarea.value.trim()
//     const nameValue = name.value.trim()

//     if(requestValue === ''){
//         // show error
//         // add error class
//         setErrorfor(request, 'Request Cannot be blank')
//     } 
//     else if (requestValue.length < min){
//         setErrorfor(request, `Your request shouldnt be less than ${min} characters`)
//     }
//     else if (requestValue.length > max){
//         setErrorfor(request,  `Your request shouldnt be greater than ${max} characters`)
//     } else{
//         // add success
//         setSuccess(request)
//     } 
//     if(emailValue === ''){
//         setErrorfor(email, 'Email Cannot be blank')
//     } else if (!isEmail(emailValue)){
//         setErrorfor(email, 'Email is not Valid')
//     } else{
//         setSuccess(email)
//     }
//     if(nameValue === ''){
//         setErrorfor(name, 'Name Cannot be blank')
//     } else if (nameValue.length < min){
//         setErrorfor(name, `Your name shouldnt be less than ${min} characters`)
//     }
//     else if (nameValue.length > max){
//         setErrorfor(name,  `Your name shouldnt be greater than ${max} characters`)
//     }
//      else{
//         setSuccess(name)
//     }
//     if(textareaValue === ''){
//         showError('Message field shouldnt be blank')
//     } else if (textareaValue.length < max){
//         showError(`Your Message should be more than ${max} characters`)
//     }
// } 

// function showError(error){
    
//     const card = document.querySelector('.card')
//     const container = document.querySelector('.container')
//     const errorDiv = document.createElement('div')
//     errorDiv.className = 'error-field'
//     errorDiv.appendChild(document.createTextNode(error))
//     container.insertBefore(errorDiv, card)

//     setTimeout(clearText, 3000)
//    function clearText(){
   
//     errorDiv.remove()
// }
// }



// function setErrorfor(input, message){
//     const formControl = input.parentElement; // .form-control
//     const small = formControl.querySelector('small')
//     // add error inside small
//     small.innerText = message;
//     // add error class
//     formControl.className = 'form-control error'
// }

// function setSuccess(input){
//    const formControl = input.parentElement;
//    formControl.className = 'form-control success'
// }


// function isEmail(email){
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


