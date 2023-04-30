let m_entered=false;
let lvl = 0;
let numb_lvl = 0;

if(localStorage.getItem('num')!=undefined)
    numb_lvl = localStorage.getItem('num');
else{
    localStorage.setItem('num', 0);
}

if(localStorage.getItem('lvl')!=undefined)
    lvl = localStorage.getItem('lvl');
else{
    localStorage.setItem('lvl', 0);
}

localStorage.setItem('lvl', lvl);
localStorage.setItem('num', numb_lvl);
let level1 = document.querySelector('#level');
let LVL_NUM = Number(localStorage.getItem('num'))
let LVL = Number(localStorage.getItem('lvl'));
if(localStorage.getItem('num')>20||LVL_NUM>20){
        LVL+=1;
        LVL_NUM -= 20;
        localStorage.setItem('lvl', LVL);
        localStorage.setItem('num', LVL_NUM);
    }

level1.addEventListener('mouseover',  function(e){m_entered =true;})
level1.addEventListener('mouseout',  function(e){m_entered =false;})

document.addEventListener('mouseover',  function(e){
    
    let LVL_NUM = Number(localStorage.getItem('num'))
    let LVL = Number(localStorage.getItem('lvl'));
    if(localStorage.getItem('num')>20||LVL_NUM>20){
        LVL+=1;
        LVL_NUM -= 20;
        localStorage.setItem('lvl', LVL);
        localStorage.setItem('num', LVL_NUM);
    }
    if(m_entered){
        level1.innerHTML = `LEVEL: ${LVL}(${LVL_NUM}/20)`;}
    else{
        level1.innerHTML = `LEVEL`;
} 
});
