let mon = 500;

if(localStorage.getItem('money')!=undefined)
    mon = localStorage.getItem('money');
else{
    localStorage.setItem('money', 500);
}

localStorage.setItem('money', mon);

let m_enter= false;
balance.addEventListener('mouseover',  function(e){m_enter =true;})
balance.addEventListener('mouseout',  function(e){m_enter =false;})

document.addEventListener('mouseover',  function(e){
        
    let balance1 = document.querySelector('#balance');
    let Money = Number(localStorage.getItem('money'));
    if(m_enter){
        balance1.innerHTML = `${Money}`;            
        }
    else{
        balance1.innerHTML = `Баланс`;
    }  
});