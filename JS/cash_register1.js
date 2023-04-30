//cash register1
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
if(localStorage.getItem('cash1')==2){
    let cashh1=document.querySelector('#cash1');
    cashh1.style.background = 'white';
    console.log(`У вас имеется: 1-ая касс! Она вам несет денежку!`)
    let timer_sellers_cash1 = setTimeout(function sell(){
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
            let newmat = Material - getRandom(1,8);
            let newmoney = Money + getRandom(40,75);
            let newlvl = lvl+1;
            localStorage.setItem('num', newlvl);
            localStorage.setItem('material', newmat);
            localStorage.setItem('money', newmoney);
        }
            timer_sellers_cash1=setTimeout(sell,45000);
        },45000)
}

