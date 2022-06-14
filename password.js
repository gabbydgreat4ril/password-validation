
        let pass=document.getElementById('password');
        var msg=document.getElementById('message');
        var str=document.getElementById('strength');
        var signal=document.getElementById('color');
        var toggle=document.getElementById('toggle');

        pass.addEventListener('input',() =>{
            if(pass.value.length >0){
                msg.style.display="block";
                signal.style.display='block';
            }
            else{
                msg.style.display="none";
                signal.style.display="none";
            }
            if(pass.value.length < 4){
                str.innerHTML='weak';
                // msg.style.color='red'
                signal.style.background='red'
            }
             else if(pass.value.length >=4 && pass.value.length<8){
                str.innerHTML='medium';
                // msg.style.color='yellow'
                signal.style.background='yellow'
            }
            else if(pass.value.length >=8){
                str.innerHTML='strong';
                // msg.style.color='green'
                signal.style.background='green'
            }
        })
            toggle.addEventListener('click',() =>{
            if(pass.getAttribute('type') =='password'){
                pass.setAttribute('type','text');
            }else{
                pass.setAttribute('type','password');
            }
        })