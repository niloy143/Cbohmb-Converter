var inputArea = document.getElementById('input-area');
var outputArea = document.getElementById('output-area');
var crypt = document.getElementById('crypt');
var copyText = document.getElementById('copy');
var reset = document.getElementById('reset');

var encryptionMode = document.getElementsByClassName('mode-changer')[0];
var decryptionMode = document.getElementsByClassName('mode-changer')[1];

var validText = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ .,?!()\'"';
var outputVariable = '';
var cryptionValue = 'encrypt';

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

crypt.addEventListener('click', function(x){
    outputVariable = '';
    if(cryptionValue === 'encrypt') {
        for(var i=0; i<inputArea.value.length; i++) {
            if(inputArea.value[i] === 'z') {
                outputVariable += 'a';
            }
            else if(inputArea.value[i] === 'Z') {
                outputVariable += 'A';
            }
            else if(inputArea.value[i]=== ' ' || inputArea.value[i]=== '.' || inputArea.value[i]=== ',' || inputArea.value[i]=== '?' || inputArea.value[i]=== '!' || inputArea.value[i]=== '(' || inputArea.value[i]=== ')' || inputArea.value[i]=== '\'' || inputArea.value[i]=== '"'){
                outputVariable += inputArea.value[i];
            }
            else if(validText.indexOf(inputArea.value[i]) != -1){
                outputVariable += validText[validText.indexOf(inputArea.value[i])+1];
            }
            outputArea.value = outputVariable;
        }
    }

    else if(cryptionValue === 'decrypt') {
        for(var i=0; i<inputArea.value.length; i++) {
            if(inputArea.value[i] === 'a') {
                outputVariable += 'z';
            }
            else if(inputArea.value[i] === 'A') {
                outputVariable += 'Z';
            }
            else if(inputArea.value[i]=== ' ' || inputArea.value[i]=== '.' || inputArea.value[i]=== ',' || inputArea.value[i]=== '?' || inputArea.value[i]=== '!' || inputArea.value[i]=== '(' || inputArea.value[i]=== ')' || inputArea.value[i]=== '\'' || inputArea.value[i]=== '"'){
                outputVariable += inputArea.value[i];
            }
            else if(validText.indexOf(inputArea.value[i]) != -1){
                outputVariable += validText[validText.indexOf(inputArea.value[i])-1];
            }
            outputArea.value = outputVariable;
        }
    }
})

copyText.addEventListener('click', function(){
    navigator.clipboard.writeText(outputArea.value);
})

reset.addEventListener('click', function(){
    inputArea.value = '';
    outputArea.value = '';
})