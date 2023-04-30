function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
if(localStorage.getItem('AZS')==8){
    
    let butt = document.createElement('button');
    butt.setAttribute('id', 'but2');
    butt.innerText=`Заправка`
    header.insertBefore(butt,level);
    
    document.querySelector('#but2').addEventListener('click',()=>{
        let wind;
        wind = window.open("AZS.html", "", "height=640, width=1920")
     })
    console.log(`У вас имеется: АЗС рядом с вашим бизнесом! Он вам несет денежку!`)
    let timer_sellers_azs = setTimeout(function sell(){
        let Money = Number(localStorage.getItem('money'));
        let Material = Number(localStorage.getItem('material'));
        let lvl = Number(localStorage.getItem('num'));
        if(Material<21){
            let div = document.createElement('div');
            div.setAttribute('class', 'buy');
            div.innerHTML = 'Нельзя заправлять клиента! Ваш склад пуст!';
            document.body.appendChild(div);
            setTimeout(function(){
                div.remove();
                }, 3000);
            }
        else {
            let newmat = Material - getRandom(1,20);
            let newmoney = Money + getRandom(55,1111);
            let newlvl = lvl+1;
            localStorage.setItem('num', newlvl);
            localStorage.setItem('material', newmat);
            localStorage.setItem('money', newmoney);
        }
            timer_sellers_azs=setTimeout(sell,180000);
        },180000)

}