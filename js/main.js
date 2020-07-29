'use strict';

var butUp = document.getElementById('singUp'),
    switcher = document.getElementById('switcher'),
    father = document.getElementById('father'),
    signinb = document.getElementById('in'),
    signupb = document.getElementById('up'),
    singIn = document.getElementById('mySingIn'),
    singUp = document.getElementById('mySingUp'),
    SchowHideIn = document.getElementById('hideSchow'),
    myPassIn = document.getElementById('myPass'),
    SchowHideUp = document.getElementById('hideSchowUp'),
    myPassUp = document.getElementById('myPassUp');


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

function showHideFun(label, pass){
    var myChild = label.children[0];
    pass.classList.add('marginForPass');
    label.onclick = function(){
        if(myChild.className == "far fa-eye"){
            myChild.className = "far fa-eye-slash";
            pass.setAttribute('type', 'text');
        }
        else{
            myChild.className = "far fa-eye";
            pass.setAttribute('type', 'password');
        }
    }
}

showHideFun(SchowHideIn, myPassIn);
showHideFun(SchowHideUp, myPassUp);