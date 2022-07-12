var inputArea = document.getElementById('input-area');
var outputArea = document.getElementById('output-area');
var crypt = document.getElementById('crypt');
var copyText = document.getElementById('copy');
var reset = document.getElementById('reset');

var encryptionMode = document.getElementsByClassName('mode-changer')[0];
var decryptionMode = document.getElementsByClassName('mode-changer')[1];

var validText = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ .,?!()\'"';
var outputVariable = '';
var cryptionValue = 'decrypt';

decryptionMode.addEventListener('click', function(){
    decryptionMode.setAttribute('id', 'selected-mode');
    encryptionMode.removeAttribute('id', 'selected-mode');
    crypt.innerHTML = 'Decrypt';
    cryptionValue = 'decrypt';
    inputArea.value = '';
    outputArea.value = '';
})

encryptionMode.addEventListener('click', function(){
    encryptionMode.setAttribute('id', 'selected-mode');
    decryptionMode.removeAttribute('id', 'selected-mode');
    crypt.innerHTML = 'Encrypt';
    cryptionValue = 'encrypt';
    inputArea.value = '';
    outputArea.value = '';
})

inputArea.addEventListener('input', function(){
    for(var j=0; j<inputArea.value.length; j++){
        if(validText.indexOf(inputArea.value[j]) == -1){
            inputArea.value = inputArea.value.slice(0, j);
        }
    }
}) 

crypt.addEventListener('click', function(){
    outputVariable = '';
    for(var i=0; i<inputArea.value.length; i++) {

        if(inputArea.value[i]=== ' ' || inputArea.value[i]=== '.' || inputArea.value[i]=== ',' || inputArea.value[i]=== '?' || inputArea.value[i]=== '!' || inputArea.value[i]=== '(' || inputArea.value[i]=== ')' || inputArea.value[i]=== '\'' || inputArea.value[i]=== '"'){
            outputVariable += inputArea.value[i];
        }
        
        else if (cryptionValue === 'decrypt') {
            if(((validText.indexOf(inputArea.value[i]))%2 === 1) && ((validText.indexOf(inputArea.value[i])) <= 25)){
                outputVariable += validText[(validText.indexOf(inputArea.value[i])) - 1];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 0) && ((validText.indexOf(inputArea.value[i])) <= 25)){
                outputVariable += validText[25 - (validText.indexOf(inputArea.value[i]))];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 0) && ((validText.indexOf(inputArea.value[i])) > 26)){
                outputVariable += validText[(validText.indexOf(inputArea.value[i])) - 1];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 1) && ((validText.indexOf(inputArea.value[i])) > 26)){
                outputVariable += validText[(52 - (validText.indexOf(inputArea.value[i]))) + 27];
            }
        }
        
        else if(cryptionValue === 'encrypt') {
            if(((validText.indexOf(inputArea.value[i]))%2 === 1) && ((validText.indexOf(inputArea.value[i])) <= 25)){
                outputVariable += validText[25 - (validText.indexOf(inputArea.value[i]))];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 0) && ((validText.indexOf(inputArea.value[i])) <= 25)){
                outputVariable += validText[(validText.indexOf(inputArea.value[i])) + 1];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 0) && ((validText.indexOf(inputArea.value[i])) > 26)){
                outputVariable += validText[(52 - (validText.indexOf(inputArea.value[i])))+27];
            }
            else if(((validText.indexOf(inputArea.value[i]))%2 === 1) && ((validText.indexOf(inputArea.value[i])) > 26)){
                outputVariable += validText[(validText.indexOf(inputArea.value[i])) + 1];
            }
        }
        outputArea.value = outputVariable;
    }
})

copyText.addEventListener('click', function(){
    outputArea.select();
    outputArea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputArea.value);
})

reset.addEventListener('click', function(){
    inputArea.value = '';
    outputArea.value = '';
})