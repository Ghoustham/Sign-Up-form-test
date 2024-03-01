let firstPassword = '';
let confirmPassword='';

const errorMessage = document.getElementById('errormessage');
const passwordSelector = document.getElementById('userpassword');
const passwordConfirmSelector = document.getElementById('userpasswordconfirm');

    passwordSelector.addEventListener('keyup', (event)=>{

        firstPassword= event.srcElement.value
        
        passwordConfirmSelector.addEventListener('keyup', (event)=>{
            confirmPassword=event.srcElement.value;


            if(firstPassword !== confirmPassword){
                    passwordConfirmSelector.setCustomValidity('not valid');
                    errorMessage.textContent= 'las contraseñas no coinciden';

            
            }else {
            
                passwordConfirmSelector.setCustomValidity('');
                errorMessage.textContent = '';
            }
            
        })
        

    })



