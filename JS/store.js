function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

document.querySelector("#out").addEventListener('click', ()=>{ //штука которая закрывает окно
    let wind;
    wind = window.close("store.html","","height=480, width=640");

});
//ключи, которые после покупки, начинают действовать.
let automat_key=1;
let cash1_key=2;
let cash2_key=3;
let X3pay_key=4;
let X3LVL_key=5;
let X2Order_key=6;
let Human_in_stock_key=7;
let AZS_key=8;
let res_key=9;
document.querySelector("#first").addEventListener('click', ()=>{//нажитие по полю
    let div = document.createElement('div');//создание нового HTML-элемента <div>
    div.setAttribute('class', 'buy');//присваивание класса к div
    div.innerHTML = 'Купить автомат!';//текст желтой кнопки для покупки
    document.body.appendChild(div);//добавление эл-та в жизнь!
    document.querySelector('.buy').addEventListener('click', ()=>{//по нажатию кнопки выполняется
        let MON =  Number(localStorage.getItem('money'));//создание переменной со взятием с локального хранилища 'money' значения
        let LVL = Number(localStorage.getItem('lvl'));//создание переменной со взятием с локального хранилища 'lvl' значения
        if(MON>=1500 && LVL>=6){//проверка, подходят ли значения для покупки или нет
            if(localStorage.getItem('automat') == 1){// проверка на купленность предмета
                let div = document.createElement('div');//создание нового HTML-элемента <div>
                div.setAttribute('class', 'buy2');//присваивание класса к div
                div.innerHTML = 'Куплено!';//текст сообщения красного сообщения
                document.body.appendChild(div);//добавление эл-та в жизнь!
                setTimeout(function(){//таймер => удалиние созданного эл-та через время
                    div.remove();
                }, 4000);
            }
            else{// покупка 
                localStorage.setItem('automat', automat_key);//занос ключа в локальное хранилище
                let newBal = MON-1500;// новый баланс после покупки
                localStorage.setItem('money', newBal);// заносим значения после покупки
            }
        }
        else if(MON<1500){// выскакивание нового красного сообщения, если денег меньше 1500
            let div = document.createElement('div');//создание нового HTML-элемента <div>
                div.setAttribute('class', 'buy2');//присваивание класса к div
                div.innerHTML = 'Нехватает денег!';//текст сообщения красного сообщения
                document.body.appendChild(div);//добавление эл-та в жизнь!
                setTimeout(function(){//таймер => удалиние крансого сообщения через время
                    div.remove();
                }, 4000);
        }
        else if(LVL<6){// выскакивание нового красного сообщения, если лвла меньше 6
            let div = document.createElement('div');//создание нового HTML-элемента <div>
                div.setAttribute('class', 'buy2');//присваивание класса к div
                div.innerHTML = 'Нехватает уровня!';//текст сообщения красного сообщения
                document.body.appendChild(div);//добавление эл-та в жизнь!
                setTimeout(function(){//таймер => удалиние крансого сообщения через время
                    div.remove();
                }, 4000);
        }
        
        
    })
    setTimeout(function(){//таймер => удалиние кнопки для покупки через время
        div.remove();
    }, 15000);
} );
document.querySelector("#sec").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить 1-ую кассу!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON1 =  Number(localStorage.getItem('money'));
        let LVL1 = Number(localStorage.getItem('lvl'));
        if(MON1>=2500 && LVL1>=10){
            if(localStorage.getItem('cash1') == 2){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('cash1', cash1_key);
                let newBal1 = MON1-2500;
                localStorage.setItem('money', newBal1);
            }
        }
        else if(MON1<2500){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL1<10){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#third").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить 2-ую кассу!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON2 =  Number(localStorage.getItem('money'));
        let LVL2 = Number(localStorage.getItem('lvl'));
        if(MON2>=3300 && LVL2>=13){
            if(localStorage.getItem('cash2') == 3){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('cash2', cash2_key);
                let newBal2 = MON2-3300;
                localStorage.setItem('money', newBal2);
            }
        }
        else if(MON2<3300){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL2<13){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });                                                                                   
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#fouth").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить Х3 Заработок с клиента!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON3 =  Number(localStorage.getItem('money'));
        let LVL3 = Number(localStorage.getItem('lvl'));
        if(MON3>=4444 && LVL3>=20){
            if(localStorage.getItem('X3Money') == 4){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('X3Money', X3pay_key);
                let newBal3 = MON3-4444;
                localStorage.setItem('money', newBal3);
            }
        }
        else if(MON3<4444){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL3<20){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#fifth").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить Х3 опыт!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON4 =  Number(localStorage.getItem('money'));
        let LVL4 = Number(localStorage.getItem('lvl'));
        if(MON4>=4444 && LVL4>=20){
            if(localStorage.getItem('X3LVL') == 5){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('X3LVL', X3LVL_key);
                let newBal4 = MON4-4444;
                localStorage.setItem('money', newBal4);
            }
        }
        else if(MON4<4444){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL4<20){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#sixth").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить X2 заказы от клиентов!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON5 =  Number(localStorage.getItem('money'));
        let LVL5 = Number(localStorage.getItem('lvl'));
        if(MON5>=5555 && LVL5>=25){
            if(localStorage.getItem('X2Order') == 6){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('X2Order', X2Order_key);
                let newBal5 = MON5-5555;
                localStorage.setItem('money', newBal5);
            }
        }
        else if(MON5<5555){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL5<25){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#seventh").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить Человека ответственного за материалы!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON6 =  Number(localStorage.getItem('money'));
        let LVL6 = Number(localStorage.getItem('lvl'));
        if(MON6>=7777 && LVL6>=33){
            if(localStorage.getItem('Human') == 7){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('Human', Human_in_stock_key);
                let newBal6 = MON6-7777;
                localStorage.setItem('money', newBal6);
            }
        }
        else if(MON6<7777){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL6<33){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#eight").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить Заправку!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON7 =  Number(localStorage.getItem('money'));
        let LVL7 = Number(localStorage.getItem('lvl'));
        if(MON7>=75000 && LVL7>=65){
            if(localStorage.getItem('AZS') == 8){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('AZS', AZS_key);
                let newBal7 = MON7-75000;
                localStorage.setItem('money', newBal7);
            }
        }
        else if(MON7<75000){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL7<65){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
document.querySelector("#nineth").addEventListener('click', ()=>{
    let div = document.createElement('div');
    div.setAttribute('class', 'buy');
    div.innerHTML = 'Купить Ресторанчик!';
    document.body.appendChild(div);
    document.querySelector('.buy').addEventListener('click', ()=>{
        let MON8 =  Number(localStorage.getItem('money'));
        let LVL8 = Number(localStorage.getItem('lvl'));
        if(MON8>=85000 && LVL8>=77){
            if(localStorage.getItem('restorant') == 9){
                let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Куплено!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
            }
            else{
                localStorage.setItem('restorant', res_key);
                let newBal8 = MON8-85000;
                localStorage.setItem('money', newBal8);
            }
        }
        else if(MON8<85000){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает денег!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        else if(LVL8<77){
            let div = document.createElement('div');
                div.setAttribute('class', 'buy2');
                div.innerHTML = 'Нехватает уровня!';
                document.body.appendChild(div);
                setTimeout(function(){
                    div.remove();
                }, 4000);
        }
        
        
    });
    setTimeout(function(){
        div.remove();
    }, 15000);
} );
