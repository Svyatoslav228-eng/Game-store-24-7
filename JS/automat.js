//automat

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

if(localStorage.getItem('automat') == 1){
    let automat=document.querySelector('#automat');
    automat.style.background = 'white';
    console.log(`У вас имеется: атвомат! Он вам несет денежку!`)
    let timer_sellers_automat = setTimeout(function sell(){
        let Money = Number(localStorage.getItem('money'));
        let Material = Number(localStorage.getItem('material'));
        let lvl = Number(localStorage.getItem('num'));
        if(Material<1){
            let div = document.createElement('div');
            div.setAttribute('class', 'buy');
            div.innerHTML = 'Нельзя отоварить! Ваш склад пуст!';
            document.body.appendChild(div);
            setTimeout(function(){
                div.remove();
                }, 3000);
            }
        else {
            let newmat = Material - getRandom(1,5);
            let newmoney = Money + getRandom(20,35);
            let newlvl = lvl+1;
            localStorage.setItem('num', newlvl);
            localStorage.setItem('material', newmat);
            localStorage.setItem('money', newmoney);
        }
            timer_sellers_automat=setTimeout(sell,30000);
        },30000)
}


// let timerId = setTimeout(function tick() {
//     alert('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000); 