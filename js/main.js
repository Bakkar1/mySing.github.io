'use strict';

var butUp = document.getElementById('singUp'),
    switcher = document.getElementById('switcher'),
    father = document.getElementById('father'),
    signinb = document.getElementById('in'),
    signupb = document.getElementById('up'),
    singIn = document.getElementById('mySingIn'),
    singUp = document.getElementById('mySingUp');


butUp.onclick = function(){
    switcher.classList.toggle('moveLeft');
    if(switcher.classList.contains('moveLeft')){
        father.classList.add('rotate');
        butUp.textContent = "sign in";

        signinb.setAttribute('disabled', 'disabled');
        signupb.removeAttribute('disabled');

        signinb.classList.add('onFocus');
        signupb.classList.remove('onFocus');

        singIn.classList.add('addFliter'); 
        singUp.classList.remove('addFliter');
    }else{
        father.classList.remove('rotate');
        butUp.textContent = "sign up";

        signinb.removeAttribute('disabled');
        signupb.setAttribute('disabled', 'disabled');

        signinb.classList.remove('onFocus');
        signupb.classList.add('onFocus');

        singIn.classList.remove('addFliter');
        singUp.classList.add('addFliter'); 
    }
}
/*
father.classList.add('rotate');
    
        
        singIn.classList.remove('addFliter');
        singUp.classList.add('addFliter'); 
*/
var myArray = document.querySelectorAll('input');

//remove placeholder from input elements
for( var i = 0; i < myArray.length; i++){
    myArray[i].onfocus = function(){
        this.setAttribute('data-holder' ,this.getAttribute('placeholder'));
        if(this.hasAttribute('placeholder')){
            this.setAttribute('placeholder', '');
        }
    }
    myArray[i].onblur = function(){
        if(this.hasAttribute('placeholder')){
            this.setAttribute('placeholder', this.getAttribute('data-holder'));
        }
    }
}