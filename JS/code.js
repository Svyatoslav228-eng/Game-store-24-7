
document.querySelector("#butt").addEventListener('click', ()=>{
    let name = nick.value;
    
    if(localStorage.getItem('Name')!=undefined)
    name = localStorage.getItem('Name');
    else{
    localStorage.setItem('Name', '');
    }

    localStorage.setItem('Name', name);
    
    let show = document.querySelector('#show1');
    name = name.replace(/\s/g,'');
    if(name.length<=2){
    
    show.innerText = `Error, your nick-name will be longer!`;}
    else{
        window.location.href = '';
        document.location='main.html'
    }
    
    nick.value = '';
});

