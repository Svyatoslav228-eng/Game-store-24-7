
function getRandom(min, max) { //функция рандома
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}


let mat = 85; // начальная цифра материалов

if(localStorage.getItem('material')!=undefined)//Проверка, пусто или полно локальное хранилище
    mat = localStorage.getItem('material');
else{
    localStorage.setItem('material', 85);
}

let show = document.querySelector('#materials');//место, куда будем показывать значение материалов
localStorage.setItem('material', mat);// закидываение в локальное хранилище переменную с кол-вом матов

if(localStorage.getItem('Human')==7){
    console.log(`У вас имеется: ответственный за маты! Он вам заказывает маты когда нужно!`)
    let mate1 = Number(localStorage.getItem('material'));
    let yes = querySelector('#no_yes');
    yes.innerHTML = `Человек в ответе за маты: есть!`;
    if(mate1<15){
        document.querySelector('#order_mat').addEventListener('click', ()=>{//что будет выполнятся по клику
            setTimeout(function(){//время доставки матов
                let mate = Number(localStorage.getItem('material'));//берем значение матов из локального хранилища
                let money = Number(localStorage.getItem('money'));//берем значение денег из локального хранилища
                if(money>101){ // проверка на то, сколько надо денег, чтоб не обонкротиться
                    let newMoney = money-100;//ввод переменной с новым значением денег после заказа матов
                    let newmat = mate + 80;//ввод переменной с новым значением матов после заказа матов
                    localStorage.setItem('material', newmat);//заносим новое значение матов в локальное хранилище
                    localStorage.setItem('money', newMoney);//заносим новое значение денег в локальное хранилище
                    show.innerHTML = `${newmat}`;

                }
                else{//Если у нас денег меньше 101, тогда выскакивает сообщение
                    let div = document.createElement('div');//создание нового HTML-элемента <div>
                    
                    div.setAttribute('class', 'buy');//присваивание класса к div
                    div.innerHTML = 'Нельзя купить! Ваш бюджет стремится к 0!';//текст внутри сообщения
                    document.body.appendChild(div);//добавление div в жизнь
                    setTimeout(function(){//таймер через сколько красное сообщение удалиться
                        div.remove();
                    }, 5000);
                }
                
            },getRandom(1000, 2000));// время доставки
        });   
    }
}

else{
    document.querySelector('#order_mat').addEventListener('click', ()=>{//что будет выполнятся по клику
    setTimeout(function(){//время доставки матов
        let mate = Number(localStorage.getItem('material'));//берем значение матов из локального хранилища
        let money = Number(localStorage.getItem('money'));//берем значение денег из локального хранилища
        if(money>101){ // проверка на то, сколько надо денег, чтоб не обонкротиться
            let newMoney = money-100;//ввод переменной с новым значением денег после заказа матов
            let newmat = mate + 80;//ввод переменной с новым значением матов после заказа матов
            localStorage.setItem('material', newmat);//заносим новое значение матов в локальное хранилище
            localStorage.setItem('money', newMoney);//заносим новое значение денег в локальное хранилище
            show.innerHTML = `${newmat}`;
        }
        else{//Если у нас денег меньше 101, тогда выскакивает сообщение
            let div = document.createElement('div');//создание нового HTML-элемента <div>
            div.setAttribute('class', 'buy');//присваивание класса к div
            div.innerHTML = 'Нельзя купить! Ваш бюджет стремится к 0!';//текст внутри сообщения
            document.body.appendChild(div);//добавление div в жизнь
            setTimeout(function(){//таймер через сколько красное сообщение удалиться
                div.remove();
            }, 5000);
        }
        
    },getRandom(1000, 2000));// время доставки
});}
show.innerHTML = `${localStorage.getItem('material')}`;// показ материалов всегда!



document.querySelector("#out").addEventListener('click', ()=>{
    let wind;
    wind = window.close("stock.html","","height=480, width=640");

});


