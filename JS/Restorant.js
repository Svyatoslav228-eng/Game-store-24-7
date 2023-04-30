function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

if(localStorage.getItem('restorant')==9){
    let butt = document.createElement('button');
    butt.setAttribute('id', 'but3');
    butt.innerText=`Ресторан`
    header.insertBefore(butt,balance);
    document.querySelector('#but3').addEventListener('click',()=>{
        let wind;
        wind = window.open("Restorant.html", "", "height=640, width=1920")
     })
    console.log(`У вас имеется: ресторан рядом с вашим бизнесом! Он вам несет денежку!`)
    let timer_sellers_res = setTimeout(function sell(){
        let Money = Number(localStorage.getItem('money'));
        let Material = Number(localStorage.getItem('material'));
        let lvl = Number(localStorage.getItem('num'));
        if(Material<30){
            let div = document.createElement('div');
            div.setAttribute('class', 'buy');
            div.innerHTML = 'Нельзя покормить клиента! Ваш склад пуст!';
            document.body.appendChild(div);
            setTimeout(function(){
                div.remove();
                }, 3000);
            }
        else {
            let newmat = Material - getRandom(1,30);
            let newmoney = Money + getRandom(200,3333);
            let newlvl = lvl+1;
            localStorage.setItem('num', newlvl);
            localStorage.setItem('material', newmat);
            localStorage.setItem('money', newmoney);
        }
        timer_sellers_res=setTimeout(sell,180000);
        },180000)

}